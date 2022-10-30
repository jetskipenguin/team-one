import React, { Component } from 'react';

import { scaleLinear,scaleOrdinal } from 'd3-scale'
import { interpolateLab} from 'd3-interpolate';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.colorScale =scaleOrdinal()
    // .domain(this.props.columns)
    .range(['#6196ff','#dcbeff','#fabed4','#ffd8b1','#fffac8','#aaffc3','#469990','#ff7b89','#758db7'])
  }
  render() {
    const { scales, margins, data, svgDimensions, ...props } = this.props;
    const { xScale, yScale } = scales;
    const { height, width } = svgDimensions;

    console.log(data)
    let area =d3.area()
    .x(d => xScale(d.data.date))
    .y0(d=>yScale(d[0]))
    .y1(d => yScale(d[1]))
    .curve(d3.curveLinear)
    
    return (
      
      <g  {...props}>
        {data.map(datum=>
           <path
           d={area(datum)}
           fill={this.colorScale(datum.key)}
           stroke={'black'}
           stroke-width={'1'}
           stroke-linejoin={'round'}
           stroke-linecap={'round'}
         />
          )}
       
      
      
      </g>
    );
  }
}