import React from 'react'
import { Link } from 'react-scroll';


const Header = () => {
  return (
    <header className='sticky top-0 z-10 p-4 bg-gray-200'>
        
            <ul className=' flex justify-center align-middle gap-6 text-xl cursor-pointer'>
                <li><Link to='home'  smooth={true} duration={500}>Home </Link> </li>         
                <li><Link to='about'  smooth={true} duration={500}>About </Link> </li>
                <li><Link to='portfolio'  smooth={true} duration={500}>Portfolio </Link> </li>
                <li><Link to='footer'  smooth={true} duration={500}>Contact </Link> </li>
            </ul>
        
    </header>
  )
}

export default Header