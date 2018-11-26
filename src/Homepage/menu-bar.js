import React, { Component } from 'react'
import './homepage.scss';

export default class MenuBar extends Component {
  render() {
    return (
      <ul className="menu-list">
        <li><button>Home</button></li>
        <li><button>Food</button></li>
        <li><button>Wine</button></li>
        <li><button>Contact</button></li>
        <li><button>About</button></li>
      </ul>
    )
  }
}
