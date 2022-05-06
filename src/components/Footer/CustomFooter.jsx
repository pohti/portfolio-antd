import React, { Component } from 'react'
import { Row, Col, Typography } from 'antd'
import { 
  LinkedinOutlined,
  GithubOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons'
import './CustomFooter.css'

const { Text } = Typography

export default class CustomFooter extends Component {
  render() {
    return (
      <Row gutter={10} justify="center"
        className="footer-row"
      >
        <Col span={2}>
          <a target="_blank" href="https://www.linkedin.com/in/minmarnoo/">
            <LinkedinOutlined/>
          </a>
        </Col>
        <Col span={2}>
          <a target="_blank" href="https://github.com/pohti?tab=repositories"><GithubOutlined /></a>
        </Col>
        <Col span={2}>
          <PhoneOutlined />
        </Col>
        <Col span={2}>
          <MailOutlined />
        </Col>
      </Row>
    )
  }
}
