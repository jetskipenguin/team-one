import React from 'react';
import Pie from './Pie';
import data from './data/data'

function ChartLine(){
        let width = 500;
        let height = Math.min(width, 500);
        let radius = Math.min(width, height)/2 ;
        let x = width/2;
        let y = height/2;
        // const colorScale = ['#5371f9','#4fc3f7','#cfd8dc','#66a3ff','#8cff66','#ff80d5','#80cbc4','#ffffcc','#ff8080','#7986cb'];
        return (
          <div>
            <svg viewBox="-400 -50 1400 600" >
              <Pie x={x} y={y} 
                radius={radius} 
                innerRadius={radius*0.50}
                outerRadius={Math.min(width, height)/2}
                cornerRadius={3}
                padAngle={.005}
                data={data} 
               
                />
              
            </svg>
         
            
           </div>
    
        );
      }
export default ChartLine;