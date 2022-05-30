import React, { Component } from 'react'

export default class AboutTextContent extends Component {
  render() {
    return (
      <div>
        <div className="about-text-content-title">
          <span>Hello World!  <span style={{ marginLeft: "5px" }} >I am Min</span> </span>
        </div>

        <div className="about-text-content-description">
          <div>
            <span>
              I'm a Software Engineer in Lucence - a company that is revolutionising cancer care
              by building sensitive blood-testing technologies that profile cancer both accurately and affordably.
            </span>
          </div>
          <div style={{ marginTop: "25px" }}>
            <span >
              Gradudated in 2020 from University of Wollongong - Bachelor of Information Technology, I have 2 years of experience working width
              React, Python, DynamoDB and other AWS Services.
            </span>
          </div>
        </div>
      </div>
    )
  }
}
