import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Line extends Component {
  render() {
    const { scales,data, margins} = this.props;
    const { xScale, yScale} = scales;


    console.log(data)

    const line = (
        data.map(datum =>
          <line
          key={datum.group}
          x1={xScale(datum.value1)}  
          x2={xScale(datum.value2)}
          y1={yScale(datum.group)}
          y2={yScale(datum.group)}
          stroke={'grey'}
          stroke-width={"1px"}
        />
       )
      )
    
    return (
      <g transform={"translate(" + margins.left + "," + margins.top + ")"}>

      {line}
      
      </g>
    );
  }
}