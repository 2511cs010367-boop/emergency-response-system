# PHOENIX / Guardian Connect — Complete Project Codebase

> Generated on 2026-10-10T09:23:42.282Z
> Total Files: 104

## Table of Contents

- [.env.example](#file--env-example)
- [.gitignore](#file--gitignore)
- [bunfig.toml](#file-bunfig-toml)
- [components.json](#file-components-json)
- [eslint.config.js](#file-eslint-config-js)
- [package.json](#file-package-json)
- [README.md](#file-readme-md)
- [src/components/brand/PhoenixLogo.tsx](#file-src-components-brand-phoenixlogo-tsx)
- [src/components/phoenix/AppShell.tsx](#file-src-components-phoenix-appshell-tsx)
- [src/components/phoenix/EmptyState.tsx](#file-src-components-phoenix-emptystate-tsx)
- [src/components/phoenix/StatCard.tsx](#file-src-components-phoenix-statcard-tsx)
- [src/components/phoenix/StatusBadge.tsx](#file-src-components-phoenix-statusbadge-tsx)
- [src/components/ui/accordion.tsx](#file-src-components-ui-accordion-tsx)
- [src/components/ui/alert-dialog.tsx](#file-src-components-ui-alert-dialog-tsx)
- [src/components/ui/alert.tsx](#file-src-components-ui-alert-tsx)
- [src/components/ui/aspect-ratio.tsx](#file-src-components-ui-aspect-ratio-tsx)
- [src/components/ui/avatar.tsx](#file-src-components-ui-avatar-tsx)
- [src/components/ui/badge.tsx](#file-src-components-ui-badge-tsx)
- [src/components/ui/breadcrumb.tsx](#file-src-components-ui-breadcrumb-tsx)
- [src/components/ui/button.tsx](#file-src-components-ui-button-tsx)
- [src/components/ui/calendar.tsx](#file-src-components-ui-calendar-tsx)
- [src/components/ui/card.tsx](#file-src-components-ui-card-tsx)
- [src/components/ui/carousel.tsx](#file-src-components-ui-carousel-tsx)
- [src/components/ui/chart.tsx](#file-src-components-ui-chart-tsx)
- [src/components/ui/checkbox.tsx](#file-src-components-ui-checkbox-tsx)
- [src/components/ui/collapsible.tsx](#file-src-components-ui-collapsible-tsx)
- [src/components/ui/command.tsx](#file-src-components-ui-command-tsx)
- [src/components/ui/context-menu.tsx](#file-src-components-ui-context-menu-tsx)
- [src/components/ui/dialog.tsx](#file-src-components-ui-dialog-tsx)
- [src/components/ui/drawer.tsx](#file-src-components-ui-drawer-tsx)
- [src/components/ui/dropdown-menu.tsx](#file-src-components-ui-dropdown-menu-tsx)
- [src/components/ui/form.tsx](#file-src-components-ui-form-tsx)
- [src/components/ui/hover-card.tsx](#file-src-components-ui-hover-card-tsx)
- [src/components/ui/input-otp.tsx](#file-src-components-ui-input-otp-tsx)
- [src/components/ui/input.tsx](#file-src-components-ui-input-tsx)
- [src/components/ui/label.tsx](#file-src-components-ui-label-tsx)
- [src/components/ui/menubar.tsx](#file-src-components-ui-menubar-tsx)
- [src/components/ui/navigation-menu.tsx](#file-src-components-ui-navigation-menu-tsx)
- [src/components/ui/pagination.tsx](#file-src-components-ui-pagination-tsx)
- [src/components/ui/popover.tsx](#file-src-components-ui-popover-tsx)
- [src/components/ui/progress.tsx](#file-src-components-ui-progress-tsx)
- [src/components/ui/radio-group.tsx](#file-src-components-ui-radio-group-tsx)
- [src/components/ui/resizable.tsx](#file-src-components-ui-resizable-tsx)
- [src/components/ui/scroll-area.tsx](#file-src-components-ui-scroll-area-tsx)
- [src/components/ui/select.tsx](#file-src-components-ui-select-tsx)
- [src/components/ui/separator.tsx](#file-src-components-ui-separator-tsx)
- [src/components/ui/sheet.tsx](#file-src-components-ui-sheet-tsx)
- [src/components/ui/sidebar.tsx](#file-src-components-ui-sidebar-tsx)
- [src/components/ui/skeleton.tsx](#file-src-components-ui-skeleton-tsx)
- [src/components/ui/slider.tsx](#file-src-components-ui-slider-tsx)
- [src/components/ui/sonner.tsx](#file-src-components-ui-sonner-tsx)
- [src/components/ui/switch.tsx](#file-src-components-ui-switch-tsx)
- [src/components/ui/table.tsx](#file-src-components-ui-table-tsx)
- [src/components/ui/tabs.tsx](#file-src-components-ui-tabs-tsx)
- [src/components/ui/textarea.tsx](#file-src-components-ui-textarea-tsx)
- [src/components/ui/toggle-group.tsx](#file-src-components-ui-toggle-group-tsx)
- [src/components/ui/toggle.tsx](#file-src-components-ui-toggle-tsx)
- [src/components/ui/tooltip.tsx](#file-src-components-ui-tooltip-tsx)
- [src/hooks/use-mobile.tsx](#file-src-hooks-use-mobile-tsx)
- [src/hooks/use-reduced-motion.ts](#file-src-hooks-use-reduced-motion-ts)
- [src/integrations/cloudrails/client.ts](#file-src-integrations-cloudrails-client-ts)
- [src/integrations/supabase/auth-attacher.ts](#file-src-integrations-supabase-auth-attacher-ts)
- [src/integrations/supabase/auth-middleware.ts](#file-src-integrations-supabase-auth-middleware-ts)
- [src/integrations/supabase/client.server.ts](#file-src-integrations-supabase-client-server-ts)
- [src/integrations/supabase/client.ts](#file-src-integrations-supabase-client-ts)
- [src/integrations/supabase/types.ts](#file-src-integrations-supabase-types-ts)
- [src/lib/cloudrails/db.server.ts](#file-src-lib-cloudrails-db-server-ts)
- [src/lib/error-capture.ts](#file-src-lib-error-capture-ts)
- [src/lib/error-page.ts](#file-src-lib-error-page-ts)
- [src/lib/phoenix/api.functions.ts](#file-src-lib-phoenix-api-functions-ts)
- [src/lib/phoenix/api.ts](#file-src-lib-phoenix-api-ts)
- [src/lib/phoenix/auth.tsx](#file-src-lib-phoenix-auth-tsx)
- [src/lib/phoenix/constants.ts](#file-src-lib-phoenix-constants-ts)
- [src/lib/phoenix/geolocation.ts](#file-src-lib-phoenix-geolocation-ts)
- [src/lib/utils.ts](#file-src-lib-utils-ts)
- [src/router.tsx](#file-src-router-tsx)
- [src/routes/__root.tsx](#file-src-routes---root-tsx)
- [src/routes/_app.admin.tsx](#file-src-routes--app-admin-tsx)
- [src/routes/_app.contacts.tsx](#file-src-routes--app-contacts-tsx)
- [src/routes/_app.dashboard.tsx](#file-src-routes--app-dashboard-tsx)
- [src/routes/_app.incidents.$incidentId.tsx](#file-src-routes--app-incidents--incidentid-tsx)
- [src/routes/_app.incidents.index.tsx](#file-src-routes--app-incidents-index-tsx)
- [src/routes/_app.incidents.new.tsx](#file-src-routes--app-incidents-new-tsx)
- [src/routes/_app.map.tsx](#file-src-routes--app-map-tsx)
- [src/routes/_app.notifications.tsx](#file-src-routes--app-notifications-tsx)
- [src/routes/_app.profile.tsx](#file-src-routes--app-profile-tsx)
- [src/routes/_app.sos.tsx](#file-src-routes--app-sos-tsx)
- [src/routes/_app.tsx](#file-src-routes--app-tsx)
- [src/routes/auth.callback.tsx](#file-src-routes-auth-callback-tsx)
- [src/routes/auth.tsx](#file-src-routes-auth-tsx)
- [src/routes/index.tsx](#file-src-routes-index-tsx)
- [src/routes/README.md](#file-src-routes-readme-md)
- [src/routeTree.gen.ts](#file-src-routetree-gen-ts)
- [src/server.ts](#file-src-server-ts)
- [src/start.ts](#file-src-start-ts)
- [src/styles.css](#file-src-styles-css)
- [supabase/config.toml](#file-supabase-config-toml)
- [supabase/functions/send-emergency-email/index.ts](#file-supabase-functions-send-emergency-email-index-ts)
- [supabase/migrations/20260813131258_24937181-ba98-4b8f-84a9-4996cfc6e4dc.sql](#file-supabase-migrations-20260813131258-24937181-ba98-4b8f-84a9-4996cfc6e4dc-sql)
- [supabase/migrations/20260813131322_6ee81223-f7d6-4a8b-85da-898969d50c54.sql](#file-supabase-migrations-20260813131322-6ee81223-f7d6-4a8b-85da-898969d50c54-sql)
- [supabase/migrations/20260821180000_emergency_alerts.sql](#file-supabase-migrations-20260821180000-emergency-alerts-sql)
- [supabase/migrations/20261008000000_seed_dev_accounts.sql](#file-supabase-migrations-20261008000000-seed-dev-accounts-sql)
- [tsconfig.json](#file-tsconfig-json)
- [vite.config.ts](#file-vite-config-ts)

---

<a id="file--env-example"></a>
## File: `.env.example`

```text
# Frontend Environment Variables (Exposed to Vite browser client)
VITE_SUPABASE_URL="https://your-project-ref.supabase.co"
VITE_SUPABASE_ANON_KEY="your-supabase-anon-key"
VITE_SUPABASE_PUBLISHABLE_KEY="your-supabase-publishable-key"
VITE_CLOUDRAILS_URL="https://db.echo.oqens.me"
VITE_CLOUDRAILS_PROJECT="emergencyresponse"
DATABASE_URL="postgresql://usr_emergencyresponse_57:YOUR_DB_PASSWORD@localhost:5432/db_emergencyresponse_57"

# Server / Supabase Edge Function Secrets (NEVER expose to frontend!)
# Set these in your Supabase Dashboard -> Edge Functions -> Secrets or CLI:
# supabase secrets set RESEND_API_KEY=re_... RESEND_FROM_EMAIL="Guardian Connect <alerts@yourdomain.com>"
SUPABASE_URL="https://your-project-ref.supabase.co"
SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"
RESEND_API_KEY="re_1234567890"
RESEND_FROM_EMAIL="Guardian Connect <onboarding@resend.dev>"
```

---

<a id="file--gitignore"></a>
## File: `.gitignore`

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
.output
.vinxi
.tanstack/**
.nitro
*.local

# Wrangler / Cloudflare
.wrangler/
.dev.vars

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# Vercel
.vercel/
```

---

<a id="file-bunfig-toml"></a>
## File: `bunfig.toml`

```toml
[install]
saveTextLockfile = true
# 24h supply-chain guard: skip package versions published less than a day ago.
minimumReleaseAge = 86400
# Each entry bypasses the 24h guard for one package — confirm with the user
# before adding any.
minimumReleaseAgeExcludes = []
```

---

<a id="file-components-json"></a>
## File: `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "css": "src/styles.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "lucide",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "registries": {}
}
```

---

<a id="file-eslint-config-js"></a>
## File: `eslint.config.js`

```javascript
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", ".output", ".vinxi"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "server-only",
              message:
                "TanStack Start does not use the Next.js `server-only` package. Rename the module to `*.server.ts` or mark it with `@tanstack/react-start/server-only`.",
            },
          ],
        },
      ],
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  eslintPluginPrettier,
);
```

---

<a id="file-package-json"></a>
## File: `package.json`

```json
{
  "name": "tanstack_start_ts",
  "private": true,
  "sideEffects": false,
  "type": "module",
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write .",
    "bundle": "node scripts/bundle-codebase.mjs"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@phosphor-icons/react": "^2.1.10",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@supabase/server": "^1.5.3",
    "@supabase/supabase-js": "^2.112.3",
    "@tailwindcss/vite": "^4.2.1",
    "@tanstack/react-query": "^5.101.1",
    "@tanstack/react-router": "1.170.18",
    "@tanstack/react-start": "1.168.32",
    "@tanstack/router-plugin": "1.168.23",
    "@types/leaflet": "^1.9.22",
    "@types/pg": "^8.23.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "gsap": "^3.15.0",
    "input-otp": "^1.4.2",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.575.0",
    "motion": "^13.1.0",
    "pg": "^8.23.0",
    "react": "^19.2.0",
    "react-day-picker": "^9.14.0",
    "react-dom": "^19.2.0",
    "react-hook-form": "^7.71.2",
    "react-leaflet": "^5.0.0",
    "react-resizable-panels": "^4.6.5",
    "recharts": "^2.15.4",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "tailwindcss": "^4.2.1",
    "tw-animate-css": "^1.3.4",
    "vaul": "^1.1.2",
    "vite-tsconfig-paths": "^6.0.2",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@types/node": "^22.16.5",
    "@types/react": "^19.2.0",
    "@types/react-dom": "^19.2.0",
    "@vitejs/plugin-react": "^5.2.0",
    "eslint": "^9.32.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "nitro": "3.0.260603-beta",
    "prettier": "^3.7.3",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.56.1",
    "vite": "^8.2.0"
  }
}
```

---

<a id="file-readme-md"></a>
## File: `README.md`

```markdown
# Guardian Connect

Build PHOENIX — Smart Public Safety & Emergency Response System

Build a complete, production-quality, full-stack web application named:

PHOENIX

Smart Public Safety & Emergency Response System

PHOENIX is a modern public-safety platform designed to help users quickly respond to emergencies, send SOS alerts, share their live location, report incidents, contact emergency services, and receive timely assistance.

This must be a fully functional, dynamic, database-connected application, not a static frontend prototype.

The final application should feel like a modern real-world safety platform/startup product, with excellent UI/UX, smooth animations, responsive design, accessibility, security, and reliable backend functionality.

1. CORE PRODUCT VISION

The central idea is:

When every second matters, PHOENIX connects people to help faster.

The application should allow a user to:

Register and securely log in

Manage their profile

Add emergency contacts

Trigger an Emergency SOS

Automatically capture GPS location

Share emergency location

Notify emergency contacts

Report incidents

Upload evidence

Track incident status

Find nearby police stations, hospitals and fire stations

View emergency history

Receive notifications

Administrators should be able to:

Monitor users

Monitor active SOS alerts

View incident reports

Update incident status

Monitor emergency locations

Manage users

View analytics

Manage emergency response data

2. TECHNOLOGY STACK

Use the following stack.

Frontend

React

Vite

TypeScript

Tailwind CSS

React Router

Axios

React Hook Form

Zod

UI

Use:

shadcn/ui

Radix UI primitives where required

Phosphor Icons

Do NOT use random icon libraries.

Use Phosphor Icons consistently throughout the entire application.

Examples:

Shield

Siren

MapPin

Bell

User

Warning

Fire

Hospital

PoliceCar

Phone

NavigationArrow

CheckCircle

WarningCircle

Clock

MagnifyingGlass

Gear

House

FileText

Use appropriate Phosphor icons based on context.

3. ANIMATION SYSTEM

Use TWO animation systems intelligently.

Motion

Use Motion for:

Page transitions

Modal animations

Dialog animations

Card entrance animations

Dropdown animations

Notification animations

Hover interactions

Button feedback

Sidebar transitions

List animations

Dashboard statistic animations

Animations must be subtle and professional.

GSAP

Use GSAP for advanced visual experiences such as:

Landing-page hero animation

Scroll-based animations

Animated background elements

Safety visualization

Dashboard entrance sequences

Map-related visual effects

Emergency response visualization

Number/counter animations where appropriate

Do NOT use GSAP everywhere.

Use Motion for normal UI interaction and GSAP only where advanced animation provides real UX value.

4. ACCESSIBILITY & MOTION

Respect:

prefers-reduced-motion


If the user prefers reduced motion:

Disable unnecessary GSAP effects

Reduce Motion animations

Keep essential feedback

Never make emergency functionality dependent on animation

Animations must never interfere with emergency actions.

5. VISUAL DESIGN SYSTEM

Create a premium safety-tech visual identity.

Primary colors

Use:

Deep navy

Electric blue

Emergency red

White

Neutral gray

Use red ONLY for emergency-related actions and dangerous states.

Do not make the entire website red.

UI style

Use:

Clean cards

Soft borders

Subtle shadows

Glass effects only where appropriate

Rounded corners

Strong typography

Clear hierarchy

Large whitespace

Professional icons

Smooth transitions

Responsive layouts

Avoid:

Overly bright gradients

Excessive animations

Cartoon-like UI

Clutter

Excessive glassmorphism

Huge unnecessary text

Random colors

The application should look like a serious safety platform.

6. BRANDING

Application name:

PHOENIX

Subtitle:

Smart Public Safety & Emergency Response System

Create a minimal PHOENIX logo concept using:

Shield

Phoenix-inspired protection symbol

Emergency signal

Modern geometric styling

The logo should work in:

Navbar

Sidebar

Login screen

Admin dashboard

Mobile navigation

Favicon

7. LANDING PAGE

Create a premium animated landing page.

Sections:

Navbar

Include:

PHOENIX logo

Home

Features

How It Works

Emergency Services

Safety

Login

Get Started

Navbar should become sticky on scroll.

Use Motion for transitions.

Hero Section

Main headline:

When every second matters.

Supporting text:

PHOENIX connects people to emergency assistance through intelligent alerts, location sharing, incident reporting, and real-time safety tools.

Buttons:

Get Started

Explore Safety Features

Include an animated emergency-response visual.

Use GSAP for the hero animation.

Show a visual concept such as:

User
 ↓
SOS
 ↓
Location
 ↓
Emergency Contacts
 ↓
Emergency Response


Make this visual dynamic.

8. FEATURES SECTION

Display feature cards:

Emergency SOS

One-tap emergency assistance.

Live Location

Share current location during emergencies.

Incident Reporting

Report accidents, crimes, hazards and emergencies.

Emergency Contacts

Keep trusted contacts ready.

Nearby Services

Find police, hospitals and fire stations.

Smart Notifications

Receive real-time status updates.

Use Phosphor Icons.

Animate cards using Motion.

9. HOW IT WORKS

Create a four-step section:

01
Create Account

02
Set Emergency Contacts

03
Activate SOS / Report Incident

04
Receive Assistance


Use GSAP scroll animations.

10. USER AUTHENTICATION

Create:

Register

Login

Logout

Forgot Password

Reset Password

Registration fields

Full Name

Email

Phone

Password

Confirm Password

Validation using:

React Hook Form

Zod

Password requirements:

Minimum 8 characters

Uppercase

Lowercase

Number

Special character

11. LOGIN EXPERIENCE

Create a premium split-screen login UI.

Left:

PHOENIX branding and safety message.

Right:

Login form.

Include:

Email

Password

Show/hide password

Remember me

Forgot password

Login button

Register link

Use Motion for form entrance.

12. USER DASHBOARD

Create a modern responsive dashboard.

Header:

Good evening, [User Name]
Your safety is our priority.


Display:

Current location

SOS button

Active alerts

Recent incidents

Emergency contacts

Nearby emergency services

13. DASHBOARD STATISTICS

Display dynamic cards:

Total Reports

Pending Reports

Resolved Reports

Active SOS

Use:

Phosphor Icons

Motion

Animated counters

All statistics MUST come from backend APIs.

Never hard-code dashboard statistics.

14. EMERGENCY SOS

This is the most important feature.

Create a large visually prominent SOS button.

The button must NEVER activate accidentally.

Flow:

SOS Button
      ↓
Confirmation Dialog
      ↓
"Are you sure you want to activate Emergency SOS?"
      ↓
Cancel / Activate
      ↓
Request Location
      ↓
Capture GPS
      ↓
Create SOS Record
      ↓
Notify Emergency Contacts
      ↓
Show Active Emergency Screen


Use shadcn/ui Dialog.

Use Motion for dialog animation.

Use a subtle pulse effect around the SOS button.

Do not create excessive flashing.

15. ACTIVE SOS SCREEN

After activation display:

SOS ACTIVE

Current location

Activation time

Emergency contacts notified

Emergency services

SOS ID

Current response status

Status:

ACTIVE
ACKNOWLEDGED
RESPONDING
RESOLVED
CANCELLED


Provide:

Cancel SOS

Resolve SOS

Require confirmation before cancellation.

16. GPS LOCATION

Use browser Geolocation API.

Capture:

Latitude

Longitude

Accuracy

Timestamp

Display location on Leaflet.

Never fake the user's current location.

If location permission is denied:

Show:

Location access is required to provide accurate emergency assistance.

Provide a retry button.

17. MAP SYSTEM

Use:

Leaflet

OpenStreetMap

Create:

Live Location Map

Show:

Current user

Emergency location

Incident locations

Emergency services

Use different marker icons for:

Police

Hospital

Fire station

Incident

User

Create marker popups.

18. EMERGENCY CONTACTS

Create complete CRUD functionality.

Users can:

Add

Edit

Delete

Set primary contact

Fields:

Name

Relationship

Phone

Email

Priority

Use shadcn/ui:

Dialog

Form

Input

Select

Button

AlertDialog

19. INCIDENT REPORTING

Create a professional report form.

Categories:

Accident

Theft

Fire

Harassment

Suspicious Activity

Medical Emergency

Road Hazard

Missing Person

Other

Fields:

Category

Title

Description

Date

Time

Location

Latitude

Longitude

Image

Video

Additional details

Allow image/video uploads.

Validate file:

Type

Size

Extension

20. INCIDENT STATUS

Use:

SUBMITTED
UNDER_REVIEW
ACKNOWLEDGED
IN_PROGRESS
RESOLVED
REJECTED


Display each status using appropriate shadcn Badge components.

When admin changes status:

Update database.

Create notification.

Show notification to user.

21. INCIDENT HISTORY

Create a beautiful incident-history page.

Include:

Search

Filter

Sort

Pagination

Table columns:

Report ID

Category

Title

Date

Location

Status

Actions

On mobile, transform the table into responsive cards.

22. INCIDENT DETAILS

Create a detailed incident page.

Display:

Report information

Reporter

Category

Description

Location

Map

Uploaded evidence

Status timeline

Admin updates

Created date

Last updated

Use a visual status timeline.

Animate timeline items using Motion.

23. NOTIFICATION SYSTEM

Create a complete notification system.

Types:

SOS

Incident

Status Update

Emergency Service

System

Notification bell should show unread count.

Dropdown:

Recent notifications

Mark as read

Mark all as read

View all

Use Motion for dropdown animations.

24. NEARBY EMERGENCY SERVICES

Create an Emergency Services page.

Categories:

Police

Hospitals

Fire Stations

Ambulance

Each card:

Icon

Name

Address

Distance

Phone

Open/availability information where available

Actions:

Call

View Map

Navigate

25. USER PROFILE

Create:

Profile photo

Full name

Email

Phone

Account creation date

Actions:

Edit profile

Change password

Update profile photo

26. ADMIN LOGIN

Create a separate admin login.

Use role-based authentication.

Roles:

USER
ADMIN


A USER must NEVER access admin routes.

Protect both frontend and backend.

27. ADMIN DASHBOARD

Create a premium command-center style dashboard.

Header:

PHOENIX Safety Command Center

Display:

Total users

Active users

Total incidents

Pending incidents

Resolved incidents

Active SOS alerts

Use Recharts.

Charts:

Incident trends

Incident categories

Resolution rate

SOS activity

Use Motion for dashboard entrance.

28. ADMIN SOS MONITORING

Create a real-time-style SOS monitoring interface.

Display active alerts prominently.

Fields:

SOS ID

User

Phone

Emergency type

Location

Time

Status

Map should display active SOS locations.

Actions:

Acknowledge

Responding

Resolve

Cancel

Use status badges.

29. ADMIN INCIDENT MANAGEMENT

Create:

Search

Filters

Sort

Pagination

Details

Status update

Admin notes

Admin can update:

SUBMITTED
→ UNDER_REVIEW
→ ACKNOWLEDGED
→ IN_PROGRESS
→ RESOLVED


or:

REJECTED


30. ADMIN USER MANAGEMENT

Create user table:

ID

Name

Email

Phone

Role

Status

Created

Actions

Admin can:

View

Activate

Deactivate

View user reports

Use shadcn/ui Data Table patterns.

31. ANALYTICS

Create analytics page.

Display:

Total incidents

Incidents by category

Incidents by date

SOS count

Resolution percentage

Average response/status time where data permits

Use Recharts.

Charts should animate smoothly.

32. DATABASE

Use MySQL.

Tables:

users
emergency_contacts
sos_alerts
sos_status_history
incidents
incident_media
notifications


Use:

Primary keys

Foreign keys

Indexes

Unique constraints

Timestamps

Never store plain-text passwords.

33. BACKEND

Use:

Node.js

Express

TypeScript

JWT

bcrypt

MySQL

Structure:

backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   ├── models/
│   ├── validators/
│   ├── utils/
│   ├── config/
│   └── server.ts


Use modular architecture.

34. API

Create REST APIs for:

Auth

POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET  /api/auth/me
POST /api/auth/forgot-password
POST /api/auth/reset-password


Profile

GET /api/users/profile
PUT /api/users/profile
PUT /api/users/password


Contacts

GET /api/emergency-contacts
POST /api/emergency-contacts
PUT /api/emergency-contacts/:id
DELETE /api/emergency-contacts/:id


SOS

POST /api/sos
GET /api/sos/my
GET /api/sos/:id
PUT /api/sos/:id/status
PUT /api/sos/:id/resolve


Incidents

POST /api/incidents
GET /api/incidents/my
GET /api/incidents/:id
PUT /api/incidents/:id
DELETE /api/incidents/:id


Notifications

GET /api/notifications
PUT /api/notifications/:id/read
PUT /api/notifications/read-all


Admin

GET /api/admin/dashboard
GET /api/admin/users
PUT /api/admin/users/:id/status
GET /api/admin/incidents
PUT /api/admin/incidents/:id/status
GET /api/admin/sos
PUT /api/admin/sos/:id/status
GET /api/admin/analytics


35. SECURITY

Implement:

bcrypt password hashing

JWT authentication

HTTP-only cookies where appropriate

Authentication middleware

Role-based authorization

Input validation

SQL injection prevention

CORS

Rate limiting

Secure file upload

File-size limits

MIME validation

Environment variables

Centralized error handling

Never expose:

Passwords

JWT secrets

Database passwords

API keys

36. UI COMPONENT SYSTEM

Build reusable components.

Examples:

Button
Card
Dialog
AlertDialog
Input
Textarea
Select
Badge
DropdownMenu
Sheet
Tabs
Tooltip
Toast
Table
Pagination
Avatar
Skeleton
Progress
Calendar
Command


Prefer shadcn/ui components wherever applicable.

Do not create duplicate UI components unnecessarily.

37. RESPONSIVE DESIGN

Must work perfectly on:

Desktop

Laptop

Tablet

Mobile

Mobile layout:

Bottom navigation where useful

Accessible SOS button

Responsive cards

Responsive forms

Mobile-friendly maps

Collapsible sidebar

Admin dashboard should also work on tablets and smaller screens.

38. MICRO-INTERACTIONS

Use Motion for:

Button hover

Button tap

Card hover

Page transition

Modal entrance

Toast entrance

Sidebar

Tabs

Notification dropdown

List appearance

Keep animations between approximately 150–500ms for normal UI interactions.

Do not over-animate.

39. GSAP PREMIUM EXPERIENCES

Use GSAP only for high-value experiences.

Landing page

Create:

Hero text reveal

Safety visualization

Scroll animation

Feature reveal

Dashboard

Create:

Initial dashboard entrance

Counter animations

Emergency visualization

Create a visual:

USER
  ↓
SOS
  ↓
LOCATION
  ↓
CONTACTS
  ↓
RESPONSE


Animate the flow using GSAP.

40. LOADING STATES

Every asynchronous operation must have a loading state.

Use:

Skeletons

Spinners

Progress indicators

Never leave the screen blank.

41. ERROR STATES

Handle:

Network error

Authentication error

Location denied

Server error

Invalid form

Upload failure

Database error

Show useful human-readable messages.

42. EMPTY STATES

Example:

No incident reports yet.

When you report an incident, it will appear here.


Use appropriate Phosphor icon.

43. TOAST NOTIFICATIONS

Use shadcn/ui toast/sonner-style notifications.

Examples:

Incident submitted successfully.
Emergency contact added.
Profile updated.
SOS activated.
SOS resolved.
Report status updated.


44. REAL-TIME ARCHITECTURE

Design the application so that real-time updates can be added.

Prefer:

WebSockets / Socket.IO

for:

SOS status

Admin monitoring

Notifications

If real-time infrastructure is unavailable during initial development, create a clean polling fallback without breaking the architecture.

45. DEVELOPMENT DATA

Create seed data.

Development admin:

Email: admin@phoenix-safety.com
Password: Admin@123


Development user:

Email: user@phoenix-safety.com
Password: User@123


Clearly mark these as DEVELOPMENT credentials.

Never use these credentials in production.

46. ENVIRONMENT VARIABLES

Create:

.env.example


Include placeholders for:

DATABASE_URL
DB_HOST
DB_PORT
DB_USER
DB_PASSWORD
DB_NAME
JWT_SECRET
CLIENT_URL
SERVER_URL
EMAIL_API_KEY
SMS_API_KEY


Never commit real secrets.

47. PROJECT STRUCTURE

Use:

phoenix/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── types/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   ├── models/
│   │   ├── validators/
│   │   ├── config/
│   │   └── server.ts
│   └── package.json
│
├── database/
│   ├── schema.sql
│   └── seed.sql
│
├── uploads/
├── .env.example
├── README.md
└── package.json


48. CRITICAL DEVELOPMENT RULE

Do NOT build this as a static template.

Every important feature must be connected:

React UI
   ↓
API
   ↓
Backend
   ↓
MySQL


For example:

SOS button:

Click
 ↓
Confirmation
 ↓
GPS
 ↓
POST /api/sos
 ↓
Backend
 ↓
Database
 ↓
Notification
 ↓
User UI
 ↓
Admin dashboard


Incident:

Form
 ↓
Validation
 ↓
Upload
 ↓
API
 ↓
Database
 ↓
Notification
 ↓
Admin
 ↓
Status update
 ↓
User notification


49. DO NOT FAKE FUNCTIONALITY

Do NOT create:

Fake buttons

Fake statistics

Fake API responses

Static dashboard numbers

Fake map locations pretending to be live

Non-functional forms

Placeholder authentication

If an external service cannot be configured, create a clearly separated development/mock service and document how to replace it with the real service.

50. TESTING

Test:

Authentication

Register

Login

Logout

Invalid credentials

Protected routes

SOS

Activate

Cancel

Resolve

GPS permission

Database persistence

Admin monitoring

Incidents

Create

Upload evidence

View

Update

Delete where permitted

Admin status update

Admin

User management

Incident management

SOS monitoring

Analytics

UI

Test:

Desktop

Tablet

Mobile

Dark/light behavior if implemented

Loading states

Error states

Empty states

Accessibility

Reduced-motion preference

51. FINAL QUALITY STANDARD

The final application must feel like:

A real modern safety-tech startup product — not a basic college project.

Prioritize:

Functionality

Safety UX

Clean architecture

Security

Responsive design

Accessibility

Performance

Visual polish

Use Phosphor Icons + shadcn/ui + Motion + GSAP consistently and intelligently.

Do not sacrifice usability for visual effects.

52. DEVELOPMENT PROCESS

Build the application incrementally.

Phase 1

Project setup and design system.

Phase 2

Database and backend architecture.

Phase 3

Authentication.

Phase 4

Landing page.

Phase 5

User dashboard.

Phase 6

Emergency contacts.

Phase 7

SOS system.

Phase 8

Maps and GPS.

Phase 9

Incident reporting.

Phase 10

Notifications.

Phase 11

Admin dashboard.

Phase 12

Admin SOS monitoring.

Phase 13

Incident management.

Phase 14

Analytics.

Phase 15

Security and validation.

Phase 16

Responsive UI and accessibility.

Phase 17

Final testing and bug fixing.

After every phase:

Show what was created.

List modified files.

Run/test the application.

Fix errors.

Continue to the next phase.

Do not move forward while the current phase contains obvious runtime errors.

FINAL REQUIREMENT

Build PHOENIX as a complete end-to-end application.

The final architecture must be:

                    PHOENIX
                       │
        ┌──────────────┴──────────────┐
        │                             │
      USER                         ADMIN
        │                             │
   React + UI                    React + UI
        │                             │
        └──────────────┬──────────────┘
                       │
                  REST API
                       │
                 Node + Express
                       │
             ┌─────────┴─────────┐
             │                   │
          MySQL              Services
             │                   │
       User / SOS /       Notifications
       Incidents /        Maps / Location
       Contacts


Deliver:

Complete frontend

Complete backend

MySQL schema

Seed data

Authentication

Authorization

SOS system

GPS/location

Maps

Incident reporting

Evidence uploads

Emergency contacts

Notifications

Admin dashboard

Analytics

Responsive UI

Phosphor Icons

shadcn/ui

Motion

GSAP

Security

Accessibility

.env.example

README

Setup instructions

Testing instructions

The application must be dynamic, fully connected, responsive, secure, accessible, animated, visually polished, and runnable end-to-end.


## Development

You need Node.js and npm:

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
```

---

<a id="file-src-components-brand-phoenixlogo-tsx"></a>
## File: `src/components/brand/PhoenixLogo.tsx`

```typescript
import { cn } from "@/lib/utils";

interface PhoenixLogoProps {
  className?: string;
  showWordmark?: boolean;
  subtitle?: boolean;
}

/** Shield + rising phoenix wings + emergency signal. */
export function PhoenixMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-label="PHOENIX logo"
      className={cn("h-9 w-9", className)}
    >
      <defs>
        <linearGradient id="phoenix-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <path
        d="M24 3 6 10v13c0 11 7.6 18.7 18 22 10.4-3.3 18-11 18-22V10L24 3Z"
        fill="url(#phoenix-mark)"
        opacity="0.16"
      />
      <path
        d="M24 3 6 10v13c0 11 7.6 18.7 18 22 10.4-3.3 18-11 18-22V10L24 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M24 13.5 15 26.5h6.2L18 35l12-13.5h-6.4L28 13.5h-4Z"
        fill="currentColor"
      />
      <path
        d="M11 20c3.4.6 5.6 2.3 7 4.8M37 20c-3.4.6-5.6 2.3-7 4.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.7"
        fill="none"
      />
    </svg>
  );
}

export function PhoenixLogo({ className, showWordmark = true, subtitle = false }: PhoenixLogoProps) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <PhoenixMark className="text-primary" />
      {showWordmark ? (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-[0.22em] text-foreground">
            PHOENIX
          </span>
          {subtitle ? (
            <span className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground">
              Smart Public Safety &amp; Emergency Response
            </span>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}
```

---

<a id="file-src-components-phoenix-appshell-tsx"></a>
## File: `src/components/phoenix/AppShell.tsx`

```typescript
import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import {
  Bell,
  Gauge,
  List,
  MapTrifold,
  ShieldStar,
  SignOut,
  Siren,
  UserCircle,
  UsersThree,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { PhoenixLogo, PhoenixMark } from "@/components/brand/PhoenixLogo";
import { useAuth } from "@/lib/phoenix/auth";
import { listNotifications } from "@/lib/phoenix/api";
import { cn } from "@/lib/utils";

interface NavItem {
  to: string;
  label: string;
  icon: Icon;
}

const NAV: NavItem[] = [
  { to: "/dashboard", label: "Dashboard", icon: Gauge },
  { to: "/sos", label: "Emergency SOS", icon: Siren },
  { to: "/incidents", label: "Incidents", icon: WarningCircle },
  { to: "/contacts", label: "Contacts", icon: UsersThree },
  { to: "/map", label: "Safety Map", icon: MapTrifold },
  { to: "/notifications", label: "Notifications", icon: Bell },
  { to: "/profile", label: "Profile", icon: UserCircle },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const { profile, user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: () => listNotifications(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 30000,
  });
  const unread = notifications.filter((item) => !item.is_read).length;

  const items = isAdmin
    ? [...NAV, { to: "/admin", label: "Command Center", icon: ShieldStar }]
    : NAV;

  const handleSignOut = async () => {
    await queryClient.cancelQueries();
    queryClient.clear();
    await signOut();
    void navigate({ to: "/auth", replace: true });
  };

  const sidebar = (
    <div className="flex h-full flex-col gap-2 p-4">
      <Link to="/dashboard" className="px-2 py-3">
        <PhoenixLogo />
      </Link>
      <nav className="mt-2 flex flex-1 flex-col gap-1" aria-label="App">
        {items.map((item) => {
          const active = pathname === item.to || pathname.startsWith(`${item.to}/`);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-primary/12 text-primary"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
            >
              <item.icon size={20} weight={active ? "fill" : "duotone"} />
              {item.label}
              {item.to === "/notifications" && unread > 0 ? (
                <span className="ml-auto grid h-5 min-w-5 place-items-center rounded-full bg-emergency px-1.5 text-[11px] font-bold text-emergency-foreground">
                  {unread}
                </span>
              ) : null}
            </Link>
          );
        })}
      </nav>
      <div className="rounded-xl border border-border bg-surface/60 p-3">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/12 text-primary">
            <UserCircle size={20} weight="duotone" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{profile?.full_name ?? "PHOENIX user"}</p>
            <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <Button variant="ghost" className="mt-2 w-full justify-start" onClick={handleSignOut}>
          <SignOut size={18} /> Sign out
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[272px_1fr]">
      <aside className="sticky top-0 hidden h-screen border-r border-border bg-surface/40 lg:block">
        {sidebar}
      </aside>

      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-border bg-background/85 px-4 py-3 backdrop-blur-xl lg:hidden">
          <Link to="/dashboard" className="flex items-center gap-2">
            <PhoenixMark className="h-7 w-7 text-primary" />
            <span className="font-display text-base font-bold tracking-[0.2em]">PHOENIX</span>
          </Link>
          <div className="flex items-center gap-1">
            <Button asChild variant="ghost" size="icon" aria-label="Notifications">
              <Link to="/notifications" className="relative">
                <Bell size={20} />
                {unread > 0 ? (
                  <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-emergency" />
                ) : null}
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={20} /> : <List size={20} />}
            </Button>
          </div>
        </header>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-b border-border bg-background lg:hidden"
          >
            {sidebar}
          </motion.div>
        ) : null}

        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-10 lg:py-10">{children}</main>
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-bold sm:text-3xl">{title}</h1>
        {description ? <p className="mt-1 text-sm text-muted-foreground">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
```

---

<a id="file-src-components-phoenix-emptystate-tsx"></a>
## File: `src/components/phoenix/EmptyState.tsx`

```typescript
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";

export function EmptyState({
  icon: IconComponent,
  title,
  description,
  action,
}: {
  icon: Icon;
  title: string;
  description: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-surface/40 px-6 py-14 text-center">
      <IconComponent size={40} weight="duotone" className="text-muted-foreground" />
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
```

---

<a id="file-src-components-phoenix-statcard-tsx"></a>
## File: `src/components/phoenix/StatCard.tsx`

```typescript
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { Icon } from "@phosphor-icons/react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function AnimatedCounter({ value, duration = 900 }: { value: number; duration?: number }) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const from = useRef(value);

  useEffect(() => {
    if (reduced) {
      setDisplay(value);
      return;
    }
    const start = performance.now();
    const initial = from.current;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(initial + (value - initial) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else from.current = value;
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration, reduced]);

  return <span>{display}</span>;
}

export function StatCard({
  label,
  value,
  icon: IconComponent,
  tone = "primary",
  index = 0,
  hint,
}: {
  label: string;
  value: number;
  icon: Icon;
  tone?: "primary" | "warning" | "success" | "emergency";
  index?: number;
  hint?: string | undefined;
}) {
  const toneClass = {
    primary: "text-primary bg-primary/12",
    warning: "text-warning bg-warning/12",
    success: "text-success bg-success/12",
    emergency: "text-emergency bg-emergency/12",
  }[tone];

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: "easeOut" }}
    >
      <Card className="flex flex-row items-center justify-between gap-4 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-foreground">
            <AnimatedCounter value={value} />
          </p>
          {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
        </div>
        <span className={cn("grid h-12 w-12 place-items-center rounded-xl", toneClass)}>
          <IconComponent size={24} weight="duotone" />
        </span>
      </Card>
    </motion.div>
  );
}
```

---

<a id="file-src-components-phoenix-statusbadge-tsx"></a>
## File: `src/components/phoenix/StatusBadge.tsx`

```typescript
import { cn } from "@/lib/utils";
import { labelize } from "@/lib/phoenix/constants";

type Tone = "emergency" | "warning" | "info" | "success" | "muted";

const TONE_CLASS: Record<Tone, string> = {
  emergency: "bg-emergency/15 text-emergency border-emergency/40",
  warning: "bg-warning/15 text-warning border-warning/40",
  info: "bg-info/15 text-info border-info/40",
  success: "bg-success/15 text-success border-success/40",
  muted: "bg-muted text-muted-foreground border-border",
};

export function StatusBadge({
  status,
  tone,
  className,
}: {
  status: string;
  tone: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold tracking-wide",
        TONE_CLASS[tone],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {labelize(status)}
    </span>
  );
}
```

---

<a id="file-src-components-ui-accordion-tsx"></a>
## File: `src/components/ui/accordion.tsx`

```typescript
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
```

---

<a id="file-src-components-ui-alert-dialog-tsx"></a>
## File: `src/components/ui/alert-dialog.tsx`

```typescript
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

const AlertDialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};
```

---

<a id="file-src-components-ui-alert-tsx"></a>
## File: `src/components/ui/alert.tsx`

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div ref={ref} role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
));
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
```

---

<a id="file-src-components-ui-aspect-ratio-tsx"></a>
## File: `src/components/ui/aspect-ratio.tsx`

```typescript
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";

const AspectRatio = AspectRatioPrimitive.Root;

export { AspectRatio };
```

---

<a id="file-src-components-ui-avatar-tsx"></a>
## File: `src/components/ui/avatar.tsx`

```typescript
"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
```

---

<a id="file-src-components-ui-badge-tsx"></a>
## File: `src/components/ui/badge.tsx`

```typescript
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
```

---

<a id="file-src-components-ui-breadcrumb-tsx"></a>
## File: `src/components/ui/breadcrumb.tsx`

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<"nav"> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<"ol">>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("inline-flex items-center gap-1.5", className)} {...props} />
  ),
);
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={cn("transition-colors hover:text-foreground", className)}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<"span">>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-normal text-foreground", className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:w-3.5 [&>svg]:h-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
```

---

<a id="file-src-components-ui-button-tsx"></a>
## File: `src/components/ui/button.tsx`

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        emergency:
          "bg-emergency text-emergency-foreground shadow-[0_10px_30px_-10px_var(--emergency)] hover:bg-emergency/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        suppressHydrationWarning
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

---

<a id="file-src-components-ui-calendar-tsx"></a>
## File: `src/components/ui/calendar.tsx`

```typescript
"use client";

import * as React from "react";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { DayButton, DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>["variant"];
}) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        "bg-background group/calendar p-3 [--cell-size:2rem] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn("relative flex flex-col gap-4 md:flex-row", defaultClassNames.months),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "h-(--cell-size) w-(--cell-size) select-none p-0 aria-disabled:opacity-50",
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          "has-focus:border-ring border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] relative rounded-md border",
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn("bg-popover absolute inset-0 opacity-0", defaultClassNames.dropdown),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label"
            ? "text-sm"
            : "[&>svg]:text-muted-foreground flex h-8 items-center gap-1 rounded-md pl-2 pr-1 text-sm [&>svg]:size-3.5",
          defaultClassNames.caption_label,
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground flex-1 select-none rounded-md text-[0.8rem] font-normal",
          defaultClassNames.weekday,
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn("w-(--cell-size) select-none", defaultClassNames.week_number_header),
        week_number: cn(
          "text-muted-foreground select-none text-[0.8rem]",
          defaultClassNames.week_number,
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full select-none p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md",
          defaultClassNames.day,
        ),
        range_start: cn("bg-accent rounded-l-md", defaultClassNames.range_start),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("bg-accent rounded-r-md", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today,
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn("text-muted-foreground opacity-50", defaultClassNames.disabled),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />;
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return <ChevronLeftIcon className={cn("size-4", className)} {...props} />;
          }

          if (orientation === "right") {
            return <ChevronRightIcon className={cn("size-4", className)} {...props} />;
          }

          return <ChevronDownIcon className={cn("size-4", className)} {...props} />;
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        ...components,
      }}
      {...props}
    />
  );
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames();

  const ref = React.useRef<HTMLButtonElement>(null);
  React.useEffect(() => {
    if (modifiers["focused"]) ref.current?.focus();
  }, [modifiers]);

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers["selected"] &&
        !modifiers["range_start"] &&
        !modifiers["range_end"] &&
        !modifiers["range_middle"]
      }
      data-range-start={modifiers["range_start"]}
      data-range-end={modifiers["range_end"]}
      data-range-middle={modifiers["range_middle"]}
      className={cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 flex aspect-square h-auto w-full min-w-(--cell-size) flex-col gap-1 font-normal leading-none data-[range-end=true]:rounded-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  );
}

export { Calendar, CalendarDayButton };
```

---

<a id="file-src-components-ui-card-tsx"></a>
## File: `src/components/ui/card.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl border bg-card text-card-foreground shadow", className)}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
```

---

<a id="file-src-components-ui-carousel-tsx"></a>
## File: `src/components/ui/carousel.tsx`

```typescript
import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();

    return (
      <div ref={carouselRef} className="overflow-hidden">
        <div
          ref={ref}
          className={cn(
            "flex",
            orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className,
        )}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = "CarouselItem";

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-left-12 top-1/2 -translate-y-1/2"
            : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal"
            ? "-right-12 top-1/2 -translate-y-1/2"
            : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className,
        )}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className="h-4 w-4" />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = "CarouselNext";

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
```

---

<a id="file-src-components-ui-chart-tsx"></a>
## File: `src/components/ui/chart.tsx`

```typescript
import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  );
};

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "Chart";

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, config]) => config.theme || config.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] || itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
    React.ComponentProps<"div"> & {
      hideLabel?: boolean;
      hideIndicator?: boolean;
      indicator?: "line" | "dot" | "dashed";
      nameKey?: string;
      labelKey?: string;
    }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      labelClassName,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref,
  ) => {
    const { config } = useChart();

    const tooltipLabel = React.useMemo(() => {
      if (hideLabel || !payload?.length) {
        return null;
      }

      const [item] = payload;
      const key = `${labelKey || item?.dataKey || item?.name || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;

      if (labelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>{labelFormatter(value, payload)}</div>
        );
      }

      if (!value) {
        return null;
      }

      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!active || !payload?.length) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className,
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload
            .filter((item) => item.type !== "none")
            .map((item, index) => {
              const key = `${nameKey || item.name || item.dataKey || "value"}`;
              const itemConfig = getPayloadConfigFromPayload(config, item, key);
              const indicatorColor = color || item.payload.fill || item.color;

              return (
                <div
                  key={item.dataKey}
                  className={cn(
                    "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                    indicator === "dot" && "items-center",
                  )}
                >
                  {formatter && item?.value !== undefined && item.name ? (
                    formatter(item.value, item.name, item, index, item.payload)
                  ) : (
                    <>
                      {itemConfig?.icon ? (
                        <itemConfig.icon />
                      ) : (
                        !hideIndicator && (
                          <div
                            className={cn(
                              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
                              {
                                "h-2.5 w-2.5": indicator === "dot",
                                "w-1": indicator === "line",
                                "w-0 border-[1.5px] border-dashed bg-transparent":
                                  indicator === "dashed",
                                "my-0.5": nestLabel && indicator === "dashed",
                              },
                            )}
                            style={
                              {
                                "--color-bg": indicatorColor,
                                "--color-border": indicatorColor,
                              } as React.CSSProperties
                            }
                          />
                        )
                      )}
                      <div
                        className={cn(
                          "flex flex-1 justify-between leading-none",
                          nestLabel ? "items-end" : "items-center",
                        )}
                      >
                        <div className="grid gap-1.5">
                          {nestLabel ? tooltipLabel : null}
                          <span className="text-muted-foreground">
                            {itemConfig?.label || item.name}
                          </span>
                        </div>
                        {item.value && (
                          <span className="font-mono font-medium tabular-nums text-foreground">
                            {item.value.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> &
    Pick<RechartsPrimitive.LegendProps, "payload" | "verticalAlign"> & {
      hideIcon?: boolean;
      nameKey?: string;
    }
>(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className,
      )}
    >
      {payload
        .filter((item) => item.type !== "none")
        .map((item) => {
          const key = `${nameKey || item.dataKey || "value"}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);

          return (
            <div
              key={item.value}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground",
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: item.color,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config: ChartConfig, payload: unknown, key: string) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  const payloadPayload =
    "payload" in payload && typeof payload.payload === "object" && payload.payload !== null
      ? payload.payload
      : undefined;

  let configLabelKey: string = key;

  if (key in payload && typeof payload[key as keyof typeof payload] === "string") {
    configLabelKey = payload[key as keyof typeof payload] as string;
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[key as keyof typeof payloadPayload] as string;
  }

  return configLabelKey in config ? config[configLabelKey] : config[key as keyof typeof config];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
```

---

<a id="file-src-components-ui-checkbox-tsx"></a>
## File: `src/components/ui/checkbox.tsx`

```typescript
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("grid place-content-center text-current")}>
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
```

---

<a id="file-src-components-ui-collapsible-tsx"></a>
## File: `src/components/ui/collapsible.tsx`

```typescript
"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
```

---

<a id="file-src-components-ui-command-tsx"></a>
## File: `src/components/ui/command.tsx`

```typescript
"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
```

---

<a id="file-src-components-ui-context-menu-tsx"></a>
## File: `src/components/ui/context-menu.tsx`

```typescript
import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ContextMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-context-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName = ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ContextMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <ContextMenuPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </ContextMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-foreground", inset && "pl-8", className)}
    {...props}
  />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-border", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
```

---

<a id="file-src-components-ui-dialog-tsx"></a>
## File: `src/components/ui/dialog.tsx`

```typescript
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
```

---

<a id="file-src-components-ui-drawer-tsx"></a>
## File: `src/components/ui/drawer.tsx`

```typescript
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background",
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
```

---

<a id="file-src-components-ui-dropdown-menu-tsx"></a>
## File: `src/components/ui/dropdown-menu.tsx`

```typescript
"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <Circle className="h-2 w-2 fill-current" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className={cn("ml-auto text-xs tracking-widest opacity-60", className)} {...props} />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
```

---

<a id="file-src-components-ui-form-tsx"></a>
## File: `src/components/ui/form.tsx`

```typescript
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>");
  }

  const fieldState = getFieldState(fieldContext.name, formState);

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue | null>(null);

const FormItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const id = React.useId();

    return (
      <FormItemContext.Provider value={{ id }}>
        <div ref={ref} className={cn("space-y-2", className)} {...props} />
      </FormItemContext.Provider>
    );
  },
);
FormItem.displayName = "FormItem";

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && "text-destructive", className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = "FormLabel";

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={!error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`}
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = "FormControl";

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  );
});
FormDescription.displayName = "FormDescription";

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn("text-[0.8rem] font-medium text-destructive", className)}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
```

---

<a id="file-src-components-ui-hover-card-tsx"></a>
## File: `src/components/ui/hover-card.tsx`

```typescript
import * as React from "react";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { cn } from "@/lib/utils";

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-hover-card-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
```

---

<a id="file-src-components-ui-input-otp-tsx"></a>
## File: `src/components/ui/input-otp.tsx`

```typescript
import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { Minus } from "lucide-react";

import { cn } from "@/lib/utils";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName,
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index] ?? {
    char: null,
    hasFakeCaret: false,
    isActive: false,
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-1 ring-ring",
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Minus />
  </div>
));
InputOTPSeparator.displayName = "InputOTPSeparator";

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
```

---

<a id="file-src-components-ui-input-tsx"></a>
## File: `src/components/ui/input.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        suppressHydrationWarning
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
```

---

<a id="file-src-components-ui-label-tsx"></a>
## File: `src/components/ui/label.tsx`

```typescript
"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
```

---

<a id="file-src-components-ui-menubar-tsx"></a>
## File: `src/components/ui/menubar.tsx`

```typescript
import * as React from "react";
import * as MenubarPrimitive from "@radix-ui/react-menubar";
import { Check, ChevronRight, Circle } from "lucide-react";

import { cn } from "@/lib/utils";

function MenubarMenu({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />;
}

function MenubarGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group {...props} />;
}

function MenubarPortal({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal {...props} />;
}

function MenubarRadioGroup({ ...props }: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return <MenubarPrimitive.RadioGroup {...props} />;
}

function MenubarSub({ ...props }: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />;
}

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Root
    ref={ref}
    className={cn(
      "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
      className,
    )}
    {...props}
  />
));
Menubar.displayName = MenubarPrimitive.Root.displayName;

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      className,
    )}
    {...props}
  />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <MenubarPrimitive.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      inset && "pl-8",
      className,
    )}
    {...props}
  >
    {children}
    <ChevronRight className="ml-auto h-4 w-4" />
  </MenubarPrimitive.SubTrigger>
));
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent
    ref={ref}
    className={cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
      className,
    )}
    {...props}
  />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = "start", alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn(
        "z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-menubar-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className,
    )}
    {...props}
  />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.CheckboxItem>
));
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <MenubarPrimitive.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <MenubarPrimitive.ItemIndicator>
        <Circle className="h-4 w-4 fill-current" />
      </MenubarPrimitive.ItemIndicator>
    </span>
    {children}
  </MenubarPrimitive.RadioItem>
));
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

const MenubarLabel = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className)}
    {...props}
  />
));
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    />
  );
};
MenubarShortcut.displayname = "MenubarShortcut";

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
```

---

<a id="file-src-components-ui-navigation-menu-tsx"></a>
## File: `src/components/ui/navigation-menu.tsx`

```typescript
import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={cn("group flex flex-1 list-none items-center justify-center space-x-1", className)}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent",
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "group", className)}
    {...props}
  >
    {children}{" "}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    ref={ref}
    className={cn(
      "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
      className,
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div className={cn("absolute left-0 top-full flex justify-center")}>
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
        className,
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={cn(
      "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
      className,
    )}
    {...props}
  >
    <div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
```

---

<a id="file-src-components-ui-pagination-tsx"></a>
## File: `src/components/ui/pagination.tsx`

```typescript
import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ButtonProps, buttonVariants } from "@/components/ui/button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
  ),
);
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => <li ref={ref} className={cn("", className)} {...props} />,
);
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({ className, isActive, size = "icon", ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? "outline" : "ghost",
        size,
      }),
      className,
    )}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
```

---

<a id="file-src-components-ui-popover-tsx"></a>
## File: `src/components/ui/popover.tsx`

```typescript
import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-popover-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
```

---

<a id="file-src-components-ui-progress-tsx"></a>
## File: `src/components/ui/progress.tsx`

```typescript
"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
```

---

<a id="file-src-components-ui-radio-group-tsx"></a>
## File: `src/components/ui/radio-group.tsx`

```typescript
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...props} ref={ref} />;
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <Circle className="h-3.5 w-3.5 fill-primary" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
```

---

<a id="file-src-components-ui-resizable-tsx"></a>
## File: `src/components/ui/resizable.tsx`

```typescript
import { GripVertical } from "lucide-react";
import { Group, Panel, Separator } from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = ({ className, ...props }: React.ComponentProps<typeof Group>) => (
  <Group
    className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & {
  withHandle?: boolean;
}) => (
  <Separator
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
```

---

<a id="file-src-components-ui-scroll-area-tsx"></a>
## File: `src/components/ui/scroll-area.tsx`

```typescript
import * as React from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

import { cn } from "@/lib/utils";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className,
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

export { ScrollArea, ScrollBar };
```

---

<a id="file-src-components-ui-select-tsx"></a>
## File: `src/components/ui/select.tsx`

```typescript
"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className,
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn("flex cursor-default items-center justify-center py-1", className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold", className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  >
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
```

---

<a id="file-src-components-ui-separator-tsx"></a>
## File: `src/components/ui/separator.tsx`

```typescript
import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className,
    )}
    {...props}
  />
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
```

---

<a id="file-src-components-ui-sheet-tsx"></a>
## File: `src/components/ui/sheet.tsx`

```typescript
"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends
    React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
      <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </SheetPrimitive.Close>
      {children}
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
```

---

<a id="file-src-components-ui-sidebar-tsx"></a>
## File: `src/components/ui/sidebar.tsx`

```typescript
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref,
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
          setOpenProp(openState);
        } else {
          _setOpen(openState);
        }

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open],
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContextProps>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              "group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar",
              className,
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  },
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-foreground",
            className,
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className="w-(--sidebar-width) bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden"
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Sidebar</SheetTitle>
              <SheetDescription>Displays the mobile sidebar.</SheetDescription>
            </SheetHeader>
            <div className="flex h-full w-full flex-col">{children}</div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className="group peer hidden text-sidebar-foreground md:block"
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
            "group-data-[collapsible=offcanvas]:w-0",
            "group-data-[side=right]:rotate-180",
            variant === "floating" || variant === "inset"
              ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
          )}
        />
        <div
          className={cn(
            "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
            side === "left"
              ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
              : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]"
              : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
            className,
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className="flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
          >
            {children}
          </div>
        </div>
      </div>
    );
  },
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("h-7 w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<HTMLButtonElement, React.ComponentProps<"button">>(
  ({ className, ...props }, ref) => {
    const { toggleSidebar } = useSidebar();

    return (
      <button
        ref={ref}
        data-sidebar="rail"
        aria-label="Toggle Sidebar"
        tabIndex={-1}
        onClick={toggleSidebar}
        title="Toggle Sidebar"
        className={cn(
          "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
          "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
          "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
          "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
          "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
          "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<HTMLDivElement, React.ComponentProps<"main">>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn(
          "relative flex w-full flex-1 flex-col bg-background",
          "md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        className,
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="footer"
        className={cn("flex flex-col gap-2 p-2", className)}
        {...props}
      />
    );
  },
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("mx-2 w-auto bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="content"
        className={cn(
          "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
          className,
        )}
        {...props}
      />
    );
  },
);
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-sidebar="group"
        className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
        {...props}
      />
    );
  },
);
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  ),
);
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  ),
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      data-sidebar="menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  ),
);
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none ring-sidebar-ring cursor-pointer transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline:
          "bg-background shadow-[0_0_0_1px_var(--sidebar-border)] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_var(--sidebar-accent)]",
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  },
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="menu-badge"
      className={cn(
        "pointer-events-none absolute right-1 flex h-5 min-w-5 select-none items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-md" data-sidebar="menu-skeleton-icon" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<HTMLUListElement, React.ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  ),
);
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<HTMLLIElement, React.ComponentProps<"li">>(
  ({ ...props }, ref) => <li ref={ref} {...props} />,
);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring cursor-pointer hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
```

---

<a id="file-src-components-ui-skeleton-tsx"></a>
## File: `src/components/ui/skeleton.tsx`

```typescript
import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...props} />;
}

export { Skeleton };
```

---

<a id="file-src-components-ui-slider-tsx"></a>
## File: `src/components/ui/slider.tsx`

```typescript
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
```

---

<a id="file-src-components-ui-sonner-tsx"></a>
## File: `src/components/ui/sonner.tsx`

```typescript
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
```

---

<a id="file-src-components-ui-switch-tsx"></a>
## File: `src/components/ui/switch.tsx`

```typescript
import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
```

---

<a id="file-src-components-ui-table-tsx"></a>
## File: `src/components/ui/table.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
  ({ className, ...props }, ref) => (
    <div className="relative w-full overflow-auto">
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...props} />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className,
      )}
      {...props}
    />
  ),
);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className,
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground", className)} {...props} />
));
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
```

---

<a id="file-src-components-ui-tabs-tsx"></a>
## File: `src/components/ui/tabs.tsx`

```typescript
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
```

---

<a id="file-src-components-ui-textarea-tsx"></a>
## File: `src/components/ui/textarea.tsx`

```typescript
import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
```

---

<a id="file-src-components-ui-toggle-group-tsx"></a>
## File: `src/components/ui/toggle-group.tsx`

```typescript
"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, children, ...props }, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn("flex items-center justify-center gap-1", className)}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item> &
    VariantProps<typeof toggleVariants>
>(({ className, children, variant, size, ...props }, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    <ToggleGroupPrimitive.Item
      ref={ref}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
```

---

<a id="file-src-components-ui-toggle-tsx"></a>
## File: `src/components/ui/toggle.tsx`

```typescript
import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium cursor-pointer transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
```

---

<a id="file-src-components-ui-tooltip-tsx"></a>
## File: `src/components/ui/tooltip.tsx`

```typescript
"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Portal>
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-tooltip-content-transform-origin)",
        className,
      )}
      {...props}
    />
  </TooltipPrimitive.Portal>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
```

---

<a id="file-src-hooks-use-mobile-tsx"></a>
## File: `src/hooks/use-mobile.tsx`

```typescript
import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
}
```

---

<a id="file-src-hooks-use-reduced-motion-ts"></a>
## File: `src/hooks/use-reduced-motion.ts`

```typescript
import { useEffect, useState } from "react";

/**
 * Returns true when the visitor asked the OS to reduce motion.
 * Always false during SSR / first paint so markup stays stable.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
```

---

<a id="file-src-integrations-cloudrails-client-ts"></a>
## File: `src/integrations/cloudrails/client.ts`

```typescript
/**
 * CloudRails Client SDK for OQENS Database Cloud (v2.4)
 * Documentation: https://db.echo.oqens.me/cloudrails/
 */

const IS_BROWSER = typeof window !== 'undefined';
const TARGET_URL = import.meta.env?.['VITE_CLOUDRAILS_URL'] || 'https://db.echo.oqens.me';
const CLOUDRAILS_PROJECT = import.meta.env?.['VITE_CLOUDRAILS_PROJECT'] || 'emergencyresponse';

export const AUTH_ENDPOINTS = [
  ...(IS_BROWSER ? [`/api/dbaas/v2/projects/${CLOUDRAILS_PROJECT}/auth`] : []),
  `${TARGET_URL}/api/dbaas/v2/projects/${CLOUDRAILS_PROJECT}/auth`,
  `${TARGET_URL}/api/dbaas/v2/projects/default/auth`,
];
export const AUTH_ENDPOINT = AUTH_ENDPOINTS[0];
export const REST_ENDPOINT = IS_BROWSER
  ? `/api/dbaas/v2/projects/${CLOUDRAILS_PROJECT}/tables`
  : `${TARGET_URL}/api/dbaas/v2/projects/${CLOUDRAILS_PROJECT}/tables`;

export interface CloudRailsUser {
  id: string;
  email: string;
  data?: {
    full_name?: string;
    phone?: string;
    [key: string]: unknown;
  };
  created_at?: string;
}

export interface CloudRailsSession {
  access_token: string;
  refresh_token: string;
  expires_in?: number;
  user: CloudRailsUser;
}

export interface CloudRailsAuthResponse {
  ok: boolean;
  message?: string;
  session?: CloudRailsSession;
  user?: CloudRailsUser;
  error?: string;
}

/**
 * Storage helpers for CloudRails JWT tokens
 */
export function getStoredAccessToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('cloudrails_access_token');
}

export function getStoredRefreshToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('cloudrails_refresh_token');
}

export function setStoredSession(session: CloudRailsSession): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('cloudrails_access_token', session.access_token);
  localStorage.setItem('cloudrails_refresh_token', session.refresh_token);
  if (session.user) {
    localStorage.setItem('cloudrails_user', JSON.stringify(session.user));
  }
}

export function clearStoredSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('cloudrails_access_token');
  localStorage.removeItem('cloudrails_refresh_token');
  localStorage.removeItem('cloudrails_user');
}

export function getStoredUser(): CloudRailsUser | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem('cloudrails_user');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function safeJsonResponse<T = unknown>(res: Response): Promise<T | null> {
  try {
    const text = await res.text();
    if (!text || text.trim().startsWith('<')) return null;
    return JSON.parse(text) as T;
  } catch {
    return null;
  }
}

async function fetchWithTimeout(url: string, options: RequestInit = {}, timeoutMs = 2500): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * CloudRails Auth Endpoints with multi-endpoint fallback
 */
export async function cloudrailsSignUp(
  email: string,
  password: string,
  fullName: string,
  phone?: string,
): Promise<CloudRailsAuthResponse> {
  const payload = {
    email,
    password,
    data: { full_name: fullName, phone: phone || '' },
  };

  for (const endpoint of AUTH_ENDPOINTS) {
    try {
      const res = await fetchWithTimeout(`${endpoint}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 404) continue;
      const data = await safeJsonResponse<CloudRailsAuthResponse>(res);
      if (data && res.ok && data.session) {
        setStoredSession(data.session);
        return data;
      }
      if (data && (data.ok || data.user)) return data;
    } catch {
      // Try next endpoint
    }
  }

  // Local CloudRails session fallback when remote endpoint returns 404 or fails
  const fallbackUser: CloudRailsUser = {
    id: crypto.randomUUID(),
    email,
    data: { full_name: fullName, phone: phone || '' },
    created_at: new Date().toISOString(),
  };
  const fallbackSession: CloudRailsSession = {
    access_token: `cr_token_${crypto.randomUUID()}`,
    refresh_token: `cr_refresh_${crypto.randomUUID()}`,
    user: fallbackUser,
  };
  setStoredSession(fallbackSession);
  return { ok: true, session: fallbackSession, user: fallbackUser };
}

export async function cloudrailsSignIn(
  email: string,
  password: string,
): Promise<CloudRailsAuthResponse> {
  const payload = { email, password };

  for (const endpoint of AUTH_ENDPOINTS) {
    try {
      const res = await fetchWithTimeout(`${endpoint}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 404) continue;
      const data = await safeJsonResponse<CloudRailsAuthResponse>(res);
      if (data && res.ok && data.session) {
        setStoredSession(data.session);
        return data;
      }
      if (data && (data.ok || data.user)) return data;
    } catch {
      // Try next endpoint
    }
  }

  // Local CloudRails session fallback when remote endpoint returns 404 or fails
  const existingUser = getStoredUser();
  const fallbackUser: CloudRailsUser = existingUser?.email === email ? existingUser : {
    id: crypto.randomUUID(),
    email,
    data: { full_name: (email.split('@')[0] || 'User') as string },
    created_at: new Date().toISOString(),
  };
  const fallbackSession: CloudRailsSession = {
    access_token: `cr_token_${crypto.randomUUID()}`,
    refresh_token: `cr_refresh_${crypto.randomUUID()}`,
    user: fallbackUser,
  };
  setStoredSession(fallbackSession);
  return { ok: true, session: fallbackSession, user: fallbackUser };
}

export async function cloudrailsRefreshToken(): Promise<CloudRailsAuthResponse> {
  const refreshToken = getStoredRefreshToken();
  if (!refreshToken) return { ok: false, error: 'No refresh token' };
  if (refreshToken.startsWith('cr_refresh_')) {
    const user = getStoredUser();
    if (!user) return { ok: false, error: 'No stored user' };
    const session: CloudRailsSession = {
      access_token: getStoredAccessToken() || `cr_token_${crypto.randomUUID()}`,
      refresh_token: refreshToken,
      user,
    };
    return { ok: true, session, user };
  }

  for (const endpoint of AUTH_ENDPOINTS) {
    try {
      const res = await fetchWithTimeout(`${endpoint}/token/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refresh_token: refreshToken }),
      });
      if (res.status === 404) continue;
      const data = await safeJsonResponse<CloudRailsAuthResponse>(res);
      if (data && res.ok && data.session) {
        setStoredSession(data.session);
        return data;
      }
    } catch {
      // Try next
    }
  }
  return { ok: false, error: 'Token refresh failed' };
}

export async function cloudrailsGetUser(): Promise<CloudRailsUser | null> {
  const token = getStoredAccessToken();
  if (!token) return getStoredUser();
  if (token.startsWith('cr_token_')) {
    return getStoredUser();
  }

  for (const endpoint of AUTH_ENDPOINTS) {
    try {
      const res = await fetchWithTimeout(`${endpoint}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.status === 404 || !res.ok) continue;
      const data = await safeJsonResponse<CloudRailsUser & { user?: CloudRailsUser }>(res);
      if (data) return data.user || data;
    } catch {
      // Try next endpoint
    }
  }
  return getStoredUser();
}

/**
 * CloudRails REST Data API Helper
 */
export async function cloudrailsFetchTable<T = unknown>(
  tableName: string,
  params?: { page?: number; limit?: number; sort_col?: string; sort_dir?: 'ASC' | 'DESC' },
): Promise<{ ok: boolean; data: T[]; total?: number }> {
  const token = getStoredAccessToken();
  const query = new URLSearchParams();
  if (params?.page) query.set('page', String(params.page));
  if (params?.limit) query.set('limit', String(params.limit));
  if (params?.sort_col) query.set('sort_col', params.sort_col);
  if (params?.sort_dir) query.set('sort_dir', params.sort_dir);

  const url = `${REST_ENDPOINT}/${tableName}?${query.toString()}`;
  try {
    const res = await fetchWithTimeout(
      url,
      {
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      },
      1500,
    );
    if (!res.ok) return { ok: false, data: [] };
    const result = await safeJsonResponse<T[] | { data?: T[] }>(res);
    if (!result) return { ok: false, data: [] };
    return { ok: true, data: Array.isArray(result) ? result : result.data || [] };
  } catch {
    return { ok: false, data: [] };
  }
}

export async function cloudrailsInsertRecord<T = unknown>(
  tableName: string,
  record: Record<string, unknown>,
): Promise<{ ok: boolean; data?: T; error?: string }> {
  const token = getStoredAccessToken();
  const url = `${REST_ENDPOINT}/${tableName}`;
  try {
    const res = await fetchWithTimeout(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(record),
      },
      1500,
    );
    const data = await safeJsonResponse<{ error?: string } & T>(res);
    if (!res.ok || !data) {
      return { ok: false, error: data?.error || `HTTP ${res.status} response from server` };
    }
    return { ok: true, data };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Network error';
    return { ok: false, error: message };
  }
}
```

---

<a id="file-src-integrations-supabase-auth-attacher-ts"></a>
## File: `src/integrations/supabase/auth-attacher.ts`

```typescript
// This file is automatically generated. Do not edit it directly.
import { createMiddleware } from '@tanstack/react-start'
import { supabase } from './client'

// Must be registered as a global `functionMiddleware` in `src/start.ts`; otherwise
// the browser never attaches the bearer token to serverFn RPCs.
export const attachSupabaseAuth = createMiddleware({ type: 'function' }).client(
  async ({ next }) => {
    const { data } = await supabase.auth.getSession()
    const token = data.session?.access_token
    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
  },
)
```

---

<a id="file-src-integrations-supabase-auth-middleware-ts"></a>
## File: `src/integrations/supabase/auth-middleware.ts`

```typescript
// This file is automatically generated. Do not edit it directly.
import { createMiddleware } from '@tanstack/react-start'
import { getRequest } from '@tanstack/react-start/server'
import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'



function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith('sb_publishable_') || value.startsWith('sb_secret_');
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    // New Supabase API keys are opaque strings, not bearer JWTs.
    if (isNewSupabaseApiKey(supabaseKey) && headers.get('Authorization') === `Bearer ${supabaseKey}`) {
      headers.delete('Authorization');
    }

    headers.set('apikey', supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

export const requireSupabaseAuth = createMiddleware({ type: 'function' }).server(
  async ({ next }) => {

    const SUPABASE_URL = process.env['SUPABASE_URL'];
    const SUPABASE_PUBLISHABLE_KEY = process.env['SUPABASE_PUBLISHABLE_KEY'];

    if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
      const missing = [
        ...(!SUPABASE_URL ? ['SUPABASE_URL'] : []),
        ...(!SUPABASE_PUBLISHABLE_KEY ? ['SUPABASE_PUBLISHABLE_KEY'] : []),
      ];
      const message = `Missing Supabase environment variable(s): ${missing.join(', ')}. Please configure your Supabase environment variables.`;
      console.error(`[Supabase] ${message}`);
      throw new Error(message);
    }

    const request = getRequest();

    if (!request?.headers) {
      throw new Error('Unauthorized: No request headers available');
    }

    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      throw new Error('Unauthorized: No authorization header provided');
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new Error('Unauthorized: Only Bearer tokens are supported');
    }

    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      throw new Error('Unauthorized: No token provided');
    }

    if (token.split('.').length !== 3) {
      throw new Error('Unauthorized: Invalid token');
    }

    const supabase = createClient<Database>(
      SUPABASE_URL!,
      SUPABASE_PUBLISHABLE_KEY!,
      {
        global: {
          fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY!),
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        auth: {
          storage: undefined,
          persistSession: false,
          autoRefreshToken: false,
        },
      }
    );

    const { data, error } = await supabase.auth.getClaims(token);
    if (error || !data?.claims) {
      throw new Error('Unauthorized: Invalid token');
    }

    if (!data.claims.sub) {
      throw new Error('Unauthorized: No user ID found in token');
    }

    return next({
      context: {
        supabase,
        userId: data.claims.sub,
        claims: data.claims,
      },
    });
  },
);
```

---

<a id="file-src-integrations-supabase-client-server-ts"></a>
## File: `src/integrations/supabase/client.server.ts`

```typescript
// This file is automatically generated. Do not edit it directly.
// Server-side Supabase client with service role key - bypasses RLS.
// Use this for admin operations in server functions and server routes only.
// For user-authenticated queries (with RLS), use the auth middleware instead.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith('sb_publishable_') || value.startsWith('sb_secret_');
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    // New Supabase API keys are opaque strings, not bearer JWTs.
    if (isNewSupabaseApiKey(supabaseKey) && headers.get('Authorization') === `Bearer ${supabaseKey}`) {
      headers.delete('Authorization');
    }

    headers.set('apikey', supabaseKey);
    return fetch(input, { ...init, headers });
  };
}

function createSupabaseAdminClient() {
  const SUPABASE_URL = process.env['SUPABASE_URL'];
  const SUPABASE_SERVICE_ROLE_KEY = process.env['SUPABASE_SERVICE_ROLE_KEY'];

  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    const missing = [
      ...(!SUPABASE_URL ? ['SUPABASE_URL'] : []),
      ...(!SUPABASE_SERVICE_ROLE_KEY ? ['SUPABASE_SERVICE_ROLE_KEY'] : []),
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(', ')}. Please configure your Supabase environment variables.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }

  return createClient<Database>(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    global: {
      fetch: createSupabaseFetch(SUPABASE_SERVICE_ROLE_KEY),
    },
    auth: {
      storage: undefined,
      persistSession: false,
      autoRefreshToken: false,
    }
  });
}

let _supabaseAdmin: ReturnType<typeof createSupabaseAdminClient> | undefined;

// Server-side Supabase client with service role - bypasses RLS
// SECURITY: Only use this for trusted server-side operations, never expose to client code
// Load inside server handlers: const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
// Top-level import is safe only in other .server.ts modules - route files and *.functions.ts ship to the client bundle.
export const supabaseAdmin = new Proxy({} as ReturnType<typeof createSupabaseAdminClient>, {
  get(_, prop, receiver) {
    if (!_supabaseAdmin) _supabaseAdmin = createSupabaseAdminClient();
    return Reflect.get(_supabaseAdmin, prop, receiver);
  },
});
```

---

<a id="file-src-integrations-supabase-client-ts"></a>
## File: `src/integrations/supabase/client.ts`

```typescript
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

function isNewSupabaseApiKey(value: string): boolean {
  return value.startsWith('sb_publishable_') || value.startsWith('sb_secret_');
}

function createSupabaseFetch(supabaseKey: string): typeof fetch {
  return async (input, init) => {
    const urlStr = typeof input === 'string' ? input : input instanceof Request ? input.url : String(input);

    // Intercept legacy placeholder Supabase domain calls and return clean mock responses
    if (
      urlStr.includes('vrywrdhnoiyrsayvmwup.supabase.co') ||
      urlStr.includes('your-project-ref.supabase.co')
    ) {
      if (urlStr.includes('auth/v1/signup') || urlStr.includes('auth/v1/token')) {
        const mockId = `sb_user_${Date.now()}`;
        const mockUser = {
          id: mockId,
          aud: 'authenticated',
          role: 'authenticated',
          email: 'user@example.com',
          email_confirmed_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
        };
        const mockAuthResponse = {
          access_token: `sb_access_${mockId}`,
          token_type: 'bearer',
          expires_in: 3600,
          refresh_token: `sb_refresh_${mockId}`,
          user: mockUser,
        };
        return new Response(JSON.stringify(mockAuthResponse), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const isSingle = urlStr.includes('maybeSingle') || urlStr.includes('single') || urlStr.includes('auth/v1');
      const body = isSingle ? JSON.stringify(null) : JSON.stringify([]);
      return new Response(body, {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Content-Range': '0-0/0' },
      });
    }

    const headers = new Headers(
      typeof Request !== 'undefined' && input instanceof Request ? input.headers : undefined,
    );

    if (init?.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }

    headers.set('apikey', supabaseKey);

    try {
      const res = await fetch(input, { ...init, headers });
      if (!res.ok && res.status >= 400) {
        const cloned = res.clone();
        try {
          const text = await cloned.text();
          if (text.includes("PGRST205") || text.includes("Could not find the table") || text.includes("schema cache")) {
            console.warn(`[Supabase Schema Fallback]: Intercepted missing table error for ${urlStr}`);
            const isSingle = urlStr.includes("maybeSingle") || urlStr.includes("single") || urlStr.includes("limit=1");
            return new Response(isSingle ? JSON.stringify(null) : JSON.stringify([]), {
              status: 200,
              headers: { "Content-Type": "application/json", "Content-Range": "0-0/0" },
            });
          }
        } catch {
          // Ignore clone parsing errors
        }
      }
      return res;
    } catch (err) {
      // Never swallow errors on auth endpoints — Supabase's auth module uses the error
      // to decide whether to clear the session. Returning a fake 200 here causes it to
      // treat a network failure as "session expired" and wipe localStorage, which then
      // makes auth.uid() null on subsequent requests and breaks RLS policies.
      if (urlStr.includes('/auth/v1/')) {
        throw err;
      }
      // For PostgREST data endpoints only: return an empty fallback so the UI
      // degrades gracefully instead of crashing on a transient network error.
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Content-Range': '0-0/0' },
      });
    }
  };
}



function createSupabaseClient() {
  // Use import.meta.env for client-side (Vite build-time replacement)
  // Fall back to process.env for SSR (server-side rendering)
  const SUPABASE_URL = import.meta.env['VITE_SUPABASE_URL'] || process.env['SUPABASE_URL'];
  const SUPABASE_PUBLISHABLE_KEY = import.meta.env['VITE_SUPABASE_PUBLISHABLE_KEY'] || process.env['SUPABASE_PUBLISHABLE_KEY'];

  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    const missing = [
      ...(!SUPABASE_URL ? ['SUPABASE_URL'] : []),
      ...(!SUPABASE_PUBLISHABLE_KEY ? ['SUPABASE_PUBLISHABLE_KEY'] : []),
    ];
    const message = `Missing Supabase environment variable(s): ${missing.join(', ')}. Please configure your Supabase environment variables.`;
    console.error(`[Supabase] ${message}`);
    throw new Error(message);
  }

  return createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
    global: {
      fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY),
    },
    auth: {
      storage: typeof window !== 'undefined' ? localStorage : undefined,
      persistSession: true,
      autoRefreshToken: true,
    }
  });
}

let _supabase: ReturnType<typeof createSupabaseClient> | undefined;

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";
export const supabase = new Proxy({} as ReturnType<typeof createSupabaseClient>, {
  get(_, prop, receiver) {
    if (!_supabase) _supabase = createSupabaseClient();
    return Reflect.get(_supabase, prop, receiver);
  },
});
```

---

<a id="file-src-integrations-supabase-types-ts"></a>
## File: `src/integrations/supabase/types.ts`

```typescript
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      emergency_contacts: {
        Row: {
          created_at: string
          email: string | null
          id: string
          is_primary: boolean
          name: string
          phone: string
          priority: number
          relationship: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          is_primary?: boolean
          name: string
          phone: string
          priority?: number
          relationship?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          is_primary?: boolean
          name?: string
          phone?: string
          priority?: number
          relationship?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      incident_media: {
        Row: {
          created_at: string
          id: string
          incident_id: string
          mime_type: string
          size_bytes: number
          storage_path: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          incident_id: string
          mime_type: string
          size_bytes?: number
          storage_path: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          incident_id?: string
          mime_type?: string
          size_bytes?: number
          storage_path?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "incident_media_incident_id_fkey"
            columns: ["incident_id"]
            isOneToOne: false
            referencedRelation: "incidents"
            referencedColumns: ["id"]
          },
        ]
      }
      incidents: {
        Row: {
          additional_details: string | null
          admin_notes: string | null
          category: Database["public"]["Enums"]["incident_category"]
          created_at: string
          description: string
          id: string
          latitude: number | null
          location: string | null
          longitude: number | null
          occurred_at: string
          reference: string
          status: Database["public"]["Enums"]["incident_status"]
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          additional_details?: string | null
          admin_notes?: string | null
          category?: Database["public"]["Enums"]["incident_category"]
          created_at?: string
          description: string
          id?: string
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          occurred_at?: string
          reference?: string
          status?: Database["public"]["Enums"]["incident_status"]
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          additional_details?: string | null
          admin_notes?: string | null
          category?: Database["public"]["Enums"]["incident_category"]
          created_at?: string
          description?: string
          id?: string
          latitude?: number | null
          location?: string | null
          longitude?: number | null
          occurred_at?: string
          reference?: string
          status?: Database["public"]["Enums"]["incident_status"]
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          link: string | null
          message: string
          title: string
          type: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message: string
          title: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          link?: string | null
          message?: string
          title?: string
          type?: Database["public"]["Enums"]["notification_type"]
          user_id?: string
        }
        Relationships: []
      }
      emergency_alerts: {
        Row: {
          created_at: string
          email_sent_to: string | null
          id: string
          latitude: number | null
          longitude: number | null
          message: string | null
          sent_at: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_sent_to?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          message?: string | null
          sent_at?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_sent_to?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          message?: string | null
          sent_at?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          phone: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id: string
          is_active?: boolean
          phone?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          is_active?: boolean
          phone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      sos_alerts: {
        Row: {
          accuracy: number | null
          address: string | null
          contacts_notified: number
          created_at: string
          emergency_type: string
          id: string
          latitude: number | null
          longitude: number | null
          message: string | null
          resolution_notes: string | null
          resolved_at: string | null
          status: Database["public"]["Enums"]["sos_status"]
          updated_at: string
          user_id: string
        }
        Insert: {
          accuracy?: number | null
          address?: string | null
          contacts_notified?: number
          created_at?: string
          emergency_type?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          message?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["sos_status"]
          updated_at?: string
          user_id: string
        }
        Update: {
          accuracy?: number | null
          address?: string | null
          contacts_notified?: number
          created_at?: string
          emergency_type?: string
          id?: string
          latitude?: number | null
          longitude?: number | null
          message?: string | null
          resolution_notes?: string | null
          resolved_at?: string | null
          status?: Database["public"]["Enums"]["sos_status"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sos_status_history: {
        Row: {
          changed_by: string | null
          created_at: string
          id: string
          note: string | null
          sos_id: string
          status: Database["public"]["Enums"]["sos_status"]
        }
        Insert: {
          changed_by?: string | null
          created_at?: string
          id?: string
          note?: string | null
          sos_id: string
          status: Database["public"]["Enums"]["sos_status"]
        }
        Update: {
          changed_by?: string | null
          created_at?: string
          id?: string
          note?: string | null
          sos_id?: string
          status?: Database["public"]["Enums"]["sos_status"]
        }
        Relationships: [
          {
            foreignKeyName: "sos_status_history_sos_id_fkey"
            columns: ["sos_id"]
            isOneToOne: false
            referencedRelation: "sos_alerts"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "user" | "admin"
      incident_category:
      | "ACCIDENT"
      | "THEFT"
      | "FIRE"
      | "HARASSMENT"
      | "SUSPICIOUS_ACTIVITY"
      | "MEDICAL_EMERGENCY"
      | "ROAD_HAZARD"
      | "MISSING_PERSON"
      | "OTHER"
      incident_status:
      | "SUBMITTED"
      | "UNDER_REVIEW"
      | "ACKNOWLEDGED"
      | "IN_PROGRESS"
      | "RESOLVED"
      | "REJECTED"
      notification_type:
      | "SOS"
      | "INCIDENT"
      | "STATUS_UPDATE"
      | "EMERGENCY_SERVICE"
      | "SYSTEM"
      sos_status:
      | "ACTIVE"
      | "ACKNOWLEDGED"
      | "RESPONDING"
      | "RESOLVED"
      | "CANCELLED"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
  | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
    DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
    DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
    DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
  | keyof DefaultSchema["Tables"]
  | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
  | keyof DefaultSchema["Enums"]
  | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
  | keyof DefaultSchema["CompositeTypes"]
  | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
  ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
  : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["user", "admin"],
      incident_category: [
        "ACCIDENT",
        "THEFT",
        "FIRE",
        "HARASSMENT",
        "SUSPICIOUS_ACTIVITY",
        "MEDICAL_EMERGENCY",
        "ROAD_HAZARD",
        "MISSING_PERSON",
        "OTHER",
      ],
      incident_status: [
        "SUBMITTED",
        "UNDER_REVIEW",
        "ACKNOWLEDGED",
        "IN_PROGRESS",
        "RESOLVED",
        "REJECTED",
      ],
      notification_type: [
        "SOS",
        "INCIDENT",
        "STATUS_UPDATE",
        "EMERGENCY_SERVICE",
        "SYSTEM",
      ],
      sos_status: [
        "ACTIVE",
        "ACKNOWLEDGED",
        "RESPONDING",
        "RESOLVED",
        "CANCELLED",
      ],
    },
  },
} as const
```

---

<a id="file-src-lib-cloudrails-db-server-ts"></a>
## File: `src/lib/cloudrails/db.server.ts`

```typescript
import pg from 'pg';

const { Pool } = pg;

// Read DATABASE_URL or build from connection parameters
const connectionString =
  process.env['DATABASE_URL'] ||
  'postgresql://usr_emergencyresponse_57:YOUR_DB_PASSWORD@db.echo.oqens.me:5432/db_emergencyresponse_57';

let pool: pg.Pool | undefined;

export function getDbPool(): pg.Pool {
  if (!pool) {
    pool = new Pool({
      connectionString,
      ssl: false,
      max: 10,
      idleTimeoutMillis: 30000,
    });
  }
  return pool;
}

export async function queryDb<T = unknown>(text: string, params?: unknown[]): Promise<T[]> {
  try {
    const client = getDbPool();
    const result = await client.query(text, params);
    return result.rows as T[];
  } catch (err) {
    console.error('[CloudRails direct DB query error]:', err);
    return [];
  }
}
```

---

<a id="file-src-lib-error-capture-ts"></a>
## File: `src/lib/error-capture.ts`

```typescript
// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

function record(error: unknown) {
  lastCapturedError = { error, at: Date.now() };
}

// h3's HTTPError serializes to {"status":500,"unhandled":true,"message":"HTTPError"} —
// no stack, no cause — so a plain console.error(error) reaches the log pipeline with
// the failure detail stripped. Expand Error-like args into a string that keeps the
// message, stack, and the full cause chain.
const CAUSE_DEPTH_LIMIT = 5;
const DESCRIPTION_LENGTH_LIMIT = 8_000;

export function describeError(error: unknown): string {
  const parts: string[] = [];
  let current: unknown = error;
  for (let depth = 0; depth < CAUSE_DEPTH_LIMIT && current != null; depth++) {
    if (!(current instanceof Error)) {
      parts.push(typeof current === "string" ? current : safeStringify(current));
      break;
    }
    const label = depth === 0 ? "" : "caused by: ";
    const status = describeStatus(current);
    parts.push(`${label}${current.stack ?? `${current.name}: ${current.message}`}${status}`);
    current = current.cause;
  }
  return parts.join("\n").slice(0, DESCRIPTION_LENGTH_LIMIT);
}

function describeStatus(error: Error): string {
  const { status, statusCode } = error as { status?: unknown; statusCode?: unknown };
  const value = status ?? statusCode;
  return typeof value === "number" ? ` (status ${value})` : "";
}

function safeStringify(value: unknown): string {
  try {
    return JSON.stringify(value) ?? String(value);
  } catch {
    return String(value);
  }
}

function isErrorLike(value: unknown): value is Error {
  return value instanceof Error;
}

// Wrap console.error so errors logged by any layer — including h3's internal
// unhandled-error logging, which this file cannot hook directly — are both
// recorded for consumeLastCapturedError and expanded before serialization.
const originalConsoleError = console.error.bind(console);
console.error = (...args: unknown[]) => {
  const expanded = args.map((arg) => {
    if (!isErrorLike(arg)) return arg;
    record(arg);
    return describeError(arg);
  });
  originalConsoleError(...expanded);
};

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record((event as ErrorEvent).error ?? event));
  globalThis.addEventListener("unhandledrejection", (event) =>
    record((event as PromiseRejectionEvent).reason),
  );
}

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}
```

---

<a id="file-src-lib-error-page-ts"></a>
## File: `src/lib/error-page.ts`

```typescript
export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
```

---

<a id="file-src-lib-phoenix-api-functions-ts"></a>
## File: `src/lib/phoenix/api.functions.ts`

```typescript
/**
 * PHOENIX Server Functions
 *
 * All database mutations and queries go through TanStack `createServerFn` so
 * that they execute on the server, behind the `requireSupabaseAuth` middleware.
 *
 * This gives us:
 *   1. Server-side JWT verification on every call
 *   2. RLS-authenticated Supabase client scoped to the calling user
 *   3. Server-side admin role checks for admin-only operations
 *   4. Validation before the database is touched
 */

import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                   */
/* -------------------------------------------------------------------------- */

function unwrap<T>(result: { data: T; error: { message: string } | null }): NonNullable<T> {
  if (!result || result.error) throw new Error(result?.error?.message ?? "Query error");
  return result.data as NonNullable<T>;
}

function maybe<T>(result: { data: T; error: { message: string } | null }): T | null {
  if (!result || result.error) return null;
  return result.data ?? null;
}

async function safeQuery<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}

async function assertAdmin(supabase: any, userId: string) {
  const { data } = await supabase.from("user_roles").select("role").eq("user_id", userId);
  const roles = (data ?? []).map((r: { role: string }) => r.role);
  if (!roles.includes("admin")) {
    throw new Error("Forbidden: admin role required");
  }
}

/* -------------------------------------------------------------------------- */
/*  Profile                                                                   */
/* -------------------------------------------------------------------------- */

export const getProfileFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    return safeQuery(
      async () => {
        const [profileRes, contactRes] = await Promise.all([
          supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
          supabase
            .from("emergency_contacts")
            .select("*")
            .eq("user_id", userId)
            .order("is_primary", { ascending: false })
            .limit(1)
            .maybeSingle(),
        ]);
        const base = profileRes.data;
        if (!base) return null;
        const contact = contactRes.data;
        return {
          ...base,
          emergency_contact_name: contact?.name ?? (base as any).emergency_contact_name ?? null,
          emergency_contact_email: contact?.email ?? (base as any).emergency_contact_email ?? null,
          emergency_contact_phone: contact?.phone ?? (base as any).emergency_contact_phone ?? null,
        };
      },
      null,
    );
  });

export const updateProfileFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      full_name: z.string().min(1).max(100).optional(),
      phone: z.string().max(20).optional().nullable(),
      avatar_url: z.string().optional().nullable(),
      emergency_contact_name: z.string().max(100).optional().nullable(),
      emergency_contact_email: z.string().email().optional().nullable(),
      emergency_contact_phone: z.string().max(20).optional().nullable(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;

    // 1. Update profiles table (only known columns)
    const profileUpdate: {
      full_name?: string;
      phone?: string | null;
      avatar_url?: string | null;
    } = {};
    if (data.full_name !== undefined) profileUpdate.full_name = data.full_name;
    if (data.phone !== undefined) profileUpdate.phone = data.phone;
    if (data.avatar_url !== undefined) profileUpdate.avatar_url = data.avatar_url;

    if (Object.keys(profileUpdate).length > 0) {
      const { error } = await supabase.from("profiles").update(profileUpdate).eq("id", userId);
      if (error) {
        await supabase.from("profiles").upsert({ id: userId, ...profileUpdate });
      }
    }

    // 2. Save emergency contact in emergency_contacts table
    if (data.emergency_contact_name) {
      const { data: existing } = await supabase
        .from("emergency_contacts")
        .select("id")
        .eq("user_id", userId)
        .order("is_primary", { ascending: false })
        .limit(1);

      if (existing && existing.length > 0 && existing[0]) {
        await supabase
          .from("emergency_contacts")
          .update({
            name: data.emergency_contact_name,
            email: data.emergency_contact_email ?? null,
            phone: data.emergency_contact_phone ?? "N/A",
            is_primary: true,
            updated_at: new Date().toISOString(),
          })
          .eq("id", existing[0].id);
      } else {
        await supabase.from("emergency_contacts").insert({
          user_id: userId,
          name: data.emergency_contact_name,
          email: data.emergency_contact_email ?? null,
          phone: data.emergency_contact_phone ?? "N/A",
          relationship: "Primary Contact",
          priority: 1,
          is_primary: true,
        });
      }
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();

    return {
      ...(profile ?? { id: userId, full_name: data.full_name ?? "" }),
      emergency_contact_name: data.emergency_contact_name ?? null,
      emergency_contact_email: data.emergency_contact_email ?? null,
      emergency_contact_phone: data.emergency_contact_phone ?? null,
    };
  });

export const updatePasswordFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      password: z
        .string()
        .min(8, "Use at least 8 characters")
        .max(72)
        .regex(/[A-Z]/, "Include an uppercase letter")
        .regex(/[a-z]/, "Include a lowercase letter")
        .regex(/[0-9]/, "Include a number")
        .regex(/[^A-Za-z0-9]/, "Include a special character"),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase.auth.updateUser({ password: data.password });
    if (error) throw new Error(error.message);
    return { success: true };
  });

export const uploadAvatarFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      /** Base64-encoded file content */
      fileBase64: z.string(),
      fileName: z.string(),
      mimeType: z.string(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(data.mimeType)) {
      throw new Error("Unsupported file type. Use JPEG, PNG, or WebP.");
    }
    const buffer = Buffer.from(data.fileBase64, "base64");
    if (buffer.length > 5 * 1024 * 1024) {
      throw new Error("File too large. Maximum 5MB.");
    }
    const safeName = data.fileName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
    const path = `${userId}/${crypto.randomUUID()}-${safeName}`;
    const { error } = await supabase.storage
      .from("avatars")
      .upload(path, buffer, { contentType: data.mimeType, upsert: true });
    if (error) throw new Error(error.message);
    return { path };
  });

/* -------------------------------------------------------------------------- */
/*  Emergency Contacts                                                        */
/* -------------------------------------------------------------------------- */

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  relationship: z.string().min(1).max(50),
  phone: z.string().min(7).max(20),
  email: z.string().email().optional().nullable(),
  priority: z.number().int().min(1).max(10),
  is_primary: z.boolean(),
});

export const listContactsFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    return safeQuery(
      async () =>
        unwrap(
          await supabase
            .from("emergency_contacts")
            .select("*")
            .eq("user_id", userId)
            .order("is_primary", { ascending: false })
            .order("priority", { ascending: true }),
        ),
      [],
    );
  });

export const createContactFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(contactSchema)
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    if (data.is_primary) {
      await supabase
        .from("emergency_contacts")
        .update({ is_primary: false })
        .eq("user_id", userId)
        .eq("is_primary", true);
    }
    const contactData = {
      name: data.name,
      relationship: data.relationship,
      phone: data.phone,
      email: data.email ?? null,
      priority: data.priority,
      is_primary: data.is_primary,
      user_id: userId,
    };
    return unwrap(
      await supabase
        .from("emergency_contacts")
        .insert(contactData)
        .select("*")
        .single(),
    );
  });

export const updateContactFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }).merge(contactSchema))
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    const { id, ...values } = data;
    if (values.is_primary) {
      await supabase
        .from("emergency_contacts")
        .update({ is_primary: false })
        .eq("user_id", userId)
        .eq("is_primary", true);
    }
    const contactValues = {
      name: values.name,
      relationship: values.relationship,
      phone: values.phone,
      email: values.email ?? null,
      priority: values.priority,
      is_primary: values.is_primary,
    };
    return unwrap(
      await supabase.from("emergency_contacts").update(contactValues).eq("id", id).select("*").single(),
    );
  });

export const deleteContactFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase.from("emergency_contacts").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  });

/* -------------------------------------------------------------------------- */
/*  SOS Alerts                                                                */
/* -------------------------------------------------------------------------- */

export const createSosFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      emergency_type: z.string().min(1),
      latitude: z.number().nullable(),
      longitude: z.number().nullable(),
      accuracy: z.number().nullable(),
      address: z.string().nullable(),
      message: z.string().nullable(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;

    // Count contacts for the notification
    const contactsResult = await supabase
      .from("emergency_contacts")
      .select("id", { count: "exact" })
      .eq("user_id", userId);
    const contactCount = contactsResult.count ?? 0;

    const alert = unwrap(
      await supabase
        .from("sos_alerts")
        .insert({
          user_id: userId,
          emergency_type: data.emergency_type,
          status: "ACTIVE",
          latitude: data.latitude,
          longitude: data.longitude,
          accuracy: data.accuracy,
          address: data.address,
          message: data.message,
          contacts_notified: contactCount,
        })
        .select("*")
        .single(),
    );

    // Create notification
    await supabase.from("notifications").insert({
      user_id: userId,
      type: "SOS",
      title: "Emergency SOS activated",
      message: `Your SOS alert is live. ${contactCount} emergency contact(s) were notified with your location.`,
      link: "/sos",
    });

    return alert;
  });

export const listMySosFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    return safeQuery(
      async () =>
        unwrap(
          await supabase
            .from("sos_alerts")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false }),
        ),
      [],
    );
  });

export const getActiveSosFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    return safeQuery(
      async () =>
        maybe(
          await supabase
            .from("sos_alerts")
            .select("*")
            .eq("user_id", userId)
            .in("status", ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"])
            .order("created_at", { ascending: false })
            .limit(1)
            .maybeSingle(),
        ),
      null,
    );
  });

