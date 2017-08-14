import React, { Component } from 'react';
import MotionMenu from './react-motion-menu-master/src';
import './Menu.css'


export default class Menu extends Component{

  buttonPressed = (tag) => {
    console.log("Button pressed function triggered")
    this.props.menuButtonParentCallback(tag)
  }

  render(){

     //onclick={ this.buttonPressed }
    return(
      <div className="MenuClass">
        <MotionMenu
          type="horizontal"
          margin={150}
          openSpeed={60}
          wings={true}
          bumpy={false}
          x={0}
          y={0}
        >
          <div className="button">
            <i id="menu" className="fa fa-bars" />
          </div>

          <div className="button">
            <div className="p-hover">
            <i className="fa fa-user-circle-o" onClick={ () => this.buttonPressed("personal") }> 
              <div className="p-label">
              <span className="text-label">Personal</span>
              </div>
            </i>
            </div>
          </div>

          <div className="button">
            <i className="fa fa-building" onClick={ () => this.buttonPressed("education") }> 
              <span className="text-label">Education</span>
            </i>
          </div>

          <div className="button">
            <i id="center" className="fa fa-wrench" onClick={ () => this.buttonPressed("work") }>
              <span className="text-label">Work Experience</span>
            </i>
          </div>

          <div className="button">
          <i className="fa fa-star-half-full" onClick={ () => this.buttonPressed("education") }> 
            <span className="text-label">Skills and Interests</span>
            </i>
          </div>

          <div className="button">
            <i className="fa fa-trophy" onClick={ () => this.buttonPressed("awards") }> 
              <span className="text-label">Awards and Honors</span>
            </i>
          </div>

          <a href="./resume.pdf" download>
          <div className="button">
            <i id="right" className="fa fa-pencil-square-o" >
              <span className="text-label">Resume PDF</span>
            </i>
          </div>
          </a>

        </MotionMenu>
      </div>
    )
  }
}

