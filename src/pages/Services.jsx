import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import Readmore from '../components/Readmore'
import graphic from '../assets/graphics.jpg'
import trading from '../assets/trading.jpg'
import stationary from '../assets/stationary.jpg'
import relief from '../assets/relief.jpg'
import furniture from '../assets/furniture.jpg'
import agriculture from '../assets/agriculture.jpg'
import cleaning from '../assets/cleaning.jpg'
import appliance from '../assets/appliance.jpg'
import car from '../assets/car.jpg'
import installation from '../assets/installation.jpg'
import desk from '../assets/desk.jpg'



const services = [
  {
    name: 'General supply of goods and services',
    description:
      ' lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img: trading,
  },
  {
    name: 'Office Stationary', 
    description:
      'lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img: stationary,
  },
  {
    name: 'Office Furniture',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',img: graphic,
      img:furniture,
    },
  {
    name: 'Relief Items',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:relief,
  },
  {
    name: 'Agricultural tools and seeds',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:agriculture,
  },
  {
    name: 'Cleaning Items',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:cleaning,
  },
  {
    name: 'Hardware & Home Appliences',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:appliance,
  },
  {
    name: 'Cars for Hire',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:car,
  },
  {
    name: 'Installation Services',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:installation,
  },
  {
    name: 'School Desk',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:desk,
  },
]

export default function Services() {
  return (
    <div>
      <div className="sm:text-center">
          <h2 className="text-2xl font-semibold text-center leading-8 text-indigo-600 m-8 p-4">OUR SERVICES</h2>
         
        </div>
   
    <div className="bg-zinc-100 py-4  ">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row hover:bg-zinc-200  hover:rounded p-4 cursor-pointer">
                <div className="flex h-60 md:h-40  w-full  md:w-40 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <img src={service.img} alt="" className='h-full object-cover w-full  rounded' />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{service.name}</p>
                  <Readmore className="mt-2 text-base leading-7 text-gray-600">{service.description}</Readmore>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
