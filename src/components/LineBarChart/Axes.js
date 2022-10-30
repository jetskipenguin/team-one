import React from 'react'
import Axis from './Axis'

export default ({ scales, margins, svgDimensions }) => {
    const { height, width } = svgDimensions
    console.log(scales)
    
    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0, ${height - margins.bottom})`,
      tickSize: 4
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${margins.left}, 0)`,
      tickSize: 4,

      
    }
    const yProps2 = {
      orient: 'Right',
      scale: scales.yScale2,
      translate: `translate(${width - margins.right},0)`,
      tickSize: 4
     
    }
    return (

      <g>
        <Axis {...xProps} />
        <Axis {...yProps} />
        <Axis {...yProps2} />
      </g>
    )
  }