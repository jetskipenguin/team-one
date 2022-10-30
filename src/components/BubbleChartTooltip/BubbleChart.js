import React, { Component } from 'react';
import { scaleBand, scaleLinear, scaleSequential} from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import * as d3 from 'd3';
import Bubble from './Bubble'

export default class ChartBubble extends React.Component{
    constructor() {
        super()
        this.xScale = d3.scaleBand()
        this.yScale = scaleLinear()
        this.zScale = scaleSequential()
    }
        render(){
            const margins = ({top: 20, right: 30, bottom: 30, left: 40})
            const svgDimensions = { width: 1000, height: 600}
            const max = d3.max(data, d => Math.abs(d.value))
            const min= d3.min(data, d => Math.abs(d.value))
            const xScale = this.xScale
                //  .domain(d3.extent(data, d => d.date))
                 .domain(data.map(d => d.date) )
                 .range([margins.left, svgDimensions.width -margins.right])
            const yScale = this.yScale
                 .domain(d3.extent(data, d => d.value)).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])
            const zScale = this.zScale
                 .domain([max, -max])
          return(  
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                <Axes
                  scales={{ xScale, yScale }}
                  margins={margins}
                  svgDimensions={svgDimensions}
                />
                <Bubble  
                  scales={{ xScale, yScale, zScale }}
                  margins={margins}
                  data={data}
                  maxValue={max}
                  minValue={min}
                  svgDimensions={svgDimensions}          
                />   
            </svg>
          )
        }
}