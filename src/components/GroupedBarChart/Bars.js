import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import * as d3 from 'd3'

export default class Bars extends Component {
    constructor(props) {
      super(props)
      this.state = { isHovered: false };
   
      this.colorScale = d3.scaleOrdinal()
      // .domain(["Nitrogen",
      // "normal",
      // "stress"])
      .range(["#98abc5", "#8a89a6", "#7b6888"])
      this.bars = this.bars.bind(this);
    }
    bars(datum){ 
      console.log('******',datum)
      const { scales, margin, data,groups, keys, subgroups, svgDimensions, ...props } = this.props
      const { xScale1, xScale0, yScale } = scales
      const { height, width } = svgDimensions
      return datum.map(d=>
        // console.log(d)
           
                <rect
              key={d.key}
              x={xScale1(d.key)} 
              y={yScale(d.value)-20}
              height={height-scales.yScale(d.value)}
              width={xScale1.bandwidth()}
              fill={this.colorScale(d.key)}
            />        

            
        )
    }
    render() {
      const { scales, margin, data,groups, keys, subgroups, svgDimensions, ...props } = this.props
      const { xScale1, xScale0, yScale } = scales
      const { height, width } = svgDimensions

      console.log(data)
      const Data=data.map(d => subgroups.map(key => ({key, value: d[key]})))
      const D=groups.map(function(e,i){
        return {group:e, data:Data[i]}
      })
      console.log('Data',D)
     
        // Data.map(datum =>
        //   datum.map(d=>
           
          
             
        //       <rect
        //       key={d.group}
        //       x={xScale1(d.key)} 
        //       y={yScale(d.value)}
        //       height={height-scales.yScale(d.value)}
        //       width={xScale1.bandwidth()}
        //       fill={this.colorScale(d.key)}
        //     />
          
    
        //   )
        // ) 
       
      return (
         <g>
            {D.map((d,i)=>
                // console.log(d.group)
                <g transform={`translate(${xScale0(d.group)},0)`} key={i}>
                  {this.bars(d.data)}
                </g>
              
          )}
          </g>

      )
    }
  }