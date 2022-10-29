import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'

function BarChart(){
    const margins = { top: 30, right: 0, bottom: 30, left: 40 }
    const svgDimensions = { width: 800, height: 500 }

    const maxValue = Math.max(...data.map(d => d.value))
 
    const xScale = scaleBand()
      .padding(0.1)
      .domain(data.map(d => d.name))
      .range([margins.left, svgDimensions.width - margins.right])
    const yScale = scaleLinear()
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom ,margins.top])

    return (
      <div>
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}/>
          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={data}/>
        </svg>
      </div>
    )
  }
export default BarChart
