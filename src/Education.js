
import React, { Component } from 'react'
import './Headings.css'
import './Education.css'
import Modal from 'react-modal'

const customStyles = {
  overlay : {
    backgroundColor:'white',
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:'100%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:'None',
    backgroundColor: '#DAF0EE',
    boxShadow: '0 0 8px 2px white inset',
    order: '1',
  },
}

export default class Education extends Component{

    constructor() {
    super();
    this.state = {
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({modalIsOpen: false})
  }

  render(){
    return( 
      <div className='center-items'>
        <h4 className="headings">Education</h4> 
        <h3>Northville High School</h3>
            <ul>2011 to 2015</ul>
            <ul>Graduated Summa Cum Laude</ul>
            <ul>GPA: 4.0/4.0</ul>
        <h3>Duke University</h3>
            <ul>2015 to Present</ul>
            <ul>Bachelors of Science in Computer Science/Neuroscience</ul>
            <ul>GPA: 4.0/4.0</ul>
        <button className='list-button' onClick={this.openModal}>
          <h3>Coursework</h3>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button className='modal-close' onClick={this.closeModal}>X</button>
          <ul className='course-list'>
            <li> CS201: Data Structures and Algorithms</li>
            <li> CS230: Discrete Math for Computer Science</li>
            <li> CS270: Introduction to Artificial Intelligence</li>
            <li> Web Development Fundamentals (Coursera) </li>
            <li> Math122L: Calculus II and Applications </li>
            <li> Math218: Matrices and Vector Spaces (Linear Algebra)</li>
            <li> Neuro101: Biological Basis of Behavior</li>
            <li> Neuro201: Fundamentals of Neuroscience</li>
            <li> Neuro212: Introduction to Cognitive Neuroscience</li>
            <li> Neuro355S: Visual Perception and the Brain</li>
            <li> Neuro493: Modeling Cortical Inhibition</li>
          </ul>
        </Modal>
        <h3> -&- </h3>
        <h3> Skills </h3>

      </div>

    )
  }
}
        //<button className='list-button' onClick={this.openModal}>
          //<h3> Skills</h3>
        //</button>
        //<Modal
          //isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          //onRequestClose={this.closeModal}
          //style={customStyles}
          //contentLabel="Example Modal"
        //>
          //<button className='modal-close' onClick={this.closeModal}>X</button>
          //<ul className='course-list'>
            //<li> Python </li>
            //<li> Java </li>
            //<li> JS/HTML/CSS </li>
            //<li> R </li>
            //<li> Vision Neuroscience </li>
          //</ul>
        //</Modal>
