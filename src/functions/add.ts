import { db } from "@/lib/drizzle"
import { todolistnew } from "@/lib/schema/todo"
const addval=async(impt:string)=>{
    //et inpt="hello adil"
    console.log(`the value passeed: ${impt}`)
   // await db.insert(todolist).values({description:impt,status:true});

}
export default addval;