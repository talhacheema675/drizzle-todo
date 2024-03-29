"use client"

import { Newtodo } from "@/lib/schema/todo";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Addtodo=()=>
{
    const[task,settask]=useState<Newtodo|null>(null)
    const {refresh} = useRouter()
    const handlesubmit=async()=>{
        try
        {
            if(task)
            {
            const res=await fetch("/api/todo",{
            method:"POST",
            body:JSON.stringify({task:task.description})
                })
            console.log(res.ok) 
            refresh()
            } 
    
        }
    catch(error)
    {

            console.log("error")
        }
        
    }
    return( 
        <div>
            <form className="w-full flex">
                <input 
               onChange={(e)=>settask({description: e.target.value})}
                className="w-full rounded-full py-4 px-5 focus:outline-secondary" type="text"/>
                <button type="button" onClick={handlesubmit} className="bg-primary text-lg text-black rounded-full mx-2 shrink-0">enter me</button>
            </form>
        </div>
    )
}
export default Addtodo;