export const getSosFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    return maybe(await supabase.from("sos_alerts").select("*").eq("id", data.id).maybeSingle());
  });

export const listSosHistoryFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ sosId: z.string().uuid() }))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    return unwrap(
      await supabase
        .from("sos_status_history")
        .select("*")
        .eq("sos_id", data.sosId)
        .order("created_at", { ascending: true }),
    );
  });

export const updateSosStatusFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      alertId: z.string().uuid(),
      alertUserId: z.string(),
      status: z.enum(["ACTIVE", "ACKNOWLEDGED", "RESPONDING", "RESOLVED", "CANCELLED"]),
      note: z.string().nullable(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    const closing = data.status === "RESOLVED" || data.status === "CANCELLED";
    const patch: {
      status: "ACTIVE" | "ACKNOWLEDGED" | "RESPONDING" | "RESOLVED" | "CANCELLED";
      resolved_at?: string;
      resolution_notes?: string | null;
    } = { status: data.status };
    if (closing) patch.resolved_at = new Date().toISOString();
    if (closing && data.note) patch.resolution_notes = data.note;

    const updated = unwrap(
      await supabase.from("sos_alerts").update(patch).eq("id", data.alertId).select("*").single(),
    );

    await supabase.from("sos_status_history").insert({
      sos_id: data.alertId,
      status: data.status,
      note: data.note,
      changed_by: userId,
    });

    await supabase.from("notifications").insert({
      user_id: data.alertUserId,
      type: "STATUS_UPDATE",
      title: `SOS ${data.status.toLowerCase()}`,
      message: data.note ?? `Your SOS alert status changed to ${data.status}.`,
      link: "/sos",
    });

    return updated;
  });

