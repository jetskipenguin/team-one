import React, { Component } from 'react';
import *  as d3 from 'd3';
import Slice from './Slice'
import Slice2 from './Slice2'
class Pie extends React.Component {
    constructor(props) {
      super(props);
      this.colorScale = ['#4fc3f7','#cfd8dc','#80cbc4','#7986cb'];
      this.renderSlice = this.renderSlice.bind(this);
      this.labels = this.props.data.map(function(v){
        return v.name
      })
    }
    renderSlice(v) {
        let {innerRadius,cornerRadius, padAngle,scales} = this.props;
        return (
          <>
          <Slice
            innerRadius={innerRadius}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={v.value}
            endAngle={scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius={innerRadius}
            outerRadius={scales.yScale(v.value)}
            startAngle={scales.xScale(v.name)}
            />
            <Slice2
            innerRadius={scales.ybisScale(0)}
            cornerRadius={cornerRadius}
            padAngle={padAngle}
            value={v.value}
            endAngle={scales.xScale(v.name) + scales.xScale.bandwidth()}
            padradius={innerRadius}
            outerRadius={scales.ybisScale(v.value)}
            startAngle={scales.xScale(v.name)}
            />
        
            <g transform={"rotate(" + ((scales.xScale(v.name) + scales.xScale.bandwidth() / 2) * 180 / Math.PI - 90) + ")"+"translate(" + (scales.yScale(v.value)+10) + ",0)"}>
                <text 
              font-family="sans-serif" 
              fill="black"
              font-size="10"
              alignment-baseline='middle'
              text-anchor={(scales.xScale(v.name) + scales.xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "end" : "start"}
              transform={(scales.xScale(v.name) + scales.xScale.bandwidth() / 2 + Math.PI) % (2 * Math.PI) < Math.PI ? "rotate(180)" : "rotate(0)" }
              >
                {v.name}
              </text>
            </g>
          </>
          );
    }
    render() {
      let {data, width, height,margins} = this.props;
      return (
        <g transform={"translate(" + (width/2 + margins.left) + "," + (height/2 + margins.top) + ")"}>
          {data.map(this.renderSlice)}
        </g>
      );
    }
  }
export default Pie