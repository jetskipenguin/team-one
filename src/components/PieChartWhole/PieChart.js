import React from 'react';
import Pie from './Pie';
import data from './data/data'

function ChartLine(){
        let width = 500;
        let height = Math.min(width, 500);
        let radius = Math.min(width, height)/2 ;
        let x = width/2;
        let y = height/2;
        return (
          <div>
            <svg  viewBox="-400 -50 1400 600" >
              <Pie x={x} y={y} 
                radius={radius} 
                innerRadius={3}
                outerRadius={Math.min(width, height) / 2}
                cornerRadius={3}
                padAngle={.005}
                data={data} />
            </svg>
          </div>
        );
      }
export default ChartLine;