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
      this.xScale = scaleLinear()
      this.yScale = scaleLinear()
    }
    render() {
        let margins = {top: 20, right: 30, bottom: 30, left: 60}
        const svgDimensions = { width: 460 - margins.left - margins.right, height: 400 - margins.top - margins.bottom}
        const max = d3.max(data, d => Math.abs(d.value))
        const min= d3.min(data, d => Math.abs(d.value))
       

        const columns=['Amanda','Ashley','Betty','Deborah','Dorothy','Helen','Linda','Patricia']
        // const  stackGen = d3.stack()
        //     .keys(columns)
            
        // const stackedSeries = stackGen(data)
        // console.log(stackedSeries)
        const xScale = this.xScale
                //  .domain([new Date(data[0].date), new Date(data[data.length-1].date)]).nice()
                .domain(d3.extent(data, d => d.year))//d3.extend return [min,max]
                // .domain(data.map(d => d.date))
                .range([0, svgDimensions.width])

        const yScale = this.yScale
                .domain([-100000, 100000])
                .range([svgDimensions.height,0])

        const stackedData = d3.stack()
                .offset(d3.stackOffsetSilhouette)
                .keys(columns)
                (data)
        console.log(stackedData)

        return (
        <div>
           <svg  width={svgDimensions.width + margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
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
                  data={stackedData} 
              />
            </svg> 
          </div>
        );
      }
}
export default LineChart;