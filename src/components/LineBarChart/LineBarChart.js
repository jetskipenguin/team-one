import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'
import * as d3 from 'd3'
import Line from './Line'
import { select as d3Select } from 'd3-selection'
import styled from 'styled-components'

const Box = styled.div`
width: 900px;
height:500px;
background:#fff;
margin:10%;
`


class LineBarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleLinear()
    this.yScale2 = scaleLinear()
  }
  render() {
    const margins = {top: 20, right: 30, bottom: 30, left: 40}
    const svgDimensions = {
      width: 900,
      height: 500
    }

    const maxValue = Math.max(...data.map(d => d.sales))
    const minValue = Math.min(...data.map(d => d.sales))
 
    const xScale = this.xScale
      .padding(0.1)
      .domain(data.map(d => d.year))
      .range([margins.left, svgDimensions.width - margins.right])
      
    const yScale = this.yScale
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom ,margins.top])
   
    const yScale2 = this.yScale2
      .domain(d3.extent(data, d => d.efficiency))
      .range([svgDimensions.height - margins.bottom ,margins.top])
    
    return (
      
      <Box>
      <svg  
      
      width={svgDimensions.width} height={svgDimensions.height}
     >
      <defs>
        <filter id="f1" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="-1" dy="-1" />
          <feGaussianBlur result="blurOut"  stdDeviation="3" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
       </filter>
      </defs>
        <Axes
          scales={{ xScale, yScale,yScale2 }}
          margins={margins}
          svgDimensions={svgDimensions}
         
        />
       
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={data}
          maxValue={maxValue}
         
          svgDimensions={svgDimensions}
        />
        <Line scales={{ xScale, yScale2 }}
                svgDimensions={svgDimensions}
                margins={margins}
                maxValue={maxValue}
                minValue={minValue}
                data={data} 
              
            />
      </svg>
   
      </Box>
    )
  }
}
export default LineBarChart
