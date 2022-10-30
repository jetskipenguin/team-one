import React from 'react';
import * as d3 from 'd3';

function Slice({value, innerRadius, fill, outerRadius, cornerRadius,startAngle,padAngle,endAngle}){
    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(padAngle)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .padRadius(innerRadius)
      .cornerRadius(cornerRadius)
      
   
    return (
      <g>
        <path d={arc(value.total)} fill={fill}/>
      </g>
    );
  }

export default Slice;