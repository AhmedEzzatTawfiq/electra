import React from 'react'
import Container from './Container'
import { footerData } from '../constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-bgLight py-5'>
      <Container className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {footerData?.map((item) => (
          <div key={item._id} className=''>
            <h3 className='text-darkOrange/90 font-semibold mb-3 text-lg'>{item?.title}</h3>
            <div className='flex flex-col'>
              {item?.listItems?.map((list) => (
                list?.listData?.map((data) => (
                  <Link className='hover:text-darkOrange hoverEffect font-medium' href="/" key={data}>
                    {data}
                  </Link>
                ))
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default Footer
