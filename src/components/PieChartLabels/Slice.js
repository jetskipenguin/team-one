import React from 'react';
import * as d3 from 'd3';

function Slice({value, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle}){

    let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius)
      .padAngle(padAngle);

    let outerArc= d3.arc()
    .innerRadius(innerRadius*1.9)
    .outerRadius(outerRadius*1.3)

    function points(value){
      let posA = arc.centroid(value)
      let posB = outerArc.centroid(value)
      let posC = outerArc.centroid(value)
      let midangle = value.startAngle + (value.endAngle - value.startAngle)
      posC[0] = outerRadius * 0.95 * (midangle < Math.PI ? 1.5 : -1.5)
      return [posA, posB, posC]
    }
    function position(value){
          let pos = outerArc.centroid(value);
          let midangle = value.startAngle + (value.endAngle - value.startAngle)
          pos[0] = outerRadius * 0.99 * (midangle < Math.PI ? 1.5 : -1.5);
          return pos
    }
    function textanchor(value){
      let midangle = value.startAngle + (value.endAngle - value.startAngle) / 2
          return (midangle < Math.PI ? 'start' : 'end')
    }

    return (
      <g>
        <path d={arc(value)} fill={fill} />
        <polyline 
        stroke="black"
        fill= "None"
        strokeWidth="1"
        points={
        points(value)
        }/>
         <text
         transform={`translate(${position(value)})`}
         textAnchor={textanchor(value)}
      fontSize="10px">
         {label}
         </text>
      </g>
    );
  }
export default Slice;