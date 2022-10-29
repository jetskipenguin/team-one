import React from 'react'
import { scaleOrdinal } from 'd3-scale'
import * as d3 from 'd3';

function Bubble({ scales, margins, data}){
          const { xScale, yScale, zScale} = scales
          const colorScale = scaleOrdinal()
          .domain(["Asia", "Europe", "Americas", "Africa", "Oceania"])
          .range(d3.schemeSet1);
          const bubble = (
          data.map(datum =>
            <circle
            cx={xScale(datum.gdpPercap)}  
            cy={yScale(datum.lifeExp)}
            r={zScale(datum.pop)}
            fill={colorScale(datum.continent)}
            opacity="0.7"
            stroke="black"
            strokeWidth='0.5px'/>
         )
      )
      return (
        <g transform={`translate(${margins.left}, ${margins.top})`}>{bubble}</g>
              )
}
export default Bubble
