import { useState } from 'react'
import { close, logo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='flex w-full justify-between py-6 items-center'>

        {/* Logo */}
       <img className='w-[110px] h-[80px]' src={logo} alt='' />

        {/* Nav Links */}
      <ul className='sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[15px] ${
              index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
            } cursor-pointer text-white mr-10`}
          >
                <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Image */}

      <div className='flex sm:hidden mt-2 justify-end items-center'>
        <img src={toggle ? close : menu} alt=""  onClick={() => setToggle((prev) => !prev)}/>
      </div>

      {/* Mobile Menu */}
      <div className={` ${toggle ? 'flex' : 'hidden'} left-0 w-full leading-10 p-6 rounded-lg sidebar top-20 my-2 absolute bg-blue-gradient`}>
        <ul className='flex-1 list-none justify-end items-center'>
            {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`font-poppins font-normal text-[12px] ${
                index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                } cursor-pointer text-white mr-10`}
            >
                <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            ))}
        </ul>
      </div>
     
    </nav>
  )
}

export default Navbar
