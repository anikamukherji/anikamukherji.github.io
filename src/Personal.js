
import React, { Component } from 'react'
import './Headings.css'
import './Personal.css'

export default class Personal extends Component{

  render(){
    return( 
      <div>
        <h4 className="headings personal-hover">"Any fool can know. The point is to understand."</h4> 
        <span className="personal-span"> <img src={require( "../images/sf_pic.jpg" )} alt="Personal" height={250}/>
            <p className="personal-text">
Hi - welcome to my site! I am a 20 year old undergraduate sophomore from Northville, Michigan. I am a current "Minds and Machines" B.S. student at Duke University: a CS + Neuroscience major that I created. I have done everything from computational modling of the brain to R package development to iOS software, and I am always looking to learn new things. Check out my GitHub to see some of my projects and please contact me with any inquiries!
            </p>
        </span>
      </div>
    )
  }
}
