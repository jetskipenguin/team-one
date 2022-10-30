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
        
        let margins = {top: 30, right: 50, bottom: 30, left: 30}
        const svgDimensions = { width: 500, height: 500}
        const max = d3.max(data, d => Math.abs(d.value))
        const min= d3.min(data, d => Math.abs(d.value))
        const columns=['Apples','Bananas']
        const series = columns.map(key => data.map(({[key]: value, date}) => ({key, date, value})))

        console.log(series)
        const xScale = this.xScale
              .domain([data[0].date, data[data.length - 1].date])
              .range([margins.left, svgDimensions.width - margins.right])

        const yScale = this.yScale
            .domain([0, d3.max(series, s => d3.max(s, d => d.value))])
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

                    data={series} 
                  
                />
              </svg> 
          </div>
        );
      }
}
export default LineChart;