import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const Logo = ({ className }: {className?: string}) => {
  return (
    <div>
      <Link href={"/"}>
          <h2 className={twMerge("text-2xl text-accent hover:text-darkOrange font-bold uppercase hoverEffect relative overflow-hidden group", className)}>
          Electra
            <span className='absolute bg-darkOrange h-px w-full left-0 bottom-0 -translate-x-[105%] group-hover:translate-x-0 hoverEffect'></span>
          </h2>
        </Link>
    </div>
  )
}

export default Logo
