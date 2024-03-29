"use client"
import { useState } from "react"
import addval from "./add";
async function addTask() {
    await addval("last attempt");
  }
const Input_funct= ()=>
{
    //const [idValue, settid] = useState("");
   const handleClick = () => {
        addTask();
      };
    return(
        <div>
            {//<input type="text" name="userid" placeholder="Enter Activity ID" value={idValue}  onChange={(e)=>settid(e.target.value)} className="text-black" />
                
           <button onClick={handleClick}>push task</button>
        
            }
            
           <p>hello its me dhvbjevbuidcnsichdhcstyxb</p>
        </div>
    )

}
export default Input_funct