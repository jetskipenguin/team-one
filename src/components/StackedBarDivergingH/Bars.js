import React, { Component } from 'react'
import { scaleLinear,scaleOrdinal } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from 'd3'

export default class Bars extends Component {
    constructor(props) {
      super(props)
    
      this.colorScale =scaleOrdinal()
        .domain(this.props.rows)
        .range(['#4363d8','#dcbeff','#fabed4','#ffd8b1','#fffac8','#aaffc3','#469990','#f1555a','#30316b'])
        
    }
   
    render() {
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale } = scales
      const { height } = svgDimensions
    console.log(data)
      const bars = (
        data.map(datum => 
           datum.map((d,i)=>     
          <rect
          key={d.i}
          x={xScale(d.data[0])}
          y={yScale(d[0])}
          height={yScale(d[1])-yScale(d[0])}
          width={xScale.bandwidth()}
          fill={this.colorScale(datum.key)}
          />
           )
        )
      )
      return (
        <g >
          {bars}
        </g>
      )
    }
}