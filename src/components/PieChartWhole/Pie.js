import React, { useEffect } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'

function Pie({data,x,y,innerRadius, outerRadius, cornerRadius, padAngle}){
      const colorScale = ['#5371f9','#4fc3f7','#cfd8dc','#66a3ff','#8cff66','#7986cb','#fb7a8e','#cef9c2','#f9d2c2','#a46fb6'];
      const labels = data.map(function(v){
        return v.name
      })
      useEffect(() => {
        renderSlice()
      }, []);
    const renderSlice=(value, i)=>{
        return (
          <Slice key={i}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            x={x}
            y={y}
            value={value}
            label={labels[i]}
            fill={colorScale[i]} />
          );
    }
      let pie = d3.pie();
      let data_values=data.map(function(v){
        return v.value
      })
      return (
        <g transform={`translate(${x}, ${y})`}>
          {pie(data_values).map(renderSlice)}
        </g>
      );
    }
export default Pie