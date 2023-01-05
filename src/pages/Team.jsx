import React from 'react'
import woja from '../assets/team/woja.jpeg'
import gloria from '../assets/team/gloria.jpeg'
import sokiri from '../assets/team/sokiri.jpeg'
import reida from '../assets/team/reida.png'
import kenyi from '../assets/team/kenyi.png'
import { FaEnvelope,FaPhone } from "react-icons/fa";
const members = [
  {
    name: 'WOJA PATRICK',
    position:'ceo',
    profile:woja,
    tel:'+21192343677',
    email:'wojapatrick@gmail.com'
  },
  {
    name: 'MUNIA GLORIA',
    position:'Manager',
    profile:gloria,
    tel:'+211920833378',
    email:'muniagloria@gmail.com'
  },
  {
    name: 'SOKIRI EMMANUEL ABRAHAM',
    position:'worker',
    profile:sokiri,
    tel:'+211928532378',
    email:'sokiriemma@gmail.com '
  },
  {
    name: 'MANENO REIDA',
    position:'worker',
    profile:reida,
    tel:'+211922825778',
    email:'manenoreida@gmail.com'
  },
  {
    name: 'KENYI BOSCO',
    position:'worker',
    profile:kenyi,
    tel:'+21192343677',
    email:'kenyibosco@gmail.com'
  },
  
]
const Team = () => {
  return (
    <div>
     <h1 className='text-2xl font-semibold leading-8 text-indigo-600 m-8 p-4 text-center'>OUR TEAM</h1>
     <div className=' grid md:grid-cols-3 sm:grid-cols-1 gap-4  h-full w-full '>
      
        {members.map((member)=>{
          return(
<div className="card bg-zinc-100  rounded-lg shadow-lg  py-4 mb-4 mx-4">
       
        <img src ={member.profile} alt="" className='w-24 h-24 rounded-full object-cover mx-auto ' />
        <h3 className='text-indigo-600  text-center  font-bold p-2 '>{member.name}</h3>
        
        <p className='ml-10  text-zinc-600 font-semibold'>Position: {member.position} </p>
        <p className='ml-10  text-indigo-600 '>contacts</p>
        <div className="flex  gap-2 ml-10 ">
         <div className="text-indigo-500 size-20 "><FaPhone/></div>
          <p className="flex flex-col text-zinc-600"> {member.tel}</p>
          </div>
          <div className="flex  gap-2 ml-10 ">
         <div className="text-indigo-500 size-20"><FaEnvelope/></div>
          <p className="flex flex-col text-zinc-600">{member.email}</p>
          </div>

</div>
          )
        })}
      
     
    </div>
    </div>
  )
}

export default Team