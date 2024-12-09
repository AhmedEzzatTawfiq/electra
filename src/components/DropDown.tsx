"use client";
import { navBarList } from '@/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import OutsideClickHandler from 'react-outside-click-handler';

const DropDown = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        setOpen(false); // Close the dropdown when clicking outside
      }}
    >
      <div className="relative">
        <HiMenuAlt2
          onClick={() => setOpen(!open)} // Toggle the dropdown
          className="inline-flex md:hidden cursor-pointer text-2xl hover:text-darkOrange hoverEffect"
        />
        <div
          className={`w-36 h-64 bg-black/70 py-4 px-4 absolute top-10 right-2 rounded-md transition-all duration-300 ease-in-out transform ${
            open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-3 text-white">
            {navBarList?.map((item) => (
              <Link
                className="hover:text-darkOrange hoverEffect text-center border-b-[1px] border-black pb-[4px]"
                key={item?.title}
                href={item.link}
              >
                {item?.title}
              </Link>
            ))}
            <Link
              href={'/signin'}
              className="hover:text-darkOrange text-center border-b-[1px] pb-[4px] border-black hoverEffect"
            >
              Sign in
            </Link>
            <Link
              href={'/orders'}
              className="hover:text-darkOrange text-center hoverEffect border-b-[1px] pb-[4px] border-black"
            >
              Orders
            </Link>
            <Link
              href={'/studio'}
              className="hover:text-darkOrange text-center hoverEffect border-b-[1px] pb-[4px] border-black"
            >
              Studio
            </Link>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default DropDown;
