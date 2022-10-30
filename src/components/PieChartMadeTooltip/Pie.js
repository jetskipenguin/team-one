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
    <>
    <g>
      {data.map((value,i)=>
      <>
      <circle 
      transform={`translate(${x}, ${y})`}
      key={i}
      cx={x+50}
      cy={95-i*20}
      r={6}
      fill={colorScale[i]}
      />
      <text
      transform={`translate(${x}, ${y})`}
      key={i}
      x={x+70}
      y={100-i*20}
      textAnchor="left"
      fill="#414141"
      fontSize="14px">
      {value.name}
    </text>
      </>
    )}
    </g>
    <g transform={`translate(${x}, ${y})`}>
      {pie(data_values).map(renderSlice)}
    </g>
    
    </>
  );
}
export default Pie