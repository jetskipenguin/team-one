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
          x1={xScale(datum.country)}  
          x2={xScale(datum.country)}
          y1={yScale(datum.value)}
          y2={yScale(0)}
          stroke={'grey'}
        />
       )
      )
    
    return (
      <g >

      {line}
      
      </g>
    );
  }
}