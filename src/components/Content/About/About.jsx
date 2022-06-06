import React, { Component } from 'react'
import { Row, Col, Image, Button } from 'antd'
import './About.css'

const imgURL = "https://media-exp1.licdn.com/dms/image/C5103AQFr27-SuBeXeg/profile-displayphoto-shrink_800_800/0/1517233913057?e=1659571200&v=beta&t=yUtgQb-nB9mtlAXV4V5wwMyExlthxRNPXJquTA9ahYc"

export default class About extends Component {
  render() {
    return (
      <Row
        className="about-main-div"
        // gutter={[8, 8]}
        justify="center"
      //wrap
      >
        <Col xs={24} sm={24} md={6} >
          <div className="image-container">
            <Image
              src={imgURL}
              className="profile-pic"
              preview={false}
            />
          </div>
        </Col>

        <Col xs={24} sm={24} md={18}>
          <div className="text-container">
            <AboutTextContent />
          </div>
        </Col>
      </Row>
    )
  }
}

const AboutTextContent = () => (
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
      <div style={{ marginTop: "25px" }}>
        <button className="resume-button">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1-CsLbKv0rgKpFVH5TdIXYKfWWiPOunm8/view?usp=sharing">
              Check out my resume!
          </a>
        </button>
      </div>
    </div>
  </div>
)