import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import { Sun, Moon } from 'lucide-react'
import ThemeContext from '../context/themecontext'

export default () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button
          onClick={() => context.setDark(!context.dark)}
          className={`text-white ${
            context.dark
              ? 'navbreak:text-white navbreak:hover:text-lightPurpleDesat navbreak:focus-visible:text-lightPurpleDesat focus-visible:text-pinkDesat'
              : 'navbreak:text-black navbreak:hover:text-mediumPurple navbreak:focus-visible:text-mediumPurple focus-visible:text-pink'
          }`}
        >
          {context.dark ? <Moon size={32} className="hover:text-pink" /> : <Sun size={32} className="hover:text-pink"/>}
        </button>
      )}
    </ThemeContext.Consumer>
  )
}