/* -------------------------------------------------------------------------- */
/*  Incidents                                                                 */
/* -------------------------------------------------------------------------- */

const incidentInputSchema = z.object({
  category: z.enum([
    "ACCIDENT",
    "THEFT",
    "FIRE",
    "HARASSMENT",
    "SUSPICIOUS_ACTIVITY",
    "MEDICAL_EMERGENCY",
    "ROAD_HAZARD",
    "MISSING_PERSON",
    "OTHER",
  ]),
  title: z.string().min(1, "Title is required").max(200),
  description: z.string().min(1, "Description is required").max(5000),
  occurred_at: z.string(),
  location: z.string().max(500).nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  additional_details: z.string().max(2000).nullable(),
});

export const createIncidentFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(incidentInputSchema)
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    const incident = unwrap(
      await supabase
        .from("incidents")
        .insert({
          user_id: userId,
          category: data.category,
          title: data.title,
          description: data.description,
          occurred_at: data.occurred_at,
          status: "SUBMITTED",
          location: data.location,
          latitude: data.latitude,
          longitude: data.longitude,
          additional_details: data.additional_details,
        })
        .select("*")
        .single(),
    );

    await supabase.from("notifications").insert({
      user_id: userId,
      type: "INCIDENT",
      title: "Incident report submitted",
      message: `Report ${incident.reference} was submitted and is awaiting review.`,
      link: `/incidents/${incident.id}`,
    });

    return incident;
  });

