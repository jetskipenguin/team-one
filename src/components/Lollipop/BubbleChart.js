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
        this.xScale = scaleBand()
        this.yScale = scaleLinear()
    }
        render(){
            const margins = ({top: 20, right: 30, bottom: 30, left: 40})
            const svgDimensions = { width: 560 , height: 600 }
            const max = d3.max(data, d => Math.abs(d.value))
            const min= d3.min(data, d => Math.abs(d.value))
            const xScale = this.xScale
                 .domain(data.map(d => d.country) )
                 .range([ 0, svgDimensions.width ])
                 .padding(1)
            const yScale = this.yScale
            .domain([-200, 13000])
            .range([ svgDimensions.height, 0])
          return(  
            <svg width={svgDimensions.width} height={svgDimensions.height}>
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