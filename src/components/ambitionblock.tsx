import { Link } from 'gatsby'
import * as React from 'react'
import ThemeContext from '../context/themecontext'

export default ({ header, text, shorttext }: { header: string; text: string, shorttext: string }) => {
  // switch statement die kijkt naar de text voor een icon?
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Link
          to="ambitionpage"
          state={{ ambition: text, short: shorttext }}
          className={` flex min-h-[288px] flex-col justify-center   px-6 py-12 drop-shadow-sm ${
            context.dark
              ? ' bg-white bg-opacity-[0.06] hover:bg-opacity-10 focus:bg-opacity-10'
              : 'border-[1px] border-darkGray border-opacity-25 bg-white hover:bg-darkGray  hover:bg-opacity-5 focus:bg-darkGray focus:bg-opacity-5'
          }`}
        >
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray opacity-50"></div>
          <div className="mt-2 justify-center text-center">
            <p
              className={`mb-1 text-base font-bold ${
                context.dark ? 'text-lightPurpleDesat' : 'text-lightPurple'
              }`}
            >
              {header}
            </p>
            <h3
              className={`font-raleway text-2xl font-semibold ${
                context.dark ? 'text-white opacity-90' : 'text-dark'
              }`}
            >
              {text}
            </h3>
          </div>
        </Link>
      )}
    </ThemeContext.Consumer>
  )
}
