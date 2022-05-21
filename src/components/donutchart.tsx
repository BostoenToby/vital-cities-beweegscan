import React from "react"
import {Doughnut} from 'react-chartjs-2'
import 'chart.js/auto'

export default ({percentage}: {percentage: number}) => {

    return(
        <Doughnut
            data={{
                datasets: [{
                    data: [percentage, (100-percentage)],
                    backgroundColor: [
                        '#e7358b',
                        "#ebebeb"
                    ]
                }]
            }}
            options={{
                events: []
            }}
        />
    )
}