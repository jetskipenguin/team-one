import React from 'react'
import {schemeCategory10} from 'd3-scale-chromatic'
import * as d3 from 'd3';



function Bars({scales,data}){
      const { xScale, yScale } = scales
      

      const bars = (
        data.map(datum =>
          <g>
            <rect
              className='content'
              key={datum.name}
              x={xScale(Math.min(0, datum.value))}  
              y={yScale(datum.name)}
              height={yScale.bandwidth()}
              width={Math.abs(xScale(datum.value) - xScale(0))}
              fill={schemeCategory10[datum.value > 0 ? 0 : 3]}
            >
            </rect>
          </g>
        )
      )
      return (
        <>
          {bars} 
        </>
      )
    }
export default Bars