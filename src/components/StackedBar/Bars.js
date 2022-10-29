import React, { Component } from 'react'
import { scaleLinear,scaleOrdinal } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from 'd3'

export default class Bars extends Component {
    constructor(props) {
      super(props)
    
      this.colorScale =scaleLinear()
        .domain(this.props.columns)
        .range(['#6196ff','#dcbeff','#fabed4','#ffd8b1','#fffac8','#aaffc3','#469990','#ff7b89','#758db7'])
        
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
            key={d.i}

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