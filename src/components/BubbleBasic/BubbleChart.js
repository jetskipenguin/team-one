import React from 'react';
import { scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bubble from './Bubble'

function ChartBubble(){
  const margins = { top: 30, right: 0, bottom: 10, left: 30 }
  const svgDimensions = {width: 800,height: 500}

  const xScale = scaleLinear()
    .domain([0, 60000])
    .range([0, svgDimensions.width])
  const yScale = scaleLinear()
    .domain([0, 90])
    .range([ svgDimensions.height, 0]);
  const zScale = scaleLinear()
    .domain([200000, 1310000000])
    .range([ 3, 50]);
  return (
    <div>
      <svg viewBox="-400 -50 1600 900"  >
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}/>
        <Bubble
          scales={{ xScale, yScale, zScale }}
          margins={margins}
          data={data}
          svgDimensions={svgDimensions}/>   
      </svg>
    </div>
  )
}
export default ChartBubble




