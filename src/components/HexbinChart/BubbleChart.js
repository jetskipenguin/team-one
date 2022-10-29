import React, { Component } from 'react';
import { scaleBand, scaleLinear, scaleSequential} from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import * as d3 from 'd3';
import {hexbin as Hexbin} from "d3-hexbin";
import Bubble from './Bubble'

export default class ChartBubble extends React.Component{
    constructor() {
        super()
        this.xScale = scaleLinear()
        this.yScale = scaleLinear()

    }
        render(){
            const margins = ({top: 10, right: 30, bottom: 30, left: 40})
            const svgDimensions = { width: 460 - margins.left - margins.right, height: 400 - margins.top - margins.bottom}
            const xScale = this.xScale
                  .domain([5, 18])
                  .range([ 0, svgDimensions.width ])
            const yScale = this.yScale
                  .domain([5, 20])
                  .range([ svgDimensions.height, 0 ]);
            let inputForHexbinFun = []
                  data.forEach(function(d) {
                    inputForHexbinFun.push( [xScale(d.x), yScale(d.y)] )  // Note that we had the transform value of X and Y !
                  })
            
          return(  
            <svg width={svgDimensions.width+ margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
                <g transform={"translate(" + margins.left + "," + margins.top + ")"}>
                <Axes
                  scales={{ xScale, yScale }}
                  margins={margins}
                  svgDimensions={svgDimensions}
                />
                <Bubble  
                  scales={{ xScale, yScale}}
                  margins={margins}
                  data={inputForHexbinFun}
                  svgDimensions={svgDimensions}          
                />   
                </g>
                <clipPath id="myClip">
                  <rect width={svgDimensions.width}  height={svgDimensions.height} />
                </clipPath>
            </svg>
          )
        }
}