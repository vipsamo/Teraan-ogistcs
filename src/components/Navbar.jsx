import React, { useState } from 'react'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";
import links from '../assets/link';
const Navbar = () => {
   const [nav, setNav]=useState(false);
   const toggle=()=>setNav(!nav);
  return (
    <div>
    <div className='bg-zinc-200 w-screen h-20 flex items-center drop-shadow-lg  '>
           {/*......brand......*/}
          <span className='text-2xl flex flex-1 ml-4 text-indigo-500 text-bold '><strong>Teraan co ltd</strong ></span>
       {/*......menu items......*/}
       <ul className='hidden md:flex '>
       {
                links.map((link)=>(
                  <Link to={link.path}>
                  <li key={link.id}> 
                 
                  {link.title}
                 
                   
                  </li>
                  </Link>
                ))
              }
       
       </ul>
       {/*......humbager......*/}
       <div onClick={toggle} className='w-6 mr-4 md:hidden'>
       {!nav ? < Bars3Icon/>: <XMarkIcon/>}
       </div>
   
    </div>
    {/*......mobile......*/}
   <ul className={!nav ?'hidden ': ' md:hidden  absolute  w-full  bg-zinc-200 justify-center items-center border-t-2 border-zinc-300'}>
   {links.map((link)=>(
                    <Link to={link.path}>
                   <li key={link.id}className='py-6 4xl border-b-2 border-zinc-300'>
                    {link.title}
                   </li>
                   </Link>
                  ))}
   </ul>
    </div>
  )
}

export default Navbar