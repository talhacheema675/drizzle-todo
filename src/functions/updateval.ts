import { db } from "@/lib/drizzle"
import { todolist } from "@/lib/schema/todo"
import { eq } from "drizzle-orm"
const updval=async()=>{
    const response =await db.update(todolist).set({description:"hello hello",status:false}).where(eq(todolist.id,2))
}
export default updval;