import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'

import { Link } from 'gatsby'
import { Menu, X, ChevronRight } from 'lucide-react'
import Logo from './logo'
import Logoalt from './logoalt'
import { useLocation } from '@reach/router'
import Darkmodetoggle from './darkmodetoggle'
import { text } from 'stream/consumers'

export default ({ section }: { section: string }) => {
  const [isFullsize, setFullsize] = useState(false)
  const [showSideNav, setShowSideNav] = useState(false)
  const [isAmbitions, setIsAmbitions] = useState(false)
  const [showAmbitions, setShowAmbitions] = useState(false)

  const location = useLocation()

  useEffect(() => {
    checkIfAmbitions()
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
      window.addEventListener('click', handleClick)
      return () => {
        window.removeEventListener('resize', updateSize)
        window.removeEventListener('click', handleClick)
      }
    }
  }, [])

  const handleSideBar = () => {
    setShowSideNav(!showSideNav)
  }

  const handleAmbitions = () => {
    setShowAmbitions(!showAmbitions)
    console.log(showAmbitions)
  }

  const handleClick = (e: any) => {
    const isOutside = !e.target.closest('#ambitionsList')

    if (isOutside) {
      setShowAmbitions(false)
    }
  }

  const checkIfAmbitions = () => {
    if (location.pathname == '/ambitionpage') {
      setIsAmbitions(true)
    } else {
      setIsAmbitions(false)
    }
  }

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className="sticky top-0 z-20 w-max navbreak:w-full">
          {isFullsize ? (
            <nav
              className={`flex h-24 w-full flex-row drop-shadow-sm ${
                context.dark
                  ? ' bg-darkGray'
                  : 'border-b-2 border-dark border-opacity-60 bg-white'
              }`}
            >
              <div
                className={`flex h-full w-32 flex-col justify-center ${
                  context.dark ? 'bg-darkGray' : 'bg-yellow'
                }`}
              >
                <a
                  className="absolute left-16 flex h-20 w-auto"
                  href="https://vitalcities.be/"
                >
                  {context.dark ? <Logoalt /> : <Logo />}
                </a>
              </div>
              <ul
                className={`my-auto ml-32 flex flex-row font-poppins text-2xl font-medium ${
                  context.dark ? 'text-white text-opacity-75' : 'text-dark'
                }`}
              >
                <li className="mr-14" id="ambitionsList">
                  <button
                    className={
                      context.dark
                        ? isAmbitions
                          ? 'text-white text-opacity-100'
                          : 'hover:text-lightPurpleDesat'
                        : isAmbitions
                        ? 'text-pink'
                        : 'hover:text-mediumPurple'
                    }
                    onClick={() => handleAmbitions()}
                  >
                    Ambities
                  </button>
                  {showAmbitions ? (
                    <ul
                      className={` absolute top-[4.5rem] rounded-md border-[1px] border-lightGray text-lg font-medium drop-shadow-lg ${
                        context.dark
                          ? 'border-opacity-50 bg-darkGray'
                          : 'bg-white'
                      }`}
                    >
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link to="/ambitionpage" state={{ ambition: "Actief bewegen & verplaatsen" }}>
                          Actief bewegen & verplaatsen
                        </Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link to="/ambitionpage" state={{ ambition: "Verbonden stadskern" }}>verbonden stadskern</Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link to="/ambitionpage" state={{ ambition: "Aantrekkelijke & veilige wandel- & fietsroutes" }}>Fiets- & wandelroutes</Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link to="/ambitionpage" state={{ ambition: "Stad & buurt als sportplein" }}>Sporten</Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link to="/ambitionpage" state={{ ambition: "Stad & buurt als speelplein" }}>Spelen</Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link to="/ambitionpage" state={{ ambition: "Stad & buurt als ontmoetingsplek" }}>Ontmoeten</Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link to="/ambitionpage" state={{ ambition: "Bruikbaar, gevarieerd & voldoende groen" }}>Groen</Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className=" mr-14">
                  <Link
                    activeStyle={{
                      color: context.dark ? '#ffffff' : '#E7348C',
                    }}
                    to="/overviewpagepractices"
                    className={
                      context.dark
                        ? 'hover:text-lightPurpleDesat'
                        : 'hover:text-mediumPurple'
                    }
                  >
                    Good practices
                  </Link>
                </li>
                <li className="mr-14 hover:text-mediumPurple">
                  <a
                    className={
                      context.dark
                        ? 'hover:text-lightPurpleDesat'
                        : 'hover:text-mediumPurple'
                    }
                    href={section}
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <div className="ml-auto mr-16 flex items-center">
                <Darkmodetoggle />
              </div>
            </nav>
          ) : (
            <div>
              {/* <div className="absolute z-0 top-0 w-full h-24 bg-purple"></div> */}
              <nav className="h-24">
                <div
                  className={`flex h-full w-32 flex-col justify-center ${
                    context.dark ? 'bg-darkGray' : 'bg-yellow'
                  }`}
                >
                  <div>
                    <Menu
                      size={32}
                      className={`m-8 ${
                        context.dark ? 'text-white' : 'text-dark'
                      }`}
                      onClick={() => handleSideBar()}
                    />
                  </div>
                  <a
                    className="absolute left-16 flex h-20 w-auto"
                    href="https://vitalcities.be/"
                  >
                    {context.dark ? <Logoalt /> : <Logo />}
                  </a>
                </div>
              </nav>

              <nav
                className={`fixed left-0 top-0 h-screen w-full max-w-sm overflow-y-auto pt-4 pr-4 pl-8 pb-8 ${
                  !showSideNav ? 'hidden' : ''
                } ${context.dark ? 'bg-darkGray' : 'bg-purple'}`}
              >
                <header className="mt-4 mb-16 flex flex-row">
                  <X
                    size={32}
                    className="text-white"
                    onClick={() => handleSideBar()}
                  />
                  <a
                    className="absolute right-4 flex h-20 w-auto"
                    href="https://vitalcities.be/"
                  >
                    <Logoalt />
                  </a>
                </header>
                <ul className="font-poppins" id="ambitionsList">
                  <li className="my-6 text-2xl font-medium text-white">
                    <button
                      className="flex flex-row items-center"
                      onClick={() => handleAmbitions()}
                    >
                      <p>Ambities</p>
                      <ChevronRight size={24} className="ml-6 text-white" />
                    </button>
                    {showAmbitions ? (
                      <ul className="mt-4 ml-2 text-lg font-medium text-white">
                        <li className="p-2 hover:opacity-80">
                          <Link to="/ambitionpage">
                            Actief bewegen & verplaatsen
                          </Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link to="/ambitionpage">verbonden stadskern</Link>
                        </li>
                        <li className="p-2 hover:opacity-90">
                          <Link to="/ambitionpage">Fiets- & wandelroutes</Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link to="/ambitionpage">Sporten</Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link to="/ambitionpage">Spelen</Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link to="/ambitionpage">Ontmoeten</Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link to="/ambitionpage">Groen</Link>
                        </li>
                      </ul>
                    ) : null}
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
                  <li
                    className="my-6 text-2xl font-medium text-white"
                    onClick={() => handleSideBar()}
                  >
                    <a href={section} className="flex flex-row items-center">
                      <p>Contact</p>
                      <ChevronRight size={24} className="ml-6 text-white" />
                    </a>
                  </li>
                </ul>
                <footer className="mt-16 flex flex-row justify-between">
                  <div className="mr-4">
                    <Darkmodetoggle />
                  </div>
                </footer>
              </nav>
            </div>
          )}
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
