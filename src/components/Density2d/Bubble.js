import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import {hexbin as Hexbin} from "d3-hexbin";
import {geoPath as geoPath} from "d3-geo";
import * as d3 from "d3"

export default class Bubble extends Component {
    constructor(props) {
      super(props)
      this.color = scaleLinear()
      .domain([0, 1]) // Number of points in the bin?
      .range(["white", "#69b3a2"])
  }
    render() {
      const { scales, margins, data, svgDimensions, ...props } = this.props
      const { xScale, yScale} = scales
      const { height,width } = svgDimensions
 
      let densityData = d3.contourDensity()
        .x(function(d) { return xScale(d.x); })
        .y(function(d) { return yScale(d.y); })
        .size([width, height])
        .bandwidth(20)(data)
      
      let geo=d3.geoPath()

      return (
        <>
        <g >
           {densityData.map(datum=>
         
             <path
           d={geo(datum)}
           fill={this.color(datum.value) }
           stroke={'black'}
           strokeWidth={'0.1'}
           
          />
          )}
        </g>
       
        </>
      )
    }
  }
