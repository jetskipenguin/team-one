import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from "d3"

export default class Bubble extends Component {
    constructor(props) {
      super(props)
      this.colorScale = scaleLinear()
        .domain([this.props.minValue, this.props.maxValue])
        .range(['#d971bb', '#5142f5'])
        .interpolate(interpolateLab)
  }
    render() {
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale, zScale} = scales
      const { height } = svgDimensions
      console.log(data)
      const bubble = (
          data.map(datum =>
            <>
            <circle
            key={datum.id}
            cx={xScale(datum.name)}  
            cy={height-30}
            r='8'
            fill={'#69b3a2'}
            stroke={'black'}
          />
          <text
          x={xScale(datum.name)}
          y={height-10}
          textAnchor={"middle"}
          >
            {datum.name}
          </text>
 
           </>
         )
        )
      return (
        <g 
        {...props}>{bubble}</g>
      )
    }
  }
