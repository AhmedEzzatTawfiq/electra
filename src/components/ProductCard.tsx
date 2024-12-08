import React from 'react'
import { ProductData } from '../../type'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import { MdStar } from 'react-icons/md'
import FormattedPrice from './FormattedPrice'
import AddBttton from './AddBttton'

const ProductCard = ({ item }: { item: ProductData }) => {
  return (
    <div className='border border-px border-lightText/40 rounded-md relative group overflow-hidden gap-2'>
      <div>
        <div className='overflow-hidden'>
          <Link href={`/product/${item?.slug.current}`}>
            <Image
              src={urlFor(item?.image).url()}
              alt={item.title}
              width={500}
              height={500}
              loading='lazy'
              className='w-full h-72 object-cover group-hover:scale-105 hoverEffect'
            />
          </Link>
        </div>
        <div className='px-6 flex flex-col items-center gap-2 mt-5'>
          <div className='text-base text-lightText flex'>
            {Array?.from({ length: 5 })?.map((_, index) => {
              const filled = index + 1 <= Math.floor(item?.ratings);
              const halfFilled = index + 1 > Math.floor(item?.ratings) &&
              index < Math.ceil(item?.ratings);
              return <MdStar key={index} className={`${filled ? "text-[#fa8900]" : halfFilled ? "text-yellow-300" : "text-lightText"}`}/>
            })}
          </div>
          <p className='text-lightRed uppercase font-semibold text-sm'>{item?.brand}</p>
          <p className='text-md font-bold'>{item?.title}</p>
          <p className='text-center text-sm line-clamp-2'>{item?.description}</p>
          <div className='flex items-center gap-3 mb-5'>
            <FormattedPrice amount={item?.rowprice} className='text-lightText line-through'/>
            <FormattedPrice amount={item?.price} className='text-darkOrange font-bold'/>
          </div>
        </div>
        <AddBttton item={item} className='text-accentWhite'/>
      </div>
    </div>
  )
}

export default ProductCard
