import React, { Component } from 'react';
import Header from './Header'
import Menu from './Menu'
import Education from './Education'
import Personal from './Personal'
import Work from './Work'
import Awards from './Awards'
import Photos from './Photos'
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
    } else if (tag === "photos") {
      scrollToComponent(this.refs.photos) 
    }
  }

  render() {

    return (
      <MuiThemeProvider>
        <div>

        <div className="parallax">
          <div className="menu-bars">
            <Menu menuButtonParentCallback={ this.menuButtonPressed }/>
          </div>
          <Header title="anika mukherji"/>
          <p className="quote"> "The cure for anything is salt water, tears, or the sea. "</p>
          <p className="author"> - Isak Dinesen</p>
        </div>
        <Personal ref="personal" />

        <div className="parallaxBlock"> 
          <div className="container"/>
        </div>

        <Education ref="education"/>

        <div className="parallaxBlock"> 
          <div className="container"/>
        </div>

        <Work ref="work"/>

        <div className="parallaxBlock"> 
          <div className="container"/>
        </div>

        <Awards ref="awards"/>

        <div className="parallaxBlock"> 
          <div className="container"/>
        </div>

        <Photos ref="photos"/>

        <div className="parallaxBlock"> 
          <div className="container"/>
        </div>

        <div className="contact">
      248.974.1990 | anika.mukherji@duke.edu | <a className="my-links" href="https://github.com/anikamukherji">My GitHub </a> 
      | <a className="my-links" href="http://vsco.co/anika1997/images/1">My VSCO Photo Blog </a> 
    | <a className="my-links" href="https://www.linkedin.com/in/anika-mukherji-20a498126/">My LinkedIn</a>
        </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
