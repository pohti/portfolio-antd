import React, { Component } from 'react'
import { Row, Col, Image } from 'antd'
import './About.css'

const imgURL = "https://public-img-minmarnoo.s3.ap-southeast-1.amazonaws.com/passport.jpeg"

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
    <div className="about-text-content-description">
      <p>
        Hi, my name is Min. I enjoy building and designing web applications. 
        My interest in programming started back in 2013 when I was learning how to program Arduino circuit boards.
      </p>
      <p>
        Since then, I focused my learning on programming and software development.
      </p>
      <p>
        Fast-forward to today, I have attained a degree in <span style={{ color: "#fff"}}>Bachelor of Information Technology</span> from {" "}
        <a
            href="https://www.uow.edu.au/"
            rel="noreferrer"
            target="_blank"
            className="text-content-ref-links"
          >
            University of Wollongong
        </a> {" "}
        and worked on multiple real projects to give myself a better understanding of how the 'web' works.
      </p>
      <p>
        I am currently working as a Cloud Software Developer at {" "}
        <a
          target="_blank"
          href="https://www.dormakaba.com/sg-en"
          rel="noreferrer"
          className="text-content-ref-links"
        >
          dormakaba
        </a> {" "} -  a global security tech company.

      </p>



      {/* <div style={{ marginTop: "35px" }}>
        <button className="resume-button"
          onClick={() => {
            window.open("/resume.pdf")
          }}
        >
          Check out my resume!
        </button>
        <a
          href="/resume.pdf"
          target = "_blank"
          className="resume-link"
        >
          Resume
        </a>
      </div> */}
    </div>
  </div>
)