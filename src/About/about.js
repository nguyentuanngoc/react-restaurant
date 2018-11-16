import React, { Component } from 'react'
import { about } from '../mock-data.json';

function Description() {
  const descriptionList = about.map((about, index) => {
    return (
      <li key={index}>
        <span>about.description</span>
        <img src={process.env.PUBLIC_URL + about.image} alt="About us"></img>
      </li>
    );
  });
  return <ul>{descriptionList}</ul>
}
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About Us</h1>
        <Description/>
      </div>
    )
  }
}
