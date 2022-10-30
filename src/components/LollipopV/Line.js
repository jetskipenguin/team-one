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
          key={datum.country}
          x1={xScale(datum.value)}  
          x2={xScale(0)}
          y1={yScale(datum.country)}
          y2={yScale(datum.country)}
          stroke={'grey'}
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