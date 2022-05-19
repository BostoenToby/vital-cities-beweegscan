import React from 'react'
import '../assets/tailwind.css'
import { Paragraaf } from '../interfaces/testPractice'
import {
  checkheader,
  checkIfRegular,
  getParagraphBackground,
} from '../utils/practiceFunctions'

export default ({ paragraaf }: { paragraaf: Paragraaf }) => {
  if (checkIfRegular(paragraaf.header)) {
    return (
      <div className="break-inside-avoid-column font-poppins">
        {checkheader(paragraaf.header) ? (
          <h2 className="mb-6 text-3xl font-bold text-purple">
            {paragraaf.header}
          </h2>
        ) : null}

        <p className="mb-8 whitespace-pre-line text-lg text-dark">
          {paragraaf.body}
        </p>
      </div>
    )
  } else if (!checkIfRegular(paragraaf.header)) {
    return (
      <div
        className={`mb-8 p-4 font-poppins ${
          paragraaf.header.toLowerCase() == 'tip' ? 'bg-lightGreen' : ''
        }`}
      >
        <div className="w-max">
          <h2
            className={`text-3xl font-bold text-dark ${
              paragraaf.header.toLowerCase() == 'tip' ? 'mb-1' : ''
            }`}
          >
            {`${paragraaf.header}:`}
          </h2>
          {paragraaf.header.toLowerCase() !== 'tip' ? (
            <div
              className={`mb-6 h-1 w-full ${getParagraphBackground(
                paragraaf.header,
              )}`}
            ></div>
          ) : null}
        </div>
        <p className="ml-2 whitespace-pre-line text-lg text-dark">
          {paragraaf.body}
        </p>
      </div>
    )
  } else {
    return null
  }
}
