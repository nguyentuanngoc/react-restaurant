import React, { Component } from 'react'
import './homepage.scss';

export default class MenuBar extends Component {
  render() {
    return (
      <ul className="menu-list">
        <li>Home</li>
        <li>Food</li>
        <li>Wine</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    )
  }
}
