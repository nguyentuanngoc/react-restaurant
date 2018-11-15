import React, { Component } from 'react'
import './food.scss';
import { food } from '../mock-data.json';

function FoodGallery() {
    const foodList = food.map((food) => 
      <li className="food" key={food.name}>
        <img className="food-image" src={process.env.PUBLIC_URL + food.image} alt="Food"></img>
        <span>{food.name}</span>
        <span>{food.price}</span>
      </li>
    );
    return <ul className="food-gallery">{foodList}</ul>;
}

export default class Food extends Component {
  render() {
    return (
      <div className="food-section">
        <h1>Food</h1>
        <FoodGallery />
      </div>
    )
  }
}

