import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from 'd3'

import '../../App.css'
export default class Bars extends Component {
    constructor(props) {
      super(props)
    
      this.colorScale = scaleLinear()
        .domain([0, this.props.maxValue])
        .range(['#fbfbfb'])
        .interpolate(interpolateLab)
      
    }
   
    render() {
      console.log('>>>>>>',this)
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale } = scales
      const { height } = svgDimensions
     
      const bars = (
        data.map(datum =>
          <g >
          
          <rect
            // style = {{fill: "#FF931E"}}
            key={datum.year}
            x={xScale(datum.year)}  
            y={yScale(datum.sales)}
            height={scales.yScale(0) - scales.yScale(datum.sales)}
            width={xScale.bandwidth()}
            fill={this.colorScale(datum.sales)}
            fillOpacity={0.9}
            filter="url(#f1)"
          />
          <text 
          font-family="sans-serif" 
          fill="#414141"
          font-size="10"
          text-anchor="end"
          dy="1em"
          dx="1.3em"
          x={xScale(datum.year) + xScale.bandwidth()/2}
          y={yScale(datum.sales) + Math.sign(datum.sales - 0) * 4}
          >
            {datum.sales}
          </text>
          </g>
       
        )
      )
      
      
      return (
        <>
        {bars} 
        
      </>
      )
    }
}