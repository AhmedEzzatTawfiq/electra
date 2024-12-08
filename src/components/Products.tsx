
import React from 'react'

import { ProductData } from '../../type';
import { getProductData } from '../lib/getData';
import ProductCard from './ProductCard';

const Products = async () => {
  const Products:ProductData[] = await getProductData();
  console.log(Products)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
      {Products?.map((item)=>(
        <ProductCard key={item?._id} item={item}/>
      ))}
    </div>
  )
}

export default Products
