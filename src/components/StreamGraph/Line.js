import React, { Component } from 'react';

import { scaleLinear,scaleOrdinal } from 'd3-scale'
import { interpolateLab} from 'd3-interpolate';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.colorScale =scaleOrdinal()
    .domain(['Amanda','Ashley','Betty','Deborah','Dorothy','Helen','Linda','Patricia'])
    .range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf'])
  }
  render() {
    const { scales, margins, keys, data, svgDimensions, ...props } = this.props;
    const { xScale, yScale } = scales;
    const { height, width } = svgDimensions;

    console.log('-----',data)
    let area =d3.area()
    .x(d => xScale(d.data.year))
    .y0(d=>yScale(d[0]))
    .y1(d => yScale(d[1]))
    .curve(d3.curveLinear)
    
    return (
      
      <g  transform={"translate(" + margins.left + "," + margins.top + ")"}>
       
          {data.map(datum=>
            <path
            d={area(datum)}
            fill={this.colorScale(datum.key)}
           
          />
           )}
      </g>
    );
  }
}