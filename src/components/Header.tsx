import Container from './Container'
import Link from 'next/link'
import SearchInput from "./SearchInput";
import { navBarList } from '../constants';
import { HiMenuAlt2 } from 'react-icons/hi';
import Logo from './Logo';


const Header = () => {
  return (
    <header className="w-full h-20 h-19 bg-accentWhite border-b-[1px] border-b-lightText/40 sticky z-50 top-0 left-0">
      <Container className='h-full flex items-center justify-between gap-5 lg:gap-10'>
        <Logo className=''/>
        <SearchInput />
        <div className='hidden md:inline-flex gap-5'>
          {navBarList?.map((item) => (
            <Link className='hover:text-darkOrange hoverEffect' key={item?.title} href={item.link}>
              {item?.title}
            </Link>
          ))}
          <Link href={'/signin'} className='hover:text-darkOrange hoverEffect'>
            Sign in
          </Link>
          <Link href={'/orders'} className='hover:text-darkOrange hoverEffect'>
            Orders
          </Link>
          <Link href={'/studio'} className='hover:text-darkOrange hoverEffect'>
            Studio
          </Link>
        </div>
        <HiMenuAlt2 className='inline-flex md:hidden cursor-pointer text-2xl hover:text-darkOrange hoverEffect'/>
      </Container>
    </header>
  )
}

export default Header
