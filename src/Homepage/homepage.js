import React, { Component } from 'react'
import './homepage.scss';
import MenuIcon from './menu-icon';
import Logo from './logo';
import BookButton from './book-button';
import MenuBar from './menu-bar';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <MenuIcon />  
        <MenuBar />
        <Logo />
        <BookButton />
        <div className="homepage-image-container">
          <img className="homepage-image" src={process.env.PUBLIC_URL + "/images/homepage.jpeg"} alt="homepage"></img>
        </div>
      </div>
    )
  }
}
