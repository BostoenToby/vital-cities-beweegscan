import React from 'react'
import '../assets/tailwind.css'
import TestPractice from '../interfaces/testPractice'
import { Link } from 'gatsby'
import ThemeContext from '../context/themecontext'

export default ({ practice }: { practice: TestPractice }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className="flex flex-col justify-between gridbreak:max-w-lg">
          <div>
            <section className=" mb-[6.5rem] h-80 gridbreak:mb-8">
              {/* // image placeholder */}
              <div className="mb-4 h-full w-full bg-gray opacity-50 gridbreak:mb-0"></div>
              <div className=" flex flex-col font-poppins text-base font-semibold text-white gridbreak:relative gridbreak:bottom-5 gridbreak:left-4 gridbreak:flex-row">
                <div
                  className={`py-2 px-4 gridbreak:-skew-x-12 ${
                    context.dark ? 'bg-pinkDesat' : 'bg-pink'
                  }`}
                >
                  {practice.themas[0]}
                </div>
                <div
                  className={`py-2 px-4 gridbreak:-skew-x-12 ${
                    context.dark ? 'bg-purpleDesat' : 'bg-purple'
                  }`}
                >
                  {practice.datum}
                </div>
              </div>
            </section>
            <section className="mb-4 font-poppins">
              <h2
                className={`mb-4 text-2xl font-semibold line-clamp-2 ${
                  context.dark ? 'text-white' : 'text-dark'
                }`}
              >
                {practice.titel}
              </h2>
              <p
                className={`text-base font-medium  line-clamp-6 ${
                  context.dark
                    ? 'text-white opacity-75'
                    : 'text-dark opacity-90'
                }`}
              >
                {practice.paragrafen[0].body}
              </p>
            </section>
          </div>
          <button
            className={`w-[93px] font-poppins text-lg font-semibold  ${
              context.dark
                ? 'text-lightPurpleDesat'
                : 'text-purple text-opacity-90'
            }`}
          >
            <Link to="/detailscase/" state={{ practice: practice }}>
              Lees meer
            </Link>
            <div
              className={`h-[3px] w-full  ${
                context.dark
                  ? 'bg-lightPurpleDesat opacity-40'
                  : 'bg-purple opacity-30'
              }`}
            ></div>
          </button>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
