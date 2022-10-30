import React, { Component } from 'react';
import Chord from './Chord';
import data from './data/data'
import * as d3 from 'd3'
class ChartLine extends Component {
    render() {
        let width = 440;
        let height = 440;
        const res = d3.chord().padAngle(0.05)
        .sortSubgroups(d3.descending)(data)
        console.log(res)
        return (
          <div>
            <svg width='440' height='440'  >
              <Chord 
                data={res} />
               
               
            </svg>
          </div> 
        );
      }
}
export default ChartLine;