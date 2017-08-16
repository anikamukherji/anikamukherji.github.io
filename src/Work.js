
import React, { Component } from 'react'
import './Headings.css'
import './Work.css'
import VerticalNonLinear from './VerticalLineStepper'


export default class Work extends Component{


  render(){
    return( 
      <div>
        <h4 className="headings work-hover">"Choose a job you love, and you will never have to work a day in your life."</h4> 
        <VerticalNonLinear />
      <div className="smallContainer"/>
      </div>
    )
  }
}
