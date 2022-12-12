import React from 'react'
import samo from '../assets/profile.jpeg'
import woja from '../assets/bg.jpg'
import loku from '../assets/vipsamo.jpeg'
import { FaEnvelope,FaPhone } from "react-icons/fa";
const members = [
  {
    name: 'WOJA PATRICT',
    position:'CEO',
    profile:woja,
    tel:'+21192343677',
    email:'smuluji@gmail.com'
  },
  {
    name: 'MULUJI SAMUEL JACKSON',
    position:'IT PERSONEL',
    profile:samo,
    tel:'+21192343677',
    email:'smuluji@gmail.com'
  },
  {
    name: 'LOKU CHARLES',
    position:'MARKETING DIRECTOR',
    profile:loku,
    tel:'+21192343677',
    email:'smuluji@gmail.com'
  },
  {
    name: 'LEMI DAVID',
    position:'SALES MANAGER',
    profile:loku,
    tel:'+21192343677',
    email:'smuluji@gmail.com'
  },
  
]
const Team = () => {
  return (
    <div>
     <h1 className='text-2xl font-semibold leading-8 text-indigo-600 m-8 p-4 text-center'>OUR TEAM</h1>
     <div className=' grid md:grid-cols-3 sm:grid-cols-1 gap-4  h-full w-full '>
      
        {members.map((member)=>{
          return(
<div className="card bg-zinc-100  rounded-lg shadow-sm  py-4 mb-4 mx-4">
<img src ={member.profile} alt="" className='w-24 h-24 rounded-lg object-cover mx-auto ' />
        <h1 className='text-indigo-600 text-center font-bold pt-2'>{member.name}</h1>
        <p className='ml-10  text-zinc-600 '>POSITION: {member.position} </p>
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