
import React, { Component } from 'react'
import './Headings.css'
import './Awards.css'

export default class Awards extends Component{

  render(){
    return( 
      <div>
        <h4 className="headings">Awards and Honors</h4> 
        <div className="awards">
          <ul>
            <li className="award">
              <a className="award-links" href="http://dtech.duke.edu/">DTech Scholar
              </a>
            </li>
            <li className="award">
              <a  className="award-links" href="http://www.nyas.org/WhatWeDo/ScienceEd/NeXXtScholars.aspx">NYAS Next Scholar
              </a>
            </li>
            <li className="award">Henry Ford Research Forum 1st Place</li>
            <li className="award">Deans List with Distinction: Fall 2015, Spring 2016, Fall 2016</li>
            <li className="award">
              <a  className="award-links" href="https://bassconnections.duke.edu/project-teams/how-build-ethics-robust-artificial-intelligence-2017-2018">Bass Connections Team Member
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
