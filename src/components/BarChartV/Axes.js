import React from 'react'
import Axis from './Axis'

export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
  
    const xProps = {
      orient: 'Top',
      scale: scales.xScale,
      translate: `translate(0, ${margins.top})`,
      tickSize: 4
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${margins.left}, 0)`,
      tickSize: 4
     
    }
    // const text=(
    //   data.map(datum=>
    //     <text
    //     fill="black"
    //     text-anchor="end"
    //     font-family="sans-serif"
    //     font-size="12px"
    //     x={xScale(datum.value)}  
    //     y={yScale(datum.name)+xScale.bandwidth()/2}
    //     dy="0.35em"
    //     dx="-4"
    //     >
    //     {datum.value}
    //     </text>)
    // )
    return (

      <g>
        <Axis {...xProps} />
        <Axis {...yProps} />
      </g>
    )
  }