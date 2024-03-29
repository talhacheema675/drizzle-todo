import { db } from "@/lib/drizzle"
import { todolist } from "@/lib/schema/todo"
import { Console } from "console"
import { eq } from "drizzle-orm"
const delval=async()=>{
    console.log("deleted")
    await db.delete(todolist).where(eq(todolist.id,2))

}
export default delval