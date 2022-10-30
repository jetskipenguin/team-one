import React from 'react'
import Axis from './Axis'

export default ({ scales, margins}) => {

    const xProps = {
      orient: 'Bottom',
      scale: scales.xScale,
      translate: `translate(0,${scales.yScale(0)})`,
      tickSize: 4
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${margins.left},0)`,
      tickSize: 4
     
    }
    return (

      <g>
        <Axis {...xProps} />
        <Axis {...yProps} />
      </g>
    )
  }