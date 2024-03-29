
const Deletelist=async ()=>
{

    try
    {
    
        const res=await fetch("http://localhost:3000/api/todo/",{
        method:'DELETE'
            })
        console.log(res.ok) 

    }
catch(error)
{

        console.log("error")
    }
    

return(
    <div></div>
)

}
export default Deletelist