
import React, { Component } from 'react'
import './Headings.css'
import './Personal.css'

export default class Personal extends Component{

  render(){
    return( 
      <div>
        <h4 className="headings">About Me</h4> 
        <span className="personal-span"> <img src={require( "../images/personal.jpg" )} alt="Personal" height={250}/>
            <p>
Hi - welcome to my site! I am a 19 year old undergraduate sophomore from Northville, Michigan. I am a current computer science and neuroscience student at Duke University. As a neuroscience student, I have a natural tendency towards big data and artificial intelligence (particularly machine learning). However, recently I have developed an affinity for the front-end, and I have started several related projects. I am always looking to learn more! Feel free to contact me for inquiries of any kind.  
          </p>
        </span>
          <div className="contact">
        248.974.1990 | anika.mukherji@duke.edu | <a className="my-links" href="https://github.com/anikamukherji">My GitHub </a> 
      | <a className="my-links" href="https://www.linkedin.com/in/anika-mukherji-20a498126/">My LinkedIn</a>
          </div>
      </div>
    )
  }
}
