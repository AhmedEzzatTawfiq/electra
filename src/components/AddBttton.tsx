"use client"
import React from 'react'
import { twMerge } from 'tailwind-merge';
import { ProductData } from '../../type';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shopperSlice';
import toast from 'react-hot-toast';

interface Props {
  item?: ProductData;
  className?: string;
}

const AddBttton = ({ item, className }: Props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    toast.success(`${item?.title.substring(0, 12)} added successfully`)
  }
  return (
    <button onClick={handleAddToCart} className={twMerge('bg-accent text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hoverEffect font-semibold tracking-wide flex items-center justify-center gap-1', className)}>
      Add to Cart
    </button>
  )
}

export default AddBttton
