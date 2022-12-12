import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import {  FaEnvelope,FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const resetForm= () => { 
    document.getElementById("form").reset();
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s4oiw7q', 'template_kgidt08', form.current, 'user_UkYe41YDJTPhMemlPf3pP')
      .then((result) => {
        toast.success('Message sent !', {
          position: toast.POSITION.TOP_RIGHT
          
      });
       resetForm();

      }, (error) => {
        toast.error('Error message not sent !', {
          position: toast.POSITION.TOP_RIGHT
      });
          
      resetForm(); 
      });
  };

  return (
  <div className=''>
      <h1 className='text-2xl font-semibold leading-8 text-indigo-600 m-8 p-4 text-center'>CONTACT US</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 m-5' >
      
      <div className='bg-zinc-100 p-5 rounded-md '>
        <h1 className='text-2xl text-center text-indigo-600 p-2'>Contacts</h1>
        <div>
          <h1 className='text-indigo-600 p-2'>Telephone number</h1>
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaPhone/></div>
          <p className="flex flex-col"> +211925683457</p>
          </div>
          
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaPhone/></div>
          <p className="flex flex-col"> +211925683457</p>
          </div>
          
        </div>
        <div>
          <h1 className='text-indigo-600 p-2'>E-Mail</h1>
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaEnvelope/></div>
          <p className="flex flex-col"> mulujisamuel@gmail.com</p>
          </div>
          <div className="flex p-1 gap-2 ">
         <div className="text-indigo-500 size-20"><FaEnvelope/></div>
          <p className="flex flex-col"> mulujisamuel@gmail.com</p>
          </div>
        </div>
        <div>
          <h1 className='text-indigo-600 p-2'>Our address</h1>
          <div>
            <p>located at munuki, miya saba road opposite sport 5</p>
          </div>
        </div>
      </div>
      <div className=' bg-zinc-100 shadow-sm p-5 rounded-md  '>
        <h1 className='text-2xl text-center text-indigo-600 p-2'>Send us email now</h1>
        <div className='p-5'>
          <form ref={form} onSubmit={sendEmail} id='form' className='flex flex-col gap-4'>
            <div className='grid md:grid-cols-2 gap-4'>
            <input
                   
                    className=" p-4 w-full  z-10 outline-none rounded-md"
                    name='name'
                    placeholder="Name" 
                    type="text"
                   
                    required 
            />
            <input
                    className=" p-4 w-full  z-10 outline-none rounded-md"
                    name='email'
                    placeholder="Email"
                    type='email' 
                   
                    required 
            />
           
            </div>
            <input
                   
                   className=" p-4 w-full  z-10 outline-none rounded-md"
                   name='subject'
                   placeholder="subject" 
                   type="text"
                  
                   required 
           />
            <textarea
                className=" p-4 w-full z-10 outline-none rounded-md"
                name='message'
                placeholder="Message"
                
                required
              ></textarea>
              <button value='send' className='bg-indigo-400 hover:bg-indigo-600 rounded-md p-2 cursor-pointer z-13'><ToastContainer/>submit</button>
          </form>
        </div>
      </div>
      
    </div>
  </div>
    
  )
}

export default Contact