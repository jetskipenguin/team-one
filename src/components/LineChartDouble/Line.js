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
    .x(function(d) { return xScale(d.date); })
    .y(function(d) { return yScale(d.close); });

    var line2 = d3.line()
    .x(function(d) { return xScale(d.date); })
    .y(function(d) { return yScale(d.open); });
    
    return (
      <g  {...props}>
        <path
          d={line(data)}
          fill={'none'}
          stroke={'#6d5dfc'}
          stroke-width={'1'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
        />
      <path
          d={line2(data)}
          fill={'none'}
          stroke={'#ff7b89'}
          stroke-width={'1'}
          stroke-linejoin={'round'}
          stroke-linecap={'round'}
        />
      
      </g>
    );
  }
}