import React, { Component } from 'react'
import './contact.scss';
import { ReactBingmaps } from 'react-bingmaps'
export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form className="book-form">
          <span className="book-title">book a table</span>
          <div className="input-container">
            <label className="form-label">your name</label>
            <input className="form-input" type="text" name="name"></input>
          </div>
          <div className="input-container">
            <label className="form-label">your phone number</label>
            <input className="form-input" type="number" name="phone"></input>
          </div>
          <input className="book-submit" type="submit" value="Submit"></input>
        </form>
        <div className="address-container">
          <h2 className="address-heading">Address:</h2>
          <span className="address"> Vestibulum ullamcorper, justo sit amet suscipit sagittis, neque dui porta nulla</span> 
        </div>
        <div className="bingmaps">
          <ReactBingmaps bingmapKey="An1SHbZcP870pxXbdqzqtAkAH-r50WHpkKb9Uxgds1CwGvLHQ8wsO_3iHZzhmX3y" center={[21.079126, 105.924805]} zoom={15}></ReactBingmaps>
        </div>
      </div>
    )
  }
}
