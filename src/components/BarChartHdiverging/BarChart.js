import React from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'

function BarChart(){
    const margins = { top: 30, right: 60, bottom: 10, left: 60}
    const svgDimensions = {width: 700, height: 500}

    const maxValue = Math.max(...data.map(d => d.value))
    const minValue = Math.min(...data.map(d => d.value))
 
    const xScale = scaleBand()
      .padding(0.1)
      .domain(data.map(d => d.name))
      .range([margins.left, svgDimensions.width - margins.right])

    const yScale = scaleLinear()
      .domain([minValue,maxValue])
      .range([margins.top,svgDimensions.height - margins.bottom])

    
    return (
      <div>
        <svg width={svgDimensions.width} height={svgDimensions.height}>  
          <Bars
            scales={{ xScale, yScale }}
            data={data}
            />
             <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
            />
        </svg>
      </div>
    )
  }
export default BarChart
