import React from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className='flex items-center p-4 bg-gray-800 text-white space-x-8 pl-4 py-4'>
        <img className='w-[50px] h-[50px]' src={Logo} alt="IMDB Logo" />
        <Link className='hover:text-blue-500 text-2xl' to = '/' >Movies</Link>
        <Link className='hover:text-blue-500 text-2xl' to = '/watchlist' >Watchlist</Link>
    </div>
  )
}

export default Navbar