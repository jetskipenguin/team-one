import React, { Component } from 'react';
import { scaleBand, scaleLinear, scaleSequential} from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import * as d3 from 'd3';
import Bubble from './Bubble'
import Line from './Line'

export default class ChartBubble extends React.Component{
    constructor() {
        super()
        this.xScale = scaleLinear()
        this.yScale = scaleBand()
    }
        render(){
            const margins = ({top: 10, right: 30, bottom: 40, left: 100})
            const svgDimensions = { width: 460 - margins.left - margins.right , height: 500- margins.top - margins.bottom }
            const max = d3.max(data, d => Math.abs(d.value))
            const min= d3.min(data, d => Math.abs(d.value))
            const xScale = this.xScale
            .domain([0, 13000])
            .range([ 0, svgDimensions.width]);
        
            const yScale = this.yScale
            .range([ 0, svgDimensions.height ])
            .domain(data.map(function(d) { return d.country; }))
            .padding(1);
          return(  
            <svg width={svgDimensions.width + margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
                <Axes
                  scales={{ xScale, yScale }}
                  margins={margins}
                  svgDimensions={svgDimensions}
                />
                <Bubble  
                  scales={{ xScale, yScale}}
                  margins={margins}
                  data={data}
                  maxValue={max}
                  minValue={min}
                  svgDimensions={svgDimensions}          
                />  
                  <Line
                  scales={{ xScale, yScale}}
                  data={data}
                  margins={margins}
                  /> 
            </svg>
          )
        }
}