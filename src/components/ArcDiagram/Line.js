import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props)
 
    this.line = this.line.bind(this);
  }
   line(d,idToNode){
    const { scales,data, margins,svgDimensions} = this.props;
    const { xScale} = scales;
   
    let start=xScale(idToNode[d.source].name)
    let end = xScale(idToNode[d.target].name)

    return ['M', start, svgDimensions.height-30,'A',(start - end)/2, ',',(start - end)/2, 0, 0, ',',start < end ? 1 : 0, end, ',', svgDimensions.height-30]
    .join(' ')
  } 

    
  render() {
    const { scales,data, margins} = this.props;
    const { xScale} = scales;

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