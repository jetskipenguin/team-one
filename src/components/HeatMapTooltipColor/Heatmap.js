import React from 'react';
import { scaleSequential } from 'd3-scale';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles} from '@material-ui/core/styles';
import * as d3 from 'd3';

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
}))(Tooltip);

function Heatmap({scales, data}){
    const  colorScale = scaleSequential()
    .interpolator(d3.interpolateBuPu)
    .domain([1,100])
    const { xScale, yScale } = scales
    const bars = (
          data.map((datum,i) =>
          <LightTooltip
          title={datum.value}
          placement={"right"}
          arrow>
            <rect
              key={i}
              x={xScale(datum.group)}  
              y={yScale(datum.variable)}
              height={yScale.bandwidth()}
              width={xScale.bandwidth()}
              fill={colorScale(datum.value)}/>
          </LightTooltip>  
          )
        )
    return (
          <g>
            {bars}
          </g>
        )
      }
export default Heatmap