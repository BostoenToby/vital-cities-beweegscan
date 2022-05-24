import React from 'react'
import { ThemeProvider } from './src/context/themecontext'
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
