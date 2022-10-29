import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { interpolateLab } from 'd3-interpolate';
import * as d3 from 'd3';
import { select as d3Select } from 'd3-selection'

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.myColor = d3.scaleOrdinal()
    .domain(["valueA", "valueB", "valueC"])
    .range(['#6196ff','#dcbeff','#fabed4']);
  }
  render() {
    const { scales, margins, data, svgDimensions, ...props } = this.props;
    const { xScale, yScale } = scales;
    const { height, width } = svgDimensions;

    
    let line =d3.line()
    .x(d => xScale(d.date))
    .y(d => yScale(d.value))
    // .curve(d3.curveMonotoneX);




    return (
      <g  
      fonFamily="sans-serif"
      fontSize="10px"
      strokeLinejoin={'round'}
      strokeLinecap={'round'}
      >
        {data.map(datum=> 
        <>
            <path
            d={line(datum)}
            fill={'none'}
            stroke={this.myColor(datum[0].key)}
            strokeWidth={'1'}
            textAnchor="middle"
            />

            
            </>
         )}
        
       {data.map(datum=>
        datum.map((d, i, data)=>
          // console.log(d.value)
          <>
          <text
            y={yScale(d.value)}
            x={xScale(d.date)}
            dy='0.35sem'
            
            fill="black"
           
            
            >
               {d.value}
             {i === data.length - 1 && 
             <tspan
             fontWeight="bold">
             {d.key}
            
          </tspan> 
            
            }
             

    
            </text>
          
               </>
          )
        )}
        {data.map(datum=> 
        <>
            <path
            d={line(datum)}
            fill={'none'}
            stroke={this.myColor(datum[0].key)}
            strokeWidth={'1'}
            text-anchor="middle"
            />
          
            
            </>
         )}
     
      
      </g>
    );
  }
}