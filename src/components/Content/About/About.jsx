import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image } from 'antd'
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
      <span>Hi, my name is</span>
    </div>
    <div className="about-text-content-name">
      <span>Min Marn Oo</span>
    </div>

    <div className="about-text-content-description">
      <div>
        <span>
          I'm a Software Engineer specializing in building (and occasionally designing) web applications.
          Currently, I am focused on building clean and efficient UIs at {" "}
          <a
              target="_blank" 
              href="https://www.lucence.com/"
              rel="noreferrer"
              style={{ color: "rgb(212, 204, 202)" }}
          >
          Lucence</a>.
        </span>
      </div>
      <div style={{ marginTop: "25px" }}>
        <span >
          Gradudated in 2020 from University of Wollongong - Bachelor of Information Technology, I have 2 years of experience working width
          React, Python, DynamoDB and other AWS Services.
        </span>
      </div>
      <div style={{ marginTop: "25px" }}>
        <button className="resume-button"
          onClick={() => {
            window.open("/resume.pdf")
          }}
        >
          Check out my resume!
        </button>
      </div>
    </div>
  </div>
)