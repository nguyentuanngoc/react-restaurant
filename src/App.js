import React, { Component } from 'react';
import './App.css';
import HomePage from './Homepage/homepage';
import Food from './Food/food';
import Wine from './Wine/wine';
import Contact from './Contact/contact';
import About from './About/about';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        <Food />
        <Wine />
        <Contact />
        <About />
      </div>
    );
  }
}

export default App;
