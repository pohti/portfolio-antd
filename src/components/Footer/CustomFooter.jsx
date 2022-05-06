import React, { Component } from 'react'
import { Row, Col, Typography, Popover, Tooltip } from 'antd'
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
          <Tooltip title="Check out my LinkedIn profile">
            <a target="_blank" href="https://www.linkedin.com/in/minmarnoo/">
              <LinkedinOutlined />
            </a>
          </Tooltip>
        </Col>
        <Col span={2}>
          <Tooltip title="Check out my GitHub profile">
            <a target="_blank" href="https://github.com/pohti?tab=repositories"><GithubOutlined /></a>
          </Tooltip>
        </Col>
        <Col span={2}>
          <Popover
            content={"+65 8815 6448"}
            title={null}
          >
            <PhoneOutlined />
          </Popover>
        </Col>
        <Col span={2}>
          <Popover
            content={"minmarnoo@gmail.com"}
            title={null}
          >
            <MailOutlined />
          </Popover>
        </Col>
      </Row>
    )
  }
}
