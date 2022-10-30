import React, { Component } from 'react';
import { scaleBand, scaleLinear, scaleSequential} from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import * as d3 from 'd3';
import Bubble from './Bubble'

function ChartBubble(){
  const margins = { top: 30, right: 0, bottom: 10, left: 30 }
  const svgDimensions = {width: 800,height: 500}
            const max = d3.max(data, d => Math.abs(d.value))
            const min= d3.min(data, d => Math.abs(d.value))
            const xScale = scaleBand()
                 .domain(data.map(d => d.date) )
                 .range([margins.left, svgDimensions.width -margins.right])
            const yScale = scaleLinear()
                 .domain(d3.extent(data, d => d.value)).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])
            const zScale = scaleSequential()
                 .domain([max, -max])
          return(  
            <svg viewBox="-400 -50 1600 900"  >
            <Axes
              scales={{ xScale, yScale }}
              margins={margins}
              svgDimensions={svgDimensions}/>
                <Bubble  
                  scales={{ xScale, yScale, zScale }}
                  margins={margins}
                  data={data}
                  maxValue={max}
                  minValue={min}
                  svgDimensions={svgDimensions}          
                />   
                
            </svg>
          )
        }
export default ChartBubble