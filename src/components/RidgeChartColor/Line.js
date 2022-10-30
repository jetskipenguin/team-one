import React, { Component } from 'react';
import { scaleLinear,scaleSequential } from 'd3-scale';
import { interpolateLab,interpolateViridis } from 'd3-interpolate';
import * as d3 from 'd3';
import {schemeCategory10} from 'd3-scale-chromatic'

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.colorScale = ['#5371f9','#4fc3f7','#cfd8dc','#66a3ff','#8cff66','#ff80d5','#80cbc4','#ffffcc','#ff8080','#7986cb','#e4794f','#407294','#cef9c2','#f9d2c2','#c36fa2','#951f5b','#d2c2f9','#ace5f3'];
    // .domain(['Almost Certainly','Highly Likely','Very Good Chance','Probable','Likely','Probably','We Believe','Better Than Even','About Even','We Doubt','Improbable','Unlikely','Probably Not','Little Chance','Almost No Chance'])
    // .range(['#6196ff','#dcbeff','#fabed4','#ffd8b1','#fffac8','#aaffc3','#469990','#ff7b89','#758db7'])
  }
  render() {
    const { scales, margins,categories, data,allMeans, svgDimensions, ...props } = this.props;
    const { xScale, yScale,yName } = scales;
    const { height, width } = svgDimensions;

    
    let line =d3.line()
          .curve(d3.curveBasis)
          .x(function(d) { return xScale(d[0]); })
          .y(function(d) { return yScale(d[1]); })
    
    function color(d){
      const grp = d.key
      const  index= categories.indexOf(grp)
      const value = allMeans[index]
      // console.log(schemeCategory10(value))
      return this.myColor(d.key)
    }
    return (
      data.map((d,i)=>
        // console.log(d)
      <g  transform={"translate(0," + (yName(d.key)-height) +")"}>
       
            <path
            d={line(d.density)}
            fill={
          this.colorScale[i]
            }
            stroke={"#000"}
            strokeWidth={'1'}
            strokeLinejoin={'round'}
            strokeLinecap={'round'}
            opacity={0.7}
          />
      </g>
      )
    );
  }
}