import React, { useEffect, useRef } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'

function Axis({orient,translate,scale,tickSize}){
    let axisElement = useRef(null);
    useEffect(() => {
      renderAxis()
    }, []);
    const renderAxis=()=> {
      const axisType = `axis${orient}`
      const axis = d3Axis[axisType]()
        .scale(scale)
        .tickSize(tickSize)
        .tickPadding([8])
      d3Select(axisElement).call(axis)
    }
      return (
        <g
        className={`Axis Axis-${orient}`}
        ref={(el) => { axisElement = el;}}
        transform={translate}>  
       </g>
      )
    }
export default Axis