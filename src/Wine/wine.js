import React, { Component } from 'react'
import './wine.scss';
import { wine } from '../mock-data.json'

function WineGallery() {
    const wineList = wine.map((wine) => 
      <li className="wine" key={wine.name}>
        <img className="wine-image" src={process.env.PUBLIC_URL + wine.image} alt="Wine"></img>
        <span className="wine-name">{wine.name}</span>
        <span className="wine-price">{wine.price}</span>
      </li>
    );
    return <ul className="wine-gallery">{wineList}</ul>;
}
export default class Wine extends Component {
  render() {
    return (
      <div>
        <h1>Wine</h1>
        <WineGallery />
      </div>
    )
  }
}


