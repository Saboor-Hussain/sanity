import {
    pgTable,
    serial,
    varchar,
  } from "drizzle-orm/pg-core";
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

// We create a table for DRIZZLE so it can generate datatype according to it
// this is also called SCHEMA
export let userTable = pgTable( 
    "users",
    {
        user_id: serial("id"),  // column name from data base should be written in datatype (serial, varchar, etc) function. Note column name should be in small case
        user_name: varchar("name" , {length: 100}),
    }
)

// Connect to Vercel Postgres
export const db = drizzle(sql);