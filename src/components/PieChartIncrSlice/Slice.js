import React, {useState} from 'react';
import * as d3 from 'd3';


function Slice({value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle,}){
  const [hover, setHover]=useState(false)
  if(hover) {
    
    outerRadius*=1.1
    innerRadius*=0.9
   }
    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);
    return (
      <g>
        <path d={arc(value)} fill={fill} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}/>
        <text
          transform={`translate(${arc.centroid(value)})`}
          dy=".35em"
          textAnchor="middle"
          fill="#414141"
          fontSize="14px">
          {label}
        </text>
      </g>
    );
  }

export default Slice;