import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import Bars from './Bars'
import Tooltip from './Tooltip';
import * as d3 from 'd3'


class BarChart extends Component {
  constructor() {
    super()
    this.xScale0 = scaleBand()
    this.xScale1 = scaleBand()
    this.yScale = scaleLinear()
    this.state = {
      hoveredBar: null,
    };
  }
  render() {
    const margin = {top: 10, right: 10, bottom: 20, left: 40}
    const svgDimensions = {
      width: 460 - margin.left - margin.right,
      height: 400 - margin.top - margin.bottom
    }

    const subgroups = [
     "Nitrogen",
     "normal",
     "stress"
    ]
    // const groupKey = 'state'

    const groups = d3.map(data, function(d){return(d.group)}).keys()
    console.log('groups',groups)
 
    const xScale0 = this.xScale0
      .domain(groups)
      .range([margin.left, svgDimensions.width - margin.right])
      .paddingInner(0.1)
    const xScale1 = this.xScale1
      .domain(subgroups)
      .range([0, xScale0.bandwidth()])
      .padding(0.05)
    const yScale = this.yScale
      .domain([0, d3.max(data, d => d3.max(subgroups, subgroup => d[subgroup]))]).nice()
      .range([svgDimensions.height - margin.bottom,margin.top])

    
    return (
      
      <div>
      <svg  
      
      width={svgDimensions.width+ margin.left + margin.right} height={svgDimensions.height+ margin.top + margin.bottom}
     >
        
        <Axes
          scales={{ xScale0, xScale1, yScale }}
          margins={margin}
          svgDimensions={svgDimensions}
        /> 
        <Bars
          scales={{ xScale0, xScale1, yScale }}
          margin={margin}
          data={data}
          groups={groups}
          subgroups={subgroups}
          svgDimensions={svgDimensions}
        />
      </svg>

      </div>
    )
  }
}
export default BarChart