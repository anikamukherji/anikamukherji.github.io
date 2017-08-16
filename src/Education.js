
import React, { Component } from 'react'
import './Headings.css'
import './Education.css'
import Modal from 'react-modal'
import Modal2 from 'react-modal'

const customStyles = {
  overlay : {
    backgroundColor:'clear',
  },
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width:'50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:'None',
    backgroundColor: '#035569',
    color: 'white',
    boxShadow: '0 0 12px 9px inset',
  },
}

export default class Education extends Component{

  constructor() {
  super();
  this.state = {
    modalIsOpen: false,
    modal2IsOpen: false
  }
  this.openModal = this.openModal.bind(this)
  this.afterOpenModal = this.afterOpenModal.bind(this)
  this.closeModal = this.closeModal.bind(this)
  this.openModal2 = this.openModal2.bind(this)
  this.afterOpenModal2 = this.afterOpenModal2.bind(this)
  this.closeModal2 = this.closeModal2.bind(this)
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

  openModal2() {
    this.setState({modal2IsOpen: true})
  }

  afterOpenModal2() {
    // references are now sync'd and can be accessed.
    this.refs.subtitle.style.color = '#f00'
  }

  closeModal2() {
    this.setState({modal2IsOpen: false})
  }

  render(){
    return( 
      <div className='center-items'>
        <h4 className="headings education-hover">"Education is what you learn after you leave school."</h4> 
        <h3>Duke University</h3>
            <ul>2015 to Present</ul>
            <ul>Bachelors of Science in "Minds and Machines"</ul>
            <ul>GPA: 4.0/4.0</ul>
        <h3>Northville High School</h3>
            <ul>2011 to 2015</ul>
            <ul>Graduated Summa Cum Laude</ul>
            <ul>GPA: 4.0/4.0</ul>
        <button className='list-button' onClick={this.openModal}>
          <h3>Coursework</h3>
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        >
          <ul className='course-list'>
            <li> CS201: Data Structures and Algorithms</li>
            <li> CS230: Discrete Math for Computer Science</li>
            <li> CS250: Computer Architecture</li>
            <li> CS270: Introduction to Artificial Intelligence</li>
            <li> CS590: Building Ethics into Artifical Intelligence</li>
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
        <button className='list-button' onClick={this.openModal2}>
          <h3> Programming Languages </h3>
        </button>
        <Modal2
          isOpen={this.state.modal2IsOpen}
          onAfterOpen={this.afterOpenModal2}
          onRequestClose={this.closeModal2}
          style={customStyles}
        >
          <ul className='course-list'>
            <li> iOS: Objective-C, Swift</li>
            <li> Python </li>
            <li> Java </li>
            <li> Web Development: JS/HTML/CSS, React </li>
            <li> C </li>
            <li> R </li>
         </ul>
        </Modal2>
      </div>

    )
  }
}
