"use client";
import Link from 'next/link'
import React from 'react'
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { StoreSate } from '../../type';

const SideBarCart = () => {
  const cartStore = useSelector((state: StoreSate) => state?.shopper);
  // console.log(cartStore);
  return (
    <Link href={"/cart"} className='bg-accentWhite w-16 h-[70px] rounded-md flex flex-col gap-1 text-accent justify-center items-center shadow-sm shadow-lightGreen group relative'>
        <div className='flex items-center justify-center overflow-hidden'>
          <RiShoppingCart2Fill className='text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200'/>
          <RiShoppingCart2Fill className='text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200'/>
        </div>
        <p className='text-xs font-semibold'>Buy now</p>
        <p className='text-xs absolute top-2 right-3 bg-red-500 rounded-full text-white w-4 h-4 flex items-center justify-center font-semibold'>{cartStore ? cartStore.cart.length : 0}</p>
      </Link>
  )
}

export default SideBarCart
