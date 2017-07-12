import React, { Component } from 'react';
import Header from './Header'
import Menu from './Menu'
import Education from './Education'
import Personal from './Personal'
import Work from './Work'
import Projects from './Projects'
import Awards from './Awards'
import './App.css'
import injectTapEventPlugin from '../react-tap-event-plugin/src/injectTapEventPlugin';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider';
import scrollToComponent from 'react-scroll-to-component';

injectTapEventPlugin()


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      step:null, 
    }
  }

  menuButtonPressed = (tag) => {
    console.log("Parent button pressed function triggered")
    console.log(this.refs.personal)
    if (tag === "personal") {
      scrollToComponent(this.refs.personal)
    } else if (tag === "education") {
      scrollToComponent(this.refs.education) 
    } else if (tag === "work") {
      scrollToComponent(this.refs.work) 
    } else if (tag === "awards") {
      scrollToComponent(this.refs.awards) 
    } else if (tag === "projects") {
      scrollToComponent(this.refs.projects) 
    }
  }

  render() {

    return (
      <MuiThemeProvider>
        <div className="bground">
        <div>
          <div className="menu-bars">
            <Menu menuButtonParentCallback={ this.menuButtonPressed }/>
          </div>
          <Header title="anika mukherji"/>
          <p className="quote"> "Any fool can know. The point is to understand."</p>
          <p className="author"> - Albert Einstein</p>
        </div>
        <Personal ref="personal" />
        <Education ref="education"/>
        <div className="section-padding">
          <Work ref="work"/>
        </div>
        <Awards ref="awards"/>
        <Projects ref="projects"/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
