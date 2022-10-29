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
      const {margins, data, svgDimensions, ...props } = this.props
 
      const { height } = svgDimensions
      console.log(data)
      const bubble = (
          data.map(datum =>
            <g transform={"rotate(" + (datum.x - 90) + ")translate(" + datum.y + ")"}>
            <circle
            key={datum.id}
            r='7'
            fill={'#69b3a2'}
            strokeWidth={'2'}
          />
            </g>
      ))
      return (
<g >{bubble}</g>
      )
          
      }
}