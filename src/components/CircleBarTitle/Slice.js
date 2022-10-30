import React, { Component } from 'react';
import * as d3 from 'd3';
import { svg } from 'd3';

class Slice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      value,
      label,
      fill,
      innerRadius,
      outerRadius,
      cornerRadius,
      startAngle,
      padAngle,
      endAngle,
      data,
      padradius,
      ...props
    } = this.props;

    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(padAngle)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .padRadius(innerRadius)
    
    return (
      <g  >
        
        <path d={arc(value)} fill={"#3e4b86"} />
      
      </g>
    );
  }
}

export default Slice;