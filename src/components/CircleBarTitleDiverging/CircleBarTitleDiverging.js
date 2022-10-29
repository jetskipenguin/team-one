import React, { Component } from 'react';
import CirleBar from './Pie';
import data from './data/data'
import { scaleBand, scaleRadial} from 'd3-scale'

class Circle extends Component {
  constructor() {
    super()
    this.xScale = scaleBand()
    this.yScale = scaleRadial()
    this.ybisScale=scaleRadial()
  }
    render() {
        const margins = {top: 100, right: 0, bottom: 0, left: 0}

        let width = 460 - margins.left - margins.right
        let height = 460 - margins.top - margins.bottom
        let innerRadius = 100
        let outerRadius = Math.min(width, height) / 2
        let x = width/2;
        let y = height/2;

        const xScale = this.xScale
            .align(0) 
            .domain( data.map(d => d.name))
            .range([0, 2 * Math.PI])

        const yScale = this.yScale
            .range([innerRadius, outerRadius])
            .domain([0, 10000])
        
        const ybisScale = this.ybisScale
            .range([innerRadius, 5])
            .domain([0, 13000]);


        return (
          <div>
            <svg  width={width+ margins.left + margins.right} height={height + margins.top + margins.bottom} >
              <CirleBar
                width={width}
                height={height}
                scales={{ xScale, yScale, ybisScale}}
                innerRadius={innerRadius}
                margins={margins}
                cornerRadius={3}
                padAngle={0.01}
                padRadius={innerRadius}
                data={data} />
            </svg>
          </div> 
        );
      }
}
export default Circle;