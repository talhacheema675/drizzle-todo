import { db } from "@/lib/drizzle"
import { todolistnew } from "@/lib/schema/todo"
import { Console } from "console"
import { eq } from "drizzle-orm"
const delval=async()=>{
    console.log("deleted")
    await db.delete(todolistnew).where(eq(todolistnew.id,2))

}
export default delval