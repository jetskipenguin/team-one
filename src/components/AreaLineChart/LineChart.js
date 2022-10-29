import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import * as d3 from 'd3';
import Axes from './Axes'
import Line from './Line'
import data from './data/data'
import { timeDay } from 'd3-time';
import {timeFormat, timeParse} from "d3-time-format"

class LineChart extends Component {
  constructor() {
    super()
   
     this.xScale = scaleBand()
      this.yScale = scaleLinear()
    }
   
   
   
    render() {
        
        let margins = {top: 60, right: 20, bottom: 30, left: 30}
        const svgDimensions = { width: 850, height: 500}
        const max = d3.max(data, d => Math.abs(d.value))
        const min= d3.min(data, d => Math.abs(d.value))
       
        
        const xScale = this.xScale
                //  .domain([new Date(data[0].date), new Date(data[data.length-1].date)]).nice()
                .domain(data.map(d => d.date))//d3.extend return [min,max]
                // .domain(data.map(d => d.date))
                .range([margins.left, svgDimensions.width - margins.right])

        const yScale = this.yScale
                 .domain([0, d3.max(data, d => d.value)]).nice()
                 .range([svgDimensions.height - margins.bottom, margins.top])
        return (
        <div>
            
          <svg  viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.width}`}>
            <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
            />
            <Line scales={{ xScale, yScale }}
                svgDimensions={svgDimensions}
                margins={margins}
                maxValue={max}
                minValue={min}
                data={data} 
              
            />
          </svg> 
          </div>
        );
      }
}
export default LineChart;