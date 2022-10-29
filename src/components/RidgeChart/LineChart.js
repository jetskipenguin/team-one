import React, { Component } from 'react';
import { scaleBand, scaleUtc, scaleLinear, scaleTime, scaleSequential} from 'd3-scale'
import Axes from './Axes'
import Line from './Line'
import * as d3 from 'd3'
import data from './data/data'
import { timeDay } from 'd3-time';
import {timeFormat, timeParse} from "d3-time-format"

class LineChart extends Component {
  constructor() {
    super()
      this.xScale = scaleLinear()
      this.yScale = scaleLinear()
      this.yName = scaleBand()
    }
    render() {
        let margins = {top: 100, right: 30, bottom: 20, left:110}
        const svgDimensions = { width: 460 - margins.left - margins.right, height: 400 - margins.top - margins.bottom}
        const max = d3.max(data, d => Math.abs(d.value))
        const min= d3.min(data, d => Math.abs(d.value))
       
        const categories =['Almost Certainly','Highly Likely','Very Good Chance','Probable','Likely','Probably','We Believe','Better Than Even','About Even','We Doubt','Improbable','Unlikely','Probably Not','Little Chance','Almost No Chance']
        const n=categories.length

        const xScale = this.xScale
              .domain([-10, 140])
              .range([ 0, svgDimensions.width ]);

        const yScale = this.yScale
              .domain([0, 0.4])
              .range([ svgDimensions.height, 0]);

        const yName = this.yName
              .domain(categories)
              .range([0, svgDimensions.height])
              .paddingInner(1)
        
        function kernelDensityEstimator(kernel, X) {
                return function(V) {
                  return X.map(function(x) {
                    return [x, d3.mean(V, function(v) { return kernel(x - v); })];
                  });
                };
              }
        function kernelEpanechnikov(k) {
                return function(v) {
                  return Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
                };
              }

        const kde = kernelDensityEstimator(kernelEpanechnikov(7), xScale.ticks(40)) // increase this 40 for more accurate density.
        const allDensity = []
        for (let i = 0; i < n; i++) {
            let key = categories[i]
            let density = kde( data.map(function(d){  return d[key]; }) )
            allDensity.push({key: key, density: density})
        }
        console.log(allDensity)

        return (
        <div>
            <svg  width={svgDimensions.width + margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
              <g transform={"translate(" + margins.left + "," + margins.top + ")"}>
              <Axes
              scales={{ xScale, yScale,yName  }}
              margins={margins}
              svgDimensions={svgDimensions}
              />
              <Line scales={{ xScale, yScale, yName }}
                  svgDimensions={svgDimensions}
                  margins={margins}
                  maxValue={max}
                  minValue={min}
                  data={allDensity} 
              />
               </g>
            </svg> 
          </div>
        );
      }
}
export default LineChart;