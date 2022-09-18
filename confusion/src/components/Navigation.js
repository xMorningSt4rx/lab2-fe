import React, { Component } from "react";
export default class Navigation extends Component {
  render() {
    return (
      <div className="header">
        
          <ul>
            <div className="header-left">
            <li>
              
                <a className="active" href="#home">
                  Home
                </a>
              
            </li>
            </div>
            <div className="header-right">
              <li>
                <a href="#news">News</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </div>
          </ul>
        
      </div>
    );
  }
}
