
import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from '../node_modules/material-ui/Stepper';
import './Steps.css'

/**
 * A basic vertical non-linear implementation
 */
class VerticalNonLinear extends React.Component {

  constructor(props){

    super()
    this.state = {
      stepIndex: null,
      open:false,
    }
    this.handler = this.handler.bind(this)
  }

  handler(event, index){
    console.log(index)
    if (this.state.open === false){
      this.setState({
                    stepIndex:index,
                    open:true,
                    })
    } else{
      if(index === this.state.stepIndex){
        this.setState({
                      stepIndex:null,
                      open:false,
                      }) 
      }else{ this.setState({stepIndex:index,})}
    }
  }

  render(){

    return (
      <div style={{maxWidth: 580, maxHeight: 400, margin: 'auto'}}>
        <Stepper
          activeStep={this.state.stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton onTouchTap={(event) => this.handler(event, 0)}> 
              <p className="job-header">Software Engineer at Vida Health </p>
            </StepButton>
            <StepContent>
              <p className="description">
            Worked as a software intern during the summer of 2017 at <a href="https://www.vida.com" className="link-style">Vida Health</a> on the iOS development team. I am continuing to work as a part-time software engineer into the fall of 2017 as we finish up our project: a 2.0 version of our app.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={(event) => this.handler(event, 1)}> 
              <p className="job-header">Research Assistant in Hoff Statistics Lab - Current</p>
            </StepButton>
            <StepContent>
              <p className="description">
            Working as part of a software development team for Hoff Lab at Duke University. We are creating an R package for direct communication with an Arduino board. Once package is built, will proceed to carry out a series of machine learning and other data analysis projects to showcase our package.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={(event) => this.handler(event, 2)}> 
              <p className="job-header">Researcher in Glickfeld Lab - Current</p>
            </StepButton>
            <StepContent>
              <p className="description">
            Modeling short term synaptic plasticity (depression and facilitation) in the visual cortex using Python. Have built a series of flexible modules for creating Brian2 networks, running consecutive simulations, saving the networks, and analyzing the recorded data.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={(event) => this.handler(event, 3)}> 
              <p className="job-header">Calculus II and Applications TA - Fall 2016</p>
            </StepButton>
            <StepContent>
              <p className="description">
            Worked as a Calculus II and Applications Teaching Assistant for the fall of 2016. Taught a lab session and staffed the help room.
              </p>
            </StepContent>
          </Step>
          <Step>
            <StepButton onTouchTap={(event) => this.handler(event, 4)}> 
              <p className="job-header">Student Tutor - Fall 2010 - Spring 2015</p>
            </StepButton>
            <StepContent>
              <p className="description">
          Tutored younger students and peers throughout middle school and high school in all subjects from math to Spanish to ACT prep.
              </p>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }

}

export default VerticalNonLinear;
