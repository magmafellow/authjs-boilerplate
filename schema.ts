import {
  boolean,
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
} from 'drizzle-orm/pg-core'
import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import type { AdapterAccountType } from 'next-auth/adapters'

const connectionString = 'postgres://postgres:postgres@localhost:5432/drizzle'
const pool = postgres(process.env.AUTH_DRIZZLE_URL!, { max: 1 })

export const db = drizzle(pool)

const usersTable = pgTable('users_table', {
  id: integer('id').primaryKey(),
  username: text('username').notNull(),
  age: integer('age').notNull(),
})

export const InsertUser = usersTable.$inferInsert
export const SelectUser = usersTable.$inferSelect
