import React, { useEffect, useRef, useState } from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'

import { Link } from 'gatsby'
import { Menu, X, ChevronRight } from 'lucide-react'
import Logo from './logo'
import Logoalt from './logoalt'
import { useLocation } from '@reach/router'
import Darkmodetoggle from './darkmodetoggle'
import { text } from 'stream/consumers'
import { type } from 'os'

export default ({ section }: { section: string }) => {
  const [isFullsize, setFullsize] = useState(false)
  const [showSideNav, setShowSideNav] = useState(false)
  const [isAmbitions, setIsAmbitions] = useState(false)
  const [showAmbitions, setShowAmbitions] = useState(false)
  const [currentAmbition, setCurrentAmbition] = useState<string>()
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      checkIfAmbitions()
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

  useEffect(() => {
    const data = localStorage.getItem('currentAmbition')
    if (data && isAmbitions) {
      setCurrentAmbition(data)
    } else {
      setCurrentAmbition('outside')
    }
  }, [isAmbitions])

  useEffect(() => {
    if (currentAmbition) {
      console.log(currentAmbition)
      localStorage.setItem('currentAmbition', currentAmbition)
      if (isAmbitions && clicked) {
        window.location.reload()
      }
    }
  }, [currentAmbition])

  const handleSideBar = () => {
    setShowSideNav(!showSideNav)
  }

  const handleAmbitions = () => {
    setShowAmbitions(!showAmbitions)
  }

  const handleClick = (e: any) => {
    const isOutside = !e.target.closest('#ambitionsList')

    if (isOutside) {
      setShowAmbitions(false)
    }
  }

  const checkIfAmbitions = () => {
    if (window.location.pathname == '/ambitionpage/') {
      setIsAmbitions(true)
    } else {
      setIsAmbitions(false)
    }
  }

  const handleLink = (short: string) => {
    setCurrentAmbition(short)
    setClicked(true)
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
                  : 'border-b-[1px] border-lightGray bg-white'
              }`}
            >
              <div
                className={`flex h-full w-32 flex-col justify-center ${
                  context.dark ? 'bg-darkGray' : 'bg-yellow'
                }`}
              >
                <a
                  tabIndex={1}
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
                <li className=" mr-14">
                  <Link
                    tabIndex={2}
                    activeStyle={{
                      color: context.dark ? '#ffffff' : '#E7348C',
                    }}
                    to="/"
                    onClick={() => setCurrentAmbition('outside')}
                    className={
                      context.dark
                        ? 'hover:text-lightPurpleDesat focus:text-lightPurpleDesat'
                        : 'hover:text-mediumPurple focus:text-mediumPurple'
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-14" id="ambitionsList">
                  <button
                    tabIndex={3}
                    className={
                      context.dark
                        ? isAmbitions
                          ? 'text-white text-opacity-100'
                          : 'hover:text-lightPurpleDesat focus:text-lightPurpleDesat'
                        : isAmbitions
                        ? 'text-pink'
                        : 'hover:text-mediumPurple focus:text-mediumPurple'
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
                            ? ' border-opacity-50 focus-within:bg-white focus-within:bg-opacity-[0.12] hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple'
                        }`}
                      >
                        <Link
                          tabIndex={4}
                          className={`${
                            context.dark ? '' : 'focus:text-mediumPurple'
                          }
                            ${
                              currentAmbition == 'actief bewegen'
                                ? 'text-pinkDesat'
                                : ''
                            }`}
                          onClick={() => handleLink('actief bewegen')}
                          to="/ambitionpage/"
                          state={{
                            short: 'actief bewegen',
                          }}
                        >
                          Actief bewegen & verplaatsen
                        </Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 focus-within:bg-white focus-within:bg-opacity-[0.12] hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple'
                        }`}
                      >
                        <Link
                          tabIndex={5}
                          className={`${
                            context.dark ? '' : 'focus:text-mediumPurple'
                          } ${
                            currentAmbition == 'verbonden stadskern'
                              ? 'text-pinkDesat'
                              : ''
                          }`}
                          onClick={() => handleLink('verbonden stadkern')}
                          to="/ambitionpage/"
                          state={{
                            short: 'verbonden stadskern',
                          }}
                        >
                          Verbonden stadskern
                        </Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 focus-within:bg-white focus-within:bg-opacity-[0.12] hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple'
                        }`}
                      >
                        <Link
                          tabIndex={6}
                          className={`${
                            context.dark ? '' : 'focus:text-mediumPurple'
                          } ${
                            currentAmbition == 'fiets- en wandelroutes'
                              ? 'text-pinkDesat'
                              : ''
                          }`}
                          onClick={() => handleLink('fiets- en wandelroutes')}
                          to="/ambitionpage/"
                          state={{
                            short: 'fiets- en wandelroutes',
                          }}
                        >
                          Wandel- & fietsroutes
                        </Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 focus-within:bg-white focus-within:bg-opacity-[0.12] hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple'
                        }`}
                      >
                        <Link
                          tabIndex={7}
                          className={`${
                            context.dark ? '' : 'focus:text-mediumPurple'
                          } ${
                            currentAmbition == 'sporten' ? 'text-pinkDesat' : ''
                          }`}
                          onClick={() => handleLink('sporten')}
                          to="/ambitionpage/"
                          state={{
                            short: 'sporten',
                          }}
                        >
                          Sporten
                        </Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 focus-within:bg-white focus-within:bg-opacity-[0.12] hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link
                          tabIndex={8}
                          className={`${
                            context.dark ? '' : 'focus:text-mediumPurple'
                          } ${
                            currentAmbition == 'spelen' ? 'text-pinkDesat' : ''
                          }`}
                          onClick={() => handleLink('spelen')}
                          to="/ambitionpage/"
                          state={{
                            short: 'spelen',
                          }}
                        >
                          Spelen
                        </Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 focus-within:bg-white focus-within:bg-opacity-[0.12] hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link
                          tabIndex={9}
                          className={`${
                            context.dark ? '' : 'focus:text-mediumPurple'
                          } ${
                            currentAmbition == 'ontmoeten'
                              ? 'text-pinkDesat'
                              : ''
                          }`}
                          onClick={() => handleLink('ontmoeten')}
                          to="/ambitionpage/"
                          state={{
                            short: 'ontmoeten',
                          }}
                        >
                          Ontmoeten
                        </Link>
                      </li>
                      <li
                        className={` rounded-t-md border-b-[1px] border-lightGray  p-4  ${
                          context.dark
                            ? ' border-opacity-50 focus-within:bg-white focus-within:bg-opacity-[0.12] hover:bg-white hover:bg-opacity-[0.12]'
                            : ' hover:bg-neutral hover:text-mediumPurple '
                        }`}
                      >
                        <Link
                          tabIndex={10}
                          className={`${
                            context.dark ? '' : 'focus:text-mediumPurple'
                          } ${
                            currentAmbition == 'groen' ? 'text-pinkDesat' : ''
                          }`}
                          onClick={() => handleLink('groen')}
                          to="/ambitionpage/"
                          state={{
                            short: 'groen',
                          }}
                        >
                          Groen
                        </Link>
                      </li>
                    </ul>
                  ) : null}
                </li>
                <li className=" mr-14">
                  <Link
                    tabIndex={11}
                    activeStyle={{
                      color: context.dark ? '#ffffff' : '#E7348C',
                    }}
                    to="/overviewpagepractices"
                    className={
                      context.dark
                        ? 'hover:text-lightPurpleDesat focus:text-lightPurpleDesat'
                        : 'hover:text-mediumPurple focus:text-mediumPurple'
                    }
                    onClick={() => setCurrentAmbition('outside')}
                  >
                    Praktijkvoorbeelden
                  </Link>
                </li>
                <li className="mr-14 hover:text-mediumPurple">
                  <a
                    tabIndex={12}
                    className={
                      context.dark
                        ? 'hover:text-lightPurpleDesat focus:text-lightPurpleDesat'
                        : 'hover:text-mediumPurple focus:text-mediumPurple'
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
              {showSideNav ? (
                <div
                  className="absolute top-0 z-0 h-screen w-screen bg-dark opacity-50"
                  onClick={() => handleSideBar()}
                />
              ) : null}
              <nav className="h-24">
                <div
                  className={`flex h-full w-32 flex-col justify-center ${
                    context.dark ? 'bg-darkGray' : 'bg-yellow'
                  }`}
                >
                  <div>
                    <Menu
                      tabIndex={1}
                      size={32}
                      className={`m-8 cursor-pointer hover:text-pink focus:text-pink ${
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
                className={`fixed -left-96 top-0 h-screen w-full max-w-sm overflow-y-auto pt-4 pr-4 pl-8 pb-8 transition-all duration-75 ${
                  !showSideNav ? '' : 'left-0'
                } ${context.dark ? 'bg-darkGray' : 'bg-purple'}`}
              >
                <header className="mt-4 mb-16 flex flex-row">
                  <X
                    tabIndex={14}
                    size={32}
                    className="cursor-pointer text-white hover:text-pink focus:text-pink"
                    onClick={() => handleSideBar()}
                  />
                  <a
                    tabIndex={2}
                    className="absolute right-4 flex h-20 w-auto"
                    href="https://vitalcities.be/"
                  >
                    <Logoalt />
                  </a>
                </header>
                <ul className="font-poppins" id="ambitionsList">
                  <li className="my-6 text-2xl font-medium text-white focus-within:text-pink hover:text-pink">
                    <Link
                      tabIndex={3}
                      to="/"
                      className="flex flex-row items-center"
                      onClick={() => setCurrentAmbition('outside')}
                    >
                      <p>Home</p>
                      <ChevronRight size={24} className="ml-6 text-white" />
                    </Link>
                  </li>
                  <li className="my-6 text-2xl font-medium text-white focus-within:text-pink hover:text-pink">
                    <button
                      tabIndex={4}
                      className="flex flex-row items-center"
                      onClick={() => handleAmbitions()}
                    >
                      <p>Ambities</p>
                      <ChevronRight size={24} className="ml-6 text-white" />
                    </button>
                    {showAmbitions ? (
                      <ul className="mt-4 ml-2 text-lg font-medium text-white">
                        <li className="p-2 hover:opacity-80">
                          <Link
                            tabIndex={5}
                            onClick={() => handleLink('actief bewegen')}
                            to="/ambitionpage/"
                            state={{
                              ambition: 'Actief bewegen en verplaatsen',
                              short: 'actief bewegen',
                            }}
                          >
                            Actief bewegen & verplaatsen
                          </Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link
                            tabIndex={6}
                            onClick={() => handleLink('verbonden stadskern')}
                            to="/ambitionpage/"
                            state={{
                              ambition: 'Verbonden stadskern',
                              short: 'verbonden stadskern',
                            }}
                          >
                            verbonden stadskern
                          </Link>
                        </li>
                        <li className="p-2 hover:opacity-90">
                          <Link
                            tabIndex={7}
                            onClick={() => handleLink('fiets- en wandelroutes')}
                            to="/ambitionpage/"
                            state={{
                              ambition:
                                'Aantrekkelijke en veilige wandel- en fietsroutes',
                              short: 'fiets- en wandelroutes',
                            }}
                          >
                            Wandel- & fietsroutes
                          </Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link
                            tabIndex={8}
                            onClick={() => handleLink('sporten')}
                            to="/ambitionpage/"
                            state={{
                              ambition: 'Stad en buurt als sportplein',
                              short: 'sporten',
                            }}
                          >
                            Sporten
                          </Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link
                            tabIndex={9}
                            onClick={() => handleLink('spelen')}
                            to="/ambitionpage/"
                            state={{
                              ambition: 'Stad en buurt als speelplein',
                              short: 'spelen',
                            }}
                          >
                            Spelen
                          </Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link
                            tabIndex={10}
                            onClick={() => handleLink('ontmoeten')}
                            to="/ambitionpage/"
                            state={{
                              ambition: 'Stad en buurt als ontmoetingsplek',
                              short: 'ontmoeten',
                            }}
                          >
                            Ontmoeten
                          </Link>
                        </li>
                        <li className="p-2 hover:opacity-80">
                          <Link
                            tabIndex={11}
                            onClick={() => handleLink('groen')}
                            to="/ambitionpage/"
                            state={{
                              ambition:
                                'Bruikbaar, gevarieerd en voldoende groen',
                              short: 'groen',
                            }}
                          >
                            Groen
                          </Link>
                        </li>
                      </ul>
                    ) : null}
                  </li>
                  <li className="my-6 text-2xl font-medium text-white focus-within:text-pink hover:text-pink">
                    <Link
                      tabIndex={12}
                      to="/overviewpagepractices"
                      className="flex flex-row items-center"
                      onClick={() => setCurrentAmbition('outside')}
                    >
                      <div className="flex flex-col mobileM:flex-row">
                        <p>Praktijk</p>
                        <p>voorbeelden</p>
                      </div>
                      <ChevronRight size={24} className="ml-6 text-white" />
                    </Link>
                  </li>
                  <li
                    className="my-6 text-2xl font-medium text-white focus-within:text-pink hover:text-pink"
                    onClick={() => handleSideBar()}
                  >
                    <a
                      tabIndex={13}
                      href={section}
                      className="flex flex-row items-center"
                    >
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
