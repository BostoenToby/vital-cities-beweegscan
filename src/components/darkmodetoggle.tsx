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
          className="text-white hover:text-mediumPurple navbreak:text-black"
        >
          {context.dark ? <Moon /> : <Sun />}
        </button>
      )}
    </ThemeContext.Consumer>
  )
}
