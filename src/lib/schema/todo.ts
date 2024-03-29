import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";
import { InferModel } from "drizzle-orm";
export const todolistnew = pgTable("todonew", {
  id: serial("id").primaryKey(),
  description: varchar("description", { length: 256 }),
  status: boolean("status").default(false).notNull(),
});
export const user=pgTable("user",{
  id:serial ("id").primaryKey(), 
  email:varchar("email").notNull().unique()
})
export type todo=InferModel<typeof todolistnew>
export type Newtodo=InferModel<typeof todolistnew,"insert">
