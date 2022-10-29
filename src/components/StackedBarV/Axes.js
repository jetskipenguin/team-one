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
    return (

      <g>
        <Axis {...xProps} />
        <Axis {...yProps} />
      </g>
    )
  }