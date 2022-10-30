import React from 'react'
import {schemeCategory10} from 'd3-scale-chromatic'
import * as d3 from 'd3';
import './Bars.css'


function Bars({scales,data}){
      const { xScale, yScale } = scales

      const bars = (
        data.map(datum =>
          <g>
          <rect
            className='rectColor'
            key={datum.name}
            x={xScale(Math.min(0, datum.value))}  
            y={yScale(datum.name)}
            height={yScale.bandwidth()}
            width={Math.abs(xScale(datum.value) - xScale(0))}
            fill={schemeCategory10[datum.value > 0 ? 0 : 3]}
            stroke={''}
            fillOpacity={'1'}
          >
          </rect>
            <text 
            fontFamily="sans-serif" 
            fill="black"
            fontSize="10"
            textAnchor={datum.value < 0 ? "end" : "start"}
            dy="0.35em"
            x={xScale(datum.value) + Math.sign(datum.value - 0) * 4}
            y={yScale(datum.name) + yScale.bandwidth()/2}>
             {d3.format("+,.0%")(datum.value)}
            </text>
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