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

  if (benchCity1.data.length == 1) {
    if (benchCity1.data[0].hasOwnProperty('nooit_minderDan1KeerPerMaand____')) {
      let nooit = parseInt(benchCity1.data[0].nooit_minderDan1KeerPerMaand____)
      let maand = parseInt(benchCity1.data[0].meerdereKerenPerMaand____)
      percentage1 = `${nooit + maand}%`

      if (benchCity2) {
        nooit = parseInt(benchCity2.data[0].nooit_minderDan1KeerPerMaand____)
        maand = parseInt(benchCity2.data[0].meerdereKerenPerMaand____)
        percentage2 = `${nooit + maand}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('auto____')) {
      let auto = parseInt(benchCity1.data[0].auto____)
      let andere = parseInt(benchCity1.data[0].andere____)
      percentage1 = `${auto + andere}%`

      if (benchCity2) {
        auto = parseInt(benchCity2.data[0].auto____)
        andere = parseInt(benchCity2.data[0].andere____)
        percentage2 = `${auto + andere}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('oneens____')) {
      percentage1 = benchCity1.data[0].oneens____

      if (benchCity2) {
        percentage2 = benchCity2.data[0].oneens____
      }
    } else if (
      benchCity1.data[0].hasOwnProperty('nooit_eenUitzonderlijkeKeer____')
    ) {
      let nooit = parseInt(benchCity1.data[0].nooit_eenUitzonderlijkeKeer____)
      let maand = parseInt(benchCity1.data[0].minstensMaandelijks____)
      percentage1 = `${nooit + maand}%`

      if (benchCity2) {
        nooit = parseInt(benchCity2.data[0].nooit_eenUitzonderlijkeKeer____)
        maand = parseInt(benchCity2.data[0].minstensMaandelijks____)
        percentage2 = `${nooit + maand}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('resultaatGemeente')) {
      percentage1 = `${100 - parseInt(benchCity1.data[0].resultaatGemeente)}%`

      if (benchCity2) {
        percentage2 = `${100 - parseInt(benchCity2.data[0].resultaatGemeente)}%`
      }
    } else if (benchCity1.data[0].hasOwnProperty('nooit____')) {
      percentage1 = `${benchCity1.data[0].nooit____}`

      if (benchCity2) {
        percentage2 = `${benchCity2.data[0].nooit____}`
      }
    } else if (benchCity1.data[0].hasOwnProperty('ontevreden____')) {
      percentage1 = `${benchCity1.data[0].ontevreden____}`

      if (benchCity2) {
        percentage2 = `${benchCity2.data[0].ontevreden____}`
      }
    } else if (benchCity1.data[0].hasOwnProperty('percentage')) {
      percentage1 = `${100 - parseInt(benchCity1.data[0].percentage)}%`

      if (benchCity2) {
        percentage2 = `${100 - parseInt(benchCity2.data[0].percentage)}%`
      }
    }
  }

  if (benchCity1.data.length == 1) {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          // split label so it can be put in a seperate column with max width
          <section className="flex flex-col">
            <div className="flex h-8 flex-row">
              <div className={`h-full w-[${percentage1}] bg-pink`}></div>
              <div className="flex items-center">
                <div className="relative left-2">{percentage1}</div>
              </div>
            </div>
            {/* enkel tweede bar indien tweede gemeente geselecteerd */}
            {benchCity2 ? (
              <div className="mt-2 flex h-8 flex-row">
                <div className={`h-full w-[${percentage2}] bg-purple`}></div>
                <div className="flex items-center">
                  <div className="relative left-2">{percentage2}</div>
                </div>
              </div>
            ) : null}
          </section>
        )}
      </ThemeContext.Consumer>
    )
  } else {
    return <section>geen data beschikbaar</section>
    // fix later
  }
}
