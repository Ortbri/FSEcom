// import { drizzle } from "drizzle-orm/node-postgres";
// import { Pool } from "pg";
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL!,
// });
// const db = drizzle(pool);

import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(process.env.DATABASE_URL!);


/**
 * If you need a synchronous connection, you can use our additional connection API,
 * where you specify a driver connection and pass it to the Drizzle instance.
 */
// import { neon } from '@neondatabase/serverless';
// import { drizzle } from 'drizzle-orm/neon-serverless';
// const sql = neon(process.env.DATABASE_URL!);
// const db = drizzle({ client: sql });


