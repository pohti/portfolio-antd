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
          <LinkedinOutlined />
        </Col>
        <Col span={2}>
          <GithubOutlined />
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
