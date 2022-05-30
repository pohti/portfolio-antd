import React, { Component } from 'react'
import { Row, Col, Image } from 'antd'
import AboutTextContent from './AboutTextContent'
import './About.css'



const imgURL = "https://media-exp1.licdn.com/dms/image/C5103AQFr27-SuBeXeg/profile-displayphoto-shrink_800_800/0/1517233913057?e=1659571200&v=beta&t=yUtgQb-nB9mtlAXV4V5wwMyExlthxRNPXJquTA9ahYc"

export default class About extends Component {
  render() {
    return (
      <Row
        className="about-main-div"
        gutter={[16, 16]}
        justify="space-evenly"
        wrap
      >
        <Col span={6} >
          <div className="image-container">
            <Image
              width={200}
              src={imgURL}
              className="profile-pic"
              preview={false}
            />
          </div>
        </Col>

        <Col span={18}>
          <div className="text-container">
            <AboutTextContent />
          </div>
        </Col>
      </Row>
    )
  }
}
