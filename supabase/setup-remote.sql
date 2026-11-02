-- PHOENIX: run this once in the Supabase SQL editor (project qhshpstevfoxegkgxypx).
-- It is idempotent: it creates what is missing and leaves existing data alone.
-- 1) emergency_alerts table (SOS email history)
-- Add emergency contact fields to profiles if not exists
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS emergency_contact_name TEXT,
  ADD COLUMN IF NOT EXISTS emergency_contact_email TEXT,
  ADD COLUMN IF NOT EXISTS emergency_contact_phone TEXT;

-- Create emergency_alerts table
CREATE TABLE IF NOT EXISTS public.emergency_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  message TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
  email_sent_to TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  sent_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_emergency_alerts_user ON public.emergency_alerts(user_id);
CREATE INDEX IF NOT EXISTS idx_emergency_alerts_status ON public.emergency_alerts(status);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.emergency_alerts TO authenticated;
GRANT ALL ON public.emergency_alerts TO service_role;

ALTER TABLE public.emergency_alerts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "emergency alerts select" ON public.emergency_alerts;
DROP POLICY IF EXISTS "emergency alerts insert" ON public.emergency_alerts;
DROP POLICY IF EXISTS "emergency alerts update" ON public.emergency_alerts;

CREATE POLICY "emergency alerts select" ON public.emergency_alerts FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "emergency alerts insert" ON public.emergency_alerts FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "emergency alerts update" ON public.emergency_alerts FOR UPDATE TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'))
  WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

-- 2) Demo accounts (admin + user) and their auth identities
-- ============================================================
-- PHOENIX Development Seed Data
-- ============================================================
-- Creates a dev admin and user account for testing.
-- DEVELOPMENT ONLY — never use these credentials in production.
--
-- Admin: admin@phoenix-safety.com / Admin@123
-- User:  user@phoenix-safety.com  / User@123
--
-- NOTE: These accounts are created using Supabase's auth.users
-- table. The handle_new_user() trigger automatically creates
-- profiles and user_roles entries.
-- ============================================================

-- We use a DO block so this is idempotent — it won't fail if
-- the users already exist.
DO $$
DECLARE
  _admin_id UUID;
  _user_id  UUID;
BEGIN
  -- 1. Create admin user (if not exists)
  SELECT id INTO _admin_id
  FROM auth.users
  WHERE email = 'admin@phoenix-safety.com';

  IF _admin_id IS NULL THEN
    _admin_id := gen_random_uuid();
    INSERT INTO auth.users (
      id, instance_id, aud, role,
      email, encrypted_password,
      email_confirmed_at, confirmation_sent_at,
      raw_user_meta_data, raw_app_meta_data,
      created_at, updated_at
    ) VALUES (
      _admin_id,
      '00000000-0000-0000-0000-000000000000',
      'authenticated',
      'authenticated',
      'admin@phoenix-safety.com',
      crypt('Admin@123', gen_salt('bf')),
      now(), now(),
      jsonb_build_object('full_name', 'Phoenix Admin', 'phone', '+1 555 0001'),
      jsonb_build_object('provider', 'email', 'providers', ARRAY['email']),
      now(), now()
    );

    -- The trigger creates a profile + 'user' role automatically.
    -- Promote to admin:
    INSERT INTO public.user_roles (user_id, role)
    VALUES (_admin_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;

    -- Update profile with richer data
    UPDATE public.profiles
    SET full_name = 'Phoenix Admin',
        phone = '+1 555 0001'
    WHERE id = _admin_id;
  ELSE
    -- Ensure admin role exists for pre-existing admin user
    INSERT INTO public.user_roles (user_id, role)
    VALUES (_admin_id, 'admin')
    ON CONFLICT (user_id, role) DO NOTHING;
  END IF;

  -- 2. Create regular user (if not exists)
  SELECT id INTO _user_id
  FROM auth.users
  WHERE email = 'user@phoenix-safety.com';

  IF _user_id IS NULL THEN
    _user_id := gen_random_uuid();
    INSERT INTO auth.users (
      id, instance_id, aud, role,
      email, encrypted_password,
      email_confirmed_at, confirmation_sent_at,
      raw_user_meta_data, raw_app_meta_data,
      created_at, updated_at
    ) VALUES (
      _user_id,
      '00000000-0000-0000-0000-000000000000',
      'authenticated',
      'authenticated',
      'user@phoenix-safety.com',
      crypt('User@123', gen_salt('bf')),
      now(), now(),
      jsonb_build_object('full_name', 'Alex Mercer', 'phone', '+1 555 0100'),
      jsonb_build_object('provider', 'email', 'providers', ARRAY['email']),
      now(), now()
    );

    -- Update profile
    UPDATE public.profiles
    SET full_name = 'Alex Mercer',
        phone = '+1 555 0100'
    WHERE id = _user_id;

    -- Seed sample emergency contacts for user
    INSERT INTO public.emergency_contacts (user_id, name, relationship, phone, email, priority, is_primary) VALUES
      (_user_id, 'Jordan Mercer', 'Sibling', '+1 555 0101', 'jordan@example.com', 1, true),
      (_user_id, 'Dr. Sarah Chen', 'Doctor', '+1 555 0102', 'sarah.chen@example.com', 2, false);

    -- Seed a sample incident for user
    INSERT INTO public.incidents (
      user_id, category, title, description, occurred_at,
      status, location, latitude, longitude
    ) VALUES (
      _user_id, 'SUSPICIOUS_ACTIVITY',
      'Suspicious vehicle in parking lot',
      'A dark van has been parked for over 3 hours with engine running. No one has entered or exited the vehicle.',
      now() - interval '2 days',
      'UNDER_REVIEW',
      'Main Street Parking Lot',
      40.7128, -74.0060
    );

    -- Seed a notification for user
    INSERT INTO public.notifications (user_id, type, title, message, link) VALUES
      (_user_id, 'SYSTEM', 'Welcome to PHOENIX', 'Your account has been set up. Add emergency contacts to get started.', '/contacts');
  END IF;

  RAISE NOTICE '[PHOENIX SEED] Admin ID = %, User ID = %', _admin_id, _user_id;
END $$;

-- ------------------------------------------------------------
-- Make the seeded accounts usable by Supabase Auth.
-- Rows inserted straight into auth.users need an auth.identities
-- row and non-NULL token columns, otherwise password sign-in fails
-- ("Invalid login credentials" / "Database error querying schema").
-- Safe to re-run.
-- ------------------------------------------------------------
UPDATE auth.users
SET confirmation_token     = COALESCE(confirmation_token, ''),
    recovery_token         = COALESCE(recovery_token, ''),
    email_change_token_new = COALESCE(email_change_token_new, ''),
    email_change           = COALESCE(email_change, '')
WHERE email IN ('admin@phoenix-safety.com', 'user@phoenix-safety.com');

INSERT INTO auth.identities (id, user_id, provider_id, provider, identity_data, last_sign_in_at, created_at, updated_at)
SELECT gen_random_uuid(), u.id, u.id::text, 'email',
       jsonb_build_object('sub', u.id::text, 'email', u.email, 'email_verified', true),
       now(), now(), now()
FROM auth.users u
WHERE u.email IN ('admin@phoenix-safety.com', 'user@phoenix-safety.com')
  AND NOT EXISTS (
    SELECT 1 FROM auth.identities i WHERE i.user_id = u.id AND i.provider = 'email'
  );
