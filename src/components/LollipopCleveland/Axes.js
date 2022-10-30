import React from 'react'
import Axis from './Axis'
import * as d3 from 'd3';
export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
  
    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0, ${height})`,
      // tickSize: height - margins.top - margins.bottom,
     
    //   tickSizeOuter:0,
      ticks: `${d3.timeDay}`
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      // translate: `translate(${margins.left}, 0)`,
      tickSize: width - margins.left - margins.right,
     
    }
    return (

      <g transform={"translate(" + margins.left + "," + margins.top + ")"}>
        <Axis {...xProps} />
        <Axis {...yProps} >


        </Axis>
        <text
        y='6'
        dy='8em'
        transform ="rotate(-90)"
        fill="black"
        text-anchor="end"
        font-size="10px"
        >
          {}
        </text>
    
      </g>
  )
}