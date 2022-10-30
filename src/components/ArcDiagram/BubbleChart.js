import React, { Component } from 'react';
import { scaleBand, scaleLinear, scalePoint} from 'd3-scale'
import Axes from './Axes'
import data from './data/data'
import * as d3 from 'd3';
import Bubble from './Bubble'
import Line from './Line'

export default class ChartBubble extends React.Component{
    constructor() {
        super()
        this.xScale = scalePoint()
    }
        render(){
            const margins = ({top: 20, right: 30, bottom: 20, left: 30})
            const svgDimensions = { width: 450 - margins.left - margins.right , height: 300 - margins.top - margins.bottom }

            let allNodes = data.nodes.map(function(d){return d.name})
            const xScale = this.xScale
            .range([0, svgDimensions.width])
            .domain(allNodes)
            
          return(  
            <svg width={svgDimensions.width + margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
                <g transform={"translate(" + margins.left + "," + margins.top + ")"}>
                {/* <Axes
                  scales={{ xScale}}
                  margins={margins}
                  svgDimensions={svgDimensions}
                /> */}
                <Bubble  
                  scales={{ xScale}}
                  margins={margins}
                  data={data.nodes}

                  svgDimensions={svgDimensions}          
                />  
                <Line
                scales={{ xScale}}
                data={data}
                margins={margins}
                svgDimensions={svgDimensions}
                /> 
                </g>
            </svg>
          )
        }
}