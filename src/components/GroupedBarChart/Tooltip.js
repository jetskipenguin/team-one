import React from 'react'
import styled from 'styled-components'

const Tool =styled.div`
    width:40px;
    height:40px;
    position:absolute;
    width: 100px;
    background-color: #ebecf0;
    color: black;
    text-align: center;
    border-radius: 6px;
    opacity:0.8;
    transition: opacity 0.3s;
  &:after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #ebecf0 transparent transparent transparent;
  }
`
export default ({data, scales}) => {
    const { xScale, yScale } = scales
    const styles = {
      left: `${xScale(data.name)-36}px`,
      top: `${yScale(data.value)-30}px`,
    }
    return (
        <Tool style={styles} >
          {data.name}<br/>
          {data.value}
        </Tool>
    )
  }