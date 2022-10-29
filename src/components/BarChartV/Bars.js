import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'


export default class Bars extends Component {
    constructor(props) {
      super(props)
      this.state = { isHovered: false };
      this.onMouseOver = this.onMouseOver.bind(this);
      this.onMouseOut = this.onMouseOut.bind(this);
      this.colorScale = scaleLinear()
        .domain([0, this.props.maxValue])
        .range(['#ff7b89', '#ff7b89'])
        .interpolate(interpolateLab)
    }
    onMouseOver() {
      this.setState({ isHovered: true });
    }
    onMouseOut() {
      this.setState({ isHovered: false });
    }
    render() {
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale } = scales
      const { height } = svgDimensions
      const bars = (
        data.map(datum =>
          <rect
            key={datum.name}
            x={xScale(0)}  
            y={yScale(datum.name)}
            width={scales.xScale(datum.value)-scales.xScale(0)}
            height={yScale.bandwidth()}
            fill={this.colorScale(datum.value)}
            onMouseOver={() => this.props.onMouseOverCallback(datum)}
            onMouseOut={() => this.props.onMouseOutCallback(null)}
          />
        )
      )
      return (
        <g onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}  {...props}>{bars}</g>
      )
    }
  }