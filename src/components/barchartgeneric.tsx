import React from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'

export default ({
  percentage1,
  percentage2,
}: {
  percentage1: string
  percentage2?: string | undefined | null
}) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        // split label so it can be put in a seperate column with max width
        <section className="mr-8 flex flex-col">
          <div className="flex h-8 flex-row">
            <div
              className={`h-[full] w-[${percentage1}] ${
                context.dark ? 'bg-pinkDesat bg-opacity-80' : 'bg-pink'
              }`}
            >
              <div
                className={`relative left-[100%] flex h-full max-w-[3rem] flex-col justify-center pl-2 font-semibold ${
                  context.dark
                    ? 'text-white opacity-50'
                    : 'text-dark opacity-75'
                }`}
              >
                {percentage1}
              </div>
            </div>
          </div>
          {/* enkel tweede bar indien tweede gemeente geselecteerd */}
          {percentage2 ? (
            <div className="mt-2 flex h-8 flex-row">
              <div
                className={`h-full w-[${percentage2}] ${
                  context.dark ? 'bg-purpleDesat bg-opacity-80' : 'bg-purple'
                }`}
              >
                <div
                  className={`relative left-[100%] ml-0  flex h-full max-w-[3rem] flex-col justify-center pl-2 font-semibold ${
                    context.dark
                      ? 'text-white opacity-50'
                      : 'text-dark opacity-75'
                  }`}
                >
                  {percentage2}
                </div>
              </div>
            </div>
          ) : null}
        </section>
      )}
    </ThemeContext.Consumer>
  )
}
