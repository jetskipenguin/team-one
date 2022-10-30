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
   
     this.xScale = scaleTime()
      this.yScale = scaleLinear()
    }
   
   
   
    render() {
        
        let margins = {top: 10, right: 30, bottom: 30, left: 40}

        const svgDimensions = { width: 1060 - margins.left - margins.right,
           height: 600 - margins.top - margins.bottom}
        const max = d3.max(data, d => Math.abs(d.value))
        const min= d3.min(data, d => Math.abs(d.value))
        let parseTime = d3.timeParse("%d-%b-%y");
        
        const xScale = this.xScale
                //  .domain([new Date(data[0].date), new Date(data[data.length-1].date)]).nice()
                .range([0, svgDimensions.width])//d3.extend return [min,max]
                // .domain(data.map(d => d.date))
                .domain(d3.extent(data, function(d) { return d.date; }));

        const yScale = this.yScale
                 .range([svgDimensions.height, 0])
                 .domain([0, d3.max(data, function(d) {
                  return Math.max(d.close, d.open); })]);
        return (
        <div>
            
          <svg  viewBox={`0 0 ${svgDimensions.width+20} ${svgDimensions.width+20}`}>
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