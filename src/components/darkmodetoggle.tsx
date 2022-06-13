import React, { useEffect, useState } from 'react'
import '../assets/tailwind.css'
import { Sun, Moon } from 'lucide-react'
import ThemeContext from '../context/themecontext'

export default () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <button
          tabIndex={13}
          onClick={() => context.setDark(!context.dark)}
          className={`text-white ${
            context.dark
              ? 'navbreak:text-white navbreak:hover:text-lightPurpleDesat navbreak:focus:text-lightPurpleDesat focus:text-pinkDesat'
              : 'navbreak:text-black navbreak:hover:text-mediumPurple navbreak:focus:text-mediumPurple focus:text-pink'
          }`}
        >
          {context.dark ? <Moon size={32} className="hover:text-lightPurpleDesat" /> : <Sun size={32}/>}
        </button>
      )}
    </ThemeContext.Consumer>
  )
}
