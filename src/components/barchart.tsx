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
        gemeente: 'Vlaams Gewest',
        indicator: 'Actief bewegen',
        jaar: 2020,
        meerdereKerenPerMaand____: '18%',
        minstensWekelijks____: '46%',
        nooit_minderDan1KeerPerMaand____: '90%',
      },
    ],
  }

  console.log(testJson.data[0]['nooit_minderDan1KeerPerMaand____'])
  console.log(`w-[${testJson.data[0]['nooit_minderDan1KeerPerMaand____']}]`)

  if (testJson.data.length == 1) {
    return (
      <ThemeContext.Consumer>
        {(context) => (
          <div className="flew-row flex h-8 w-full">
            <label className="w-1/4">
              {testJson.data[0].indicator == testJson.data[0].item
                ? testJson.label
                : testJson.data[0].item}
            </label>
            <section className="h-full w-3/4">
              <div className="flex h-full w-full flex-row">
                <div
                  className={`h-full w-[${testJson.data[0]['nooit_minderDan1KeerPerMaand____']}] bg-pink`}
                ></div>
                <div className={`w-[calc(100%-${testJson.data[0]['nooit_minderDan1KeerPerMaand____']})]`}>
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
          </div>
        )}
      </ThemeContext.Consumer>
    )
  } else {
    return null
    // fix later
  }
}
