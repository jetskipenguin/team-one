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
    const { xScale, yScale2 } = scales;
    const { height, width } = svgDimensions;

    
    let line =d3.line()
    .x(d => xScale(d.year))
    .y(d => yScale2(d.efficiency))
    
    return (
      <g  {...props}>
        <path
          d={line(data)}
          fill={'none'}
          stroke={'mediumslateblue'}
          stroke-width={'1.5'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
          strokeMiterlimit={1}
        />
      
      
      </g>
    );
  }
}