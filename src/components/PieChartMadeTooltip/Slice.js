import React from 'react';
import * as d3 from 'd3';


function Slice({value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle,}){
    
    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);
    return (
      <g>
        <path d={arc(value)} fill={fill} />
      </g>
    );
  }

export default Slice;