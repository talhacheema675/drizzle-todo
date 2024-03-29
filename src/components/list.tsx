import { todo } from "@/lib/schema/todo"
import { error } from "console"

/*const getdata=async()=>{
    
    try{
        const res1=await fetch("http://localhost:3000/api/todo")//@/api/todo http://localhost:3000/api/todo
        if(!res1.ok)//check if api fail to fetch
    {
        throw new Error("failed to fetch")
    }
    const result=await res1.json()
    return result;
    }//if use async ans await then always use try catch not use direct method given in below comment
    catch(error){
        console.log(error)
    }

    /*if(!res.ok)//check if api fail to fetch
    {
        throw new Error("failed to fetch")
    }

const List=async()=>
{
    const res:{data:todo[]}=await getdata()
    return(
        <>
        {
        res.data.map((item,index)=>{
            return(
                <div key={index} className="bg-gray-100 px-4 py-4 flex items-center gap-x-3 rounded-lg">
                    <div className="bg-secondary rounded-full h-3 w-3"></div>
                    <div className="text-lg">{ `${item.id}  ${item.description}`}</div>

        </div>
        )
        })
    }
        </>
    )
}*/

