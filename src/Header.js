import './Header.css' 
import React, { Component } from 'react';

export default class Header extends Component{

  render(){
    return(
      <div className="HeaderBackground">
        <h3 className="HeaderClass">{ this.props.title }</h3>
      </div>
    )
  }

}
