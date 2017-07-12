
import React, { Component } from 'react'
import './Headings.css'
import './Work.css'
import VerticalNonLinear from './VerticalLineStepper'


export default class Work extends Component{


  render(){
    return( 
      <div>
        <h4 className="headings">Work Experience</h4> 
        <div className="stepper">
          <VerticalNonLinear/>
        </div>
      </div>
    )
  }
}
