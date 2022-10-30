import React from 'react';
import { scaleLinear } from 'd3-scale';

function Heatmap({scales, data}){
        const  colorScale = scaleLinear()
        .range(["#eee", "#5371f9"])
        .domain([1,100])
        const { xScale, yScale } = scales
        const bars = (
          data.map((datum,i) =>
            <rect
              key={i}
              x={xScale(datum.group)}  
              y={yScale(datum.variable)}
              height={yScale.bandwidth()}
              width={xScale.bandwidth()}
              fill={colorScale(datum.value)}/>
          )
        )
        return (
          <g>
            {bars}
          </g>
        )
      }
export default Heatmap