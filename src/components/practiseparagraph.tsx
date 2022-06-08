import React from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'
import { Paragraaf } from '../interfaces/data'
import {
  checkheader,
  checkIfRegular,
  getParagraphBackground,
} from '../utils/practiceFunctions'

export default ({ paragraaf }: { paragraaf: Paragraaf }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        if (checkIfRegular(paragraaf.header)) {
          return (
            <div className="break-inside-avoid-column overflow-x-hidden font-poppins">
              {checkheader(paragraaf.header) ? (
                <h2
                  className={`mb-6 font-raleway text-2xl font-bold columnbreak:text-3xl ${
                    context.dark ? 'text-white' : 'text-purple '
                  }`}
                >
                  {paragraaf.header}
                </h2>
              ) : null}

              <p
                className={`mb-8 whitespace-pre-line text-base  columnbreak:text-lg ${
                  context.dark ? 'text-white text-opacity-80' : 'text-dark'
                }`}
              >
                {paragraaf.body}
              </p>
            </div>
          )
        } else if (!checkIfRegular(paragraaf.header)) {
          return (
            <div
              className={`mb-8 p-4 ${
                context.dark ? 'text-white' : 'text-dark'
              } ${
                paragraaf.header.toLowerCase() == 'tip'
                  ? context.dark
                    ? 'bg-lightGreen bg-opacity-[0.08] '
                    : 'bg-lightGreen bg-opacity-70'
                  : ''
              }`}
            >
              <div className="w-max">
                <h2
                  className={`font-raleway text-2xl font-bold columnbreak:text-3xl ${
                    paragraaf.header.toLowerCase() == 'tip' ? 'mb-1' : ''
                  } ${context.dark ? '!opacity-90' : ''}`}
                >
                  {`${paragraaf.header}:`}
                </h2>
                {paragraaf.header.toLowerCase() !== 'tip' ? (
                  <div
                    className={`mb-6 h-1 w-full  ${getParagraphBackground(
                      paragraaf.header,
                      context.dark,
                    )}`}
                  ></div>
                ) : null}
              </div>
              <p
                className={`ml-2 whitespace-pre-line text-base columnbreak:text-lg ${
                  context.dark ? '!opacity-80' : ''
                }
                `}
              >
                {paragraaf.body}
              </p>
            </div>
          )
        } else {
          return null
        }
      }}
    </ThemeContext.Consumer>
  )
}
