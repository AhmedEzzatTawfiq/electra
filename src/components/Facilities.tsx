
import React from 'react'
import { FaClockRotateLeft, FaWallet } from 'react-icons/fa6'
import { GoRocket } from 'react-icons/go'
import { PiChats } from 'react-icons/pi'

const facData = [
  {
    title: "Free delivery",
    description: "When ordering above $500",
    icon: <GoRocket />
  },
  {
    title: "90 Days Return",
    description: "If goods have problems",
    icon: <FaClockRotateLeft />
  },
  {
    title: "Secure Payment",
    description: "100% secure payment",
    icon: <FaWallet />
  },
  {
    title: "24/7 Support",
    description: "Deticated Support",
    icon: <PiChats />
  },
]

const Facilities = () => {
  return (
    <div className='py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
      {facData.map((item) => (
        <div key={item?.title} className='flex items-center gap-3 flex-col sm:flex-row'>
          <span className='text-lightRed text-xl'>{item?.icon}</span>
          <div className='text-center sm:text-left'>
            <h2 className='font-bold text-sm uppercase'>{item?.title}</h2>
            <p className='text-lightText text-sm'>{item?.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Facilities
