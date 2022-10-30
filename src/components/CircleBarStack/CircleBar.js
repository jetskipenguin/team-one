import React from 'react';
import CirleBar from './Pie';
import data from './data/data'
import * as d3 from 'd3'
import { scaleBand, scaleRadial,scaleOrdinal} from 'd3-scale'

function Circle(){

        const margins = {top: 10, right: 10, bottom: 10, left: 10}
        let width = 460 - margins.left - margins.right
        let height = 460 - margins.top - margins.bottom

        let innerRadius = 90
        let outerRadius = Math.min(width, height) / 2
        console.log(data)
        const xScale = scaleBand()
            .align(0) 
            .domain(data.map(d => d.name))
            .range([0, 2 * Math.PI])

        const yScale = scaleRadial()
            .range([innerRadius, outerRadius])
            .domain([0, d3.max(data, d => d.total)])

        const zScale =scaleOrdinal()
            .domain(['<10','10-19','20-29','30-39', '40-49','50-59','60-69','70-79','≥80'])
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"])
        
        const columns=['<10','10-19','20-29','30-39', '40-49','50-59','60-69','70-79','≥80']
        
        const  stackGen = d3.stack()
        .keys(columns)(data)
        
        // const stackedSeries = stackGen(data)
        console.log(stackGen)
        return (
          <div>
            <svg  width={width + margins.left + margins.right} height={height + margins.top + margins.bottom} >
            <CirleBar
                width={width}
                height={height}
                scales={{ xScale, yScale, zScale }}
                innerRadius={innerRadius}
                cornerRadius={2}
                padAngle={0.01}
                padRadius={innerRadius}
                data={stackGen} />
            </svg>
          </div> 
        );
      }
export default Circle;