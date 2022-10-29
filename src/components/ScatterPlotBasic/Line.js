import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    const { scales, margins, data, svgDimensions, ...props } = this.props;
    const { xScale, yScale } = scales;
    const { height, width } = svgDimensions;
    console.log(data)
    
    let line =d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    .curve(d3.curveMonotoneX);
    
    let dot = (data.map(datum=>
      <circle 
      cx={xScale(datum.date)}  
      cy={yScale(datum.value)}
      r={5}
      fill="#69b3a2"
      // opacity="0.7"
      // stroke="black"
      />

      ))


    return (
      <g  {...props}>
        <path
          d={line(data)}
          fill={'none'}
          stroke={'steelblue'}
          stroke-width={'1.5'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
        />
        <g>
          {dot}
        </g>
      
      </g>
    );
  }
}