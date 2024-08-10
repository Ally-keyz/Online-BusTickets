import React, { useState } from 'react'

function Admin() {
    const[selected , setSelected] = useState({id:1,name:'',message:'Est animi consequuntur obcaecati mollitia quod expedita'})
    const clients = [
    {
        id:1,
        name:'John Murangwa',
        image:'app/assets/Ellipse 395.png',
        message:' Est animi consequuntur obcaecati mollitia quod expedita', 
    },
    {
        id:2,
        name:'Ishimwe Aubin',
        image:'app/assets/Ellipse 395.png',
        message:'consectetur adipisicing elit. Est animi consequuntur ', 
    },
    {
        id:3,
        name:'Tyubahe Ashrafu',
        image:'app/assets/Ellipse 395.png',
        message:'consectetur adipisicing elit  aliquid obcaecati architecto!', 
    }
]
  return (
    <>
 <div className=" mt-5">
        <div className="">                                                         
           <div className="text-center text-[12px] font-semibold text-blue-500">
               Some reviews
           </div>                                       
           <div className=" font-bold text-center ml-10 text-[18px]">
              By our clients
           </div>
           <div className="flex p-5 justify-around mt-5 ">
            <div className=" mt-20">
           {
            clients.map((client)=>(
                <>
                 <div key={client.id} className="mt-2 sm:ml-10" onClick={()=>setSelected(client)}>
                <div className={`${selected.id === client.id ?'w-64 h-16 flex  rounded shadow-xl shadow-blue-200':'w-64 h-16 flex  rounded shadow-md shadow-blue-200'}`}>
                    <img src={client.image} className='rounded-full' width={60} height={20} alt="" />
                    <div className="text-[12px] font-bold">{client.name}</div>
                </div>
            </div>
                </>
            ))
           }
           </div>
            <div className="flex sm:mr-36">
                <img src="app/assets/Group 2608789.png" className='h-96' alt="" />
                <div className="mt-20 ml-10">
               <div className="">
                <img src="app/assets/charm_quote.png" className='' width={20} height={20} alt="" />
               </div>
               <div className="text-[10px] sm:pl-5">{selected.message} <br /> {selected.message} <br/> {selected.message}</div>
               <div className="sm:pl-5"> <img src="app/assets/Frame 2608835.png" width={40} height={20} alt="" /></div>
            </div>
            </div>
          
           </div>
           </div>
       </div>
   </>
  )
}

export default Admin