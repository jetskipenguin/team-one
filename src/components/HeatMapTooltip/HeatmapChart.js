import React from 'react';
import Heatmap from './Heatmap';
import data from './data/data'
import { scaleBand } from 'd3-scale'
import Axes from './Axes'

function Heat(){
        const margin = {top: 30, right: 30, bottom: 30, left: 30}
        const svgDimensions = {
            width: 450 - margin.left - margin.right,
            height: 450 - margin.top - margin.bottom
          }
        const myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        const myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

        const xScale = scaleBand()
                .padding(0.01)
                .domain(myGroups)
                .range([0,svgDimensions.width])
        const yScale = scaleBand()
                .padding(0.01)
                .domain(myVars)
                .range([svgDimensions.height,0])
        return (
          <div>
            <svg viewBox="-400 -50 1400 600"  >
              <Axes
                scales={{ xScale, yScale}}
                svgDimensions={svgDimensions}/>
              <Heatmap 
                data={data} 
                scales={{ xScale, yScale}}/>
            </svg>
          </div> 
        );
      }

export default Heat;