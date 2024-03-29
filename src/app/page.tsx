import Image from 'next/image'
import { sql } from "@vercel/postgres";
import { todolistnew } from '@/lib/schema/todo';
import { db } from '@/lib/drizzle';
import { eq } from 'drizzle-orm';
import addval from '@/functions/add';
import updval from '@/functions/updateval';
import Input_funct from '@/functions/inptfun';
import delval from '@/functions/delval';
import List from '@/components/list';
import Addtodo from '@/components/addtodo';
import { DELETE } from './api/todo/route';
import Deletelist from '@/components/deletelist';
export default async function Home(): Promise<JSX.Element> {
  //await delval()
  //let inpt:any=null;
  //const result = await db.select().from(todolist);
  //console.log("🚀 ~ file: page.tsx:7 ~ Home ~ result:", result);
  return (
    <main className='bg-gradient-to-tr from-primary to-secondary h-screen flex justify-center items-center'>
      <div className='px-3 py-4 rounded-2xl bg-white w-full max-w-md h-'>
        {/*@ts-ignore */}
        <List/>
        <Addtodo/>
        <div className='w-1/2 h-1 bg-black/80 rounded-2xl mx-auto'></div>
      </div>
        {/*{result.map((row) => ( 
        <div key={row.id}>
      { `${row.id} - ${row.description} - ${row.status}`}}
        </div>
      ))*/}
    </main>
  );
}
 
