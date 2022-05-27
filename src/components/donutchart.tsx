import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import ThemeContext from '../context/themecontext'

export default ({ percentage }: { percentage: number }) => {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Doughnut
          data={{
            datasets: [
              {
                data: [percentage, 100 - percentage],
                backgroundColor: [
                  context.dark ? '#BC2D73' : '#e7358b',
                  context.dark ? '#D3D3D3' : '#ebebeb',
                ],
              },
            ],
          }}
          options={{
            events: [],
          }}
        />
      )}
    </ThemeContext.Consumer>
  )
}
