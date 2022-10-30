import React from 'react';
import CirleBar from './Bars';
import data from './data/data'
import { scaleBand, scaleRadial} from 'd3-scale'

function Circle(){

        const margins = {top: 10, right: 10, bottom: 10, left: 10}
        let width = 460 - margins.left - margins.right
        let height = 460 - margins.top - margins.bottom

        let innerRadius = 90
        let outerRadius = Math.min(width, height) / 2

        const xScale = scaleBand()
            .align(0) 
            .domain(data.map(d => d.name))
            .range([0, 2 * Math.PI])

        const yScale = scaleRadial()
            .range([innerRadius, outerRadius])
            .domain([0, 10000])

        return (
          <div>
            <svg  width={width + margins.left + margins.right} height={height + margins.top + margins.bottom} >
              <CirleBar
                width={width}
                height={height}
                scales={{ xScale, yScale }}
                innerRadius={innerRadius}
                cornerRadius={2}
                padAngle={0.01}
                padRadius={innerRadius}
                data={data} />
            </svg>
          </div> 
        );
      }
export default Circle;