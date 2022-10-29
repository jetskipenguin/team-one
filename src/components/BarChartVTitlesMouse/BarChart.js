import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'


function BarChart(){
    const margins = { top: 30, right: 0, bottom: 10, left: 30 }
    const svgDimensions = {width: 700,height: 500}

    const maxValue = Math.max(...data.map(d => d.value))
    const xScale = scaleLinear()
      .domain([0, maxValue])
      .range([margins.left, svgDimensions.width - margins.right])
      
    const yScale = scaleBand()
      .domain(data.map(d => d.name))
      .range([margins.top, svgDimensions.height - margins.bottom])
      .padding(0.1)

    return (
      <div>
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
           />
          <Bars
            scales={{ xScale, yScale }}
            data={data}
            />
        </svg>
      </div>
    )
  }
export default BarChart
