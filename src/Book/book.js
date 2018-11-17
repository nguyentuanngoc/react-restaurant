import React, { Component } from 'react'

export default class Book extends Component {
  render() {
    return (
      <form>
        <label>Your name:<input type="text" name="name"></input></label>
        <label>Your phone number:<input type="number" name="phone"></input></label>
        <input type="submit" value="Submit"></input>
      </form>
    )
  }
}
