import React from 'react'
import nonviolent from '../assets/clients/nonviolent.png'
import acted from '../assets/clients/acted.png'
import healthlink from '../assets/clients/healthlink.jpeg'
import nca from '../assets/clients/nca.png'
import nrc from '../assets/clients/nrc.png'
const Clients = () => {
  const clients=[
  {
    name: 'nonviolent',
    
    img: nonviolent,
  },
  {
    name: 'General supply of goods and services',
    
    img: nrc,
  },
  {
    name: 'General supply of goods and services',
    
    img: acted,
  },
  {
    name: 'General supply of goods and services',
    
    img: nca,
  },
  {
    name: 'General supply of goods and services',
    
    img: healthlink,
  },
]
  return (
    <div>
       <h1 className='text-2xl font-semibold leading-8 text-indigo-600 m-8 p-4 text-center'>OUR CLIENTS </h1>
       <div className='grid md:grid-cols-5 gap-4 m-4'>
        {
          clients.map((client)=>(
            <div className='bg-zinc-100'>
              <img src={client.img} alt="" className='h-full w-full p-4 object-cover' />
            </div>
          ))
        }
       </div>
    </div>
  )
}

export default Clients