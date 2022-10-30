import React, {useState} from 'react';
import * as d3 from 'd3';

function Slice({value, innerRadius, outerRadius, cornerRadius,startAngle,padAngle,endAngle}){
  const [hover, setHover]=useState(false)
  if(hover) {
    
    outerRadius*=1.1
    innerRadius*=0.9
   }
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
        <path d={arc(value)} fill={"#0166d6"} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)}/>
      </g>
    );
  }

export default Slice;