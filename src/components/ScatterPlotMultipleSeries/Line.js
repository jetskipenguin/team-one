import React, { Component } from 'react';
import { scaleLinear,scaleOrdinal } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.myColor = d3.scaleOrdinal()
    .domain(["valueA", "valueB", "valueC"])
    .range(['#6196ff','#dcbeff','#fabed4']);
  }
  render() {
    const { scales,allGroup, margins, data, svgDimensions, ...props } = this.props;
    const { xScale, yScale } = scales;
    const { height, width } = svgDimensions;


    let line =d3.line()
    .x(d => xScale(d.time))
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX);
    console.log(data)
    
    const dot = (data.map(datum=>
           datum.values.map(d=>
            <circle 
      cx={xScale(d.time)}  
      cy={yScale(d.value)}
      r={5}
      fill={this.myColor(datum.name)}
      // opacity="0.7"
      // stroke="black"
      />
            )
          
        )
      )
    return (
      <g>
         {data.map(datum=> 
            <path
            d={line(datum.values)}
            fill={'none'}
            stroke={this.myColor(datum.name)}
            stroke-width={'1.5'}
            stroke-linejoin={'round'}
            stroke-linecap={'round'}
            />

         )}
            <g>
              {dot}
            </g>
      </g>

    )
   
    }
}