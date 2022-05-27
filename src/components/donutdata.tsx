import React from 'react'
import '../assets/tailwind.css'
import ThemeContext from '../context/themecontext'
import { PercentageData } from '../interfaces/data'
import Donutchart from './donutchart'

export default ({
  data
}: {
  data: PercentageData
}) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <div className="p-2">
          <div className="flex items-center">
            <div className="mb-2 h-14 w-14 laptop:h-20 laptop:w-20">
              <Donutchart percentage={data.percentage} />
            </div>
            <div className="flex flex-col">
              <label
                className={`font-medium ${context.dark ? 'opacity-90' : ''}`}
              >
                {data.label}
              </label>
              <label
                className={`font-bold ${
                  context.dark ? 'text-pinkDesat' : 'text-pink'
                }`}
              >{`${data.percentage}%`}</label>
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
