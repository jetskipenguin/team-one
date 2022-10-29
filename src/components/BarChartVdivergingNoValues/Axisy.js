import React, { useRef, useEffect } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'



function Axis({scale,orient,tickSize,translate,data}){
    let axisElement = useRef(null)

    useEffect(() => {
      renderAxis()
    }, []);

    const renderAxis=()=>{
      const axis= d3Axis[`axis${orient}`]()
        .scale(scale)
        .tickSize(tickSize)
        .tickPadding([4])
      d3Select(axisElement).call(axis)
    }
      return (
        <g
          className={`Axis Axis-${orient}`}
          ref={(el) => { axisElement = el; }}
          transform={translate}
        >
        </g>
      )
    }
export default Axis