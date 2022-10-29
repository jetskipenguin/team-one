import React, {useState, useEffect} from 'react'
import './Bars.css'

function Bars({scales, data}){
      const { xScale, yScale } = scales  
   
      const bars = (
        data.map(datum =>
          <rect
            className='barH'
            key={datum.name}
            x={xScale(datum.name)}  
            y={yScale(datum.value)}
            height={yScale(0) - yScale(datum.value)}
            width={xScale.bandwidth()}
            fill={'#5371f9'}
            />
          )
        )
      const titles = (
        data.map((datum,i) =>
        <text 
         key={i}
         fontFamily="sans-serif" 
         fill="#37393f"
         fontSize="9"
         textAnchor="middle"
         dy="-1em"
         dx="1.5em"
         x={xScale(datum.name)}
         y={yScale(datum.value)}>
          {(datum.value*100).toFixed(2)+'%'}
        </text> 
          )
        )
      return (
        <g >
          {bars}
          {titles}
        </g>
      )
    }
export default Bars