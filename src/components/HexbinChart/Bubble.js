import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import {hexbin as Hexbin} from "d3-hexbin";
import * as d3 from "d3"

export default class Bubble extends Component {
    constructor(props) {
      super(props)
      this.color = scaleLinear()
      .domain([0, 600]) // Number of points in the bin?
      .range(["transparent",  "#69b3a2"])
  }
    render() {
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale, zScale} = scales
      const { height,width } = svgDimensions
      const hexbin = Hexbin()
      .radius(9) // size of the bin in px
      .extent([ [0, 0], [svgDimensions.width, svgDimensions.height] ])
      let new_data=hexbin(data)

      return (
     
        <g >
           {new_data.map(datum=>
             <path
           d={hexbin.hexagon()}
           fill={this.color(datum.length) }
           stroke={'black'}
           stroke-width={'0.1'}
           transform={"translate(" + datum.x + "," + datum.y + ")"}
          />

)
}
     
    </g>
 
      )
    }
  }
