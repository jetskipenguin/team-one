import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles} from '@material-ui/core/styles';


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
function Bubble({ scales, margins, data}){
  console.log(data)
          const { xScale, yScale, zScale} = scales
          const bubble = (
          data.map(datum =>
            <LightTooltip

            title={`Country: ${datum.country} `+
                   `Population: ${datum.pop} `+
                    `Life Expect.: ${datum.lifeExp} `+
                   `GDP Per Cap.: ${datum.gdpPercap} `}
            placement={"right-end"}
            arrow>
            <circle
            cx={xScale(datum.gdpPercap)}  
            cy={yScale(datum.lifeExp)}
            r={zScale(datum.pop)}
            fill="#5371f9"
            opacity="0.7"
            stroke="black"
            strokeWidth='0.5'/>
            </LightTooltip>  
         )
      )
      return (
        <g transform={`translate(${margins.left}, ${margins.top})`}>{bubble}</g>
              )
}
export default Bubble
