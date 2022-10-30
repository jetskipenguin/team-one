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
      const bubble = (
          data.map(datum =>
            <circle
            key={datum.year}
            cx={xScale(datum.date)}  
            cy={yScale(datum.value)}
            cz={zScale(this.colorScale(datum.value))}
            r='2.5'
            fill={this.colorScale(datum.value)}
          />
         )
        )
      return (
        <g 
        {...props}>{bubble}</g>
      )
    }
  }
