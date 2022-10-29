import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'
import * as d3 from 'd3'
class BarChart extends Component {
  constructor() {
    super()
    this.xScale = scaleLinear()
    this.yScale = scaleBand()
  }
  render() {
    const margins = {top: 30, right: 10, bottom: 0, left: 50}
    const svgDimensions = {
      width: 500,
      height: 500
    }
    const rows=['<10','10-19','20-29','30-39', '40-49','50-59','60-69','70-79','≥80']
    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))
    const  stackGen = d3.stack()
            .keys(rows)
            
    
    const stackedSeries = stackGen(data).map(d => (d.forEach(v => v.key = d.key), d))
    
    console.log('--------',stackedSeries )

    const xScale = this.xScale
      .domain([0, d3.max(stackedSeries , d => d3.max(d, d => d[1]))])
      .range([margins.left, svgDimensions.width - margins.right])      
    const yScale = this.yScale
      .padding(0.1)
      .domain(data.map(d => d.name))
      .range([margins.top, svgDimensions.height - margins.bottom])

    
    return (
      
      <div>
      <svg  
      
      width={svgDimensions.width} height={svgDimensions.height}
     >
        
        <Axes
          scales={{ xScale, yScale }}
          margins={margins}
          svgDimensions={svgDimensions}        
        />
       
        <Bars
          scales={{ xScale, yScale }}
          margins={margins}
          data={stackedSeries }
          maxValue={maxValue}
          rows={rows}
          svgDimensions={svgDimensions}
        />
      </svg>
   
      </div>
    )
  }
}
export default BarChart
