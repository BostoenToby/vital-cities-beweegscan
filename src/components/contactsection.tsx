import { Mail, Phone } from 'lucide-react'
import * as React from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'

export default () => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div
          className={`${
            context.dark ? 'bg-white bg-opacity-[0.03]' : 'bg-purple'
          } px-8 py-8`}
        >
          <h2 className="mb-2 text-lg font-semibold text-white tabletportrait:text-xl">
            Vital Cities kan nog veel meer voor jou betekenen
          </h2>
          <div className="text-xs tabletportrait:text-sm">
            <p className="text-white">
              Je zoekt nog meer inspiratie? Die vind je op onze{' '}
              <a
                href="https://vitalcities.be/"
                className={`text-pink underline  ${
                  context.dark
                    ? 'hover:text-lightPurpleDesat focus:text-lightPurpleDesat'
                    : 'hover:text-lightPurple focus:text-lightPurple'
                }`}
              >
                website
              </a>
              .
            </p>
            <p className="text-white">
              Je hebt een onderzoeksvraag? Contacteer Lore Cuypers,
              projectleider van Vital Cities via volgende middelen.
            </p>
            <div className="flex space-x-2 py-2 text-white">
              <Mail />
              <a
                href="mailto:lore.cuypers@howest.be"
                className={`text-pink underline  ${
                  context.dark
                    ? 'hover:text-lightPurpleDesat focus:text-lightPurpleDesat'
                    : 'hover:text-lightPurple focus:text-lightPurple'
                }`}
              >
                lore.cuypers@howest.be
              </a>
            </div>
            <div className="flex space-x-2 text-white">
              <Phone />
              <p>+32 485 98 89 92</p>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
