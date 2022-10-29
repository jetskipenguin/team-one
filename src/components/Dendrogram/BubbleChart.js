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

            const cluster = d3.cluster()
            .size([svgDimensions.height, svgDimensions.width - 100]);
            const root = d3.hierarchy(data, function(d) {
              return d.children;
            });
          cluster(root);
          console.log(root.descendants())
          return(  
            <svg width={svgDimensions.width + margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
                <g transform={"translate(" + margins.left + "," + margins.top + ")"}>
                {/* <Axes
                  scales={{ xScale}}
                  margins={margins}
                  svgDimensions={svgDimensions}
                /> */}
                  <Line

data={root.descendants().slice(1) }
margins={margins}
svgDimensions={svgDimensions}
/> 
                <Bubble  

                  margins={margins}
                  data={root.descendants()}

                  svgDimensions={svgDimensions}          
                />  
              
                </g>
            </svg>
          )
        }
}