import React, { Component } from 'react'
import { scaleLinear,scaleOrdinal } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from 'd3'

export default class Bars extends Component {
    constructor(props) {
      super(props)
    
      this.colorScale =scaleOrdinal()
        .domain(this.props.columns)
        .range(['#30316b','#303161','#30316a','#eee','#000','#f8f8f8','red','blue','#30316b']) 
    }
   
    render() {
      console.log('-------',this.props)
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale } = scales
      const { height } = svgDimensions
      console.log('-------',data)
      
      const bars = (
        data.map(datum =>
           datum.map((d,i)=>
          <rect
            key={i}
            x={xScale(d.data.name)}
            y={yScale(d[1])}
            height={yScale(d[0])-yScale(d[1])}
            width={xScale.bandwidth()}
            fill={this.colorScale(d.key)}
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