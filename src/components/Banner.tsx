import React from 'react'
import { getBannerData } from '../lib/getData'
import Container from './Container';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Button from './Button';
import { BannerData } from '../../type';
import Link from 'next/link';
import FormattedPrice from './FormattedPrice';

const Banner = async () => {
  const banners = await getBannerData();
  const singleBanner = banners[0];
  console.log(singleBanner);
  console.log(banners);
  return (
    <Container className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:max-h-[600px]'>
      {/* left haf */}
      <div className='md:col-span-2 flex-col lg:flex-row bg-white shadow-lg shadow-green-200 relative flex items-center justify-end rounded-lg overflow-hidden group h-96 sm:h-auto'>
        <div className='h-full z-10 absolute left-10 flex flex-col lg:justify-center isolate gap-5 md:gap-10'>
          <div className='flex flex-col gap-1 lg:gap-3'>
            <button className='bg-lightGreen rounded-full w-20 text-white py-1 text-sm font-semibold hover:bg-green-600 hoverEffect'>Sale {singleBanner?.price}</button>
            <p className='text-xl md:text-3xl font-semibold'>{singleBanner?.title}</p>
            <h2 className='text-2xl md:text-5xl font-bold'>{singleBanner?.subtitle}</h2>
            <p className='text-xs md:text-sm text-black/60 font-medium max-w-44'>{singleBanner?.description}</p>
          </div>
          <Button className='w-36 lg:mt-10 py-2.5 text-sm'>Shop Now</Button>
        </div>
        <div>
          <Image
          src={urlFor(singleBanner.image.asset._ref).width(500).url()}
          alt={singleBanner?.title}
          width={400}
          height={400}
          priority
          className='object-contain h-72 md:h-full max-h-[600px] self-end group-hover:scale-105 hoverEffect'
          />
        </div>
      </div>
      {/* right half */}
      <div className='flex flex-col space-y-5 md:space-y-10 h-auto md:max-h-[600px]'>
        {banners.slice(1, 3).map((item:BannerData) => (
          <div key={item._id} className='h-full md:h-1/2 bg-white shadow-lg shadow-green-200 rounded-lg p-5 overflow-hidden flex justify-center items-center group'>
            <div className='z-30'>
              <div>
                <p className='text-2xl font-semibold'>{item?.title}</p>
                <p className='text-3xl font-bold'>{item?.subtitle}</p>
              </div>
              <p className='mt-3 font-medium text-black/50'>
                From <FormattedPrice amount={item?.price} className='text-lightRed font-bold'/>
              </p>
              <Link href={"/shop"} className='mt-5 font-bold underline underline-offset-2 decoration-[1px] hover:text-lightRed hoverEffect'>
                Shop now!
              </Link>
            </div>
            <Image 
              src={urlFor(item?.image).url()} 
              alt={item?.title} 
              width={500} 
              height={500}
              priority
              className='object-contain h-72 md:h-60 w-1/2 group-hover:scale-105 hoverEffect'
              />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Banner
