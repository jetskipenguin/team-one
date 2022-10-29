import React from 'react';
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


function Slice({value,name, innerRadius, outerRadius, cornerRadius,startAngle,padAngle,endAngle}){

  let arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padAngle(padAngle)
      .startAngle(startAngle)
      .endAngle(endAngle)
      .padRadius(innerRadius)
      .cornerRadius(cornerRadius)
    
 

    return (

      <g>
         <LightTooltip
    title={`${name}, ${value}`}
    placement="right"
    arrow
   
  >
      <path d={arc(value)} fill={"#0166d6"} />
      </LightTooltip>
    </g>

    );
  }

export default Slice;