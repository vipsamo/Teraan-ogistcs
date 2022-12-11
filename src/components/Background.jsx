import React from 'react'

const Background = () => {
  return (
    <div className=' grid md:grid-cols-2 sm:grid-cols-1 gap-8 py-8 h-full w-full '>
      <div className="card bg-zinc-100 m-4 rounded shadow-lg my-5">
      
        <h1 className='text-indigo-600 text-center font-bold pt-2'>Mission</h1>
        <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia quos ad corrupti sed minima nisi incidunt ipsa assumenda ratione.</p>
      </div>
      
      <div className="card bg-zinc-100 m-4 rounded shadow-lg mb-5">
      
        <h1 className='text-indigo-600 text-center font-bold '>Vision</h1>
        <p className='m-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia quos ad corrupti sed minima nisi incidunt ipsa assumenda ratione.</p>
      </div>
      
      
    </div>
  )
}

export default Background