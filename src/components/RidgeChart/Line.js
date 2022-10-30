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
    const { xScale, yScale,yName } = scales;
    const { height, width } = svgDimensions;

    
    let line =d3.line()
          .curve(d3.curveBasis)
          .x(function(d) { return xScale(d[0]); })
          .y(function(d) { return yScale(d[1]); })
    
    console.log(data)
    return (
      data.map(d=>
      <g  transform={"translate(0," + (yName(d.key)-height) +")"}>
            <path
            d={line(d.density)}
            fill={'#69b3a2'}
            stroke={"#000"}
            strokeWidth={'1'}
            strokeLinejoin={'round'}
            strokeLinecap={'round'}
          />
      </g>
      )
    );
  }
}