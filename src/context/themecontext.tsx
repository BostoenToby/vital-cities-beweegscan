import React, { createContext, useState } from 'react'

const defaultState = {
  dark: false,
  setDark: (value: boolean) => {},
}

const ThemeContext = createContext(defaultState)
export default ThemeContext

export const ThemeProvider = ({ children }: { children: any }) => {
  const [dark, setDarkRaw] = useState(() => getInitialTheme())

  const setDark = (d: boolean) => {
    setDarkRaw(d)

    window.localStorage.setItem('color-mode', d.toString())
  }

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

function getInitialTheme(): boolean {
  if (typeof window !== 'undefined') {
    const persistentTheme = window.localStorage.getItem('color-mode')
    if (typeof persistentTheme === 'string') {
      const bool = persistentTheme === 'true'
      return bool
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)')
    const hasMediaPreference = typeof mql.matches === 'boolean'
    if (hasMediaPreference) {
      return mql.matches ? true : false
    }
  }
  return false
}
