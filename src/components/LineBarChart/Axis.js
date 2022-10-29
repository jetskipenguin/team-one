import React, { Component } from 'react'
import * as d3Axis from 'd3-axis'
import { select as d3Select } from 'd3-selection'



export default class Axis extends Component {
    componentDidMount() {
      this.renderAxis()
    }
  
    componentDidUpdate() {
      this.renderAxis()
    }
  
    renderAxis() {
      const axisType = `axis${this.props.orient}`

      const axisl = d3Axis[axisType]()
        .scale(this.props.scale)
        .tickSize(this.props.tickSize)
        .tickPadding([6])
      
      d3Select(this.axisElement).call(axisl)
      


    }
  
    render() {
      console.log(this)
      return (
        <g
          className={`Axis Axis-${this.props.orient}`}
          ref={(el) => { this.axisElement = el; }}
          transform={this.props.translate}
        >
      
</g>
      )
    }
  }