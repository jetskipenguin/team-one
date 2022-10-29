import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props)
 
    this.line = this.line.bind(this);
  }
   line(d){
    const { data, margins,svgDimensions} = this.props;



    return "M" + d.y + "," + d.x
    + "C" + (d.parent.y + 50) + "," + d.x
    + " " + (d.parent.y + 150) + "," + d.parent.x
    + " " + d.parent.y + "," + d.parent.x;
  } 

    
  render() {
    const { data, margins} = this.props;
  //   const { xScale} = scales;

  //   let idToNode = {};
  //   data.nodes.forEach(function (n) {
  //   idToNode[n.id] = n;
  // });
  
    
    return (
      <g >
        {data.map(d=>

           <path
           d={this.line(d)}
           fill={'none'}
           stroke={'#ccc'}
           strokeWidth={'1.5'}
          
         />
          )}
    </g>
    );
  }
}