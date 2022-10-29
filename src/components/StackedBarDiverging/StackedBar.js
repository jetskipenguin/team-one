import React, { Component } from 'react'
import { scaleBand, scaleLinear } from 'd3-scale'
import { group,rollups,rollup} from 'd3-array'
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
    const margins = {top: 40, right: 30, bottom: 0, left: 80}
    const svgDimensions = {
      width: 500,
      height: 337
    }
    const rows = [
      "Mostly false",
      "False",
      "Pants on fire!",
      "Half true",
      "Mostly true",
      "True",
    ]
    
    
    const columns = ["speaker", "ruling", "count"]
    const negatives=["Pants on fire!", "False", "Mostly false"]
    const positives = ["Half true", "Mostly true", "True"]

    const signs = new Map([].concat(
      negatives.map(d => [d, -1]),
      positives.map(d => [d, +1])
    ))
    
    const bias = rollups(data, v => d3.sum(v, d => d.value * Math.min(0, signs.get(d.category))), d => d.name)
    .sort(([, a], [, b]) => d3.ascending(a, b))
   
    const series = d3.stack()
    .keys([].concat(negatives.slice().reverse(), positives))
    .value(([, value], category) => signs.get(category) * (value.get(category) || 0))
    .offset(d3.stackOffsetDiverging)
    (rollups(data, data => rollup(data, ([d]) => d.value, d => d.category), d => d.name))

//   const  stackGen = d3.stack()
//          .keys([].concat(negatives.slice().reverse(), positives))
//   console.log(stackGen)

// const stackedSeries = stackGen(data).map(d => (d.forEach(v => v.key = d.key), d))



console.log(series)

    const maxValue = Math.max(...data.map(d => d.value))
    // const minValue = Math.min(...data.map(d => d.value))

    const xScale = this.xScale
    .domain(d3.extent(series.flat(2)))
    .rangeRound([margins.left, svgDimensions.width - margins.right])     
    const yScale = this.yScale
      .padding(2 / 33)
      .domain(bias.map(([name]) => name))
      .rangeRound([margins.top, svgDimensions.height - margins.bottom])


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
          data={series }
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

