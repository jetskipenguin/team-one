import React, {useState} from 'react'
import {schemeCategory10} from 'd3-scale-chromatic'
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#1e2934",
    color: '#eee',
    boxShadow: theme.shadows[4],
    fontSize: 11,
    border: '1px solid #1e2934',
    maxWidth: 120,
    
  },
  arrow: {
    color: "#1e2934",
    
  }
  ,
}))(Tooltip);

function Bars({scales,data}){
      const { xScale, yScale } = scales
      // const [show, setShow] = useState(false);

      const bars = (
        data.map(datum =>
          <g >
     <LightTooltip
    title={d3.format("+,.0%")(datum.value)}
    placement={datum.value > 0 ? "right" : "left"}
    arrow
  >
            <rect
              className='content'
              key={datum.name}
              x={xScale(Math.min(0, datum.value))}  
              y={yScale(datum.name)}
              height={yScale.bandwidth()}
              width={Math.abs(xScale(datum.value) - xScale(0))}
              fill={schemeCategory10[datum.value > 0 ? 0 : 3]}
           
            >
            </rect>
            </LightTooltip>
          </g>
        )
      )
      return (
        <>
          {bars} 
        
        </>
      )
    }
export default Bars