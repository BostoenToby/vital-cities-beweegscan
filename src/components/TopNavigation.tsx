import React from 'react'
import '../assets/tailwind.css'
import Logo from '../components/Logo'
import { Link } from 'gatsby'

export default () => {
  return (
    <nav className="sticky top-0 flex h-24 w-full flex-row border-b-2 border-dark border-opacity-60 bg-white drop-shadow-sm">
      <div className="flex h-full w-32 flex-col justify-center bg-yellow">
        <div className="absolute left-16 flex h-20 w-auto">
          <Logo />
        </div>
      </div>
      <ul className="my-auto ml-32 flex flex-row">
        <li className="text-Poppins mr-14 text-2xl font-medium text-dark">
          <Link activeStyle={{ color: '#E7348C' }} to="/ambitionpage">
            Home
          </Link>
        </li>
        <li className="text-Poppins mr-14 text-2xl font-medium text-dark">
          <Link activeStyle={{ color: '#E7348C' }} to="/">
            Beweegscan
          </Link>
        </li>
        <li className="text-Poppins mr-14 text-2xl font-medium text-dark">
          <Link activeStyle={{ color: '#E7348C' }} to="/overviewpagepractices">
            Good practices
          </Link>
        </li>
        <li className="text-Poppins mr-14 text-2xl font-medium text-dark">
          <Link activeStyle={{ color: '#E7348C' }} to="/">
            Over ons
          </Link>
        </li>
      </ul>
      <div className="my-auto mr-16 ml-auto">
        <button className="relative z-auto h-14 rounded-xl border-2 border-purple bg-pink">
          <div className="absolute top-1 left-1 z-[-1] h-full w-full rounded-xl bg-purple"></div>
          <Link
            className="text-Poppins px-6 text-2xl font-medium text-white"
            to="/"
          >
            Contacteer ons
          </Link>
        </button>
      </div>
    </nav>
  )
}
