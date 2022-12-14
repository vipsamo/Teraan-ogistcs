import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../assets/hero.jpg'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

  return (
    <div className=' ' style={{ backgroundImage:`url(${hero})`, backgroundRepeat:"no-repeat",backgroundPosition: 'center', backgroundSize:'cover', backgroundColor: '#cccccc', }}>
      <div className='bg-gradient-to-r from-black h-[350px] sm:h-[550px]  '>
       
      
    
     <div className='pb-30'>
       <main>
         <div className="relative px-6 lg:px-8">
           <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
             <div>
               <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                 <div className="relative z-13 overflow-hidden rounded-full  px-4 text-sm leading-6 ring-1 ring-zinc-100 hover:ring-gray-900/20">
                   <span className="text-gray-100">
                    About Tere.{' '}
                     <Link to="/about" className="font-semibold text-indigo-600">
                       <span className="absolute inset-0" aria-hidden="true" />
                     Read more 
                  </Link>
                </span>
              </div>
            </div>
            <div>
              <h1 className="text-4xl mt-0 text-zinc-100 font-bold tracking-tight text-center sm:text-6xl">
                Tere Investments company ltd
              </h1>
              <p className="mt-6 text-lg text-zinc-100 font-semibold leading-8  text-center">
               Deals in ...
               <TypeAnimation
      sequence={[
        'General supply of Goods and services', // Types 'One'
        2000, // Waits 1s
        'Hand washing Facilities', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Tailoring services', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Cars for hire', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Installation services', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'School desk', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Cleaning itemss', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Printing and graphics design', 2000,// Types 'Three' without deleting 'Two'
        
      ]}
      wrapper="p"
      cursor={true}
      repeat={Infinity}
      //style={{ fontSize: '0.5em' }}
    />
              </p>
              <div className="mt-8 flex gap-x-4 justify-center">
                <Link
                  to='./services'
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-300 hover:bg-indigo-700 hover:ring-indigo-700"
                   >
                     Our services
                    
                   </Link>
                   <Link
                     to="/contact"
                     className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-zinc-100 ring-1 ring-zinc-300 hover:ring-gray-900/20"
                   >
                    Contact Us
                    
                   </Link>
                 </div>
               </div>
               <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                 <svg
                   className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                   viewBox="0 0 1155 678"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg"
                 >
                   <path
                     fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                     fillOpacity=".3"
                     d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                   />
                   <defs>
                     <linearGradient
                       id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                       x1="1155.49"
                       x2="-78.208"
                       y1=".177"
                       y2="474.645"
                       gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
    /           </svg>
             </div>
           </div>
          </div>
       </div>
     </main>
  </div>
  </div>
  </div>
  )
}

export default Hero