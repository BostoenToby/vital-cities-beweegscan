import React from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'
import { Ambitie, Benchmark } from '../interfaces/data'

export default (bench: Benchmark) => {
  return (


    <ThemeContext.Consumer>
      {(context) => (
        <div className="h-full w-full">
          <label></label>
          <section>
            <div>
              <div></div>
              <div></div>
            </div>
            {/* enkel tweede bar indien tweede gemeente geselecteerd */}
            <div>
              <div></div>
              <div></div>
            </div>
          </section>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