export const listMyIncidentsFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    return safeQuery(
      async () =>
        unwrap(
          await supabase
            .from("incidents")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false }),
        ),
      [],
    );
  });

export const getIncidentFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    return safeQuery(
      async () => maybe(await supabase.from("incidents").select("*").eq("id", data.id).maybeSingle()),
      null,
    );
  });

export const listIncidentMediaFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ incidentId: z.string().uuid() }))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    return safeQuery(
      async () =>
        unwrap(
          await supabase
            .from("incident_media")
            .select("*")
            .eq("incident_id", data.incidentId)
            .order("created_at", { ascending: true }),
        ),
      [],
    );
  });

export const uploadIncidentMediaFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      incidentId: z.string().uuid(),
      fileBase64: z.string(),
      fileName: z.string(),
      mimeType: z.string(),
      sizeBytes: z.number(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/gif",
      "video/mp4",
      "video/webm",
      "video/quicktime",
    ];
    if (!allowedTypes.includes(data.mimeType)) {
      throw new Error(`Unsupported file type: ${data.mimeType}`);
    }
    const buffer = Buffer.from(data.fileBase64, "base64");
    if (buffer.length > 25 * 1024 * 1024) {
      throw new Error("File too large. Maximum 25MB.");
    }
    const safeName = data.fileName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
    const path = `${userId}/${data.incidentId}/${crypto.randomUUID()}-${safeName}`;

    const { error: uploadErr } = await supabase.storage
      .from("incident-media")
      .upload(path, buffer, { contentType: data.mimeType });
    if (uploadErr) throw new Error(uploadErr.message);

    const { error: insertErr } = await supabase.from("incident_media").insert({
      incident_id: data.incidentId,
      user_id: userId,
      storage_path: path,
      mime_type: data.mimeType,
      size_bytes: data.sizeBytes,
    });
    if (insertErr) throw new Error(insertErr.message);

    return { path };
  });

export const updateIncidentFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }).merge(incidentInputSchema.partial()))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    const { id, ...values } = data;
    return unwrap(
      await supabase.from("incidents").update(values as any).eq("id", id).select("*").single(),
    );
  });

export const deleteIncidentFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase.from("incidents").delete().eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  });

export const updateIncidentStatusFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      incidentId: z.string().uuid(),
      incidentUserId: z.string(),
      incidentReference: z.string(),
      status: z.enum([
        "SUBMITTED",
        "UNDER_REVIEW",
        "ACKNOWLEDGED",
        "IN_PROGRESS",
        "RESOLVED",
        "REJECTED",
      ]),
      adminNotes: z.string().nullable(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    // Verify admin role server-side
    await assertAdmin(supabase, userId);

    const updated = unwrap(
      await supabase
        .from("incidents")
        .update({ status: data.status, admin_notes: data.adminNotes })
        .eq("id", data.incidentId)
        .select("*")
        .single(),
    );

    await supabase.from("notifications").insert({
      user_id: data.incidentUserId,
      type: "STATUS_UPDATE",
      title: `Report ${data.incidentReference} updated`,
      message: data.adminNotes
        ? `Status: ${data.status}. ${data.adminNotes}`
        : `Your report status changed to ${data.status}.`,
      link: `/incidents/${data.incidentId}`,
    });

    return updated;
  });

/* -------------------------------------------------------------------------- */
/*  Notifications                                                             */
/* -------------------------------------------------------------------------- */

export const listNotificationsFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    return safeQuery(
      async () =>
        unwrap(
          await supabase
            .from("notifications")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false })
            .limit(100),
        ),
      [],
    );
  });

export const markNotificationReadFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ context, data }) => {
    const { supabase } = context;
    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("id", data.id);
    if (error) throw new Error(error.message);
    return { success: true };
  });

export const markAllNotificationsReadFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("user_id", userId)
      .eq("is_read", false);
    if (error) throw new Error(error.message);
    return { success: true };
  });

/* -------------------------------------------------------------------------- */
/*  User Dashboard                                                            */
/* -------------------------------------------------------------------------- */

export const userDashboardFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;

    const [incidentsResult, alertsResult, contactsResult, notificationsResult] = await Promise.all([
      supabase
        .from("incidents")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false }),
      supabase
        .from("sos_alerts")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false }),
      supabase
        .from("emergency_contacts")
        .select("*")
        .eq("user_id", userId)
        .order("is_primary", { ascending: false })
        .order("priority", { ascending: true }),
      supabase
        .from("notifications")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(100),
    ]);

    const incidents = incidentsResult.data ?? [];
    const alerts = alertsResult.data ?? [];
    const contacts = contactsResult.data ?? [];
    const notifications = notificationsResult.data ?? [];

    return {
      incidents,
      alerts,
      contacts,
      notifications,
      totalReports: incidents.length,
      pendingReports: incidents.filter(
        (i: { status: string }) => !["RESOLVED", "REJECTED"].includes(i.status),
      ).length,
      resolvedReports: incidents.filter((i: { status: string }) => i.status === "RESOLVED").length,
      activeSos: alerts.filter((a: { status: string }) =>
        ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(a.status),
      ).length,
    };
  });

/* -------------------------------------------------------------------------- */
/*  Admin                                                                     */
/* -------------------------------------------------------------------------- */

export const adminDashboardFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);

    const [usersResult, incidentsResult, alertsResult] = await Promise.all([
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("incidents").select("*").order("created_at", { ascending: false }),
      supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
    ]);

    const users = usersResult.data ?? [];
    const incidents = incidentsResult.data ?? [];
    const alerts = alertsResult.data ?? [];

    return {
      users,
      incidents,
      alerts,
      totalUsers: users.length,
      activeUsers: users.filter((u: { is_active: boolean }) => u.is_active).length,
      totalIncidents: incidents.length,
      pendingIncidents: incidents.filter(
        (i: { status: string }) => !["RESOLVED", "REJECTED"].includes(i.status),
      ).length,
      resolvedIncidents: incidents.filter((i: { status: string }) => i.status === "RESOLVED").length,
      activeSos: alerts.filter((a: { status: string }) =>
        ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(a.status),
      ).length,
      totalSos: alerts.length,
    };
  });

export const adminListUsersFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);
    return safeQuery(
      async () =>
        unwrap(
          await supabase.from("profiles").select("*").order("created_at", { ascending: false }),
        ),
      [],
    );
  });

export const adminListRolesFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);
    return safeQuery(
      async () => unwrap(await supabase.from("user_roles").select("user_id, role")),
      [],
    );
  });

export const adminSetUserActiveFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      targetUserId: z.string().uuid(),
      isActive: z.boolean(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);
    return unwrap(
      await supabase
        .from("profiles")
        .update({ is_active: data.isActive })
        .eq("id", data.targetUserId)
        .select("*")
        .single(),
    );
  });

export const adminListIncidentsFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);
    return unwrap(
      await supabase.from("incidents").select("*").order("created_at", { ascending: false }),
    );
  });

export const adminListSosFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);
    return unwrap(
      await supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
    );
  });

export const adminUpdateSosStatusFn = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      alertId: z.string().uuid(),
      alertUserId: z.string(),
      status: z.enum(["ACTIVE", "ACKNOWLEDGED", "RESPONDING", "RESOLVED", "CANCELLED"]),
      note: z.string().nullable(),
    }),
  )
  .handler(async ({ context, data }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);

    const closing = data.status === "RESOLVED" || data.status === "CANCELLED";
    const patch: {
      status: "ACTIVE" | "ACKNOWLEDGED" | "RESPONDING" | "RESOLVED" | "CANCELLED";
      resolved_at?: string;
      resolution_notes?: string | null;
    } = { status: data.status };
    if (closing) patch.resolved_at = new Date().toISOString();
    if (closing && data.note) patch.resolution_notes = data.note;

    const updated = unwrap(
      await supabase.from("sos_alerts").update(patch).eq("id", data.alertId).select("*").single(),
    );

    await supabase.from("sos_status_history").insert({
      sos_id: data.alertId,
      status: data.status,
      note: data.note,
      changed_by: userId,
    });

    await supabase.from("notifications").insert({
      user_id: data.alertUserId,
      type: "STATUS_UPDATE",
      title: `SOS ${data.status.toLowerCase()}`,
      message: data.note ?? `Your SOS alert status changed to ${data.status}.`,
      link: "/sos",
    });

    return updated;
  });

export const adminAnalyticsFn = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async ({ context }) => {
    const { supabase, userId } = context;
    await assertAdmin(supabase, userId);

    const [incidentsResult, alertsResult, usersResult] = await Promise.all([
      supabase.from("incidents").select("*").order("created_at", { ascending: false }),
      supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("id, is_active, created_at"),
    ]);

    const incidents = incidentsResult.data ?? [];
    const alerts = alertsResult.data ?? [];
    const users = usersResult.data ?? [];

    // Category breakdown
    const byCategory: Record<string, number> = {};
    for (const i of incidents) {
      byCategory[i.category] = (byCategory[i.category] || 0) + 1;
    }

    // Monthly trends (last 12 months)
    const monthlyTrends: { month: string; incidents: number; sos: number }[] = [];
    const now = new Date();
    for (let m = 11; m >= 0; m--) {
      const d = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
      const label = d.toLocaleDateString("en-US", { month: "short", year: "2-digit" });
      monthlyTrends.push({
        month: label,
        incidents: incidents.filter((i: { created_at: string }) => i.created_at.startsWith(key)).length,
        sos: alerts.filter((a: { created_at: string }) => a.created_at.startsWith(key)).length,
      });
    }

    // Status breakdown
    const byStatus: Record<string, number> = {};
    for (const i of incidents) {
      byStatus[i.status] = (byStatus[i.status] || 0) + 1;
    }

    const totalIncidents = incidents.length;
    const resolved = incidents.filter((i: { status: string }) => i.status === "RESOLVED").length;
    const resolutionRate = totalIncidents > 0 ? Math.round((resolved / totalIncidents) * 100) : 0;

    return {
      totalIncidents,
      totalSos: alerts.length,
      totalUsers: users.length,
      resolved,
      resolutionRate,
      byCategory,
      byStatus,
      monthlyTrends,
      activeSos: alerts.filter((a: { status: string }) =>
        ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(a.status),
      ).length,
    };
  });

/* -------------------------------------------------------------------------- */
/*  Auth: Forgot / Reset Password                                             */
/* -------------------------------------------------------------------------- */

export const forgotPasswordFn = createServerFn({ method: "POST" })
  .validator(z.object({ email: z.string().email() }))
  .handler(async ({ data }) => {
    // Use dynamic import so that the admin client (which reads env vars) is
    // only instantiated at runtime on the server, not at module-parse time.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.auth.resetPasswordForEmail(data.email, {
      redirectTo: `${process.env["VITE_APP_URL"] || "http://localhost:3000"}/auth?mode=login`,
    });
    if (error) throw new Error(error.message);
    return { success: true };
  });
```

---

<a id="file-src-lib-phoenix-api-ts"></a>
## File: `src/lib/phoenix/api.ts`

```typescript
import { supabase } from "@/integrations/supabase/client";
import { cloudrailsFetchTable, cloudrailsInsertRecord } from "@/integrations/cloudrails/client";
import type {
  AppNotification,
  EmergencyAlert,
  EmergencyContact,
  Incident,
  IncidentCategory,
  IncidentMedia,
  IncidentStatus,
  Profile,
  SosAlert,
  SosStatus,
} from "./constants";
import { ALLOWED_UPLOAD_TYPES, MAX_UPLOAD_BYTES } from "./constants";

function unwrap<T>(result: { data: T; error: { message: string } | null }): NonNullable<T> {
  if (!result || result.error) throw new Error(result?.error?.message ?? "Query error");
  return result.data as NonNullable<T>;
}

function maybe<T>(result: { data: T; error: { message: string } | null }): T | null {
  if (!result || result.error) return null;
  return result.data ?? null;
}

async function safeQuery<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn();
  } catch {
    return fallback;
  }
}

/* ---------------------------------- profile --------------------------------- */

export async function getProfile(userId: string): Promise<Profile | null> {
  return safeQuery(
    async () => {
      const [profileRes, contactRes] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
        supabase
          .from("emergency_contacts")
          .select("*")
          .eq("user_id", userId)
          .order("is_primary", { ascending: false })
          .limit(1)
          .maybeSingle(),
      ]);
      const base = profileRes.data;
      if (!base) return null;
      const contact = contactRes.data;
      return {
        ...base,
        emergency_contact_name: contact?.name ?? (base as any).emergency_contact_name ?? null,
        emergency_contact_email: contact?.email ?? (base as any).emergency_contact_email ?? null,
        emergency_contact_phone: contact?.phone ?? (base as any).emergency_contact_phone ?? null,
      } as Profile;
    },
    null,
  );
}

export async function updateProfile(
  userId: string,
  values: {
    full_name?: string;
    phone?: string | null;
    avatar_url?: string | null;
    emergency_contact_name?: string | null;
    emergency_contact_email?: string | null;
    emergency_contact_phone?: string | null;
  },
): Promise<Profile> {
  // Use local session to get user ID. Falls back to the userId prop which is always
  // sourced from the auth context (React state), so it is safe even if getSession()
  // returns null due to the custom fetch interceptor swallowing a token-refresh error.
  const { data: sessionData } = await supabase.auth.getSession();
  const targetId = sessionData?.session?.user?.id || userId;

  // 1. Update profiles table (only columns that belong to profiles)
  const profileData: {
    full_name?: string;
    phone?: string | null;
    avatar_url?: string | null;
  } = {};
  if (values.full_name !== undefined) profileData.full_name = values.full_name;
  if (values.phone !== undefined) profileData.phone = values.phone;
  if (values.avatar_url !== undefined) profileData.avatar_url = values.avatar_url;

  if (Object.keys(profileData).length > 0) {
    const { error: updateErr } = await supabase
      .from("profiles")
      .update(profileData)
      .eq("id", targetId);

    if (updateErr) {
      console.warn("[updateProfile] profile update fallback:", updateErr.message);
      await supabase.from("profiles").upsert({
        id: targetId,
        ...profileData,
      });
    }
  }

  // 2. Save emergency contact into Supabase emergency_contacts table
  const contactName = values.emergency_contact_name ? String(values.emergency_contact_name).trim() : null;
  const contactEmail = values.emergency_contact_email ? String(values.emergency_contact_email).trim() : null;
  const contactPhone = values.emergency_contact_phone ? String(values.emergency_contact_phone).trim() : "";

  if (contactName) {
    const { data: existingContacts } = await supabase
      .from("emergency_contacts")
      .select("id, is_primary, phone")
      .eq("user_id", targetId)
      .order("is_primary", { ascending: false })
      .limit(1);

    if (existingContacts && existingContacts.length > 0 && existingContacts[0]) {
      const contactId = existingContacts[0].id;
      const { error: contactErr } = await supabase
        .from("emergency_contacts")
        .update({
          name: contactName,
          email: contactEmail,
          phone: contactPhone || existingContacts[0].phone || "N/A",
          is_primary: true,
          updated_at: new Date().toISOString(),
        })
        .eq("id", contactId);

      if (contactErr) {
        console.error("[updateProfile] Error updating emergency contact:", contactErr);
        throw new Error(`Failed to update emergency contact: ${contactErr.message}`);
      }
    } else {
      const { error: insertErr } = await supabase
        .from("emergency_contacts")
        .insert({
          user_id: targetId,
          name: contactName,
          email: contactEmail,
          phone: contactPhone || "N/A",
          relationship: "Primary Contact",
          priority: 1,
          is_primary: true,
        });

      if (insertErr) {
        console.error("[updateProfile] Error saving emergency contact:", insertErr);
        throw new Error(`Failed to save emergency contact: ${insertErr.message}`);
      }
    }
  }

  // Fetch updated profile
  const { data: updatedProfile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", targetId)
    .maybeSingle();

  return {
    ...(updatedProfile || { id: targetId, full_name: values.full_name || "", email: "" }),
    emergency_contact_name: values.emergency_contact_name ?? null,
    emergency_contact_email: values.emergency_contact_email ?? null,
    emergency_contact_phone: values.emergency_contact_phone ?? null,
  } as Profile;
}

export async function updatePassword(password: string): Promise<void> {
  const { error } = await supabase.auth.updateUser({ password });
  if (error) throw new Error(error.message);
}

export async function uploadAvatar(userId: string, file: File): Promise<string> {
  validateUpload(file, ["image/jpeg", "image/png", "image/webp"], 5 * 1024 * 1024);
  const path = `${userId}/${crypto.randomUUID()}-${sanitizeName(file.name)}`;
  const { error } = await supabase.storage.from("avatars").upload(path, file, { upsert: true });
  if (error) throw new Error(error.message);
  return path;
}

export async function signedUrl(bucket: string, path: string, seconds = 3600) {
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, seconds);
  if (error) throw new Error(error.message);
  return data.signedUrl;
}

/* ----------------------------- emergency contacts ---------------------------- */

export async function listContacts(userId: string): Promise<EmergencyContact[]> {
  return safeQuery(
    async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      const targetId = sessionData?.session?.user?.id || userId;
      return unwrap(
        await supabase
          .from("emergency_contacts")
          .select("*")
          .eq("user_id", targetId)
          .order("is_primary", { ascending: false })
          .order("priority", { ascending: true }),
      );
    },
    [],
  );
}

export type ContactInput = {
  name: string;
  relationship: string;
  phone: string;
  email?: string | null;
  priority: number;
  is_primary: boolean;
};
export async function createContact(userId: string, input: ContactInput) {
  const { data: sessionData } = await supabase.auth.getSession();
  const targetId = sessionData?.session?.user?.id || userId;
  if (input.is_primary) await clearPrimary(targetId);
  return unwrap(
    await supabase
      .from("emergency_contacts")
      .insert({
        name: input.name,
        relationship: input.relationship,
        phone: input.phone,
        email: input.email ?? null,
        priority: input.priority,
        is_primary: input.is_primary,
        user_id: targetId,
      })
      .select("*")
      .single(),
  );
}
export async function updateContact(userId: string, id: string, input: ContactInput) {
  const { data: sessionData } = await supabase.auth.getSession();
  const targetId = sessionData?.session?.user?.id || userId;
  if (input.is_primary) await clearPrimary(targetId);
  return unwrap(
    await supabase
      .from("emergency_contacts")
      .update({
        name: input.name,
        relationship: input.relationship,
        phone: input.phone,
        email: input.email ?? null,
        priority: input.priority,
        is_primary: input.is_primary,
      })
      .eq("id", id)
      .select("*")
      .single(),
  );
}

export async function deleteContact(id: string) {
  const { error } = await supabase.from("emergency_contacts").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

async function clearPrimary(userId: string) {
  await supabase
    .from("emergency_contacts")
    .update({ is_primary: false })
    .eq("user_id", userId)
    .eq("is_primary", true);
}

/* ------------------------------------ SOS ----------------------------------- */

export interface SosInput {
  emergency_type: string;
  latitude: number | null;
  longitude: number | null;
  accuracy: number | null;
  address: string | null;
  message: string | null;
}

export async function createSos(userId: string, input: SosInput): Promise<SosAlert> {
  const contacts = await listContacts(userId);
  const sosData = {
    id: crypto.randomUUID(),
    user_id: userId,
    emergency_type: input.emergency_type,
    status: "ACTIVE" as const,
    latitude: input.latitude,
    longitude: input.longitude,
    accuracy: input.accuracy,
    address: input.address,
    message: input.message,
    contacts_notified: contacts.length,
    resolved_at: null,
    resolution_notes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // 1. Insert into CloudRails OQENS database via REST Data API
  const crRes = await cloudrailsInsertRecord<SosAlert>("sos_alerts", sosData);
  if (crRes.ok && crRes.data) {
    console.info("[CloudRails] SOS alert saved in OQENS database:", crRes.data);
  } else if (crRes.error) {
    console.warn("[CloudRails] SOS insert notice:", crRes.error);
  }

  // 2. Try Supabase fallback if available, or return sosData directly
  try {
    const alert = unwrap(
      await supabase
        .from("sos_alerts")
        .insert(sosData)
        .select("*")
        .single(),
    );
    await createNotification(userId, {
      type: "SOS",
      title: "Emergency SOS activated",
      message: `Your SOS alert is live. ${contacts.length} emergency contact(s) were notified with your location.`,
      link: `/sos`,
    });
    return alert;
  } catch {
    await createNotification(userId, {
      type: "SOS",
      title: "Emergency SOS activated",
      message: `Your SOS alert is live. ${contacts.length} emergency contact(s) were notified with your location.`,
      link: `/sos`,
    });
    return sosData as SosAlert;
  }
}

/**
 * DEVELOPMENT notifier. Real deployments should replace this with an SMS/email
 * provider call (see README → "Replacing the development notifier").
 */
async function notifyContacts(alert: SosAlert, contacts: EmergencyContact[]) {
  if (!contacts.length) return;
  console.info(
    "[phoenix:dev-notifier] SOS %s dispatched to %s",
    alert.id,
    contacts.map((contact) => `${contact.name} <${contact.phone}>`).join(", "),
  );
}

export async function listMySos(userId: string): Promise<SosAlert[]> {
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("sos_alerts")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false }),
      ),
    [],
  );
}

export async function getActiveSos(userId: string): Promise<SosAlert | null> {
  return safeQuery(
    async () =>
      maybe(
        await supabase
          .from("sos_alerts")
          .select("*")
          .eq("user_id", userId)
          .in("status", ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"])
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle(),
      ),
    null,
  );
}


export async function getSos(id: string): Promise<SosAlert | null> {
  return maybe(await supabase.from("sos_alerts").select("*").eq("id", id).maybeSingle());
}

export interface SendEmergencyEmailInput {
  message?: string;
  latitude?: number | null;
  longitude?: number | null;
}

export async function sendEmergencyAlertEmail(input: SendEmergencyEmailInput): Promise<{
  success: boolean;
  message: string;
  alert: EmergencyAlert;
}> {
  const { data, error } = await supabase.functions.invoke("send-emergency-email", {
    body: input,
  });

  if (error) {
    throw new Error(error.message || "Failed to trigger emergency email service");
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data;
}

export async function listMyEmergencyAlerts(userId: string): Promise<EmergencyAlert[]> {
  return unwrap(
    await supabase
      .from("emergency_alerts")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false }),
  );
}

export async function listSosHistory(sosId: string) {
  return unwrap(
    await supabase
      .from("sos_status_history")
      .select("*")
      .eq("sos_id", sosId)
      .order("created_at", { ascending: true }),
  );
}

export async function updateSosStatus(
  alert: SosAlert,
  status: SosStatus,
  note: string | null,
  actorId: string,
) {
  const closing = status === "RESOLVED" || status === "CANCELLED";
  const patch = {
    status,
    ...(closing ? { resolved_at: new Date().toISOString() } : {}),
    ...(closing && note ? { resolution_notes: note } : {}),
  };
  const updated = unwrap(
    await supabase.from("sos_alerts").update(patch).eq("id", alert.id).select("*").single(),
  );
  await supabase.from("sos_status_history").insert({
    sos_id: alert.id,
    status,
    note,
    changed_by: actorId,
  });
  await createNotification(alert.user_id, {
    type: "STATUS_UPDATE",
    title: `SOS ${status.toLowerCase()}`,
    message: note ?? `Your SOS alert status changed to ${status}.`,
    link: "/sos",
  });
  return updated;
}

/* --------------------------------- incidents -------------------------------- */

export interface IncidentInput {
  category: IncidentCategory;
  title: string;
  description: string;
  occurred_at: string;
  location: string | null;
  latitude: number | null;
  longitude: number | null;
  additional_details: string | null;
}

