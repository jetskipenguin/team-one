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

    
    let line =d3.line()
    .defined(d => !isNaN(d.value))
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    // .curve(d3.curveMonotoneX);
    
    return (

      <g  {...props}>
         <path
          d={line(data.filter(line.defined()))}
          fill={'none'}
          stroke={"#ccc"}
          stroke-width={'0.5'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
        />
        <path
          d={line(data)}
          fill={'none'}
          stroke={'steelblue'}
          stroke-width={'2'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
        />
      
      
      </g>
    );
  }
}