import React, { Component } from 'react'
import './contact.scss';

export default class Contact extends Component {
  render() {
    return (
      <form className="book-form">
        <span className="book-title">book a table</span>
        <div className="input-container">
          <label className="form-label">your name:</label>
          <input className="form-input" type="text" name="name"></input>
        </div>
        <div className="input-container">
          <label className="form-label">your phone number:</label>
          <input className="form-input" type="number" name="phone"></input>
        </div>
        <input className="book-submit" type="submit" value="Submit"></input>
      </form>
    )
  }
}
