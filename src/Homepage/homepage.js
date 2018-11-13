import React, { Component } from 'react'
import * as url from '../assets/homepage.jpeg'
import './homepage.scss';
import MenuIcon from './menu-icon';
import Logo from './logo';
import Book from './book';
import MenuBar from './menu-bar';

export default class HomePage extends Component {
  render() {
    return (
      <div className="homepage">
        <MenuIcon />  
        <MenuBar />
        <Logo />
        <Book />
        <img src={url} alt="homepage"></img>
      </div>
    )
  }
}
