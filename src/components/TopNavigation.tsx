import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import Logo from '../components/Logo'
import { Link } from 'gatsby'
import {
  Menu,
  X,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from 'lucide-react'
import LogoAlt from './LogoAlt'

export default () => {
  const [isFullsize, setFullsize] = useState(false)
  const [showSideNav, setShowSideNav] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateSize = () => {
        if (window.innerWidth > 1304) {
          setFullsize(true)
        } else {
          setFullsize(false)
        }
      }
      updateSize()

      window.addEventListener('resize', updateSize)
      return () => window.removeEventListener('resize', updateSize)
    }
  }, [])

  const handleSideBar = () => {
    setShowSideNav(!showSideNav)
  }

  return (
    <div className="sticky top-0 z-10 w-max navbreak:w-screen">
      {isFullsize ? (
        <nav className="flex h-24 w-full flex-row border-b-2 border-dark border-opacity-60 bg-white drop-shadow-sm">
          <div className="flex h-full w-32 flex-col justify-center bg-yellow">
            <div className="absolute left-16 flex h-20 w-auto">
              <Logo />
            </div>
          </div>
          <ul className="my-auto ml-32 flex flex-row font-poppins">
            <li className="mr-14 text-2xl font-medium text-dark">
              <Link activeStyle={{ color: '#E7348C' }} to="/">
                Home
              </Link>
            </li>
            <li className=" mr-14 text-2xl font-medium text-dark">
              <Link activeStyle={{ color: '#E7348C' }} to="/ambitionpage">
                Beweegscan
              </Link>
            </li>
            <li className=" mr-14 text-2xl font-medium text-dark">
              <Link
                activeStyle={{ color: '#E7348C' }}
                to="/overviewpagepractices"
              >
                Good practices
              </Link>
            </li>
            <li className="mr-14 text-2xl font-medium text-dark">
              <Link activeStyle={{ color: '#E7348C' }} to="/">
                Over ons
              </Link>
            </li>
          </ul>
          <div className="my-auto mr-16 ml-auto">
            <button className="relative z-auto h-14 rounded-xl border-2 border-purple bg-pink">
              <div className="absolute top-1 left-1 z-[-1] h-full w-full rounded-xl bg-purple"></div>
              <Link
                className="px-6 font-poppins text-2xl font-medium text-white"
                to="/"
              >
                Contacteer ons
              </Link>
            </button>
          </div>
        </nav>
      ) : (
        <div>
          <nav className="h-24">
            <div className="flex h-full w-32 flex-col justify-center bg-yellow">
              <div>
                <Menu
                  size={32}
                  className="m-8 text-dark"
                  onClick={() => handleSideBar()}
                />
              </div>
              <div className="absolute left-16 flex h-20 w-auto">
                <Logo />
              </div>
            </div>
          </nav>
          <nav
            className={`fixed left-0 top-0 h-screen w-screen max-w-sm overflow-y-auto bg-purple pt-4 pr-4 pl-8 pb-8 ${
              !showSideNav ? 'hidden' : ''
            }`}
          >
            <header className="mt-4 mb-16 flex flex-row">
              <X
                size={32}
                className="text-white"
                onClick={() => handleSideBar()}
              />
              <div className="absolute right-4 top-4 flex h-20 w-auto">
                <LogoAlt />
              </div>
            </header>
            <ul className="font-poppins">
              <li className="my-6 text-2xl font-medium text-white">
                <Link to="/" className="flex flex-row items-center">
                  <p>Home</p>
                  <ChevronRight size={24} className="ml-6 text-white" />
                </Link>
              </li>
              <li className="my-6 text-2xl font-medium text-white">
                <Link to="/ambitionpage" className="flex flex-row items-center">
                  <p>Beweegscan</p>
                  <ChevronRight size={24} className="ml-6 text-white" />
                </Link>
              </li>
              <li className="my-6 text-2xl font-medium text-white">
                <Link
                  to="/overviewpagepractices"
                  className="flex flex-row items-center"
                >
                  <p>Good practices</p>
                  <ChevronRight size={24} className="ml-6 text-white" />
                </Link>
              </li>
              <li className="my-6 text-2xl font-medium text-white">
                <Link to="/" className="flex flex-row items-center">
                  <p>Over ons</p>
                  <ChevronRight size={24} className="ml-6 text-white" />
                </Link>
              </li>
              <li className="my-6 text-2xl font-medium text-white">
                <Link to="/" className="flex flex-row items-center">
                  <p>Contacteer ons</p>
                  <ChevronRight size={24} className="ml-6 text-white" />
                </Link>
              </li>
            </ul>
            <footer className="mt-16 flex flex-row">
              <Facebook size={24} className=" mr-10 text-white" />
              <Twitter size={24} className=" mr-10 text-white" />
              <Instagram size={24} className=" mr-10 text-white" />
            </footer>
          </nav>
        </div>
      )}
    </div>
  )
}
