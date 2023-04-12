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
            <span>Min Marn Oo.</span> {" "}
            <span style={{ fontSize: "17px" }} className="secondary-text">I am a..</span>
          </div>
          <div className="home-text-content-subtitle">
            <span>Web Developer, Software Engineer</span>
          </div>

          <div className="home-text-content">
            <p>
              I specialize in building (and occasionally designing) web applications.
              Currently, I am focused on creating clean and informative user interfaces at {" "}
              <a
                target="_blank"
                href="https://www.dormakaba.com/sg-en"
                rel="noreferrer"
                className="text-content-ref-links"
              >
                dormakaba</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
