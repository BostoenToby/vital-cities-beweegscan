import React from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'
import { Ambitie, Benchmark } from '../interfaces/data'

export default () => {
  const testJson: Benchmark = {
    label: 'Actief bewegen',
    data: [
      {
        dagelijks____: '25%',
        gemeente: 'Kortrijk',
        indicator: 'Actief bewegen',
        jaar: 2020,
        meerdereKerenPerMaand____: '18%',
        minstensWekelijks____: '46%',
        nooit_minderDan1KeerPerMaand____: '11%',
      },
    ],
  }

  const testJson2: Benchmark = {
    label: 'Actief bewegen',
    data: [
      {
        dagelijks____: '25%',
        gemeente: 'Vlaams Gewest',
        indicator: 'Actief bewegen',
        jaar: 2020,
        meerdereKerenPerMaand____: '18%',
        minstensWekelijks____: '46%',
        nooit_minderDan1KeerPerMaand____: '11%',
      },
    ],
  }

  console.log(testJson.data[0]['nooit_minderDan1KeerPerMaand____'])
  console.log(`w-[${testJson.data[0]['nooit_minderDan1KeerPerMaand____']}]`)

  if (testJson.data.length == 1) {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          // split label so it can be put in a seperate column with max width
          <section className="w-full">
            <div className="flex h-8 w-full flex-row">
              <div
                className={`h-full w-[${testJson.data[0]['nooit_minderDan1KeerPerMaand____']}] bg-pink`}
              ></div>
              <div className='flex items-center'>
                <div className="relative left-2">
                  {testJson.data[0]['nooit_minderDan1KeerPerMaand____']}
                </div>
              </div>
            </div>
            {/* enkel tweede bar indien tweede gemeente geselecteerd */}
            <div>
              <div></div>
              <div></div>
            </div>
          </section>
        )}
      </ThemeContext.Consumer>
    )
  } else {
    return null
    // fix later
  }
}
