import React from 'react';
import Slice from './Slice'

function Pie({data, width, height,innerRadius, cornerRadius, padAngle,scales}){
    const renderSlice=(v)=>{
        return (
          <Slice
            innerRadius={innerRadius}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={console.log(v.value)}
            endAngle={scales.xScale(v.name) + scales.xScale.bandwidth()}
            outerRadius={scales.yScale(v.value)}
            startAngle={scales.xScale(v.name)}
            />
          );
    }
      return (
        <g transform={"translate(" + width / 2 + "," + ( height/2+100 )+ ")"}>
          {data.map(d=>renderSlice(d))}
        </g>
      );
    }

export default Pie