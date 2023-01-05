
import graphic from '../assets/graphics.jpg'
import trading from '../assets/services/trading.jpg'
import stationary from '../assets/services/stationary.jpg'
import relief from '../assets/services/relief.jpg'
import furniture from '../assets/services/furniture.jpg'
import { Link } from 'react-router-dom'

const services = [
  {
    name: 'General supply of goods and services',
    description:
      'We supply all kind of goods and services everywhere around south sudan in time. We supply goods like agricultural products, machineries and so many others',
    img: trading,
  },
  {
    name: 'Office Stationary', 
    description:
      'We supply office stationary and set them for your office. with all need for your office. ',
    img: stationary,
  },
  {
    name: 'Office Furniture',
    description:
      'Tere investment limited supply and install furniture in offices and even homes and appartments',
      img: graphic,
      img:furniture,
    },
  {
    name: 'Relief Items',
    description:
      'We supply relief items to affected areas in the country. items like tents, carpets, food, jerycans and many more kind of relief items.',
    img:relief,
  },
]

export default function HomeServices() {
 
  return (
    <div>
    
    <div className="bg-zinc-100 py-4  ">
    <div className="sm:text-center">
          <h2 className="text-2xl font-semibold text-center leading-8 text-indigo-600  border-indigo-600 m-8 p-4">OUR SERVICES</h2>
         
        </div>
      
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
                  <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex justify-center  '>
        <Link to='/services'>
      <button className="bg-indigo-500 text-zinc-100 rounded p-2 m-4 w-full sm:w-60" >
        More Services <span>&raquo;</span>
      </button>
      </Link>
      </div>
    </div>
    </div>
  )
}
