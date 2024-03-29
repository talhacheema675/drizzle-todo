import { error } from "console";
import { NextRequest,NextResponse } from "next/server";
import { json } from "stream/consumers";
import { Newtodo,todolistnew,todo } from "@/lib/schema/todo";
import { db } from "@/lib/drizzle";
import { Message } from "postcss";
import { eq } from "drizzle-orm"
export async function GET (request:NextRequest)
 {
    try{
         const res=await db.select().from(todolistnew).execute();
       // console.log(res)
        return  NextResponse.json ({data:res})
    }
    catch(err){
        console.log((err as {message:string}) .message)
        
        return  NextResponse.json ({message:"something wrong"})
    }
    return NextResponse.json({message:"you are the api"})
}
export async function POST (request:NextRequest)
{
    const req= await request.json();
    try {
        if(req.task)
        {
    const res=await db.insert(todolistnew).values({description:req.task,status:true}).returning();//use returning to filter unnecessary data it only show description+status+id
    console.log(res);
           
            return NextResponse.json({message:"data added successfully"})
        }
        else{
            throw new Error("task is req")
        }
    } 
    catch (error) {
        return NextResponse.json({message: (error as{message:string}).message})
    }
}
export async function DELETE (request:NextRequest)
{
    const req= await request.json();
    try {
        if(req.task)
        {
    const res=await db.delete(todolistnew).where(eq(todolistnew.id,req.task))
           
            return NextResponse.json({message:"data DELETED successfully"})
        }
        else{
            throw new Error("task is req")
        }
    } 
    catch (error) {
        return NextResponse.json({message: (error as{message:string}).message})
    }
}