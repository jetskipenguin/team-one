import React from 'react'
import {schemeCategory10} from 'd3-scale-chromatic'

function Bars({scales, data}) {
      const { xScale, yScale } = scales
      const bars = (
        data.map(datum =>
          <rect
            key={datum.name}
            x={xScale(datum.name)}  
            y={yScale(Math.min(0, datum.value))}
            height={Math.abs(yScale(datum.value) - yScale(0))}
            width={xScale.bandwidth()}
            fill={schemeCategory10[datum.value > 0 ? 0 : 3]}/>
        )
      )
      return (
        <g >
          {bars}
        </g>
      )
    }
export default Bars