import React from 'react'

function Bubble({ scales, margins, data}){
          const { xScale, yScale, zScale} = scales
          const bubble = (
          data.map(datum =>
            <circle
            cx={xScale(datum.gdpPercap)}  
            cy={yScale(datum.lifeExp)}
            r={zScale(datum.pop)}
            fill="#5371f9"
            opacity="0.7"
            stroke="black"
            strokeWidth='0.5'/>
         )
      )
      return (
        <g transform={`translate(${margins.left}, ${margins.top})`}>{bubble}</g>
              )
}
export default Bubble
