import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.colors = [ "#440154ff", "#31668dff", "#37b578ff", "#fde725ff",'#5371f9','#4fc3f7','#cfd8dc','#66a3ff','#8cff66','#ff80d5']
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

     console.log(data)

    return (
    <>
      <g  transform={"translate(" + 220 + "," + 220+ ")"}>
        {
         data.groups.map((datum,i)=>
        <path
          d={arc(datum)}
          fill={this.colors[i]}
          stroke={'black'}
          strokeWidth={'1'}

        />)
         }
      </g>
      <g transform={"translate(" + 220 + "," + 220+ ")"}>
      {
         data.map((datum,i)=>
        <path
          d={ribbon(datum)}
          fill={this.colors[datum.source.index] }
          stroke={'black'}
        />)
         }
      </g>
    </>
    );
  }
}