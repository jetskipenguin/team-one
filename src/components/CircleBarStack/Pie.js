import React from 'react';
import Slice from './Slice'
import { scaleLinear} from 'd3-scale'
import * as d3 from 'd3'

function Pie({data, width, height,innerRadius, cornerRadius, padAngle,scales}){

  function renderSlice(d){

      return  d.map((v,i)=>
     console.log(v)
        // <Slice
        //     key={i}
        //     innerRadius={v[0]}
        //     cornerRadius={cornerRadius}
        //     padAngle={padAngle}
        //     value={v.data}
        //     fill={scales.zScale(v.key)}
        //     endAngle={scales.xScale(v.data.name) + scales.xScale.bandwidth()}
        //     outerRadius={v[1]}
        //     startAngle={scales.xScale(v.data.name)}
        //     />
        )
    }
      return (
        <g transform={"translate(" + width / 2 + "," + ( height/2+100 )+ ")"}>
          {data.map(d=>renderSlice(d))}
        </g>
      );
    }

export default Pie