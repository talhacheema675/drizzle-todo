import { pgTable, unique, serial, varchar, boolean } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const user = pgTable("user", {
	id: serial("id").primaryKey().notNull(),
	email: varchar("email").notNull(),
},
(table) => {
	return {
		userEmailUnique: unique("user_email_unique").on(table.email),
	}
});

export const todonew = pgTable("todonew", {
	id: serial("id").primaryKey().notNull(),
	description: varchar("description", { length: 256 }),
	status: boolean("status").default(false).notNull(),
});