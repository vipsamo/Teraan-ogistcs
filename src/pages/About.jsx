import React from 'react'
import bg from '../assets/bg.jpg'
import Background from '../components/Background'
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
        <p className='p-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ipsum at dicta ut, error veniam praesentium perferendis porro minus ipsam dolorum aut numquam impedit eos cum deleniti ea? Placeat, ab ipsum libero sed eligendi commodi delectus accusantium soluta voluptatum! Ducimus voluptas ex doloribus quisquam cupiditate exercitationem. Recusandae aut voluptas nisi sit velit maiores beatae, adipisci ex sunt cum voluptatibus accusantium ipsum iusto odio! Nemo ipsa quia architecto voluptates iure repudiandae distinctio explicabo commodi dolorum officia eveniet iusto aliquam cum beatae velit dolorem itaque fugit reprehenderit dolore blanditiis, temporibus magnam tempora. Nam nisi fugiat, autem necessitatibus illum nobis ipsum culpa, sit cumque et ipsam blanditiis soluta perspiciatis voluptas cupiditate tempora in libero at rem quaerat. Culpa eligendi temporibus quas aliquid saepe illum dolorem laudantium totam necessitatibus? Molestiae accusantium laboriosam amet harum laborum eius accusamus inventore officia voluptatem ex facere blanditiis labore, hic fuga? Mollitia ullam suscipit laudantium adipisci officiis magnam saepe!</p>
      </div>
    </div>
    <Background/>
    </div>
  )
}

export default About