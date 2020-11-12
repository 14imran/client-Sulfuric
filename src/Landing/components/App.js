import React, { Component } from 'react'
import Navigation from './navigation.js';
import Header from './header.js';
import Features from './features.js';
import About from './about.js';


import Contact from './contact.js';
import JsonData from './data/data.json';

export class LandingPage extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
      
  
    
      
        <Contact data={this.state.landingPageData.Contact} />
      </>
    )
  }
}

export default LandingPage;
