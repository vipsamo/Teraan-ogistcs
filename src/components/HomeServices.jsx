import { BoltIcon, DevicePhoneMobileIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Readmore from './Readmore'

const services = [
  {
    name: 'General trading and supply',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Agricultural supply',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Graphics design and printing',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
  {
    name: 'Machinery supply',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: DevicePhoneMobileIcon,
  },
]

export default function HomeServices() {
 
  return (
    <div className="bg-zinc-100 py-24 sm:py-20 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-2xl font-semibold leading-8 text-indigo-600">SERVICES</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Delivers you variety of products</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row  hover:bg-zinc-200  hover:rounded p-4 cursor-pointer">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{service.name}</p>
                  < Readmore className="mt-2 text-base leading-7 text-gray-600">{service.description}</Readmore >
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
