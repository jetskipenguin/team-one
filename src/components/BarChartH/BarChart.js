import React, { useState } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'
import Tooltip from './Tooltip';

function BarChart(){

    const [hoveredBar,setHover]=useState(null)

    const margins = { top: 30, right: 0, bottom: 30, left: 40 }
    const svgDimensions = {
      width: 800,
      height: 500
    }

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
      <svg  
      
      width={svgDimensions.width} height={svgDimensions.height}
     >
        
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}
         
        />
       
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
          svgDimensions={svgDimensions}
          onMouseOverCallback={(datum) => setHover(datum)}
          onMouseOutCallback={() => setHover(null)}
          
        />
         
      </svg>
      {hoveredBar ? (
          <Tooltip
            data={hoveredBar}
            scales={{ xScale, yScale }}
          />
        ) : null}
      </div>
    )
  }

export default BarChart
