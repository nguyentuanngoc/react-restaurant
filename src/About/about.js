import React, { Component } from 'react'
import { about } from '../mock-data.json';
import './about.scss';

function Description() {
  const descriptionList = about.map((about, index) => {
    return (
      <li className="description" key={index}>
        <span className="descr-text">{about.description}</span>
        <img className="descr-image" src={process.env.PUBLIC_URL + about.image} alt="About us"></img>
      </li>
    );
  });
  return <ul className="descr-list">{descriptionList}</ul>
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
