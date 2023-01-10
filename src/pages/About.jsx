import React from 'react'
import bg from '../assets/bg.jpg'

const About = () => {
  return (
     <div>
       <h1 className='text-2xl font-semibold leading-8 text-indigo-600 m-8 p-4 text-center'>ABOUT US</h1>
    <div className='grid md:grid-cols-2 bg-zinc-100'>
      <div>
         <img src={bg} alt="" className='w-full bg-cover h-full p-4' />
      </div>
      <div className='p-4 bg-zinc-100'>
        <h1 className='text-2xl  text-center text-indigo-600 p-2'>background</h1>
        <p className=' p-4'>Tere Investments company limited is a south sudanese company fully registered under the chambers of commerce and its main office located at munuki suk libya</p>
        <p className='p-4'>And Our company is engaged in supply of office stationaries, food and non-food items, cleaning services, agricultural tools and seeds, and furniture</p>
        <p className='p-4'>The staff at Tere investments ltd have a great exprience in the field of general supply of both food and non-food stuff, agricultural tools and produce and general merchandise.</p>
        <p className='p-4'>Tere investments is more than a supplier, we can also provide specialised expertise, advice and support to satisfy the demands of the industry and work as a partner, to provide the right solution on time</p>
      </div>
    </div>
    <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-8 py-8 h-full w-full '>
      <div className="card bg-zinc-100 m-4 rounded shadow-lg my-5">
      
        <h1 className='text-indigo-600 text-center font-bold pt-4'>Vision statement</h1>
        <p className='p-4'>To be the company of choice regonized by our employees for our choice for our cores values and opportunities for personal and professional growth. We are the preeminet independent supplier of choice recoggnized by our customers as the best in total satisfaction and value</p>
      </div>
      
      <div className="card bg-zinc-100 m-4 rounded shadow-lg mb-5">
      
        <h1 className='text-indigo-600 text-center font-bold pt-4 '>Mission statement</h1>
        <p className='p-4'>To make each aspect of every transaction a positive and satisfying experience</p>
      </div>
      
      
    </div>
    </div>
  )
}

export default About