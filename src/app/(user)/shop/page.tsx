import Container from '@/components/Container'
import Products from '@/components/Products'
import React from 'react'

const ShopPage = () => {
  return (
    <Container className='my-6 flex flex-col gap-5'>
      <h2 className='font-semibold text-xl'>All Available Products:</h2>
      <Products />
    </Container>
  )
}

export default ShopPage;
