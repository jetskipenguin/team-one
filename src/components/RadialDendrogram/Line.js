import React, { Component } from 'react';
import * as d3 from 'd3';

export default class Line extends Component {
  constructor(props) {
    super(props)
 

  }
 
    
  render() {
    const { data, margins} = this.props;
    const linksGenerator = d3.linkRadial()
  .angle(function(d) { return d.x / 180 * Math.PI; })
  .radius(function(d) { return d.y; });
    
    return (
      <g >
        {data.map(d=>

           <path
           d={linksGenerator(d)}
           fill={'none'}
           stroke={'#ccc'}
           strokeWidth={'1.5'}
          
         />
          )}
    </g>
    );
  }
}