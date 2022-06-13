import React from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'
import { Ambitie, Benchmark, PercentageData } from '../interfaces/data'

export default ({
  benchCity1,
  benchCity2,
}: {
  benchCity1: Benchmark
  benchCity2: Benchmark
}) => {
  let percentage1 = ''
  let percentage2 = ''
  let p1bigger = 0

  if (benchCity1.data.length == 1) {
    if (benchCity1.data[0].hasOwnProperty('nooit_minderDan1KeerPerMaand____')) {
      let nooit = parseInt(benchCity1.data[0].nooit_minderDan1KeerPerMaand____)
      let maand = parseInt(benchCity1.data[0].meerdereKerenPerMaand____)
      percentage1 = `${nooit + maand}%`

      if (benchCity2 && benchCity2.data.length >= 1) {
        nooit = parseInt(benchCity2.data[0].nooit_minderDan1KeerPerMaand____)
        maand = parseInt(benchCity2.data[0].meerdereKerenPerMaand____)
        percentage2 = `${nooit + maand}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('auto____')) {
      let auto = parseInt(benchCity1.data[0].auto____)
      let andere = parseInt(benchCity1.data[0].andere____)
      percentage1 = `${auto + andere}%`

      if (benchCity2 && benchCity2.data.length >= 1) {
        auto = parseInt(benchCity2.data[0].auto____)
        andere = parseInt(benchCity2.data[0].andere____)
        percentage2 = `${auto + andere}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('oneens____')) {
      percentage1 = benchCity1.data[0].oneens____

      if (benchCity2 && benchCity2.data.length >= 1) {
        percentage2 = benchCity2.data[0].oneens____
      }
    } else if (
      benchCity1.data[0].hasOwnProperty('nooit_eenUitzonderlijkeKeer____')
    ) {
      let nooit = parseInt(benchCity1.data[0].nooit_eenUitzonderlijkeKeer____)
      let maand = parseInt(benchCity1.data[0].minstensMaandelijks____)
      percentage1 = `${nooit + maand}%`

      if (benchCity2 && benchCity2.data.length >= 1) {
        nooit = parseInt(benchCity2.data[0].nooit_eenUitzonderlijkeKeer____)
        maand = parseInt(benchCity2.data[0].minstensMaandelijks____)
        percentage2 = `${nooit + maand}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('resultaatGemeente')) {
      percentage1 = `${100 - parseInt(benchCity1.data[0].resultaatGemeente)}%`

      if (benchCity2 && benchCity2.data.length >= 1) {
        percentage2 = `${100 - parseInt(benchCity2.data[0].resultaatGemeente)}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('nooit____')) {
      percentage1 = `${benchCity1.data[0].nooit____}`

      if (benchCity2 && benchCity2.data.length >= 1) {
        percentage2 = `${benchCity2.data[0].nooit____}`
      }
    } else if (benchCity1.data[0].hasOwnProperty('ontevreden____')) {
      percentage1 = `${benchCity1.data[0].ontevreden____}`

      if (benchCity2 && benchCity2.data.length >= 1) {
        percentage2 = `${benchCity2.data[0].ontevreden____}`
      }
    } else if (benchCity1.data[0].hasOwnProperty('percentage')) {
      percentage1 = `${100 - parseInt(benchCity1.data[0].percentage)}%`

      if (benchCity2 && benchCity2.data.length >= 1) {
        percentage2 = `${100 - parseInt(benchCity2.data[0].percentage)}%`
      }
    }
  }

  if (parseInt(percentage1) - 5 >= parseInt(percentage2)) {
    p1bigger = 1
  } else if (parseInt(percentage1) <= parseInt(percentage2) - 5) {
    p1bigger = -1
  } else {
    p1bigger = 0
  }

  if (benchCity1.data.length == 1) {
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
                    p1bigger == 1
                      ? 'text-[#E30000]'
                      : p1bigger == -1
                      ? 'text-[#3E8968]'
                      : `${
                          context.dark
                            ? 'text-white opacity-50'
                            : 'text-dark opacity-75'
                        }`
                  }`}
                >
                  {percentage1}
                </div>
              </div>
            </div>
            {/* enkel tweede bar indien tweede gemeente geselecteerd */}
            {benchCity2 && benchCity2.data.length >= 1 ? (
              <div className="mt-2 flex h-8 flex-row">
                <div
                  className={`h-full w-[${percentage2}] ${
                    context.dark ? 'bg-purpleDesat bg-opacity-80' : 'bg-purple'
                  }`}
                >
                  <div
                    className={`relative left-[100%] ml-0  flex h-full max-w-[3rem] flex-col justify-center pl-2 font-semibold ${
                      p1bigger == -1
                        ? 'text-[#E30000]'
                        : p1bigger == 1
                        ? 'text-[#3E8968]'
                        : `${
                            context.dark
                              ? 'text-white opacity-50'
                              : 'text-dark opacity-75'
                          }`
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
  } else {
    return <section className="ml-4">geen data beschikbaar</section>
    // fix later
  }
}
