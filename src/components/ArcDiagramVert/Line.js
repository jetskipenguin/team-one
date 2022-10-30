import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props)
 
    this.line = this.line.bind(this);
  }
   line(d,idToNode){
    const { scales,data, margins,svgDimensions} = this.props;
    const { yScale} = scales;
   
    let start=yScale(idToNode[d.source].name)
    let end = yScale(idToNode[d.target].name)

    return ['M', 50, start,    // the arc starts at the coordinate x=start, y=height-30 (where the starting node is)
    'A',                            // This means we're gonna build an elliptical arc
    (start - end)/2*4, ',',    // Next 2 lines are the coordinates of the inflexion point. Height of this point is proportional with start - end distance
    (start - end)/2, 0, 0, ',',
    start < end ? 1 : 0, 50, ',', end]
    .join(' ')
  } 

    
  render() {
    const { scales,data, margins} = this.props;
    const { yScale} = scales;

    let idToNode = {};
    data.nodes.forEach(function (n) {
    idToNode[n.id] = n;
  });
  
    
    return (
      <g >
        {data.links.map(d=>

           <path
           d={this.line(d,idToNode)}
           fill={'none'}
           stroke={'black'}
           stroke-width={'1.5'}
          
         />
          )}
    </g>
    );
  }
}