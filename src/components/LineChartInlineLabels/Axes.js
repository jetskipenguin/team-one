import React from 'react'
import Axis from './Axis'
import * as d3 from 'd3';
export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
  
    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0, ${height - margins.bottom})`,
      tickFormat: `${d => d3.timeFormat("%H:%M %S")(d)}`,
      // ticks:`${width}`,
    //   tickSizeOuter:0,
      // ticks: `${d3.timeDay}`
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${margins.left}, 0)`,
      tickSize: width - margins.left - margins.right,
     
    }
    return (

      <g>
        <Axis {...xProps} />
        <Axis {...yProps} >


        </Axis>
        <text
        y='6'
        dy='8em'
        transform ="rotate(-90)"
        fill="black"
        fontSize="end"
        fontSize="10px"
        >
          {}
        </text>
        <text
          y='4'
          dy="36em"
          dx='73em'
          transform ="rotate(0)"
          fill="black"
          fontSize="start"
          fontSize="10px"
        >
          {}
        </text>
      </g>
  )
}