import React from 'react'
import Axis from './Axis'
import * as d3 from 'd3';
export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
  
    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0, ${height - margins.bottom+20})`,
    }
  
    // const yProps = {
    //   orient: 'Left',
    //   scale: scales.yScale,
     
    // }
    const yPropsName = {
      orient: 'Left',
      scale: scales.yName,
     
    }
    return (
      <g>
        <Axis {...xProps} />
        {/* <Axis {...yProps} /> */}
        <Axis {...yPropsName} />
      </g>
  )
}