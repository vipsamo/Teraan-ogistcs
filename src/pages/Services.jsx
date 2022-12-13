import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import Readmore from '../components/Readmore'
import graphic from '../assets/graphics.jpg'
import trading from '../assets/trading.jpg'

const services = [
  {
    name: 'General supply of goods and services',
    description:
      ' lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img: trading,
  },
  {
    name: 'Agricultural supply', 
    description:
      'lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img: trading,
  },
  {
    name: 'Graphics design and printing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',img: graphic,
  },
  {
    name: 'Machinery supply',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    img:graphic,
  },
]

export default function Services() {
  return (
    <div>
      <div className="sm:text-center">
          <h2 className="text-2xl font-semibold leading-8 text-indigo-600 m-8 p-4">SERVICES</h2>
         
        </div>
   
    <div className="bg-zinc-100 py-4  ">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row hover:bg-zinc-200  hover:rounded p-4 cursor-pointer">
                <div className="flex h-full md:h-40  w-full  md:w-40 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <img src={service.img} alt="" className='h-full w-full rounded' />
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
