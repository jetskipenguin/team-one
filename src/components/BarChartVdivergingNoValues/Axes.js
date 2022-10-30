import React from 'react'
import Axisx from './Axisx'
import Axisy from './Axisy'

export default ({ scales, margins, data }) => {
   
    const xProps = {
      orient: 'Top',
      scale: scales.xScale,
      translate: `translate(0,${margins.top})`,
      tickSize: 4,
    }
  
    const yProps = {
      orient: 'Left',
      scale: scales.yScale,
      translate: `translate(${scales.xScale(0)},0)`,
      tickSize: -4,
    }

    return (

      <g>
        <Axisx {...xProps} />
        <Axisy {...yProps} />
      </g>
    )
  }