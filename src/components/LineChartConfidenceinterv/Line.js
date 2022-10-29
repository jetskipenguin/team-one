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
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    .curve(d3.curveMonotoneX);
    
    let area =d3.area()
    .x(d=>xScale(d.x))
    .y0(d => yScale(d.CI_right))
    .y1(d => yScale(d.CI_left))

    return (
      <g transform={"translate(" + margins.left + "," + margins.top + ")"}>
         <path
          d={area(data)}
          fill={"#cce5df"}
          stroke={'none'}
   
        />
        <path
          d={line(data)}
          fill={'none'}
          stroke={'steelblue'}
          stroke-width={'1.5'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
        />
        
      </g>
    );
  }
}