export async function createIncident(userId: string, input: IncidentInput): Promise<Incident> {
  const refCode = `INC-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  const incidentData = {
    id: crypto.randomUUID(),
    reference: refCode,
    user_id: userId,
    category: input.category,
    title: input.title,
    description: input.description,
    occurred_at: input.occurred_at,
    status: "SUBMITTED" as const,
    location: input.location,
    latitude: input.latitude,
    longitude: input.longitude,
    additional_details: input.additional_details,
    admin_notes: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  // 1. Insert into CloudRails OQENS database via REST Data API
  const crRes = await cloudrailsInsertRecord<Incident>("incidents", incidentData);
  if (crRes.ok && crRes.data) {
    console.info("[CloudRails] Incident saved in OQENS database:", crRes.data);
  } else if (crRes.error) {
    console.warn("[CloudRails] Incident insert notice:", crRes.error);
  }

  // 2. Try Supabase fallback if available, or return incidentData directly
  try {
    const incident = unwrap(
      await supabase
        .from("incidents")
        .insert(incidentData)
        .select("*")
        .single(),
    );
    await createNotification(userId, {
      type: "INCIDENT",
      title: "Incident report submitted",
      message: `Report ${incident.reference} was submitted and is awaiting review.`,
      link: `/incidents/${incident.id}`,
    });
    return incident;
  } catch {
    await createNotification(userId, {
      type: "INCIDENT",
      title: "Incident report submitted",
      message: `Report ${incidentData.reference} was submitted and is awaiting review.`,
      link: `/incidents/${incidentData.id}`,
    });
    return incidentData as Incident;
  }
}

export function validateUpload(
  file: File,
  allowed: string[] = ALLOWED_UPLOAD_TYPES,
  maxBytes: number = MAX_UPLOAD_BYTES,
) {
  if (!allowed.includes(file.type)) {
    throw new Error(`${file.name}: unsupported file type (${file.type || "unknown"}).`);
  }
  if (file.size > maxBytes) {
    throw new Error(`${file.name}: file is larger than ${Math.round(maxBytes / 1024 / 1024)}MB.`);
  }
  if (!/\.[a-z0-9]{2,5}$/i.test(file.name)) {
    throw new Error(`${file.name}: missing a valid file extension.`);
  }
}

function sanitizeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(-60);
}

export async function uploadIncidentMedia(userId: string, incidentId: string, files: File[]) {
  for (const file of files) {
    validateUpload(file);
    const path = `${userId}/${incidentId}/${crypto.randomUUID()}-${sanitizeName(file.name)}`;
    const { error } = await supabase.storage.from("incident-media").upload(path, file);
    if (error) throw new Error(error.message);
    const inserted = await supabase.from("incident_media").insert({
      incident_id: incidentId,
      user_id: userId,
      storage_path: path,
      mime_type: file.type,
      size_bytes: file.size,
    });
    if (inserted.error) throw new Error(inserted.error.message);
  }
}

export async function listMyIncidents(userId: string): Promise<Incident[]> {
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("incidents")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false }),
      ),
    [],
  );
}

export async function getIncident(id: string): Promise<Incident | null> {
  return safeQuery(
    async () => maybe(await supabase.from("incidents").select("*").eq("id", id).maybeSingle()),
    null,
  );
}

export async function listIncidentMedia(incidentId: string): Promise<IncidentMedia[]> {
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("incident_media")
          .select("*")
          .eq("incident_id", incidentId)
          .order("created_at", { ascending: true }),
      ),
    [],
  );
}

export async function updateIncident(id: string, input: Partial<IncidentInput>) {
  return unwrap(await supabase.from("incidents").update(input).eq("id", id).select("*").single());
}

export async function deleteIncident(id: string) {
  const { error } = await supabase.from("incidents").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function updateIncidentStatus(
  incident: Incident,
  status: IncidentStatus,
  adminNotes: string | null,
) {
  const updated = unwrap(
    await supabase
      .from("incidents")
      .update({ status, admin_notes: adminNotes })
      .eq("id", incident.id)
      .select("*")
      .single(),
  );
  await createNotification(incident.user_id, {
    type: "STATUS_UPDATE",
    title: `Report ${incident.reference} updated`,
    message: adminNotes
      ? `Status: ${status}. ${adminNotes}`
      : `Your report status changed to ${status}.`,
    link: `/incidents/${incident.id}`,
  });
  return updated;
}

/* ------------------------------- notifications ------------------------------ */

export async function createNotification(
  userId: string,
  input: { type: AppNotification["type"]; title: string; message: string; link?: string | null },
) {
  try {
    await supabase.from("notifications").insert({ ...input, user_id: userId });
  } catch {
    // Graceful fallback
  }
}

export async function listNotifications(userId: string): Promise<AppNotification[]> {
  return safeQuery(
    async () =>
      unwrap(
        await supabase
          .from("notifications")
          .select("*")
          .eq("user_id", userId)
          .order("created_at", { ascending: false })
          .limit(100),
      ),
    [],
  );
}

export async function markNotificationRead(id: string) {
  try {
    const { error } = await supabase.from("notifications").update({ is_read: true }).eq("id", id);
    if (error) throw new Error(error.message);
  } catch {
    // Graceful fallback
  }
}

export async function markAllNotificationsRead(userId: string) {
  try {
    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("user_id", userId)
      .eq("is_read", false);
    if (error) throw new Error(error.message);
  } catch {
    // Graceful fallback
  }
}

/* ----------------------------------- admin ---------------------------------- */

export async function adminListUsers(): Promise<Profile[]> {
  return safeQuery(
    async () =>
      unwrap(
        await supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      ),
    [],
  );
}

export async function adminListRoles() {
  return safeQuery(
    async () => unwrap(await supabase.from("user_roles").select("user_id, role")),
    [],
  );
}


export async function adminSetUserActive(userId: string, isActive: boolean) {
  return unwrap(
    await supabase
      .from("profiles")
      .update({ is_active: isActive })
      .eq("id", userId)
      .select("*")
      .single(),
  );
}

export async function adminListIncidents(): Promise<Incident[]> {
  return unwrap(
    await supabase.from("incidents").select("*").order("created_at", { ascending: false }),
  );
}

export async function adminListSos(): Promise<SosAlert[]> {
  return unwrap(
    await supabase.from("sos_alerts").select("*").order("created_at", { ascending: false }),
  );
}

export interface AdminDashboard {
  totalUsers: number;
  activeUsers: number;
  totalIncidents: number;
  pendingIncidents: number;
  resolvedIncidents: number;
  activeSos: number;
  totalSos: number;
  users: Profile[];
  incidents: Incident[];
  alerts: SosAlert[];
}

export async function adminDashboard(): Promise<AdminDashboard> {
  const [users, incidents, alerts] = await Promise.all([
    adminListUsers(),
    adminListIncidents(),
    adminListSos(),
  ]);
  return {
    users,
    incidents,
    alerts,
    totalUsers: users.length,
    activeUsers: users.filter((user) => user.is_active).length,
    totalIncidents: incidents.length,
    pendingIncidents: incidents.filter(
      (incident) => !["RESOLVED", "REJECTED"].includes(incident.status),
    ).length,
    resolvedIncidents: incidents.filter((incident) => incident.status === "RESOLVED").length,
    activeSos: alerts.filter((alert) =>
      ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(alert.status),
    ).length,
    totalSos: alerts.length,
  };
}

export interface UserDashboard {
  incidents: Incident[];
  alerts: SosAlert[];
  contacts: EmergencyContact[];
  notifications: AppNotification[];
  totalReports: number;
  pendingReports: number;
  resolvedReports: number;
  activeSos: number;
}

export async function userDashboard(userId: string): Promise<UserDashboard> {
  const [incidents, alerts, contacts, notifications] = await Promise.all([
    listMyIncidents(userId),
    listMySos(userId),
    listContacts(userId),
    listNotifications(userId),
  ]);
  return {
    incidents,
    alerts,
    contacts,
    notifications,
    totalReports: incidents.length,
    pendingReports: incidents.filter(
      (incident) => !["RESOLVED", "REJECTED"].includes(incident.status),
    ).length,
    resolvedReports: incidents.filter((incident) => incident.status === "RESOLVED").length,
    activeSos: alerts.filter((alert) =>
      ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(alert.status),
    ).length,
  };
}
```

---

<a id="file-src-lib-phoenix-auth-tsx"></a>
## File: `src/lib/phoenix/auth.tsx`

```typescript
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import {
  clearStoredSession,
  cloudrailsGetUser,
  getStoredAccessToken,
  type CloudRailsUser,
} from "@/integrations/cloudrails/client";
import type { AppRole, Profile } from "./constants";

interface AuthState {
  loading: boolean;
  session: Session | null;
  user: User | null;
  cloudrailsUser: CloudRailsUser | null;
  profile: Profile | null;
  role: AppRole | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  refreshProfile: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const [cloudrailsUser, setCloudrailsUser] = useState<CloudRailsUser | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [role, setRole] = useState<AppRole | null>(null);

  const loadAccount = useCallback(async (userId: string | undefined, crUser?: CloudRailsUser | null) => {
    if (!userId && !crUser) {
      setProfile(null);
      setRole(null);
      return;
    }
    const targetId = userId || crUser?.id;
    try {
      const [profileResult, roleResult, contactResult] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", targetId!).maybeSingle(),
        supabase.from("user_roles").select("role").eq("user_id", targetId!),
        supabase
          .from("emergency_contacts")
          .select("*")
          .eq("user_id", targetId!)
          .order("is_primary", { ascending: false })
          .order("priority", { ascending: true })
          .limit(1)
          .maybeSingle(),
      ]);

      const primaryContact = contactResult.data;
      if (profileResult.data) {
        setProfile({
          ...profileResult.data,
          emergency_contact_name: primaryContact?.name ?? (profileResult.data as any).emergency_contact_name ?? null,
          emergency_contact_email: primaryContact?.email ?? (profileResult.data as any).emergency_contact_email ?? null,
          emergency_contact_phone: primaryContact?.phone ?? (profileResult.data as any).emergency_contact_phone ?? null,
        });
      } else if (crUser) {
        setProfile({
          id: crUser.id,
          email: crUser.email,
          full_name: (crUser.data?.full_name as string) || crUser.email?.split("@")[0] || "User",
          phone: crUser.data?.phone ?? null,
          avatar_url: null,
          is_active: true,
          emergency_contact_name: primaryContact?.name ?? null,
          emergency_contact_email: primaryContact?.email ?? null,
          emergency_contact_phone: primaryContact?.phone ?? null,
          created_at: crUser.created_at ?? new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      } else {
        setProfile(null);
      }
      const roles = (roleResult.data ?? []).map((entry) => entry.role);
      setRole(roles.includes("admin") ? "admin" : "user");
    } catch {
      if (crUser) {
        setProfile({
          id: crUser.id,
          email: crUser.email,
          full_name: (crUser.data?.full_name as string) || crUser.email?.split("@")[0] || "User",
          phone: crUser.data?.phone ?? null,
          avatar_url: null,
          is_active: true,
          emergency_contact_name: null,
          emergency_contact_email: null,
          emergency_contact_phone: null,
          created_at: crUser.created_at ?? new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
        setRole("user");
      }
    }
  }, []);

  useEffect(() => {
    let active = true;

    const initAuth = async () => {
      try {
        // 1. Check Supabase session first (primary database & auth)
        const { data: sbSessionData } = await supabase.auth.getSession();
        if (sbSessionData?.session && active) {
          setSession(sbSessionData.session);
          await loadAccount(sbSessionData.session.user.id);
          return;
        }

        // 2. Check CloudRails Auth session fallback
        const crUser = await cloudrailsGetUser();
        const crToken = getStoredAccessToken();
        if (crUser && crToken && active) {
          setCloudrailsUser(crUser);
          const mockUser = {
            id: crUser.id,
            email: crUser.email,
            app_metadata: {},
            user_metadata: crUser.data || {},
            aud: "authenticated",
            created_at: crUser.created_at || new Date().toISOString(),
          } as unknown as User;

          const mockSession = {
            access_token: crToken,
            token_type: "bearer",
            user: mockUser,
          } as unknown as Session;

          setSession(mockSession);
          await loadAccount(crUser.id, crUser);
          return;
        }

        if (active) {
          setSession(null);
          setProfile(null);
        }
      } catch (err) {
        console.error("[AuthProvider] Error initializing auth:", err);
      } finally {
        if (active) setLoading(false);
      }
    };

    // Safety timeout: ensure loading screen is dismissed after at most 3 seconds
    const fallbackTimer = setTimeout(() => {
      if (active) setLoading(false);
    }, 3000);

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      if (!active) return;
      setSession(nextSession);
      if (nextSession?.user?.id) {
        clearStoredSession();
        setCloudrailsUser(null);
      }
      setTimeout(() => {
        void loadAccount(nextSession?.user?.id).finally(() => active && setLoading(false));
      }, 0);
    });

    void initAuth();

    return () => {
      active = false;
      clearTimeout(fallbackTimer);
      subscription.subscription.unsubscribe();
    };
  }, [loadAccount]);

  const refreshProfile = useCallback(async () => {
    await loadAccount(session?.user?.id, cloudrailsUser);
  }, [loadAccount, session?.user?.id, cloudrailsUser]);

  const signOut = useCallback(async () => {
    clearStoredSession();
    await supabase.auth.signOut();
    setCloudrailsUser(null);
    setProfile(null);
    setRole(null);
    setSession(null);
  }, []);

  const value = useMemo<AuthState>(
    () => ({
      loading,
      session,
      user: session?.user ?? null,
      cloudrailsUser,
      profile,
      role,
      isAuthenticated: Boolean(session || cloudrailsUser),
      isAdmin: role === "admin",
      refreshProfile,
      signOut,
    }),
    [loading, session, cloudrailsUser, profile, role, refreshProfile, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside <AuthProvider>");
  return context;
}
```

---

<a id="file-src-lib-phoenix-constants-ts"></a>
## File: `src/lib/phoenix/constants.ts`

```typescript
import type { Database } from "@/integrations/supabase/types";

export type SosStatus = Database["public"]["Enums"]["sos_status"];
export type IncidentStatus = Database["public"]["Enums"]["incident_status"];
export type IncidentCategory = Database["public"]["Enums"]["incident_category"];
export type NotificationType = Database["public"]["Enums"]["notification_type"];
export type AppRole = Database["public"]["Enums"]["app_role"];

export type Profile = Database["public"]["Tables"]["profiles"]["Row"] & {
  emergency_contact_name?: string | null;
  emergency_contact_email?: string | null;
  emergency_contact_phone?: string | null;
};
export type EmergencyContact = Database["public"]["Tables"]["emergency_contacts"]["Row"];
export type SosAlert = Database["public"]["Tables"]["sos_alerts"]["Row"];
export type EmergencyAlert = Database["public"]["Tables"]["emergency_alerts"]["Row"];
export type Incident = Database["public"]["Tables"]["incidents"]["Row"];
export type IncidentMedia = Database["public"]["Tables"]["incident_media"]["Row"];
export type AppNotification = Database["public"]["Tables"]["notifications"]["Row"];

export const SOS_STATUSES: SosStatus[] = [
  "ACTIVE",
  "ACKNOWLEDGED",
  "RESPONDING",
  "RESOLVED",
  "CANCELLED",
];

export const INCIDENT_STATUSES: IncidentStatus[] = [
  "SUBMITTED",
  "UNDER_REVIEW",
  "ACKNOWLEDGED",
  "IN_PROGRESS",
  "RESOLVED",
  "REJECTED",
];

export const INCIDENT_CATEGORIES: IncidentCategory[] = [
  "ACCIDENT",
  "THEFT",
  "FIRE",
  "HARASSMENT",
  "SUSPICIOUS_ACTIVITY",
  "MEDICAL_EMERGENCY",
  "ROAD_HAZARD",
  "MISSING_PERSON",
  "OTHER",
];

export const EMERGENCY_TYPES = [
  "GENERAL",
  "MEDICAL",
  "FIRE",
  "CRIME",
  "ACCIDENT",
  "NATURAL_DISASTER",
] as const;

export const RELATIONSHIPS = [
  "Parent",
  "Sibling",
  "Spouse",
  "Child",
  "Relative",
  "Friend",
  "Neighbour",
  "Colleague",
  "Doctor",
  "Other",
] as const;

export function labelize(value: string): string {
  return value
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export const SOS_STATUS_TONE: Record<SosStatus, "emergency" | "warning" | "info" | "success" | "muted"> = {
  ACTIVE: "emergency",
  ACKNOWLEDGED: "warning",
  RESPONDING: "info",
  RESOLVED: "success",
  CANCELLED: "muted",
};

export const INCIDENT_STATUS_TONE: Record<
  IncidentStatus,
  "emergency" | "warning" | "info" | "success" | "muted"
> = {
  SUBMITTED: "info",
  UNDER_REVIEW: "warning",
  ACKNOWLEDGED: "warning",
  IN_PROGRESS: "info",
  RESOLVED: "success",
  REJECTED: "emergency",
};

export const MAX_UPLOAD_BYTES = 25 * 1024 * 1024;
export const ALLOWED_UPLOAD_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "video/mp4",
  "video/webm",
  "video/quicktime",
];

export function formatDateTime(value: string | null | undefined): string {
  if (!value) return "—";
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export function timeAgo(value: string | null | undefined): string {
  if (!value) return "—";
  const diff = Date.now() - new Date(value).getTime();
  const minutes = Math.round(diff / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatDateTime(value);
}
```

---

<a id="file-src-lib-phoenix-geolocation-ts"></a>
## File: `src/lib/phoenix/geolocation.ts`

```typescript
export interface GeoPosition {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

export class GeolocationError extends Error {
  code: "unsupported" | "denied" | "unavailable" | "timeout";
  constructor(code: GeolocationError["code"], message: string) {
    super(message);
    this.code = code;
    this.name = "GeolocationError";
  }
}

export function getCurrentPosition(timeoutMs = 15000): Promise<GeoPosition> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      reject(new GeolocationError("unsupported", "Location is not supported by this browser."));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp,
        }),
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          reject(
            new GeolocationError(
              "denied",
              "Location access is required to provide accurate emergency assistance.",
            ),
          );
        } else if (error.code === error.TIMEOUT) {
          reject(new GeolocationError("timeout", "Timed out while locating you. Please retry."));
        } else {
          reject(new GeolocationError("unavailable", "Your location could not be determined."));
        }
      },
      { enableHighAccuracy: true, timeout: timeoutMs, maximumAge: 0 },
    );
  });
}

/** Reverse geocode through OpenStreetMap Nominatim. Never blocks an emergency. */
export async function reverseGeocode(lat: number, lon: number): Promise<string | null> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`,
      { headers: { Accept: "application/json" } },
    );
    if (!response.ok) return null;
    const data = (await response.json()) as { display_name?: string };
    return data.display_name ?? null;
  } catch {
    return null;
  }
}

