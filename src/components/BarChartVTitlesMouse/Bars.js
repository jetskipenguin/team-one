import React from 'react'
import './Bars.css'

function Bars({scales, data}){
      const { xScale, yScale } = scales
      const bars = (
        data.map(datum =>
          <rect className='barV'
          key={datum.name}
          x={xScale(0)}  
          y={yScale(datum.name)}
          width={scales.xScale(datum.value)-scales.xScale(0)}
          height={yScale.bandwidth()}
          fill={'#cc0200'}/>
        )
      )
      const titles = (
        data.map((datum,i) =>
        xScale(datum.value) - xScale(0) < 20 ?
        <text 
        key={i}
        fontFamily="sans-serif" 
        fill="#414141"
        fontSize="10"
        textAnchor="end"
        dy="0.40em"
        dx="+4em"
        x={xScale(datum.value)}
        y={yScale(datum.name)+ yScale.bandwidth() / 2} >
          {datum.value}
        </text> :
            <text 
            
            key={i}
            fontFamily="sans-serif" 
            fill="#eee"
            fontSize="10"
            textAnchor="start"
            dy="0.40em"
            dx="-4em"
            x={xScale(datum.value)}
            y={yScale(datum.name) + yScale.bandwidth() / 2}>
              {datum.value}
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