import pg from 'pg';

const { Pool } = pg;

let pool: pg.Pool | undefined;

export function getDbPool(): pg.Pool {
  if (!pool) {
    const connectionString = process.env['DATABASE_URL'];
    if (!connectionString) {
      throw new Error('DATABASE_URL is not set');
    }
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
