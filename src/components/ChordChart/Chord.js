import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props);
   
  }
  render() {
    const { data } = this.props;
    // const { xScale, yScale } = scales;
    // const { height, width } = svgDimensions;

    console.log(data)
    let arc =d3.arc()
    .innerRadius(200)
    .outerRadius(205)
    
    let ribbon=d3.ribbon()
    .radius(200)
    return (
    <>
      <g  transform={"translate(" + 220 + "," + 220+ ")"}>
        {
         data.groups.map(datum=>
        <path
          d={arc(datum)}
          fill={'grey'}
          stroke={'black'}
          strokeWidth={'1'}

        />)
         }
      </g>
      <g transform={"translate(" + 220 + "," + 220+ ")"}>
      {
         data.map(datum=>
        <path
          d={ribbon(datum)}
          fill={'#69b3a2'}
          stroke={'black'}
        />)
         }
      </g>
    </>
    );
  }
}