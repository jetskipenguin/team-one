import React, {useEffect} from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'
// 
function Pie({data,x,y,innerRadius, outerRadius, cornerRadius, padAngle}){
  const colorScale = ['#5371f9','#4fc3f7','#cfd8dc','#66a3ff','#8cff66','#ff80d5','#80cbc4','#ffffcc','#ff8080','#7986cb'];
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
        index={i}
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