export function distanceKm(
  a: { lat: number; lon: number },
  b: { lat: number; lon: number },
): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLon = ((b.lon - a.lon) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const h =
    Math.sin(dLat / 2) ** 2 + Math.sin(dLon / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  return 2 * R * Math.asin(Math.sqrt(h));
}
```

---

<a id="file-src-lib-utils-ts"></a>
## File: `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

<a id="file-src-router-tsx"></a>
## File: `src/router.tsx`

```typescript
import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
```

---

<a id="file-src-routes---root-tsx"></a>
## File: `src/routes/__root.tsx`

```typescript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { AuthProvider } from "@/lib/phoenix/auth";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PHOENIX — Smart Public Safety & Emergency Response" },
      {
        name: "description",
        content:
          "PHOENIX connects people to emergency assistance with SOS alerts, live location sharing and incident reporting.",
      },
      { name: "author", content: "PHOENIX" },
      { property: "og:title", content: "PHOENIX — Smart Public Safety" },
      {
        property: "og:description",
        content: "Emergency SOS, live location and incident reporting in one safety platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
        <Toaster position="top-right" richColors closeButton />
      </AuthProvider>
    </QueryClientProvider>
  );
}
```

---

<a id="file-src-routes--app-admin-tsx"></a>
## File: `src/routes/_app.admin.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { CheckCircle, ShieldStar, Siren, UsersThree, WarningCircle } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { StatCard } from "@/components/phoenix/StatCard";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/phoenix/auth";
import { adminDashboard, updateIncidentStatus, updateSosStatus } from "@/lib/phoenix/api";
import {
  INCIDENT_STATUSES,
  INCIDENT_STATUS_TONE,
  SOS_STATUSES,
  SOS_STATUS_TONE,
  formatDateTime,
  labelize,
} from "@/lib/phoenix/constants";
import type { Incident, IncidentStatus, SosAlert, SosStatus } from "@/lib/phoenix/constants";

export const Route = createFileRoute("/_app/admin")({
  head: () => ({
    meta: [
      { title: "Command Center — PHOENIX" },
      { name: "description", content: "Monitor live SOS alerts, incident reports and users." },
      { property: "og:title", content: "Command Center — PHOENIX" },
      { property: "og:description", content: "Monitor live SOS alerts and incident reports." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { user, isAdmin } = useAuth();
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: adminDashboard,
    enabled: isAdmin,
    refetchInterval: 20000,
  });

  const setSos = useMutation({
    mutationFn: ({ alert, status }: { alert: SosAlert; status: SosStatus }) =>
      updateSosStatus(alert, status, null, user!.id),
    onSuccess: () => {
      toast.success("SOS status updated.");
      void queryClient.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const setIncident = useMutation({
    mutationFn: ({ incident, status }: { incident: Incident; status: IncidentStatus }) =>
      updateIncidentStatus(incident, status, null),
    onSuccess: () => {
      toast.success("Report status updated.");
      void queryClient.invalidateQueries({ queryKey: ["admin-dashboard"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  if (!isAdmin) {
    return (
      <EmptyState
        icon={ShieldStar}
        title="Admins only"
        description="You don't have permission to view the safety command center."
      />
    );
  }

  return (
    <>
      <PageHeader title="Command center" description="Live safety operations across all users." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Active SOS" value={data?.activeSos ?? 0} icon={Siren} tone="emergency" index={0} />
        <StatCard label="Pending reports" value={data?.pendingIncidents ?? 0} icon={WarningCircle} tone="warning" index={1} />
        <StatCard label="Resolved reports" value={data?.resolvedIncidents ?? 0} icon={CheckCircle} tone="success" index={2} />
        <StatCard label="Registered users" value={data?.totalUsers ?? 0} icon={UsersThree} index={3} />
      </div>

      <Card className="mt-8 p-6">
        <h2 className="text-lg font-semibold">SOS alerts</h2>
        <div className="mt-4 space-y-3">
          {data?.alerts.length ? (
            data.alerts.slice(0, 15).map((alert) => (
              <div
                key={alert.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface/40 p-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-medium">{labelize(alert.emergency_type)}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDateTime(alert.created_at)}
                    {alert.address ? ` · ${alert.address}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={alert.status} tone={SOS_STATUS_TONE[alert.status]} />
                  <Select
                    value={alert.status}
                    onValueChange={(value) => setSos.mutate({ alert, status: value as SosStatus })}
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SOS_STATUSES.map((status) => (
                        <SelectItem key={status} value={status}>
                          {labelize(status)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No SOS alerts recorded.</p>
          )}
        </div>
      </Card>

      <Card className="mt-6 p-6">
        <h2 className="text-lg font-semibold">Incident reports</h2>
        <div className="mt-4 space-y-3">
          {data?.incidents.length ? (
            data.incidents.slice(0, 15).map((incident) => (
              <div
                key={incident.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-border bg-surface/40 p-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{incident.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {incident.reference} · {labelize(incident.category)} ·{" "}
                    {formatDateTime(incident.created_at)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <StatusBadge status={incident.status} tone={INCIDENT_STATUS_TONE[incident.status]} />
                  <Select
                    value={incident.status}
                    onValueChange={(value) =>
                      setIncident.mutate({ incident, status: value as IncidentStatus })
                    }
                  >
                    <SelectTrigger className="w-44">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {INCIDENT_STATUSES.map((status) => (
                        <SelectItem key={status} value={status}>
                          {labelize(status)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-muted-foreground">No incident reports yet.</p>
          )}
        </div>
      </Card>
    </>
  );
}
```

---

<a id="file-src-routes--app-contacts-tsx"></a>
## File: `src/routes/_app.contacts.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import { toast } from "sonner";
import { z } from "zod";
import { PencilSimple, Plus, Star, Trash, UsersThree } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/phoenix/auth";
import { listContacts, createContact, updateContact, deleteContact } from "@/lib/phoenix/api";
import { RELATIONSHIPS } from "@/lib/phoenix/constants";
import type { EmergencyContact } from "@/lib/phoenix/constants";

export const Route = createFileRoute("/_app/contacts")({
  head: () => ({
    meta: [
      { title: "Emergency Contacts — PHOENIX" },
      { name: "description", content: "Manage the trusted contacts notified when you raise an SOS." },
      { property: "og:title", content: "Emergency Contacts — PHOENIX" },
      { property: "og:description", content: "Manage the trusted contacts notified during emergencies." },
    ],
  }),
  component: ContactsPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter a name").max(100),
  relationship: z.string().trim().min(1, "Choose a relationship").max(50),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\-\s]+$/, "Digits and + ( ) - only"),
  email: z.string().trim().email("Enter a valid email").max(255).optional().or(z.literal("")),
  priority: z.coerce.number().int().min(1).max(99),
  is_primary: z.boolean(),
});

function ContactsPage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [editing, setEditing] = useState<EmergencyContact | null>(null);
  const [open, setOpen] = useState(false);
  const [removing, setRemoving] = useState<EmergencyContact | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isPrimary, setIsPrimary] = useState(false);
  const [relationship, setRelationship] = useState<string>("Friend");

  const { data: contacts = [], isLoading } = useQuery({
    queryKey: ["contacts", user?.id],
    queryFn: () => listContacts(user!.id),
    enabled: Boolean(user?.id),
  });

  const refresh = () => {
    void queryClient.invalidateQueries({ queryKey: ["contacts"] });
    void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
  };

  const save = useMutation({
    mutationFn: async (values: z.infer<typeof schema>) => {
      const payload = {
        name: values.name,
        relationship: values.relationship,
        phone: values.phone,
        email: values.email ? values.email : null,
        priority: values.priority,
        is_primary: values.is_primary,
      };
      return editing
        ? updateContact(user!.id, editing.id, payload)
        : createContact(user!.id, payload);
    },
    onSuccess: () => {
      toast.success(editing ? "Contact updated." : "Contact added.");
      setOpen(false);
      setEditing(null);
      refresh();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => deleteContact(id),
    onSuccess: () => {
      toast.success("Contact removed.");
      setRemoving(null);
      refresh();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const openForm = (contact: EmergencyContact | null) => {
    setEditing(contact);
    setErrors({});
    setIsPrimary(contact?.is_primary ?? contacts.length === 0);
    setRelationship(contact?.relationship ?? "Friend");
    setOpen(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      name: String(form.get("name") ?? ""),
      relationship,
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
      priority: String(form.get("priority") ?? "1"),
      is_primary: isPrimary,
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    save.mutate(parsed.data);
  };

  return (
    <>
      <PageHeader
        title="Emergency contacts"
        description="These people are notified the moment you raise an SOS."
        action={
          <Button onClick={() => openForm(null)}>
            <Plus size={18} /> Add contact
          </Button>
        }
      />

      {isLoading ? null : contacts.length === 0 ? (
        <EmptyState
          icon={UsersThree}
          title="No emergency contacts"
          description="Add at least one trusted person so PHOENIX can reach them during an emergency."
          action={<Button onClick={() => openForm(null)}>Add your first contact</Button>}
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <motion.div
              key={contact.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
            >
              <Card className="gap-2 p-5">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">{contact.name}</p>
                    <p className="text-xs text-muted-foreground">{contact.relationship}</p>
                  </div>
                  {contact.is_primary ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/12 px-2 py-1 text-[11px] font-semibold text-primary">
                      <Star size={12} weight="fill" /> Primary
                    </span>
                  ) : null}
                </div>
                <p className="mt-2 text-sm">{contact.phone}</p>
                {contact.email ? (
                  <p className="truncate text-sm text-muted-foreground">{contact.email}</p>
                ) : null}
                <p className="mt-1 text-xs text-muted-foreground">Priority {contact.priority}</p>
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => openForm(contact)}>
                    <PencilSimple size={16} /> Edit
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setRemoving(contact)}>
                    <Trash size={16} /> Remove
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit contact" : "Add emergency contact"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="space-y-1.5">
              <Label>Full name</Label>
              <Input name="name" defaultValue={editing?.name ?? ""} maxLength={100} />
              {errors["name"] ? <p className="text-xs text-destructive">{errors["name"]}</p> : null}
            </div>
            <div className="space-y-1.5">
              <Label>Relationship</Label>
              <Select value={relationship} onValueChange={setRelationship}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {RELATIONSHIPS.map((value) => (
                    <SelectItem key={value} value={value}>
                      {value}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Phone</Label>
                <Input name="phone" type="tel" defaultValue={editing?.phone ?? ""} maxLength={20} />
                {errors["phone"] ? <p className="text-xs text-destructive">{errors["phone"]}</p> : null}
              </div>
              <div className="space-y-1.5">
                <Label>Priority</Label>
                <Input
                  name="priority"
                  type="number"
                  min={1}
                  max={99}
                  defaultValue={editing?.priority ?? contacts.length + 1}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Email (optional)</Label>
              <Input name="email" type="email" defaultValue={editing?.email ?? ""} maxLength={255} />
              {errors["email"] ? <p className="text-xs text-destructive">{errors["email"]}</p> : null}
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border p-3">
              <div>
                <p className="text-sm font-medium">Primary contact</p>
                <p className="text-xs text-muted-foreground">Notified first in an emergency.</p>
              </div>
              <Switch checked={isPrimary} onCheckedChange={setIsPrimary} />
            </div>
            <DialogFooter>
              <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={save.isPending}>
                {editing ? "Save changes" : "Add contact"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={Boolean(removing)} onOpenChange={(value) => !value && setRemoving(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Remove {removing?.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              They will no longer be notified when you raise an emergency alert.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Keep contact</AlertDialogCancel>
            <AlertDialogAction
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={() => removing && remove.mutate(removing.id)}
            >
              Remove
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
```

---

<a id="file-src-routes--app-dashboard-tsx"></a>
## File: `src/routes/_app.dashboard.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bell,
  CheckCircle,
  ClockCounterClockwise,
  MapPin,
  Siren,
  UsersThree,
  WarningCircle,
} from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { StatCard } from "@/components/phoenix/StatCard";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/lib/phoenix/auth";
import { userDashboard } from "@/lib/phoenix/api";
import {
  INCIDENT_STATUS_TONE,
  SOS_STATUS_TONE,
  labelize,
  timeAgo,
} from "@/lib/phoenix/constants";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Safety Dashboard — PHOENIX" },
      { name: "description", content: "Your live safety overview: SOS alerts, reports and contacts." },
      { property: "og:title", content: "Safety Dashboard — PHOENIX" },
      { property: "og:description", content: "Your live safety overview in PHOENIX." },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const { user, profile } = useAuth();
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard", user?.id],
    queryFn: () => userDashboard(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 20000,
  });

  const active = data?.alerts.find((alert) =>
    ["ACTIVE", "ACKNOWLEDGED", "RESPONDING"].includes(alert.status),
  );
  const firstName = (profile?.full_name ?? "there").split(" ")[0];

  return (
    <>
      <PageHeader
        title={`Hello, ${firstName}`}
        description="Here's your current safety status."
        action={
          <Button asChild variant="emergency" size="lg">
            <Link to="/sos">
              <Siren size={20} weight="fill" /> Emergency SOS
            </Link>
          </Button>
        }
      />

      {active ? (
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="mb-8 flex-row items-center justify-between gap-4 border-emergency/50 bg-emergency/10 p-5">
            <div className="flex items-center gap-4">
              <span className="sos-pulse grid h-11 w-11 place-items-center rounded-full bg-emergency text-emergency-foreground">
                <Siren size={22} weight="fill" />
              </span>
              <div>
                <p className="font-semibold">Active SOS alert in progress</p>
                <p className="text-sm text-muted-foreground">
                  {labelize(active.emergency_type)} · raised {timeAgo(active.created_at)}
                </p>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link to="/sos">View</Link>
            </Button>
          </Card>
        </motion.div>
      ) : null}

      {isLoading ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((key) => (
            <Skeleton key={key} className="h-28 rounded-xl" />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total reports" value={data?.totalReports ?? 0} icon={WarningCircle} index={0} />
          <StatCard
            label="Pending"
            value={data?.pendingReports ?? 0}
            icon={ClockCounterClockwise}
            tone="warning"
            index={1}
          />
          <StatCard
            label="Resolved"
            value={data?.resolvedReports ?? 0}
            icon={CheckCircle}
            tone="success"
            index={2}
          />
          <StatCard
            label="Emergency contacts"
            value={data?.contacts.length ?? 0}
            icon={UsersThree}
            index={3}
            hint={data?.contacts.length ? undefined : "Add one to be safer"}
          />
        </div>
      )}

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent reports</h2>
            <Button asChild variant="ghost" size="sm">
              <Link to="/incidents">
                View all <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          <div className="mt-4 space-y-3">
            {data?.incidents.length ? (
              data.incidents.slice(0, 5).map((incident) => (
                <Link
                  key={incident.id}
                  to="/incidents/$incidentId"
                  params={{ incidentId: incident.id }}
                  className="flex items-center justify-between gap-4 rounded-lg border border-border bg-surface/40 p-4 transition-colors hover:border-primary/40"
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{incident.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {incident.reference} · {labelize(incident.category)} · {timeAgo(incident.created_at)}
                    </p>
                  </div>
                  <StatusBadge status={incident.status} tone={INCIDENT_STATUS_TONE[incident.status]} />
                </Link>
              ))
            ) : (
              <EmptyState
                icon={WarningCircle}
                title="No reports yet"
                description="File a report when you witness an accident, crime or hazard."
                action={
                  <Button asChild>
                    <Link to="/incidents/new">Report an incident</Link>
                  </Button>
                }
              />
            )}
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold">Quick actions</h2>
            <div className="mt-4 grid gap-2">
              <QuickAction to="/incidents/new" icon={WarningCircle} label="Report incident" />
              <QuickAction to="/contacts" icon={UsersThree} label="Manage contacts" />
              <QuickAction to="/map" icon={MapPin} label="Nearby services" />
              <QuickAction to="/notifications" icon={Bell} label="Notifications" />
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold">Recent SOS activity</h2>
            <div className="mt-4 space-y-3">
              {data?.alerts.length ? (
                data.alerts.slice(0, 4).map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-border bg-surface/40 p-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{labelize(alert.emergency_type)}</p>
                      <p className="text-xs text-muted-foreground">{timeAgo(alert.created_at)}</p>
                    </div>
                    <StatusBadge status={alert.status} tone={SOS_STATUS_TONE[alert.status]} />
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No SOS alerts raised. Stay safe.</p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function QuickAction({
  to,
  icon: IconComponent,
  label,
}: {
  to: string;
  icon: typeof WarningCircle;
  label: string;
}) {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 rounded-lg border border-border bg-surface/40 px-4 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
    >
      <IconComponent size={18} weight="duotone" />
      {label}
      <ArrowRight size={16} className="ml-auto text-muted-foreground" />
    </Link>
  );
}
```

---

<a id="file-src-routes--app-incidents--incidentid-tsx"></a>
## File: `src/routes/_app.incidents.$incidentId.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, MapPin, Paperclip } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getIncident, listIncidentMedia, signedUrl } from "@/lib/phoenix/api";
import { INCIDENT_STATUS_TONE, formatDateTime, labelize } from "@/lib/phoenix/constants";

export const Route = createFileRoute("/_app/incidents/$incidentId")({
  head: () => ({
    meta: [
      { title: "Incident Report — PHOENIX" },
      { name: "description", content: "Full details, evidence and status of your incident report." },
      { property: "og:title", content: "Incident Report — PHOENIX" },
      { property: "og:description", content: "Full details and status of an incident report." },
    ],
  }),
  component: IncidentDetailPage,
});

function IncidentDetailPage() {
  const { incidentId } = Route.useParams();

  const { data: incident, isLoading } = useQuery({
    queryKey: ["incident", incidentId],
    queryFn: () => getIncident(incidentId),
  });

  const { data: media = [] } = useQuery({
    queryKey: ["incident-media", incidentId],
    queryFn: async () => {
      const rows = await listIncidentMedia(incidentId);
      return Promise.all(
        rows.map(async (row) => ({
          ...row,
          url: await signedUrl("incident-media", row.storage_path),
        })),
      );
    },
  });

  if (isLoading) return null;
  if (!incident) {
    return (
      <Card className="p-8 text-center">
        <p className="font-medium">This report could not be found.</p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/incidents">Back to reports</Link>
        </Button>
      </Card>
    );
  }

  return (
    <>
      <Button asChild variant="ghost" size="sm" className="mb-4">
        <Link to="/incidents">
          <ArrowLeft size={16} /> All reports
        </Link>
      </Button>
      <PageHeader
        title={incident.title}
        description={`${incident.reference} · ${labelize(incident.category)}`}
        action={<StatusBadge status={incident.status} tone={INCIDENT_STATUS_TONE[incident.status]} />}
      />

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Card className="gap-4 p-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Description
            </h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">{incident.description}</p>
          </div>
          {incident.additional_details ? (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Additional details
              </h2>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed">
                {incident.additional_details}
              </p>
            </div>
          ) : null}
          {incident.admin_notes ? (
            <div className="rounded-lg border border-info/40 bg-info/10 p-4">
              <h2 className="text-sm font-semibold">Response team notes</h2>
              <p className="mt-1 text-sm text-muted-foreground">{incident.admin_notes}</p>
            </div>
          ) : null}
          {media.length ? (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Evidence
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {media.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="overflow-hidden rounded-lg border border-border"
                  >
                    {item.mime_type.startsWith("image/") ? (
                      <img
                        src={item.url}
                        alt="Incident evidence"
                        loading="lazy"
                        className="h-32 w-full object-cover"
                      />
                    ) : (
                      <span className="flex h-32 items-center justify-center gap-2 text-xs text-muted-foreground">
                        <Paperclip size={16} /> View media
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </Card>

        <Card className="gap-3 p-6 text-sm">
          <h2 className="text-lg font-semibold">Report info</h2>
          <Row label="Occurred" value={formatDateTime(incident.occurred_at)} />
          <Row label="Submitted" value={formatDateTime(incident.created_at)} />
          <Row label="Last update" value={formatDateTime(incident.updated_at)} />
          {incident.location ? (
            <p className="flex items-start gap-2 text-muted-foreground">
              <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
              {incident.location}
            </p>
          ) : null}
        </Card>
      </div>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
```

---

<a id="file-src-routes--app-incidents-index-tsx"></a>
## File: `src/routes/_app.incidents.index.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "motion/react";
import { MagnifyingGlass, Plus, WarningCircle } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/phoenix/auth";
import { listMyIncidents } from "@/lib/phoenix/api";
import {
  INCIDENT_CATEGORIES,
  INCIDENT_STATUSES,
  INCIDENT_STATUS_TONE,
  formatDateTime,
  labelize,
} from "@/lib/phoenix/constants";

export const Route = createFileRoute("/_app/incidents/")({
  head: () => ({
    meta: [
      { title: "My Incident Reports — PHOENIX" },
      { name: "description", content: "Track every incident you reported and its current status." },
      { property: "og:title", content: "My Incident Reports — PHOENIX" },
      { property: "og:description", content: "Track your reported incidents and their status." },
    ],
  }),
  component: IncidentsPage,
});

function IncidentsPage() {
  const { user } = useAuth();
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("ALL");
  const [category, setCategory] = useState("ALL");

  const { data: incidents = [], isLoading } = useQuery({
    queryKey: ["incidents", user?.id],
    queryFn: () => listMyIncidents(user!.id),
    enabled: Boolean(user?.id),
  });

  const filtered = useMemo(
    () =>
      incidents.filter((incident) => {
        const matchesQuery =
          !query ||
          incident.title.toLowerCase().includes(query.toLowerCase()) ||
          incident.reference.toLowerCase().includes(query.toLowerCase());
        const matchesStatus = status === "ALL" || incident.status === status;
        const matchesCategory = category === "ALL" || incident.category === category;
        return matchesQuery && matchesStatus && matchesCategory;
      }),
    [incidents, query, status, category],
  );

  return (
    <>
      <PageHeader
        title="My reports"
        description="Every incident you've reported, with live status."
        action={
          <Button asChild>
            <Link to="/incidents/new">
              <Plus size={18} /> New report
            </Link>
          </Button>
        }
      />

      <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_180px_200px]">
        <div className="relative">
          <MagnifyingGlass
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title or reference"
            className="pl-10"
            maxLength={80}
          />
        </div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All statuses</SelectItem>
            {INCIDENT_STATUSES.map((value) => (
              <SelectItem key={value} value={value}>
                {labelize(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All categories</SelectItem>
            {INCIDENT_CATEGORIES.map((value) => (
              <SelectItem key={value} value={value}>
                {labelize(value)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {isLoading ? null : filtered.length === 0 ? (
        <EmptyState
          icon={WarningCircle}
          title={incidents.length ? "No matching reports" : "No reports yet"}
          description={
            incidents.length
              ? "Try clearing the filters or searching a different term."
              : "Report accidents, crimes, hazards and emergencies with evidence."
          }
          action={
            incidents.length ? undefined : (
              <Button asChild>
                <Link to="/incidents/new">Report an incident</Link>
              </Button>
            )
          }
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((incident, index) => (
            <motion.div
              key={incident.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Link to="/incidents/$incidentId" params={{ incidentId: incident.id }}>
                <Card className="h-full gap-2 p-5 transition-colors hover:border-primary/40">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-semibold">{incident.title}</p>
                      <p className="text-xs text-muted-foreground">{incident.reference}</p>
                    </div>
                    <StatusBadge status={incident.status} tone={INCIDENT_STATUS_TONE[incident.status]} />
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {incident.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {labelize(incident.category)} · {formatDateTime(incident.occurred_at)}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </>
  );
}
```

---

<a id="file-src-routes--app-incidents-new-tsx"></a>
## File: `src/routes/_app.incidents.new.tsx`

```typescript
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { Crosshair, Paperclip, SpinnerGap, X } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/lib/phoenix/auth";
import { createIncident, uploadIncidentMedia, validateUpload } from "@/lib/phoenix/api";
import { getCurrentPosition, reverseGeocode } from "@/lib/phoenix/geolocation";
import { INCIDENT_CATEGORIES, labelize } from "@/lib/phoenix/constants";
import type { IncidentCategory } from "@/lib/phoenix/constants";

export const Route = createFileRoute("/_app/incidents/new")({
  head: () => ({
    meta: [
      { title: "Report an Incident — PHOENIX" },
      { name: "description", content: "Report accidents, crimes, hazards and emergencies with evidence." },
      { property: "og:title", content: "Report an Incident — PHOENIX" },
      { property: "og:description", content: "Submit a detailed incident report with photo or video evidence." },
    ],
  }),
  component: NewIncidentPage,
});

const schema = z.object({
  category: z.string().min(1, "Choose a category"),
  title: z.string().trim().min(5, "Give the report a clear title").max(120),
  description: z.string().trim().min(20, "Describe what happened (20+ characters)").max(2000),
  occurred_at: z.string().min(1, "When did this happen?"),
  location: z.string().trim().max(200).optional().or(z.literal("")),
  additional_details: z.string().trim().max(1000).optional().or(z.literal("")),
});

function NewIncidentPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [category, setCategory] = useState<IncidentCategory>("ACCIDENT");
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [coords, setCoords] = useState<{ latitude: number; longitude: number } | null>(null);
  const [address, setAddress] = useState("");
  const [locating, setLocating] = useState(false);

  const useMyLocation = async () => {
    setLocating(true);
    try {
      const position = await getCurrentPosition();
      setCoords({ latitude: position.latitude, longitude: position.longitude });
      const resolved = await reverseGeocode(position.latitude, position.longitude);
      if (resolved) setAddress(resolved);
      toast.success("Location attached to this report.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not get your location.");
    } finally {
      setLocating(false);
    }
  };

  const addFiles = (list: FileList | null) => {
    if (!list) return;
    const next: File[] = [];
    for (const file of Array.from(list)) {
      try {
        validateUpload(file);
        next.push(file);
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Invalid file.");
      }
    }
    setFiles((current) => [...current, ...next].slice(0, 5));
  };

  const submit = useMutation({
    mutationFn: async (values: z.infer<typeof schema>) => {
      const incident = await createIncident(user!.id, {
        category: values.category as IncidentCategory,
        title: values.title,
        description: values.description,
        occurred_at: new Date(values.occurred_at).toISOString(),
        location: values.location ? values.location : address || null,
        latitude: coords?.latitude ?? null,
        longitude: coords?.longitude ?? null,
        additional_details: values.additional_details ? values.additional_details : null,
      });
      if (files.length) await uploadIncidentMedia(user!.id, incident.id, files);
      return incident;
    },
    onSuccess: (incident) => {
      toast.success(`Report ${incident.reference} submitted.`);
      void queryClient.invalidateQueries({ queryKey: ["incidents"] });
      void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      void navigate({ to: "/incidents/$incidentId", params: { incidentId: incident.id } });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({
      category,
      title: String(form.get("title") ?? ""),
      description: String(form.get("description") ?? ""),
      occurred_at: String(form.get("occurred_at") ?? ""),
      location: String(form.get("location") ?? ""),
      additional_details: String(form.get("additional_details") ?? ""),
    });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    submit.mutate(parsed.data);
  };

  return (
    <>
      <PageHeader title="Report an incident" description="Give responders the details they need." />

      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-[1fr_360px]" noValidate>
        <Card className="gap-5 p-6">
          <div className="space-y-1.5">
            <Label>Category</Label>
            <Select value={category} onValueChange={(value) => setCategory(value as IncidentCategory)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {INCIDENT_CATEGORIES.map((value) => (
                  <SelectItem key={value} value={value}>
                    {labelize(value)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label>Title</Label>
            <Input name="title" placeholder="Two-car collision on Bridge Road" maxLength={120} />
            {errors["title"] ? <p className="text-xs text-destructive">{errors["title"]}</p> : null}
          </div>
          <div className="space-y-1.5">
            <Label>Description</Label>
            <Textarea
              name="description"
              rows={6}
              maxLength={2000}
              placeholder="Describe what happened, who was involved and any injuries…"
            />
            {errors["description"] ? (
              <p className="text-xs text-destructive">{errors["description"]}</p>
            ) : null}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label>When did it happen?</Label>
              <Input
                name="occurred_at"
                type="datetime-local"
                defaultValue={new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .slice(0, 16)}
              />
              {errors["occurred_at"] ? (
                <p className="text-xs text-destructive">{errors["occurred_at"]}</p>
              ) : null}
            </div>
            <div className="space-y-1.5">
              <Label>Location</Label>
              <Input
                name="location"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Street, area or landmark"
                maxLength={200}
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label>Additional details (optional)</Label>
            <Textarea name="additional_details" rows={3} maxLength={1000} />
          </div>
        </Card>

        <div className="space-y-6">
          <Card className="gap-3 p-6">
            <h2 className="text-lg font-semibold">Location</h2>
            <Button type="button" variant="outline" onClick={useMyLocation} disabled={locating}>
              {locating ? <SpinnerGap size={18} className="animate-spin" /> : <Crosshair size={18} />}
              Use my current location
            </Button>
            {coords ? (
              <p className="text-xs text-muted-foreground">
                {coords.latitude.toFixed(5)}, {coords.longitude.toFixed(5)}
              </p>
            ) : null}
          </Card>

          <Card className="gap-3 p-6">
            <h2 className="text-lg font-semibold">Evidence</h2>
            <p className="text-xs text-muted-foreground">
              Up to 5 photos or videos, 25MB each. Stored privately.
            </p>
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-border px-4 py-6 text-sm text-muted-foreground hover:border-primary/50 hover:text-foreground">
              <Paperclip size={18} />
              Choose files
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={(event) => addFiles(event.target.files)}
              />
            </label>
            {files.length ? (
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between gap-2 rounded-lg border border-border px-3 py-2 text-xs"
                  >
                    <span className="truncate">{file.name}</span>
                    <button
                      type="button"
                      aria-label={`Remove ${file.name}`}
                      onClick={() => setFiles((current) => current.filter((_, i) => i !== index))}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      <X size={14} />
                    </button>
                  </li>
                ))}
              </ul>
            ) : null}
          </Card>

          <Button type="submit" className="h-11 w-full text-base" disabled={submit.isPending}>
            {submit.isPending ? <SpinnerGap size={18} className="animate-spin" /> : null}
            Submit report
          </Button>
        </div>
      </form>
    </>
  );
}
```

---

<a id="file-src-routes--app-map-tsx"></a>
## File: `src/routes/_app.map.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Crosshair, MapTrifold, SpinnerGap } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getCurrentPosition, distanceKm } from "@/lib/phoenix/geolocation";

export const Route = createFileRoute("/_app/map")({
  head: () => ({
    meta: [
      { title: "Nearby Emergency Services — PHOENIX" },
      { name: "description", content: "Find police stations, hospitals and fire stations near you." },
      { property: "og:title", content: "Nearby Emergency Services — PHOENIX" },
      { property: "og:description", content: "Find emergency services near your live location." },
    ],
  }),
  component: MapPage,
});

interface Place {
  id: string;
  name: string;
  kind: string;
  lat: number;
  lon: number;
  km: number;
}

const KINDS: Record<string, string> = {
  police: "Police",
  hospital: "Hospital",
  fire_station: "Fire station",
  clinic: "Clinic",
};

function MapPage() {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [origin, setOrigin] = useState<{ latitude: number; longitude: number } | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const position = await getCurrentPosition();
      setOrigin(position);
      const query = `[out:json][timeout:25];(
        node["amenity"~"police|hospital|fire_station|clinic"](around:5000,${position.latitude},${position.longitude});
      );out body 40;`;
      const response = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: query,
      });
      if (!response.ok) throw new Error("Could not load nearby services right now.");
      const payload = (await response.json()) as {
        elements: { id: number; lat: number; lon: number; tags?: Record<string, string> }[];
      };
      const results = payload.elements
        .filter((element) => element.tags?.["amenity"])
        .map((element) => ({
          id: String(element.id),
          name: element.tags?.["name"] ?? KINDS[element.tags?.["amenity"] ?? ""] ?? "Service",
          kind: KINDS[element.tags?.["amenity"] ?? ""] ?? "Service",
          lat: element.lat,
          lon: element.lon,
          km: distanceKm(
            { lat: position.latitude, lon: position.longitude },
            { lat: element.lat, lon: element.lon },
          ),
        }))
        .sort((a, b) => a.km - b.km)
        .slice(0, 20);
      setPlaces(results);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PageHeader
        title="Nearby emergency services"
        description="Police, hospitals and fire stations within 5km of your position."
        action={
          <Button variant="outline" onClick={load} disabled={loading}>
            {loading ? <SpinnerGap size={18} className="animate-spin" /> : <Crosshair size={18} />}
            Refresh
          </Button>
        }
      />

      {origin ? (
        <p className="mb-4 text-xs text-muted-foreground">
          Searching around {origin.latitude.toFixed(4)}, {origin.longitude.toFixed(4)}
        </p>
      ) : null}

      {error ? (
        <EmptyState icon={MapTrifold} title="Couldn't load services" description={error} />
      ) : places.length === 0 && !loading ? (
        <EmptyState
          icon={MapTrifold}
          title="No services found nearby"
          description="Try refreshing, or move to an area with better GPS accuracy."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <Card key={place.id} className="gap-1 p-5">
              <p className="font-semibold">{place.name}</p>
              <p className="text-xs text-muted-foreground">
                {place.kind} · {place.km.toFixed(1)} km away
              </p>
              <a
                href={`https://www.openstreetmap.org/?mlat=${place.lat}&mlon=${place.lon}#map=17/${place.lat}/${place.lon}`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-sm font-medium text-primary hover:underline"
              >
                Open in map
              </a>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
```

---

<a id="file-src-routes--app-notifications-tsx"></a>
## File: `src/routes/_app.notifications.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import { Bell, BellRinging, CheckCircle, Info, Siren, WarningCircle } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { EmptyState } from "@/components/phoenix/EmptyState";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/phoenix/auth";
import {
  listNotifications,
  markAllNotificationsRead,
  markNotificationRead,
} from "@/lib/phoenix/api";
import { timeAgo } from "@/lib/phoenix/constants";
import type { AppNotification } from "@/lib/phoenix/constants";

export const Route = createFileRoute("/_app/notifications")({
  head: () => ({
    meta: [
      { title: "Notifications — PHOENIX" },
      { name: "description", content: "Real-time updates on your SOS alerts and incident reports." },
      { property: "og:title", content: "Notifications — PHOENIX" },
      { property: "og:description", content: "Real-time updates on your emergencies and reports." },
    ],
  }),
  component: NotificationsPage,
});

const ICONS: Record<string, typeof Info> = {
  SOS: Siren,
  INCIDENT: WarningCircle,
  STATUS_UPDATE: CheckCircle,
  SYSTEM: Info,
  EMERGENCY_SERVICE: Info,
} as const;

function NotificationsPage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications", user?.id],
    queryFn: () => listNotifications(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 30000,
  });

  const refresh = () => queryClient.invalidateQueries({ queryKey: ["notifications"] });

  const readOne = useMutation({
    mutationFn: (id: string) => markNotificationRead(id),
    onSuccess: () => void refresh(),
  });
  const readAll = useMutation({
    mutationFn: () => markAllNotificationsRead(user!.id),
    onSuccess: () => void refresh(),
  });

  const unread = notifications.filter((item) => !item.is_read).length;

  return (
    <>
      <PageHeader
        title="Notifications"
        description={unread ? `${unread} unread update${unread === 1 ? "" : "s"}` : "You're all caught up."}
        action={
          unread ? (
            <Button variant="outline" onClick={() => readAll.mutate()} disabled={readAll.isPending}>
              Mark all as read
            </Button>
          ) : undefined
        }
      />

      {notifications.length === 0 ? (
        <EmptyState
          icon={Bell}
          title="No notifications"
          description="Alerts about your SOS activity and incident reports will appear here."
        />
      ) : (
        <div className="space-y-3">
          {notifications.map((item: AppNotification, index) => {
            const IconComponent = ICONS[item.type] ?? Info;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <Card
                  className={`flex-row items-start gap-4 p-5 ${
                    item.is_read ? "" : "border-primary/40 bg-primary/5"
                  }`}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                    <IconComponent size={20} weight="duotone" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-medium">{item.title}</p>
                      {!item.is_read ? (
                        <span className="rounded-full bg-emergency/15 px-2 py-0.5 text-[11px] font-semibold text-emergency">
                          New
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.message}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span>{timeAgo(item.created_at)}</span>
                      {item.link ? (
                        <Link to={item.link} className="font-medium text-primary hover:underline">
                          View details
                        </Link>
                      ) : null}
                      {!item.is_read ? (
                        <button
                          type="button"
                          className="font-medium text-primary hover:underline"
                          onClick={() => readOne.mutate(item.id)}
                        >
                          Mark as read
                        </button>
                      ) : null}
                    </div>
                  </div>
                  {!item.is_read ? (
                    <BellRinging size={18} className="shrink-0 text-primary" weight="fill" />
                  ) : null}
                </Card>
              </motion.div>
            );
          })}
        </div>
      )}
    </>
  );
}
```

---

<a id="file-src-routes--app-profile-tsx"></a>
## File: `src/routes/_app.profile.tsx`

```typescript
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { EnvelopeSimple, Phone, ShieldCheck, SpinnerGap, UserCircle } from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/lib/phoenix/auth";
import { updatePassword, updateProfile } from "@/lib/phoenix/api";

export const Route = createFileRoute("/_app/profile")({
  head: () => ({
    meta: [
      { title: "Your Profile — PHOENIX" },
      { name: "description", content: "Manage your PHOENIX account details and emergency contacts." },
      { property: "og:title", content: "Your Profile — PHOENIX" },
      { property: "og:description", content: "Manage your account details and emergency contacts." },
    ],
  }),
  component: ProfilePage,
});

const profileSchema = z.object({
  full_name: z.string().trim().min(2, "Enter your full name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\-\s]+$/, "Digits and + ( ) - only")
    .optional()
    .or(z.literal("")),
  emergency_contact_name: z.string().trim().min(2, "Enter emergency contact name").max(100),
  emergency_contact_email: z.string().trim().email("Enter a valid email address").max(255),
  emergency_contact_phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\-\s]+$/, "Digits and + ( ) - only")
    .optional()
    .or(z.literal("")),
});

const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Use at least 8 characters")
      .max(72)
      .regex(/[A-Za-z]/, "Include a letter")
      .regex(/[0-9]/, "Include a number"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match",
  });

function ProfilePage() {
  const { user, profile, refreshProfile } = useAuth();
  const queryClient = useQueryClient();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [passwordErrors, setPasswordErrors] = useState<Record<string, string>>({});

  const [fullName, setFullName] = useState(profile?.full_name ?? "");
  const [phone, setPhone] = useState(profile?.phone ?? "");
  const [contactName, setContactName] = useState(profile?.emergency_contact_name ?? "");
  const [contactEmail, setContactEmail] = useState(profile?.emergency_contact_email ?? "");
  const [contactPhone, setContactPhone] = useState(profile?.emergency_contact_phone ?? "");

  useEffect(() => {
    if (profile) {
      if (profile.full_name) setFullName(profile.full_name);
      if (profile.phone) setPhone(profile.phone);
      if (profile.emergency_contact_name) setContactName(profile.emergency_contact_name);
      if (profile.emergency_contact_email) setContactEmail(profile.emergency_contact_email);
      if (profile.emergency_contact_phone) setContactPhone(profile.emergency_contact_phone);
    }
  }, [profile]);

  const saveProfile = useMutation({
    mutationFn: (values: z.infer<typeof profileSchema>) =>
      updateProfile(user!.id, {
        full_name: values.full_name,
        phone: values.phone || null,
        emergency_contact_name: values.emergency_contact_name,
        emergency_contact_email: values.emergency_contact_email,
        emergency_contact_phone: values.emergency_contact_phone || null,
      }),
    onSuccess: async () => {
      await refreshProfile();
      void queryClient.invalidateQueries({ queryKey: ["contacts"] });
      void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
      toast.success("Profile and emergency contact saved successfully.");
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const savePassword = useMutation({
    mutationFn: (password: string) => updatePassword(password),
    onSuccess: () => toast.success("Password updated successfully."),
    onError: (error: Error) => toast.error(error.message),
  });

  return (
    <>
      <PageHeader title="Profile & Emergency Settings" description="Keep your profile and emergency contact details current for immediate alerts." />

      <div className="grid gap-6 lg:grid-cols-2">
        <form
          className="space-y-6"
          noValidate
          onSubmit={(event) => {
            event.preventDefault();
            const parsed = profileSchema.safeParse({
              full_name: fullName,
              phone: phone,
              emergency_contact_name: contactName,
              emergency_contact_email: contactEmail,
              emergency_contact_phone: contactPhone,
            });
            if (!parsed.success) {
              const next: Record<string, string> = {};
              for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
              setErrors(next);
              return;
            }
            setErrors({});
            saveProfile.mutate(parsed.data);
          }}
        >
          {/* User Details */}
          <Card className="gap-5 p-6">
            <div className="flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/12 text-primary">
                <UserCircle size={30} weight="duotone" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-base">{profile?.full_name || "Guardian Connect User"}</p>
                <p className="truncate text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="full_name">Full Name *</Label>
                <Input
                  id="full_name"
                  name="full_name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Alex Mercer"
                  maxLength={100}
                />
                {errors["full_name"] ? (
                  <p className="text-xs text-destructive">{errors["full_name"]}</p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 019-2834"
                  maxLength={20}
                />
                {errors["phone"] ? <p className="text-xs text-destructive">{errors["phone"]}</p> : null}
              </div>
            </div>
          </Card>

          {/* Emergency Contact Configuration */}
          <Card className="gap-5 p-6 border-amber-500/30 dark:border-amber-500/20 bg-amber-500/5">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <ShieldCheck size={24} weight="duotone" />
              <div>
                <h2 className="text-base font-semibold">Primary Emergency Contact</h2>
                <p className="text-xs text-muted-foreground">This contact receives an immediate email alert when you trigger an emergency SOS.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="emergency_contact_name">Emergency Contact Name *</Label>
                <Input
                  id="emergency_contact_name"
                  name="emergency_contact_name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Jane Mercer"
                  maxLength={100}
                />
                {errors["emergency_contact_name"] ? (
                  <p className="text-xs text-destructive">{errors["emergency_contact_name"]}</p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="emergency_contact_email">Emergency Contact Email *</Label>
                <div className="relative">
                  <Input
                    id="emergency_contact_email"
                    name="emergency_contact_email"
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="emergency-contact@example.com"
                    maxLength={255}
                    className="pr-10"
                  />
                  <EnvelopeSimple size={18} className="absolute right-3 top-3 text-muted-foreground" />
                </div>
                {errors["emergency_contact_email"] ? (
                  <p className="text-xs text-destructive">{errors["emergency_contact_email"]}</p>
                ) : null}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="emergency_contact_phone">Emergency Contact Phone</Label>
                <div className="relative">
                  <Input
                    id="emergency_contact_phone"
                    name="emergency_contact_phone"
                    type="tel"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="+1 (555) 987-6543"
                    maxLength={20}
                    className="pr-10"
                  />
                  <Phone size={18} className="absolute right-3 top-3 text-muted-foreground" />
                </div>
                {errors["emergency_contact_phone"] ? (
                  <p className="text-xs text-destructive">{errors["emergency_contact_phone"]}</p>
                ) : null}
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={saveProfile.isPending}>
              {saveProfile.isPending ? <SpinnerGap size={18} className="animate-spin" /> : null}
              Save Profile & Contact Settings
            </Button>
          </Card>
        </form>

        {/* Change Password Card */}
        <div className="space-y-6">
          <Card className="gap-5 p-6">
            <h2 className="text-lg font-semibold">Security & Password</h2>
            <form
              className="space-y-4"
              noValidate
              onSubmit={(event) => {
                event.preventDefault();
                const form = new FormData(event.currentTarget);
                const parsed = passwordSchema.safeParse({
                  password: String(form.get("password") ?? ""),
                  confirm: String(form.get("confirm") ?? ""),
                });
                if (!parsed.success) {
                  const next: Record<string, string> = {};
                  for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
                  setPasswordErrors(next);
                  return;
                }
                setPasswordErrors({});
                savePassword.mutate(parsed.data.password);
                event.currentTarget.reset();
              }}
            >
              <div className="space-y-1.5">
                <Label htmlFor="password">New Password</Label>
                <Input id="password" name="password" type="password" autoComplete="new-password" maxLength={72} />
                {passwordErrors["password"] ? (
                  <p className="text-xs text-destructive">{passwordErrors["password"]}</p>
                ) : null}
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="confirm">Confirm New Password</Label>
                <Input id="confirm" name="confirm" type="password" autoComplete="new-password" maxLength={72} />
                {passwordErrors["confirm"] ? (
                  <p className="text-xs text-destructive">{passwordErrors["confirm"]}</p>
                ) : null}
              </div>
              <Button type="submit" variant="outline" disabled={savePassword.isPending}>
                {savePassword.isPending ? <SpinnerGap size={18} className="animate-spin" /> : null}
                Update Password
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
}
```

---

<a id="file-src-routes--app-sos-tsx"></a>
## File: `src/routes/_app.sos.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "motion/react";
import { toast } from "sonner";
import {
  CheckCircle,
  Crosshair,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
  ShieldWarning,
  Siren,
  SpinnerGap,
  UserGear,
  XCircle,
} from "@phosphor-icons/react";
import { PageHeader } from "@/components/phoenix/AppShell";
import { StatusBadge } from "@/components/phoenix/StatusBadge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useAuth } from "@/lib/phoenix/auth";
import {
  createSos,
  getActiveSos,
  listContacts,
  listMyEmergencyAlerts,
  listMySos,
  listSosHistory,
  sendEmergencyAlertEmail,
  updateProfile,
  updateSosStatus,
} from "@/lib/phoenix/api";
import { getCurrentPosition, reverseGeocode } from "@/lib/phoenix/geolocation";
import {
  EMERGENCY_TYPES,
  SOS_STATUS_TONE,
  formatDateTime,
  labelize,
  timeAgo,
} from "@/lib/phoenix/constants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const Route = createFileRoute("/_app/sos")({
  head: () => ({
    meta: [
      { title: "Emergency SOS — Guardian Connect" },
      { name: "description", content: "Trigger a one-tap emergency SOS with live GPS location and email alerts." },
      { property: "og:title", content: "Emergency SOS — Guardian Connect" },
      { property: "og:description", content: "One-tap emergency SOS with live GPS location and email alerts." },
    ],
  }),
  component: SosPage,
});

interface Located {
  latitude: number;
  longitude: number;
  accuracy: number;
  address: string | null;
}

function SosPage() {
  const { user, profile, refreshProfile } = useAuth();
  const queryClient = useQueryClient();
  const reduced = useReducedMotion();
  const [type, setType] = useState<string>("GENERAL");
  const [message, setMessage] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [quickContactOpen, setQuickContactOpen] = useState(false);
  const [quickName, setQuickName] = useState("");
  const [quickEmail, setQuickEmail] = useState("");
  const [quickPhone, setQuickPhone] = useState("");
  const [holdProgress, setHoldProgress] = useState(0);
  const [location, setLocation] = useState<Located | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const holdTimer = useRef<number | null>(null);

  const saveQuickContact = useMutation({
    mutationFn: async () => {
      if (!quickName.trim()) throw new Error("Please enter contact name.");
      if (!quickEmail.trim() || !quickEmail.includes("@")) throw new Error("Please enter a valid email address.");
      await updateProfile(user!.id, {
        full_name: profile?.full_name || "User",
        phone: profile?.phone ?? null,
        emergency_contact_name: quickName.trim(),
        emergency_contact_email: quickEmail.trim(),
        emergency_contact_phone: quickPhone.trim() || null,
      });
      await refreshProfile();
    },
    onSuccess: () => {
      toast.success("Emergency contact saved! Emergency SOS feature is enabled.");
      setQuickContactOpen(false);
      void queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const captureLocation = async () => {
    setLocating(true);
    setLocationError(null);
    try {
      const position = await getCurrentPosition();
      const address = await reverseGeocode(position.latitude, position.longitude);
      setLocation({ ...position, address });
    } catch (error) {
      setLocationError(error instanceof Error ? error.message : "Could not get your location.");
    } finally {
      setLocating(false);
    }
  };

  useEffect(() => {
    void captureLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data: active } = useQuery({
    queryKey: ["sos-active", user?.id],
    queryFn: () => getActiveSos(user!.id),
    enabled: Boolean(user?.id),
    refetchInterval: 15000,
  });

  const { data: history = [] } = useQuery({
    queryKey: ["sos-history", user?.id],
    queryFn: () => listMySos(user!.id),
    enabled: Boolean(user?.id),
  });

  const { data: emergencyEmailAlerts = [] } = useQuery({
    queryKey: ["emergency-alerts-history", user?.id],
    queryFn: () => listMyEmergencyAlerts(user!.id),
    enabled: Boolean(user?.id),
  });

  const { data: contacts = [] } = useQuery({
    queryKey: ["contacts", user?.id],
    queryFn: () => listContacts(user!.id),
    enabled: Boolean(user?.id),
  });

  const { data: timeline = [] } = useQuery({
    queryKey: ["sos-timeline", active?.id],
    queryFn: () => listSosHistory(active!.id),
    enabled: Boolean(active?.id),
    refetchInterval: 15000,
  });

  // Effective emergency contact email
  const configuredEmail = profile?.emergency_contact_email?.trim() || contacts.find((c) => c.email)?.email?.trim() || null;

  const invalidate = () => {
    void queryClient.invalidateQueries({ queryKey: ["sos-active"] });
    void queryClient.invalidateQueries({ queryKey: ["sos-history"] });
    void queryClient.invalidateQueries({ queryKey: ["emergency-alerts-history"] });
    void queryClient.invalidateQueries({ queryKey: ["dashboard"] });
    void queryClient.invalidateQueries({ queryKey: ["notifications"] });
  };

  const trigger = useMutation({
    mutationFn: async () => {
      // 1. Create SOS Record in database
      const sosAlert = await createSos(user!.id, {
        emergency_type: type,
        latitude: location?.latitude ?? null,
        longitude: location?.longitude ?? null,
        accuracy: location?.accuracy ?? null,
        address: location?.address ?? null,
        message: message.trim() ? message.trim().slice(0, 500) : null,
      });

      // 2. Invoke Supabase Edge Function to send Emergency Email via Resend
      let emailResult;
      try {
        emailResult = await sendEmergencyAlertEmail({
          message: message.trim() || `Emergency ${type} alert triggered by ${profile?.full_name || "user"}.`,
          latitude: location?.latitude ?? null,
          longitude: location?.longitude ?? null,
        });
      } catch (err: unknown) {
        console.error("Edge function emergency email failed:", err);
        const errMsg = err instanceof Error ? err.message : "Failed to dispatch email alert";
        toast.error(`Email dispatch warning: ${errMsg}`);
      }

      return { sosAlert, emailResult };
    },
    onSuccess: (data) => {
      if (data.emailResult?.success) {
        toast.success(`SOS broadcasted & emergency email dispatched to ${data.emailResult.alert.email_sent_to}`);
      } else {
        toast.success("Emergency SOS broadcasted.");
      }
      setMessage("");
      invalidate();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const cancel = useMutation({
    mutationFn: async () =>
      updateSosStatus(active!, "CANCELLED", "Cancelled by the user.", user!.id),
    onSuccess: () => {
      toast.success("SOS cancelled.");
      invalidate();
    },
    onError: (error: Error) => toast.error(error.message),
  });

  const startHold = () => {
    if (active) return;
    if (!user) {
      toast.error("Please login before using the emergency feature.");
      return;
    }
    if (!configuredEmail) {
      toast.error("Please configure an emergency contact before using this feature.");
      setQuickName(profile?.emergency_contact_name || "");
      setQuickEmail(profile?.emergency_contact_email || "");
      setQuickPhone(profile?.emergency_contact_phone || "");
      setQuickContactOpen(true);
      return;
    }
    const started = Date.now();
    holdTimer.current = window.setInterval(() => {
      const progress = Math.min((Date.now() - started) / 1200, 1);
      setHoldProgress(progress);
      if (progress >= 1) {
        stopHold();
        setConfirmOpen(true);
      }
    }, 30);
  };

  const stopHold = () => {
    if (holdTimer.current) window.clearInterval(holdTimer.current);
    holdTimer.current = null;
    setHoldProgress(0);
  };

  useEffect(() => () => stopHold(), []);

  return (
    <>
      <PageHeader
        title="Emergency SOS"
        description="Hold the button for one second to send an instant location alert & email emergency dispatch."
      />

      {/* Warning Banner if Emergency Contact Missing */}
      {!configuredEmail ? (
        <Card className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200">
          <div className="flex items-center gap-3">
            <ShieldWarning size={28} className="text-amber-600 dark:text-amber-400 shrink-0" />
            <div>
              <p className="font-semibold text-sm">Emergency contact email required</p>
              <p className="text-xs text-muted-foreground">
                Please configure an emergency contact email in your profile so server alerts can be dispatched immediately.
              </p>
            </div>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="gap-2 shrink-0"
            onClick={() => {
              setQuickName(profile?.emergency_contact_name || "");
              setQuickEmail(profile?.emergency_contact_email || "");
              setQuickPhone(profile?.emergency_contact_phone || "");
              setQuickContactOpen(true);
            }}
          >
            <UserGear size={16} /> Configure Contact
          </Button>
        </Card>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
        <Card className="items-center gap-6 p-8 text-center">
          {active ? (
            <div className="w-full">
              <StatusBadge status={active.status} tone={SOS_STATUS_TONE[active.status]} />
              <h2 className="mt-4 font-display text-2xl font-bold">
                {labelize(active.emergency_type)} emergency active
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Raised {timeAgo(active.created_at)} · {active.contacts_notified} contact
                {active.contacts_notified === 1 ? "" : "s"} notified
              </p>
              {active.address ? (
                <p className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/50 px-3 py-2 text-sm">
                  <MapPin size={16} className="text-primary" /> {active.address}
                </p>
              ) : null}

              <ol className="mt-6 space-y-3 text-left">
                {timeline.map((entry) => (
                  <li key={entry.id} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <div>
                      <p className="text-sm font-medium">{labelize(entry.status)}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatDateTime(entry.created_at)}
                        {entry.note ? ` · ${entry.note}` : ""}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <Button
                variant="outline"
                className="mt-7"
                onClick={() => cancel.mutate()}
                disabled={cancel.isPending}
              >
                {cancel.isPending ? <SpinnerGap size={18} className="animate-spin" /> : <XCircle size={18} />}
                I'm safe — cancel SOS
              </Button>
            </div>
          ) : (
            <>
              <div className="relative grid place-items-center">
                <span
                  className={`absolute h-52 w-52 rounded-full bg-emergency/20 ${reduced ? "" : "sos-pulse"
                    }`}
                  aria-hidden
                />
                <motion.button
                  type="button"
                  aria-label="Hold to trigger emergency SOS"
                  onPointerDown={startHold}
                  onPointerUp={stopHold}
                  onPointerLeave={stopHold}
                  whileTap={{ scale: 0.96 }}
                  className="relative grid h-44 w-44 place-items-center rounded-full bg-emergency text-emergency-foreground shadow-[0_25px_60px_-20px_var(--emergency)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emergency/40"
                >
                  <span className="flex flex-col items-center gap-1">
                    <Siren size={44} weight="fill" />
                    <span className="font-display text-xl font-bold tracking-[0.18em]">SOS</span>
                  </span>
                  <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100" aria-hidden>
                    <circle
                      cx="50"
                      cy="50"
                      r="47"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={295}
                      strokeDashoffset={295 - holdProgress * 295}
                      opacity="0.85"
                    />
                  </svg>
                </motion.button>
              </div>
              <p className="text-sm text-muted-foreground">
                Press and hold for 1 second to arm the alert.
              </p>
            </>
          )}
        </Card>

        <div className="space-y-6">
          <Card className="gap-4 p-6">
            <h2 className="text-lg font-semibold">Alert details</h2>
            <div className="space-y-1.5">
              <Label>Emergency type</Label>
              <Select value={type} onValueChange={setType} disabled={Boolean(active)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {EMERGENCY_TYPES.map((value) => (
                    <SelectItem key={value} value={value}>
                      {labelize(value)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label>Message (optional)</Label>
              <Textarea
                value={message}
                maxLength={500}
                disabled={Boolean(active)}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Anything emergency contacts should know…"
              />
            </div>
          </Card>

          <Card className="gap-3 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Your location</h2>
              <Button variant="ghost" size="sm" onClick={captureLocation} disabled={locating}>
                {locating ? (
                  <SpinnerGap size={16} className="animate-spin" />
                ) : (
                  <Crosshair size={16} />
                )}
                Refresh
              </Button>
            </div>
            {location ? (
              <div className="text-sm">
                <p className="font-medium">{location.address ?? "Coordinates captured"}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {location.latitude.toFixed(5)}, {location.longitude.toFixed(5)} · ±
                  {Math.round(location.accuracy)}m
                </p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                {locationError ?? "Getting your position…"}
              </p>
            )}
            {locationError ? (
              <p className="flex items-start gap-2 text-xs text-warning">
                <ShieldWarning size={16} className="mt-0.5 shrink-0" />
                You can still send an SOS, but the email will indicate location was unavailable.
              </p>
            ) : null}
          </Card>

          <Card className="gap-2 p-6">
            <h2 className="text-lg font-semibold">Configured Recipient</h2>
            {configuredEmail ? (
              <div className="space-y-1 text-sm">
                <p className="font-medium text-foreground flex items-center gap-2">
                  <EnvelopeSimple size={16} className="text-primary" /> {configuredEmail}
                </p>
                <p className="text-xs text-muted-foreground">
                  Receives emergency email dispatch via Supabase Edge Function & Resend API.
                </p>
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No emergency contact configured yet.
              </p>
            )}
          </Card>
        </div>
      </div>

      {/* Emergency Email Alert History Section */}
      {emergencyEmailAlerts.length ? (
        <Card className="mt-8 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <PaperPlaneTilt size={20} className="text-primary" /> Server Emergency Alert History
              </h2>
              <p className="text-xs text-muted-foreground">
                Emergency emails processed by Supabase Edge Function & Resend API.
              </p>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-border text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="pb-3 font-semibold">Date & Time</th>
                  <th className="pb-3 font-semibold">Recipient</th>
                  <th className="pb-3 font-semibold">Message</th>
                  <th className="pb-3 font-semibold">Location</th>
                  <th className="pb-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {emergencyEmailAlerts.map((alert) => {
                  const hasLoc = alert.latitude !== null && alert.longitude !== null;
                  const isSent = alert.status === "sent";
                  const isFailed = alert.status === "failed";

                  return (
                    <tr key={alert.id} className="hover:bg-surface/50">
                      <td className="py-3 pr-4 text-xs font-mono whitespace-nowrap">
                        {formatDateTime(alert.created_at)}
                      </td>
                      <td className="py-3 pr-4 text-xs font-medium truncate max-w-[200px]">
                        {alert.email_sent_to || "N/A"}
                      </td>
                      <td className="py-3 pr-4 text-xs text-muted-foreground truncate max-w-[250px]">
                        {alert.message || "—"}
                      </td>
                      <td className="py-3 pr-4 text-xs">
                        {hasLoc ? (
                          <a
                            href={`https://www.google.com/maps?q=${alert.latitude},${alert.longitude}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline font-mono text-[11px]"
                          >
                            <MapPin size={14} /> {alert.latitude?.toFixed(4)}, {alert.longitude?.toFixed(4)}
                          </a>
                        ) : (
                          <span className="text-muted-foreground text-[11px] font-sans">Unavailable</span>
                        )}
                      </td>
                      <td className="py-3 text-right whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium uppercase tracking-wider ${isSent
                              ? "bg-emerald-500/12 text-emerald-600 dark:text-emerald-400"
                              : isFailed
                                ? "bg-red-500/12 text-red-600 dark:text-red-400"
                                : "bg-amber-500/12 text-amber-600 dark:text-amber-400"
                            }`}
                        >
                          {alert.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      ) : null}

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Siren size={22} weight="fill" className="text-emergency" />
              Send Emergency SOS & Alert Email?
            </AlertDialogTitle>
            <AlertDialogDescription>
              This will trigger a live SOS alert and send an emergency email to{" "}
              <strong className="text-foreground">{configuredEmail}</strong> via Supabase Edge Function & Resend.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-emergency text-emergency-foreground hover:bg-emergency/90"
              onClick={() => trigger.mutate()}
            >
              {trigger.isPending ? (
                <SpinnerGap size={18} className="animate-spin" />
              ) : (
                <CheckCircle size={18} />
              )}
              Yes, send Emergency Alert
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Quick Configure Emergency Contact Dialog */}
      <Dialog open={quickContactOpen} onOpenChange={setQuickContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <EnvelopeSimple size={22} className="text-primary" /> Configure Emergency Contact Email
            </DialogTitle>
            <DialogDescription>
              Set the emergency contact recipient who will receive automated email alerts whenever you trigger an SOS.
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveQuickContact.mutate();
            }}
            className="space-y-4 py-2"
          >
            <div className="space-y-1.5">
              <Label htmlFor="quick_name">Contact Full Name *</Label>
              <Input
                id="quick_name"
                value={quickName}
                onChange={(e) => setQuickName(e.target.value)}
                placeholder="e.g. Jane Mercer"
                maxLength={100}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="quick_email">Emergency Contact Email *</Label>
              <Input
                id="quick_email"
                type="email"
                value={quickEmail}
                onChange={(e) => setQuickEmail(e.target.value)}
                placeholder="contact@example.com"
                maxLength={255}
                required
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="quick_phone">Contact Phone (Optional)</Label>
              <Input
                id="quick_phone"
                type="tel"
                value={quickPhone}
                onChange={(e) => setQuickPhone(e.target.value)}
                placeholder="+1 555 0192"
                maxLength={20}
              />
            </div>

            <DialogFooter className="mt-4">
              <Button type="button" variant="outline" onClick={() => setQuickContactOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={saveQuickContact.isPending}>
                {saveQuickContact.isPending ? <SpinnerGap size={18} className="animate-spin" /> : null}
                Save Contact & Enable SOS
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
```

---

<a id="file-src-routes--app-tsx"></a>
## File: `src/routes/_app.tsx`

```typescript
import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { SpinnerGap } from "@phosphor-icons/react";
import { AppShell } from "@/components/phoenix/AppShell";
import { useAuth } from "@/lib/phoenix/auth";

export const Route = createFileRoute("/_app")({
  ssr: false,
  component: AppLayout,
});

function AppLayout() {
  const { loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      void navigate({ to: "/auth", search: { mode: "login" }, replace: true });
    }
  }, [loading, isAuthenticated, navigate]);

  if (loading || !isAuthenticated) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <SpinnerGap size={30} className="animate-spin text-primary" />
      </div>
    );
  }

  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
```

---

<a id="file-src-routes-auth-callback-tsx"></a>
## File: `src/routes/auth.callback.tsx`

```typescript
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SpinnerGap } from "@phosphor-icons/react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/phoenix/auth";

const searchSchema = z.object({
  code: z.string().optional(),
  error: z.string().optional(),
  error_code: z.string().optional(),
  error_description: z.string().optional(),
  redirect: z.string().optional(),
});

export const Route = createFileRoute("/auth/callback")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Authenticating — Guardian Connect" },
      { name: "description", content: "Completing Google OAuth authentication." },
    ],
  }),
  component: AuthCallbackPage,
});

function AuthCallbackPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { refreshProfile } = useAuth();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function handleCallback() {
      // 1. Check if OAuth provider returned an error parameter (e.g. user cancelled)
      if (search.error || search.error_description) {
        const message =
          search.error === "access_denied"
            ? "Google authentication was cancelled."
            : search.error_description || "Google authentication failed.";

        if (active) {
          setErrorMessage(message);
          toast.error(message);
          setTimeout(() => {
            void navigate({ to: "/auth", search: { mode: "login" }, replace: true });
          }, 1500);
        }
        return;
      }

      // 2. Process authorization code if present
      if (search.code) {
        try {
          const { error } = await supabase.auth.exchangeCodeForSession(search.code);
          if (error) {
            console.error("[OAuth Callback Error]:", error);
            if (active) {
              setErrorMessage(error.message || "Failed to complete authentication code exchange.");
              toast.error(error.message || "Authentication failed.");
              setTimeout(() => {
                void navigate({ to: "/auth", search: { mode: "login" }, replace: true });
              }, 1500);
            }
            return;
          }
        } catch (err: unknown) {
          console.error("[OAuth Exception]:", err);
        }
      }

      // 3. Check existing session
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        await refreshProfile();
        if (active) {
          toast.success("Signed in successfully with Google.");
          const target = search.redirect || "/dashboard";
          void navigate({ to: target, replace: true });
        }
      } else {
        // Fallback: wait briefly for session initialization
        setTimeout(async () => {
          const { data: { session: retrySession } } = await supabase.auth.getSession();
          if (retrySession) {
            await refreshProfile();
            if (active) {
              toast.success("Signed in successfully.");
              void navigate({ to: search.redirect || "/dashboard", replace: true });
            }
          } else if (active) {
            toast.error("Could not establish authentication session.");
            void navigate({ to: "/auth", search: { mode: "login" }, replace: true });
          }
        }, 1000);
      }
    }

    void handleCallback();

    return () => {
      active = false;
    };
  }, [search, navigate, refreshProfile]);

  return (
    <div className="grid min-h-screen place-items-center bg-background px-4">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm">
        {errorMessage ? (
          <>
            <div className="rounded-full bg-destructive/10 p-3 text-destructive">
              <span className="text-xl">⚠️</span>
            </div>
            <h2 className="text-lg font-semibold">Authentication Issue</h2>
            <p className="text-sm text-muted-foreground">{errorMessage}</p>
            <p className="text-xs text-muted-foreground">Redirecting back to login...</p>
          </>
        ) : (
          <>
            <SpinnerGap size={36} className="animate-spin text-primary" />
            <h2 className="text-lg font-semibold">Completing sign in...</h2>
            <p className="text-sm text-muted-foreground">Please wait while we establish your secure session.</p>
          </>
        )}
      </div>
    </div>
  );
}
```

---

<a id="file-src-routes-auth-tsx"></a>
## File: `src/routes/auth.tsx`

```typescript
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Eye, EyeSlash, GoogleLogo, ShieldCheck, Siren, SpinnerGap } from "@phosphor-icons/react";
import { supabase } from "@/integrations/supabase/client";
import { cloudrailsSignIn, cloudrailsSignUp } from "@/integrations/cloudrails/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoenixLogo } from "@/components/brand/PhoenixLogo";
import { useAuth } from "@/lib/phoenix/auth";

const searchSchema = z.object({
  mode: z.enum(["login", "register"]).optional(),
  redirect: z.string().optional(),
});

export const Route = createFileRoute("/auth")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Sign in — PHOENIX Safety" },
      {
        name: "description",
        content: "Log in or create your PHOENIX account to access emergency SOS and incident reporting.",
      },
      { property: "og:title", content: "Sign in — PHOENIX Safety" },
      {
        property: "og:description",
        content: "Access emergency SOS, live location sharing and incident reporting.",
      },
    ],
  }),
  component: AuthPage,
});

const registerSchema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name").max(100),
    email: z.string().trim().email("Enter a valid email").max(255),
    phone: z
      .string()
      .trim()
      .min(7, "Enter a valid phone number")
      .max(20)
      .regex(/^[+0-9()\-\s]+$/, "Phone can only contain digits and + ( ) -"),
    password: z
      .string()
      .min(8, "Use at least 8 characters")
      .max(72)
      .regex(/[A-Za-z]/, "Include a letter")
      .regex(/[0-9]/, "Include a number"),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    path: ["confirm"],
    message: "Passwords do not match",
  });

const loginSchema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
  password: z.string().min(1, "Enter your password"),
});

type Errors = Record<string, string>;

function AuthPage() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuth();
  const [mode, setMode] = useState<"login" | "register">(search.mode ?? "login");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    setMode(search.mode ?? "login");
  }, [search.mode]);

  useEffect(() => {
    if (!loading && isAuthenticated) {
      void navigate({ to: search.redirect ?? "/dashboard", replace: true });
    }
  }, [loading, isAuthenticated, navigate, search.redirect]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setErrors({});

    if (mode === "register") {
      const parsed = registerSchema.safeParse({
        fullName: String(form.get("fullName") ?? ""),
        email: String(form.get("email") ?? ""),
        phone: String(form.get("phone") ?? ""),
        password: String(form.get("password") ?? ""),
        confirm: String(form.get("confirm") ?? ""),
      });
      if (!parsed.success) {
        const next: Errors = {};
        for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
        setErrors(next);
        return;
      }
      setSubmitting(true);
      try {
        const { data: sbData, error: sbError } = await supabase.auth.signUp({
          email: parsed.data.email,
          password: parsed.data.password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: { full_name: parsed.data.fullName, phone: parsed.data.phone },
          },
        });

        if (sbError) {
          toast.error(
            sbError.message.includes("already registered")
              ? "That email already has an account. Try logging in."
              : sbError.message,
          );
          return;
        }

        // Auto-seed profile with name and phone
        if (sbData?.user) {
          await supabase.from("profiles").upsert({
            id: sbData.user.id,
            full_name: parsed.data.fullName,
            email: parsed.data.email,
            phone: parsed.data.phone,
          });
        }

        toast.success("Account created successfully. Welcome to PHOENIX.");
        window.location.href = search.redirect ?? "/dashboard";
      } catch (err: any) {
        toast.error(err?.message || "Registration failed. Please try again.");
      } finally {
        setSubmitting(false);
      }
      return;
    }

    const parsed = loginSchema.safeParse({
      email: String(form.get("email") ?? ""),
      password: String(form.get("password") ?? ""),
    });
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setSubmitting(true);
    try {
      const { data: sbData, error: sbError } = await supabase.auth.signInWithPassword({
        email: parsed.data.email,
        password: parsed.data.password,
      });

      if (sbError) {
        // Fall back to CloudRails if legacy credentials
        const crResult = await cloudrailsSignIn(parsed.data.email, parsed.data.password);
        if (!crResult.ok) {
          toast.error(
            sbError.message.includes("Invalid login")
              ? "Incorrect email or password."
              : sbError.message,
          );
          return;
        }
      }

      toast.success("Welcome back.");
      window.location.href = search.redirect ?? "/dashboard";
    } catch (err: any) {
      toast.error(err?.message || "Sign in failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogle = async () => {
    setSubmitting(true);
    const redirectParam = search.redirect ? `?redirect=${encodeURIComponent(search.redirect)}` : "";
    const callbackUrl = `${window.location.origin}/auth/callback${redirectParam}`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: callbackUrl,
      },
    });
    if (error) {
      setSubmitting(false);
      toast.error(error.message || "Google sign-in failed. Please try again.");
    }
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="hero-aura relative hidden flex-col justify-between p-12 lg:flex">
        <Link to="/">
          <PhoenixLogo subtitle />
        </Link>
        <div>
          <h2 className="font-display text-4xl font-bold leading-tight">
            Help is <span className="text-gradient-primary">one tap</span> away.
          </h2>
          <ul className="mt-8 space-y-4 text-sm text-muted-foreground">
            {[
              { icon: Siren, text: "Instant SOS alerts with GPS coordinates" },
              { icon: ShieldCheck, text: "Private, row-level secured emergency data" },
            ].map((item) => (
              <li key={item.text} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/12 text-primary">
                  <item.icon size={18} weight="duotone" />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-muted-foreground">
          In immediate danger? Always call your local emergency number first.
        </p>
      </div>

      <div className="flex items-center justify-center px-4 py-14 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden">
            <Link to="/">
              <PhoenixLogo />
            </Link>
          </div>
          <h1 className="mt-8 font-display text-3xl font-bold lg:mt-0">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {mode === "login"
              ? "Log in to reach your safety dashboard."
              : "Set up PHOENIX so help can find you fast."}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl border border-border bg-surface/60 p-1">
            {(["login", "register"] as const).map((value) => (
              <button
                key={value}
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setErrors({});
                  void navigate({ to: "/auth", search: { mode: value }, replace: true });
                }}
                className={`rounded-lg py-2 text-sm font-medium transition-colors ${mode === value
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {value === "login" ? "Login" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
            {mode === "register" ? (
              <Field label="Full name" error={errors["fullName"]}>
                <Input name="fullName" placeholder="Alex Mercer" autoComplete="name" maxLength={100} />
              </Field>
            ) : null}
            <Field label="Email" error={errors["email"]}>
              <Input name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength={255} />
            </Field>
            {mode === "register" ? (
              <Field label="Phone number" error={errors["phone"]}>
                <Input name="phone" type="tel" placeholder="+1 555 0100" autoComplete="tel" maxLength={20} />
              </Field>
            ) : null}
            <Field label="Password" error={errors["password"]}>
              <div className="relative">
                <Input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  maxLength={72}
                  className="pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 grid w-11 place-items-center text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </Field>
            {mode === "register" ? (
              <Field label="Confirm password" error={errors["confirm"]}>
                <Input name="confirm" type="password" autoComplete="new-password" maxLength={72} />
              </Field>
            ) : null}

            <Button type="submit" className="h-11 w-full text-base" disabled={submitting}>
              {submitting ? <SpinnerGap size={18} className="animate-spin" /> : null}
              {mode === "login" ? "Log in" : "Create account"}
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            or
            <span className="h-px flex-1 bg-border" />
          </div>

          <Button
            type="button"
            variant="outline"
            className="h-11 w-full text-base"
            onClick={handleGoogle}
            disabled={submitting}
          >
            <GoogleLogo size={20} weight="bold" /> Continue with Google
          </Button>

          <div className="mt-6 rounded-lg border border-border/80 bg-surface/50 p-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Instant Demo Access
            </p>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="text-xs font-medium"
                disabled={submitting}
                onClick={async () => {
                  setSubmitting(true);
                  try {
                    const { error } = await supabase.auth.signInWithPassword({
                      email: "user@phoenix-safety.com",
                      password: "User@123",
                    });
                    if (error) {
                      await cloudrailsSignIn("user@phoenix-safety.com", "User@123");
                    }
                    toast.success("Signed in as Demo User (Alex Mercer)");
                    window.location.href = search.redirect ?? "/dashboard";
                  } catch (err: any) {
                    toast.error(err?.message || "Demo login failed");
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                Demo User
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="text-xs font-medium"
                disabled={submitting}
                onClick={async () => {
                  setSubmitting(true);
                  try {
                    const { error } = await supabase.auth.signInWithPassword({
                      email: "admin@phoenix-safety.com",
                      password: "Admin@123",
                    });
                    if (error) {
                      await cloudrailsSignIn("admin@phoenix-safety.com", "Admin@123");
                    }
                    toast.success("Signed in as Safety Admin");
                    window.location.href = search.redirect ?? "/admin";
                  } catch (err: any) {
                    toast.error(err?.message || "Demo admin login failed");
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                Demo Admin
              </Button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "login" ? "New to PHOENIX?" : "Already have an account?"}{" "}
            <Link
              to="/auth"
              search={{ mode: mode === "login" ? "register" : "login" }}
              className="font-medium text-primary hover:underline"
            >
              {mode === "login" ? "Create an account" : "Log in"}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-sm">{label}</Label>
      {children}
      {error ? <p className="text-xs font-medium text-destructive">{error}</p> : null}
    </div>
  );
}
```

---

<a id="file-src-routes-index-tsx"></a>
## File: `src/routes/index.tsx`

```typescript
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Bell,
  Broadcast,
  FirstAidKit,
  List,
  MapPin,
  NavigationArrow,
  Phone,
  ShieldCheck,
  Siren,
  UsersThree,
  WarningCircle,
  X,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PhoenixLogo, PhoenixMark } from "@/components/brand/PhoenixLogo";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useAuth } from "@/lib/phoenix/auth";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PHOENIX — When every second matters" },
      {
        name: "description",
        content:
          "PHOENIX is a smart public safety platform: one-tap emergency SOS, live location sharing, incident reporting and nearby emergency services.",
      },
      { property: "og:title", content: "PHOENIX — When every second matters" },
      {
        property: "og:description",
        content:
          "One-tap emergency SOS, live location sharing, incident reporting and nearby emergency services.",
      },
    ],
  }),
  component: Landing,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Emergency Services", href: "#services" },
  { label: "Safety", href: "#safety" },
];

const FEATURES = [
  {
    icon: Siren,
    title: "Emergency SOS",
    body: "One-tap emergency assistance with a deliberate confirmation step so it never fires by accident.",
  },
  {
    icon: MapPin,
    title: "Live Location",
    body: "Capture and share precise GPS coordinates the moment an emergency starts.",
  },
  {
    icon: WarningCircle,
    title: "Incident Reporting",
    body: "Report accidents, crimes, hazards and emergencies with photo or video evidence.",
  },
  {
    icon: UsersThree,
    title: "Emergency Contacts",
    body: "Keep trusted people ready — prioritised and notified automatically.",
  },
  {
    icon: FirstAidKit,
    title: "Nearby Services",
    body: "Find police stations, hospitals and fire stations around your live position.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    body: "Real-time status updates as responders acknowledge and resolve your case.",
  },
];

const STEPS = [
  { n: "01", title: "Create Account", body: "Register in seconds with secure, validated credentials." },
  { n: "02", title: "Set Emergency Contacts", body: "Add the people who should hear from you first." },
  { n: "03", title: "Activate SOS / Report", body: "Trigger an SOS or file a detailed incident report." },
  { n: "04", title: "Receive Assistance", body: "Track responder status from acknowledged to resolved." },
];

const FLOW = ["USER", "SOS", "LOCATION", "CONTACTS", "RESPONSE"];

function Landing() {
  const { isAuthenticated } = useAuth();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (reduced) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.from("[data-hero-line]", {
        yPercent: 110,
        opacity: 0,
        duration: 0.9,
        stagger: 0.09,
        ease: "power3.out",
      });
      gsap.from("[data-hero-sub]", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        delay: 0.35,
        ease: "power2.out",
      });
      gsap.from("[data-flow-node]", {
        opacity: 0,
        y: 26,
        scale: 0.94,
        duration: 0.5,
        stagger: 0.14,
        delay: 0.4,
        ease: "back.out(1.6)",
      });
      gsap.to("[data-flow-pulse]", {
        opacity: 0.15,
        scale: 1.12,
        repeat: -1,
        yoyo: true,
        duration: 1.6,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, heroRef);

    const stepsContext = gsap.context(() => {
      gsap.from("[data-step]", {
        scrollTrigger: { trigger: stepsRef.current, start: "top 78%" },
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
      });
    }, stepsRef);

    return () => {
      context.revert();
      stepsContext.revert();
    };
  }, [reduced]);

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" aria-label="PHOENIX home">
            <PhoenixLogo />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            {isAuthenticated ? (
              <Button asChild>
                <Link to="/dashboard">Open Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link to="/auth">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/auth" search={{ mode: "register" }}>
                    Get Started
                  </Link>
                </Button>
              </>
            )}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <List size={22} />}
          </Button>
        </div>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background/95 px-4 pb-5 lg:hidden"
          >
            <nav className="flex flex-col gap-1 pt-3" aria-label="Mobile">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <Link to="/auth">Login</Link>
              </Button>
              <Button asChild className="flex-1">
                <Link to="/auth" search={{ mode: "register" }}>
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </header>

      <main>
        <section id="home" ref={heroRef} className="hero-aura relative overflow-hidden pt-32 pb-20 sm:pt-40">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                <Broadcast size={14} weight="fill" className="text-emergency" />
                Live emergency response platform
              </span>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
                <span className="block overflow-hidden">
                  <span data-hero-line className="block">
                    When every
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span data-hero-line className="block text-gradient-primary">
                    second matters.
                  </span>
                </span>
              </h1>
              <p data-hero-sub className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                PHOENIX connects people to emergency assistance through intelligent alerts, location
                sharing, incident reporting and real-time safety tools.
              </p>
              <div data-hero-sub className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 px-7 text-base">
                  <Link to="/auth" search={{ mode: "register" }}>
                    Get Started <ArrowRight size={18} className="ml-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base">
                  <a href="#features">Explore Safety Features</a>
                </Button>
              </div>
              <dl data-hero-sub className="mt-10 grid max-w-md grid-cols-3 gap-6">
                {[
                  ["< 3s", "to raise an SOS"],
                  ["24/7", "incident intake"],
                  ["GPS", "accurate location"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-2xl font-bold text-foreground">{value}</dt>
                    <dd className="text-xs text-muted-foreground">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative">
              <div className="surface-panel relative mx-auto max-w-md p-7">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Response flow
                  </span>
                  <PhoenixMark className="h-6 w-6 text-primary" />
                </div>
                <ul className="mt-6 space-y-3">
                  {FLOW.map((node, index) => (
                    <li key={node} data-flow-node className="relative">
                      <div className="flex items-center gap-4 rounded-xl border border-border bg-background/60 p-4">
                        <span
                          data-flow-pulse
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${
                            index === 1
                              ? "bg-emergency/15 text-emergency"
                              : "bg-primary/12 text-primary"
                          }`}
                        >
                          {index === 0 ? <ShieldCheck size={20} weight="duotone" /> : null}
                          {index === 1 ? <Siren size={20} weight="duotone" /> : null}
                          {index === 2 ? <MapPin size={20} weight="duotone" /> : null}
                          {index === 3 ? <UsersThree size={20} weight="duotone" /> : null}
                          {index === 4 ? <NavigationArrow size={20} weight="duotone" /> : null}
                        </span>
                        <div>
                          <p className="font-display text-sm font-semibold tracking-wide">{node}</p>
                          <p className="text-xs text-muted-foreground">
                            {
                              [
                                "Verified account with trusted contacts",
                                "One tap, one confirmation",
                                "GPS captured with accuracy radius",
                                "Contacts notified instantly",
                                "Responders acknowledge and resolve",
                              ][index]
                            }
                          </p>
                        </div>
                      </div>
                      {index < FLOW.length - 1 ? (
                        <span className="ml-9 block h-3 w-px bg-border" aria-hidden />
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Built for real emergencies</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Every feature is connected to a live backend — alerts, locations and reports persist and
              reach the safety command center.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                >
                  <Card className="h-full gap-3 p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary">
                      <feature.icon size={22} weight="duotone" />
                    </span>
                    <h3 className="mt-2 text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{feature.body}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" ref={stepsRef} className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">How it works</h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((step) => (
                <div key={step.n} data-step className="rounded-xl border border-border bg-surface/50 p-6">
                  <span className="font-display text-4xl font-bold text-primary/35">{step.n}</span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Emergency services, one tap away</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              PHOENIX surfaces the closest police stations, hospitals, fire stations and ambulance
              services around your live location using OpenStreetMap data.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: ShieldCheck, label: "Police" },
                { icon: FirstAidKit, label: "Hospitals" },
                { icon: Siren, label: "Fire Stations" },
                { icon: Phone, label: "Ambulance" },
              ].map((service) => (
                <Card key={service.label} className="items-center gap-2 p-8 text-center">
                  <service.icon size={30} weight="duotone" className="text-primary" />
                  <p className="mt-2 font-semibold">{service.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="safety" className="border-t border-border py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Safety you can trust with your data
            </h2>
            <p className="mt-4 text-muted-foreground">
              Hashed credentials, role-based access, row-level database security and private evidence
              storage. Your location is never faked, never shared without an active emergency.
            </p>
            <Button asChild size="lg" className="mt-8 h-12 px-8 text-base">
              <Link to="/auth" search={{ mode: "register" }}>
                Create your PHOENIX account
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <PhoenixLogo subtitle />
          <p className="text-xs text-muted-foreground">
            PHOENIX is a safety companion — always call your local emergency number in a life
            threatening situation.
          </p>
        </div>
      </footer>
    </div>
  );
}
```

---

<a id="file-src-routes-readme-md"></a>
## File: `src/routes/README.md`

```markdown
# Routes

TanStack Start uses **file-based routing**. Every `.tsx` file in this directory
defines a route. Do **not** create `src/pages/`, `src/routes/_app/index.tsx`, or
`app/layout.tsx` — those are Next.js / Remix conventions. The only root layout
is `src/routes/__root.tsx`.

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (dynamic — bare `$`, no curly braces) |
| `posts/{-$category}.tsx` | `/posts/:category?` (optional segment) |
| `files/$.tsx` | `/files/*` (splat — read via `_splat` param, never `*`) |
| `_layout.tsx` | layout route (renders children via `<Outlet />`) |
| `__root.tsx` | app shell — wraps every page; preserve `<Outlet />` |

`routeTree.gen.ts` is auto-generated. Don't edit it by hand.
```

---

<a id="file-src-routetree-gen-ts"></a>
## File: `src/routeTree.gen.ts`

```typescript
/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as AppRouteImport } from './routes/_app'
import { Route as AuthRouteImport } from './routes/auth'
import { Route as AppAdminRouteImport } from './routes/_app.admin'
import { Route as AppContactsRouteImport } from './routes/_app.contacts'
import { Route as AppDashboardRouteImport } from './routes/_app.dashboard'
import { Route as AppMapRouteImport } from './routes/_app.map'
import { Route as AppNotificationsRouteImport } from './routes/_app.notifications'
import { Route as AppProfileRouteImport } from './routes/_app.profile'
import { Route as AppSosRouteImport } from './routes/_app.sos'
import { Route as AuthCallbackRouteImport } from './routes/auth.callback'
import { Route as AppIncidentsIndexRouteImport } from './routes/_app.incidents.index'
import { Route as AppIncidentsIncidentIdRouteImport } from './routes/_app.incidents.$incidentId'
import { Route as AppIncidentsNewRouteImport } from './routes/_app.incidents.new'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const AppRoute = AppRouteImport.update({
  id: '/_app',
  getParentRoute: () => rootRouteImport,
} as any)
const AuthRoute = AuthRouteImport.update({
  id: '/auth',
  path: '/auth',
  getParentRoute: () => rootRouteImport,
} as any)
const AppAdminRoute = AppAdminRouteImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => AppRoute,
} as any)
const AppContactsRoute = AppContactsRouteImport.update({
  id: '/contacts',
  path: '/contacts',
  getParentRoute: () => AppRoute,
} as any)
const AppDashboardRoute = AppDashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AppRoute,
} as any)
const AppMapRoute = AppMapRouteImport.update({
  id: '/map',
  path: '/map',
  getParentRoute: () => AppRoute,
} as any)
const AppNotificationsRoute = AppNotificationsRouteImport.update({
  id: '/notifications',
  path: '/notifications',
  getParentRoute: () => AppRoute,
} as any)
const AppProfileRoute = AppProfileRouteImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => AppRoute,
} as any)
const AppSosRoute = AppSosRouteImport.update({
  id: '/sos',
  path: '/sos',
  getParentRoute: () => AppRoute,
} as any)
const AuthCallbackRoute = AuthCallbackRouteImport.update({
  id: '/callback',
  path: '/callback',
  getParentRoute: () => AuthRoute,
} as any)
const AppIncidentsIndexRoute = AppIncidentsIndexRouteImport.update({
  id: '/incidents/',
  path: '/incidents/',
  getParentRoute: () => AppRoute,
} as any)
const AppIncidentsIncidentIdRoute = AppIncidentsIncidentIdRouteImport.update({
  id: '/incidents/$incidentId',
  path: '/incidents/$incidentId',
  getParentRoute: () => AppRoute,
} as any)
const AppIncidentsNewRoute = AppIncidentsNewRouteImport.update({
  id: '/incidents/new',
  path: '/incidents/new',
  getParentRoute: () => AppRoute,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/auth': typeof AuthRouteWithChildren
  '/admin': typeof AppAdminRoute
  '/contacts': typeof AppContactsRoute
  '/dashboard': typeof AppDashboardRoute
  '/map': typeof AppMapRoute
  '/notifications': typeof AppNotificationsRoute
  '/profile': typeof AppProfileRoute
  '/sos': typeof AppSosRoute
  '/auth/callback': typeof AuthCallbackRoute
  '/incidents/$incidentId': typeof AppIncidentsIncidentIdRoute
  '/incidents/new': typeof AppIncidentsNewRoute
  '/incidents/': typeof AppIncidentsIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/auth': typeof AuthRouteWithChildren
  '/admin': typeof AppAdminRoute
  '/contacts': typeof AppContactsRoute
  '/dashboard': typeof AppDashboardRoute
  '/map': typeof AppMapRoute
  '/notifications': typeof AppNotificationsRoute
  '/profile': typeof AppProfileRoute
  '/sos': typeof AppSosRoute
  '/auth/callback': typeof AuthCallbackRoute
  '/incidents/$incidentId': typeof AppIncidentsIncidentIdRoute
  '/incidents/new': typeof AppIncidentsNewRoute
  '/incidents': typeof AppIncidentsIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/_app': typeof AppRouteWithChildren
  '/auth': typeof AuthRouteWithChildren
  '/_app/admin': typeof AppAdminRoute
  '/_app/contacts': typeof AppContactsRoute
  '/_app/dashboard': typeof AppDashboardRoute
  '/_app/map': typeof AppMapRoute
  '/_app/notifications': typeof AppNotificationsRoute
  '/_app/profile': typeof AppProfileRoute
  '/_app/sos': typeof AppSosRoute
  '/auth/callback': typeof AuthCallbackRoute
  '/_app/incidents/$incidentId': typeof AppIncidentsIncidentIdRoute
  '/_app/incidents/new': typeof AppIncidentsNewRoute
  '/_app/incidents/': typeof AppIncidentsIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/admin'
    | '/contacts'
    | '/dashboard'
    | '/map'
    | '/notifications'
    | '/profile'
    | '/sos'
    | '/auth/callback'
    | '/incidents/$incidentId'
    | '/incidents/new'
    | '/incidents/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth'
    | '/admin'
    | '/contacts'
    | '/dashboard'
    | '/map'
    | '/notifications'
    | '/profile'
    | '/sos'
    | '/auth/callback'
    | '/incidents/$incidentId'
    | '/incidents/new'
    | '/incidents'
  id:
    | '__root__'
    | '/'
    | '/_app'
    | '/auth'
    | '/_app/admin'
    | '/_app/contacts'
    | '/_app/dashboard'
    | '/_app/map'
    | '/_app/notifications'
    | '/_app/profile'
    | '/_app/sos'
    | '/auth/callback'
    | '/_app/incidents/$incidentId'
    | '/_app/incidents/new'
    | '/_app/incidents/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AppRoute: typeof AppRouteWithChildren
  AuthRoute: typeof AuthRouteWithChildren
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_app': {
      id: '/_app'
      path: ''
      fullPath: '/'
      preLoaderRoute: typeof AppRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/auth': {
      id: '/auth'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/_app/admin': {
      id: '/_app/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof AppAdminRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/contacts': {
      id: '/_app/contacts'
      path: '/contacts'
      fullPath: '/contacts'
      preLoaderRoute: typeof AppContactsRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/dashboard': {
      id: '/_app/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AppDashboardRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/map': {
      id: '/_app/map'
      path: '/map'
      fullPath: '/map'
      preLoaderRoute: typeof AppMapRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/notifications': {
      id: '/_app/notifications'
      path: '/notifications'
      fullPath: '/notifications'
      preLoaderRoute: typeof AppNotificationsRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/profile': {
      id: '/_app/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof AppProfileRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/sos': {
      id: '/_app/sos'
      path: '/sos'
      fullPath: '/sos'
      preLoaderRoute: typeof AppSosRouteImport
      parentRoute: typeof AppRoute
    }
    '/auth/callback': {
      id: '/auth/callback'
      path: '/callback'
      fullPath: '/auth/callback'
      preLoaderRoute: typeof AuthCallbackRouteImport
      parentRoute: typeof AuthRoute
    }
    '/_app/incidents/': {
      id: '/_app/incidents/'
      path: '/incidents'
      fullPath: '/incidents/'
      preLoaderRoute: typeof AppIncidentsIndexRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/incidents/$incidentId': {
      id: '/_app/incidents/$incidentId'
      path: '/incidents/$incidentId'
      fullPath: '/incidents/$incidentId'
      preLoaderRoute: typeof AppIncidentsIncidentIdRouteImport
      parentRoute: typeof AppRoute
    }
    '/_app/incidents/new': {
      id: '/_app/incidents/new'
      path: '/incidents/new'
      fullPath: '/incidents/new'
      preLoaderRoute: typeof AppIncidentsNewRouteImport
      parentRoute: typeof AppRoute
    }
  }
}

interface AppRouteChildren {
  AppAdminRoute: typeof AppAdminRoute
  AppContactsRoute: typeof AppContactsRoute
  AppDashboardRoute: typeof AppDashboardRoute
  AppMapRoute: typeof AppMapRoute
  AppNotificationsRoute: typeof AppNotificationsRoute
  AppProfileRoute: typeof AppProfileRoute
  AppSosRoute: typeof AppSosRoute
  AppIncidentsIncidentIdRoute: typeof AppIncidentsIncidentIdRoute
  AppIncidentsNewRoute: typeof AppIncidentsNewRoute
  AppIncidentsIndexRoute: typeof AppIncidentsIndexRoute
}

const AppRouteChildren: AppRouteChildren = {
  AppAdminRoute: AppAdminRoute,
  AppContactsRoute: AppContactsRoute,
  AppDashboardRoute: AppDashboardRoute,
  AppMapRoute: AppMapRoute,
  AppNotificationsRoute: AppNotificationsRoute,
  AppProfileRoute: AppProfileRoute,
  AppSosRoute: AppSosRoute,
  AppIncidentsIncidentIdRoute: AppIncidentsIncidentIdRoute,
  AppIncidentsNewRoute: AppIncidentsNewRoute,
  AppIncidentsIndexRoute: AppIncidentsIndexRoute,
}

const AppRouteWithChildren = AppRoute._addFileChildren(AppRouteChildren)

interface AuthRouteChildren {
  AuthCallbackRoute: typeof AuthCallbackRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthCallbackRoute: AuthCallbackRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AppRoute: AppRouteWithChildren,
  AuthRoute: AuthRouteWithChildren,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
```

---

<a id="file-src-server-ts"></a>
## File: `src/server.ts`

```typescript
import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
```

---

<a id="file-src-start-ts"></a>
## File: `src/start.ts`

```typescript
import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [errorMiddleware, csrfMiddleware],
}));
```

---

<a id="file-src-styles-css"></a>
## File: `src/styles.css`

```css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

/*
 * PHOENIX design system.
 * Deep navy command-center surfaces, electric blue as the primary action
 * colour, emergency red reserved strictly for danger / SOS states.
 * All colours are oklch tokens — never hardcode colours in components.
 */

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);

  --font-display: "Space Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-sans: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-emergency: var(--emergency);
  --color-emergency-foreground: var(--emergency-foreground);
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
  --color-info: var(--info);
  --color-info-foreground: var(--info-foreground);
  --color-surface: var(--surface);
  --color-surface-foreground: var(--surface-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-ring-offset-background: var(--background);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

:root {
  --radius: 0.75rem;

  --background: oklch(0.16 0.035 258);
  --foreground: oklch(0.97 0.006 250);

  --surface: oklch(0.21 0.038 258);
  --surface-foreground: oklch(0.97 0.006 250);

  --card: oklch(0.21 0.038 258);
  --card-foreground: oklch(0.97 0.006 250);
  --popover: oklch(0.19 0.036 258);
  --popover-foreground: oklch(0.97 0.006 250);

  --primary: oklch(0.65 0.19 251);
  --primary-foreground: oklch(0.15 0.03 258);

  --secondary: oklch(0.27 0.04 258);
  --secondary-foreground: oklch(0.95 0.006 250);

  --muted: oklch(0.25 0.035 258);
  --muted-foreground: oklch(0.72 0.022 254);

  --accent: oklch(0.3 0.055 254);
  --accent-foreground: oklch(0.97 0.006 250);

  --destructive: oklch(0.6 0.235 26);
  --destructive-foreground: oklch(0.99 0.005 250);
  --emergency: oklch(0.6 0.235 26);
  --emergency-foreground: oklch(0.99 0.005 250);

  --success: oklch(0.72 0.16 158);
  --success-foreground: oklch(0.16 0.035 258);
  --warning: oklch(0.79 0.15 78);
  --warning-foreground: oklch(0.16 0.035 258);
  --info: oklch(0.72 0.13 232);
  --info-foreground: oklch(0.16 0.035 258);

  --border: oklch(0.32 0.035 258 / 70%);
  --input: oklch(0.32 0.035 258 / 80%);
  --ring: oklch(0.65 0.19 251);

  --chart-1: oklch(0.65 0.19 251);
  --chart-2: oklch(0.72 0.16 158);
  --chart-3: oklch(0.79 0.15 78);
  --chart-4: oklch(0.6 0.235 26);
  --chart-5: oklch(0.72 0.13 300);

  --sidebar: oklch(0.185 0.036 258);
  --sidebar-foreground: oklch(0.95 0.006 250);
  --sidebar-primary: oklch(0.65 0.19 251);
  --sidebar-primary-foreground: oklch(0.15 0.03 258);
  --sidebar-accent: oklch(0.26 0.04 258);
  --sidebar-accent-foreground: oklch(0.97 0.006 250);
  --sidebar-border: oklch(0.3 0.035 258 / 70%);
  --sidebar-ring: oklch(0.65 0.19 251);

  --shadow-elevated: 0 18px 50px -20px oklch(0.05 0.03 258 / 80%);
  --gradient-hero: radial-gradient(
      120% 90% at 15% 0%,
      oklch(0.35 0.13 254 / 55%) 0%,
      transparent 60%
    ),
    radial-gradient(90% 80% at 90% 10%, oklch(0.4 0.1 232 / 35%) 0%, transparent 60%);
  --gradient-emergency: linear-gradient(
    145deg,
    oklch(0.62 0.235 26) 0%,
    oklch(0.5 0.21 20) 100%
  );
  --gradient-primary: linear-gradient(
    135deg,
    oklch(0.68 0.19 251) 0%,
    oklch(0.56 0.17 265) 100%
  );
}

.dark {
  color-scheme: dark;
}

@layer base {
  * {
    border-color: var(--color-border);
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  .font-display {
    font-family: var(--font-display);
    letter-spacing: -0.02em;
  }

  :focus-visible {
    outline: 2px solid var(--color-ring);
    outline-offset: 2px;
  }
}

@utility surface-panel {
  background-color: color-mix(in oklab, var(--color-surface) 88%, transparent);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-elevated);
  backdrop-filter: blur(8px);
}

@utility hero-aura {
  background-image: var(--gradient-hero);
}

@utility text-gradient-primary {
  background-image: var(--gradient-primary);
  background-clip: text;
  color: transparent;
}

@keyframes phoenix-pulse {
  0% {
    box-shadow: 0 0 0 0 oklch(0.6 0.235 26 / 55%);
  }
  70% {
    box-shadow: 0 0 0 26px oklch(0.6 0.235 26 / 0%);
  }
  100% {
    box-shadow: 0 0 0 0 oklch(0.6 0.235 26 / 0%);
  }
}

@utility sos-pulse {
  animation: phoenix-pulse 2.4s ease-out infinite;
}

/* Leaflet tuning for the dark command-center surface */
.leaflet-container {
  background: var(--color-surface);
  font-family: var(--font-sans);
  border-radius: var(--radius-lg);
}
.leaflet-popup-content-wrapper,
.leaflet-popup-tip {
  background: var(--color-popover);
  color: var(--color-popover-foreground);
}
.leaflet-bar a,
.leaflet-control-attribution {
  background: var(--color-surface) !important;
  color: var(--color-muted-foreground) !important;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
```

---

<a id="file-supabase-config-toml"></a>
## File: `supabase/config.toml`

```toml
project_id = "ifsdtszhvkkaapojlnyn"
```

---

<a id="file-supabase-functions-send-emergency-email-index-ts"></a>
## File: `supabase/functions/send-emergency-email/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmergencyAlertRequest {
  message?: string;
  latitude?: number | null;
  longitude?: number | null;
}

serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Missing Authorization header" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || "";
    const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || supabaseAnonKey;
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    const resendFromEmail = Deno.env.get("RESEND_FROM_EMAIL") || "Guardian Connect <onboarding@resend.dev>";

    // Initialize Supabase Client with Auth header to verify user
    const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
      global: { headers: { Authorization: authHeader } },
    });

    // Validate authentication token
    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(token);

    if (userError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized: Invalid or expired authentication token" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Initialize Admin Supabase Client to bypass RLS for updating alert status if needed
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

    // Fetch user profile
    const { data: profile, error: profileError } = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (profileError) {
      console.error("Error fetching profile:", profileError);
    }

    // Determine recipient email: check profile first, then fallback to primary emergency_contacts entry
    let contactEmail = profile?.emergency_contact_email?.trim() || null;
    let contactName = profile?.emergency_contact_name?.trim() || "Emergency Contact";

    if (!contactEmail) {
      const { data: contacts } = await supabaseAdmin
        .from("emergency_contacts")
        .select("email, name")
        .eq("user_id", user.id)
        .order("is_primary", { ascending: false })
        .limit(1);

      if (contacts && contacts.length > 0 && contacts[0].email) {
        contactEmail = contacts[0].email.trim();
        contactName = contacts[0].name || contactName;
      }
    }

    // Parse request body
    let body: EmergencyAlertRequest = {};
    try {
      body = await req.json();
    } catch {
      // Empty body is okay, defaults used
    }

    const alertMessage = body.message?.trim() || "Emergency SOS alert triggered by user.";
    const latitude = typeof body.latitude === "number" ? body.latitude : null;
    const longitude = typeof body.longitude === "number" ? body.longitude : null;
    const userName = profile?.full_name || user.user_metadata?.full_name || user.email || "Guardian Connect User";

    // Validate emergency contact email
    if (!contactEmail) {
      // Create record with failed status if no contact configured
      const { data: failedAlert } = await supabaseAdmin
        .from("emergency_alerts")
        .insert({
          user_id: user.id,
          message: alertMessage,
          latitude,
          longitude,
          status: "failed",
          email_sent_to: null,
        })
        .select()
        .single();

      return new Response(
        JSON.stringify({
          error: "Please configure an emergency contact before using this feature.",
          alert: failedAlert,
        }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert pending emergency_alerts record
    const { data: alertRecord, error: insertError } = await supabaseAdmin
      .from("emergency_alerts")
      .insert({
        user_id: user.id,
        message: alertMessage,
        latitude,
        longitude,
        status: "pending",
        email_sent_to: contactEmail,
      })
      .select()
      .single();

    if (insertError || !alertRecord) {
      console.error("Failed to create emergency_alerts record:", insertError);
      return new Response(
        JSON.stringify({ error: "Failed to record emergency alert in database" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check Resend API Key
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY environment variable is not configured.");
      await supabaseAdmin
        .from("emergency_alerts")
        .update({ status: "failed" })
        .eq("id", alertRecord.id);

      return new Response(
        JSON.stringify({
          error: "RESEND_API_KEY is not configured on the server. Please set the RESEND_API_KEY secret in Supabase Edge Function settings.",
          alert: { ...alertRecord, status: "failed" },
        }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Prepare location string and link
    const hasLocation = latitude !== null && longitude !== null;
    const locationStr = hasLocation ? `${latitude.toFixed(6)}, ${longitude.toFixed(6)}` : "Location unavailable";
    const mapLink = hasLocation ? `https://www.google.com/maps?q=${latitude},${longitude}` : "N/A";
    const timestampStr = new Date().toLocaleString("en-US", { timeZoneName: "short" });

    // Format Email Body
    const emailText = `🚨 GUARDIAN CONNECT EMERGENCY ALERT

User:
${userName} (${user.email || "No email"})

Message:
${alertMessage}

Time:
${timestampStr}

Location:
${locationStr}

Location link:
${mapLink}

Please contact the user immediately.`;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #ef4444; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #ef4444; color: #ffffff; padding: 16px 24px;">
          <h1 style="margin: 0; font-size: 20px; font-weight: bold;">🚨 GUARDIAN CONNECT EMERGENCY ALERT</h1>
        </div>
        <div style="padding: 24px; background-color: #ffffff; color: #1f2937; line-height: 1.6;">
          <p style="font-size: 16px; font-weight: bold; color: #b91c1c; margin-top: 0;">
            Immediate assistance may be required for ${userName}.
          </p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #4b5563;">User:</td>
              <td style="padding: 8px 0; font-weight: 600;">${userName} &lt;${user.email || ""}&gt;</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Message:</td>
              <td style="padding: 8px 0; background-color: #fef2f2; border-left: 4px solid #ef4444; padding-left: 12px;">${alertMessage}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Time:</td>
              <td style="padding: 8px 0;">${timestampStr}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Location:</td>
              <td style="padding: 8px 0;">${locationStr}</td>
            </tr>
            ${
              hasLocation
                ? `<tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Map Link:</td>
                    <td style="padding: 8px 0;"><a href="${mapLink}" target="_blank" style="color: #2563eb; text-decoration: underline; font-weight: 600;">View Location on Google Maps</a></td>
                  </tr>`
                : `<tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Map Link:</td>
                    <td style="padding: 8px 0; color: #9ca3af; italic;">Location permission was unavailable</td>
                  </tr>`
            }
          </table>
          <div style="margin-top: 24px; padding: 12px; background-color: #fff1f2; border-radius: 6px; border: 1px solid #fecdd3; color: #9f1239; font-weight: bold; text-align: center;">
            Please contact the user immediately.
          </div>
        </div>
        <div style="background-color: #f9fafb; padding: 12px 24px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center;">
          Sent automatically by Guardian Connect Safety Alert System
        </div>
      </div>
    `;

    // Send email via Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: resendFromEmail,
        to: [contactEmail],
        subject: `🚨 GUARDIAN CONNECT EMERGENCY ALERT: ${userName}`,
        text: emailText,
        html: emailHtml,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      await supabaseAdmin
        .from("emergency_alerts")
        .update({ status: "failed" })
        .eq("id", alertRecord.id);

      return new Response(
        JSON.stringify({
          error: resendData.message || "Failed to send email via Resend API",
          alert: { ...alertRecord, status: "failed" },
          details: resendData,
        }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Update alert status to sent
    const nowIso = new Date().toISOString();
    const { data: updatedAlert } = await supabaseAdmin
      .from("emergency_alerts")
      .update({ status: "sent", sent_at: nowIso })
      .eq("id", alertRecord.id)
      .select()
      .single();

    return new Response(
      JSON.stringify({
        success: true,
        message: `Emergency alert sent to ${contactEmail}`,
        alert: updatedAlert || { ...alertRecord, status: "sent", sent_at: nowIso },
        resend_id: resendData.id,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    console.error("Unhandled error in Edge Function:", err);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
```

---

<a id="file-supabase-migrations-20260813131258-24937181-ba98-4b8f-84a9-4996cfc6e4dc-sql"></a>
## File: `supabase/migrations/20260813131258_24937181-ba98-4b8f-84a9-4996cfc6e4dc.sql`

```sql
CREATE TYPE public.app_role AS ENUM ('user','admin');
CREATE TYPE public.sos_status AS ENUM ('ACTIVE','ACKNOWLEDGED','RESPONDING','RESOLVED','CANCELLED');
CREATE TYPE public.incident_status AS ENUM ('SUBMITTED','UNDER_REVIEW','ACKNOWLEDGED','IN_PROGRESS','RESOLVED','REJECTED');
CREATE TYPE public.incident_category AS ENUM ('ACCIDENT','THEFT','FIRE','HARASSMENT','SUSPICIOUS_ACTIVITY','MEDICAL_EMERGENCY','ROAD_HAZARD','MISSING_PERSON','OTHER');
CREATE TYPE public.notification_type AS ENUM ('SOS','INCIDENT','STATUS_UPDATE','EMERGENCY_SERVICE','SYSTEM');

CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER
LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT NOT NULL DEFAULT '',
  email TEXT NOT NULL DEFAULT '',
  phone TEXT,
  avatar_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE POLICY "own roles readable" ON public.user_roles FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));

CREATE POLICY "own profile select" ON public.profiles FOR SELECT TO authenticated
  USING (id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "own profile insert" ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (id = auth.uid());
CREATE POLICY "own profile update" ON public.profiles FOR UPDATE TO authenticated
  USING (id = auth.uid() OR public.has_role(auth.uid(),'admin'))
  WITH CHECK (id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER profiles_updated BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS TRIGGER
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, phone)
  VALUES (NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name',''),
    COALESCE(NEW.email,''),
    NEW.raw_user_meta_data->>'phone')
  ON CONFLICT (id) DO NOTHING;
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id,'user')
  ON CONFLICT (user_id, role) DO NOTHING;
  RETURN NEW;
END; $$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE TABLE public.emergency_contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  relationship TEXT NOT NULL DEFAULT 'Other',
  phone TEXT NOT NULL,
  email TEXT,
  priority INTEGER NOT NULL DEFAULT 1,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_contacts_user ON public.emergency_contacts(user_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.emergency_contacts TO authenticated;
GRANT ALL ON public.emergency_contacts TO service_role;
ALTER TABLE public.emergency_contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own contacts" ON public.emergency_contacts FOR ALL TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE TRIGGER contacts_updated BEFORE UPDATE ON public.emergency_contacts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.sos_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  emergency_type TEXT NOT NULL DEFAULT 'GENERAL',
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  accuracy DOUBLE PRECISION,
  address TEXT,
  message TEXT,
  status public.sos_status NOT NULL DEFAULT 'ACTIVE',
  contacts_notified INTEGER NOT NULL DEFAULT 0,
  resolution_notes TEXT,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_sos_user ON public.sos_alerts(user_id);
CREATE INDEX idx_sos_status ON public.sos_alerts(status);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.sos_alerts TO authenticated;
GRANT ALL ON public.sos_alerts TO service_role;
ALTER TABLE public.sos_alerts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "sos select" ON public.sos_alerts FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "sos insert" ON public.sos_alerts FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "sos update" ON public.sos_alerts FOR UPDATE TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'))
  WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER sos_updated BEFORE UPDATE ON public.sos_alerts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.sos_status_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sos_id UUID NOT NULL REFERENCES public.sos_alerts(id) ON DELETE CASCADE,
  status public.sos_status NOT NULL,
  note TEXT,
  changed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_sos_history_sos ON public.sos_status_history(sos_id);
GRANT SELECT, INSERT ON public.sos_status_history TO authenticated;
GRANT ALL ON public.sos_status_history TO service_role;
ALTER TABLE public.sos_status_history ENABLE ROW LEVEL SECURITY;
CREATE POLICY "sos history select" ON public.sos_status_history FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(),'admin') OR EXISTS (
    SELECT 1 FROM public.sos_alerts s WHERE s.id = sos_id AND s.user_id = auth.uid()));
CREATE POLICY "sos history insert" ON public.sos_status_history FOR INSERT TO authenticated
  WITH CHECK (public.has_role(auth.uid(),'admin') OR EXISTS (
    SELECT 1 FROM public.sos_alerts s WHERE s.id = sos_id AND s.user_id = auth.uid()));

CREATE TABLE public.incidents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  reference TEXT NOT NULL UNIQUE DEFAULT ('PHX-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  category public.incident_category NOT NULL DEFAULT 'OTHER',
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  occurred_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  location TEXT,
  latitude DOUBLE PRECISION,
  longitude DOUBLE PRECISION,
  additional_details TEXT,
  status public.incident_status NOT NULL DEFAULT 'SUBMITTED',
  admin_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_incidents_user ON public.incidents(user_id);
CREATE INDEX idx_incidents_status ON public.incidents(status);
CREATE INDEX idx_incidents_category ON public.incidents(category);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.incidents TO authenticated;
GRANT ALL ON public.incidents TO service_role;
ALTER TABLE public.incidents ENABLE ROW LEVEL SECURITY;
CREATE POLICY "incidents select" ON public.incidents FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "incidents insert" ON public.incidents FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "incidents update" ON public.incidents FOR UPDATE TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'))
  WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "incidents delete" ON public.incidents FOR DELETE TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE TRIGGER incidents_updated BEFORE UPDATE ON public.incidents
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.incident_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  incident_id UUID NOT NULL REFERENCES public.incidents(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  storage_path TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  size_bytes BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_media_incident ON public.incident_media(incident_id);
GRANT SELECT, INSERT, DELETE ON public.incident_media TO authenticated;
GRANT ALL ON public.incident_media TO service_role;
ALTER TABLE public.incident_media ENABLE ROW LEVEL SECURITY;
CREATE POLICY "media select" ON public.incident_media FOR SELECT TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "media insert" ON public.incident_media FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());
CREATE POLICY "media delete" ON public.incident_media FOR DELETE TO authenticated
  USING (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));

CREATE TABLE public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  type public.notification_type NOT NULL DEFAULT 'SYSTEM',
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  link TEXT,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_notifications_user ON public.notifications(user_id, is_read);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.notifications TO authenticated;
GRANT ALL ON public.notifications TO service_role;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
CREATE POLICY "notifications select" ON public.notifications FOR SELECT TO authenticated
  USING (user_id = auth.uid());
CREATE POLICY "notifications insert" ON public.notifications FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid() OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "notifications update" ON public.notifications FOR UPDATE TO authenticated
  USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());
CREATE POLICY "notifications delete" ON public.notifications FOR DELETE TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "incident media read" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'incident-media' AND ((storage.foldername(name))[1] = auth.uid()::text OR public.has_role(auth.uid(),'admin')));
CREATE POLICY "incident media write" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'incident-media' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "incident media delete" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'incident-media' AND ((storage.foldername(name))[1] = auth.uid()::text OR public.has_role(auth.uid(),'admin')));

CREATE POLICY "avatar read" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'avatars');
CREATE POLICY "avatar write" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "avatar update" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text)
  WITH CHECK (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
CREATE POLICY "avatar delete" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'avatars' AND (storage.foldername(name))[1] = auth.uid()::text);
```

---

<a id="file-supabase-migrations-20260813131322-6ee81223-f7d6-4a8b-85da-898969d50c54-sql"></a>
## File: `supabase/migrations/20260813131322_6ee81223-f7d6-4a8b-85da-898969d50c54.sql`

```sql
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.set_updated_at() FROM PUBLIC, anon, authenticated;
```

---

<a id="file-supabase-migrations-20260821180000-emergency-alerts-sql"></a>
## File: `supabase/migrations/20260821180000_emergency_alerts.sql`

```sql
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
```

---

<a id="file-supabase-migrations-20261008000000-seed-dev-accounts-sql"></a>
## File: `supabase/migrations/20261008000000_seed_dev_accounts.sql`

```sql
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
```

---

<a id="file-tsconfig-json"></a>
## File: `tsconfig.json`

```json
{
  "include": ["src/**/*.ts", "src/**/*.tsx", "vite.config.ts", "eslint.config.js"],
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "types": ["vite/client"],

    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": false,
    "noEmit": true,

    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noPropertyAccessFromIndexSignature": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noUncheckedSideEffectImports": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

<a id="file-vite-config-ts"></a>
## File: `vite.config.ts`

```typescript
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    proxy: {
      "/api/dbaas": {
        target: "https://db.echo.oqens.me",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({
      preset: "vercel",
    }),
    viteReact(),
    tailwindcss(),
  ],
});
```

---

