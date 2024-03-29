import { db } from "@/lib/drizzle"
import { todolistnew } from "@/lib/schema/todo"
import { eq } from "drizzle-orm"
const updval=async()=>{
    const response =await db.update(todolistnew).set({description:"hello hello",status:false}).where(eq(todolistnew.id,2))
}
export default updval;