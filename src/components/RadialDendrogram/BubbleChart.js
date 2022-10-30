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
            const svgDimensions = { width: 460 , height: 460 }
            const radius = svgDimensions.width / 2 
            const cluster = d3.cluster()
            .size([360, radius - 60])
            const root = d3.hierarchy(data, function(d) {
              return d.children;
            });
          cluster(root);
     
          return(  
            <svg width={svgDimensions.width + margins.left + margins.right} height={svgDimensions.height + margins.top + margins.bottom}>
                <g transform={"translate(" + radius + "," + radius + ")"}>
                {/* <Axes
                  scales={{ xScale}}
                  margins={margins}
                  svgDimensions={svgDimensions}
                /> */}
              <Line
              data={root.links() }
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