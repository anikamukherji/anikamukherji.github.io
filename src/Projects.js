

import React, { Component } from 'react'
import './Headings.css'
import GridListExampleSingleLine from './Grid'


export default class Projects extends Component{


  render(){
    return( 
      <div className="bground">
        <h4 className="headings">Projects</h4> 
          <GridListExampleSingleLine/>
      </div>
    )
  }
}

