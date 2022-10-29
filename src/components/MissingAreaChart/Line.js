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

    
    let area =d3.area()
    .defined(d => !isNaN(d.value))
    .x(d => xScale(d.date))
    .y0(yScale(0))
    .y1(d => yScale(d.value))
    .curve(d3.curveLinear);
    
    return (
      <g  {...props}>
        <path
          d={area(data.filter(area.defined()))}
          fill={'#eee'}
          // stroke={'steelblue'}
          // stroke-width={'1.5'}
          // stroke-linejoin={'round'}
          // stroke-linecap={'round'}
        />
        <path
          d={area(data)}
          fill={'steelblue'}
          stroke={'steelblue'}
          // stroke-width={'1.5'}
          // stroke-linejoin={'round'}
          // stroke-linecap={'round'}
        />
      </g>
    );
  }
}