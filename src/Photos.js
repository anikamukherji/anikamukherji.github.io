
import React, { Component } from 'react'
import './Headings.css'
import GridListExampleSingleLine from './Grid'


export default class Projects extends Component{


  render(){
    return( 
      <div>
        <h4 className="headings photos-hover">"Photography is a love affair with life."</h4> 
          <GridListExampleSingleLine/>
      </div>
    )
  }
}

