import React, { Component } from 'react'

import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="home-main-div">
        <div>
          <div className="home-text-content-title">
            <span>Hi, my name is</span>
          </div>
          <div className="home-text-content-name">
            <span>Min Marn Oo</span>
          </div>
          <div className="home-text-content-subtitle">
            <span>Web Developer, Software Engineer</span>
          </div>

          <div className="home-text-content">
            <p>
              I'm a software engineer specializing in building (and occasionally designing) web applications.
              Currently, I am focused on building clean and informative user interfaces at {" "}
              <a
                target="_blank"
                href="https://www.lucence.com/"
                rel="noreferrer"
                className="text-content-ref-links"
              >
                Lucence</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
