import React from 'react';
import * as d3 from 'd3';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles} from '@material-ui/core/styles';

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#1e2934",
    color: '#eee',
    boxShadow: theme.shadows[4],
    fontSize: 12,
    border: '1px solid #1e2934',
    maxWidth: 120
  },
  arrow: {
    color: "#1e2934",
  },
}))(Tooltip);


function Slice({value,index, label, fill, innerRadius = 0, outerRadius, cornerRadius, padAngle,}){
  let arc = d3
    .arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .cornerRadius(cornerRadius)
    .padAngle(padAngle);
    return (
      <g>
         <LightTooltip
            title={value.value}
            placement={index<5 ? "right" : "left"}
            arrow>
            <path d={arc(value)} fill={fill} />
         </LightTooltip>
        <text
          transform={`translate(${arc.centroid(value)})`}
          dy=".35em"
          textAnchor="middle"
          fill="black"
          fontSize="12px">
          {label}
        </text>
      </g>
    );
  }
export default Slice;