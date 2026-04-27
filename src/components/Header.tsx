"use client";
import Link from "next/link";
import { HiMenuAlt2 } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import SearchInput from "./SearchInput";
import Logo from "./Logo";
import { navBarList } from "@/constants";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const { data: session } = useSession();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setShowMobileMenu(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowMobileSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full h-20 bg-white border-b-[1px] border-lightText/20 sticky top-0 z-50">
      <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-between gap-5 lg:gap-10">
        <Logo />
        <SearchInput />
        <div className="hidden md:inline-flex items-center gap-7">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className="text-base font-semibold hover:text-darkOrange duration-300"
            >
              {item?.title}
            </Link>
          ))}
          {mounted && (
            <>
              {session ? (
                <Link
                  href={"/dashboard"}
                  className="text-base font-semibold hover:text-darkOrange duration-300"
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href={"/signin"}
                  className="text-base font-semibold hover:text-darkOrange duration-300"
                >
                  Sign in
                </Link>
              )}
              {session?.user?.email === process.env.ADMIN_EMAIL && (
                <Link
                  href={"/studio"}
                  className="text-base font-semibold hover:text-darkOrange duration-300"
                >
                  Studio
                </Link>
              )}
              {session?.user && (
                <Link
                  href={"/orders"}
                  className="text-base font-semibold hover:text-darkOrange duration-300"
                >
                  Orders
                </Link>
              )}
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            className="sm:hidden cursor-pointer"
          >
            {showMobileSearch ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <CiSearch className="w-6 h-6" />
            )}
          </button>
          <div ref={menuIconRef}>
            <HiMenuAlt2
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="inline-flex md:hidden cursor-pointer w-8 h-6"
            />
          </div>
        </div>
      </div>
      {mounted && showMobileSearch && (
        <div ref={searchRef} className="sm:hidden px-4 pb-4 bg-white border-b border-gray-200">
          <SearchInput isMobile={true} onSuggestionClick={() => setShowMobileSearch(false)} />
        </div>
      )}
      {mounted && showMobileMenu && (
        <div ref={menuRef} className="md:hidden bg-white border-b border-gray-200 shadow-lg px-4 py-4 flex flex-col gap-2">
          {navBarList.map((item) => (
            <Link
              href={item?.link}
              key={item?.link}
              className="text-base font-medium text-gray-700 hover:text-darkOrange hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-200 text-center"
              onClick={() => setShowMobileMenu(false)}
            >
              {item?.title}
            </Link>
          ))}
          {mounted && (
            <>
              {session ? (
                <Link
                  href={"/dashboard"}
                  className="text-base font-medium text-gray-700 hover:text-darkOrange hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-200 text-center"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  href={"/signin"}
                  className="text-base font-medium text-gray-700 hover:text-darkOrange hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-200 text-center"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Sign in
                </Link>
              )}
              {/* {session?.user?.email === process.env.ADMIN_EMAIL && (
                <Link
                  href={"/studio"}
                  className="text-base font-medium text-gray-700 hover:text-darkOrange hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-200 text-center"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Studio
                </Link>
              )} */}
              {session?.user && (
                <Link
                  href={"/orders"}
                  className="text-base font-medium text-gray-700 hover:text-darkOrange hover:bg-gray-50 px-3 py-2 rounded-md transition-all duration-200 text-center"
                  onClick={() => setShowMobileMenu(false)}
                >
                  Orders
                </Link>
              )}
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
