import React, { Component } from 'react'
import { Row, Col, Typography } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

import './CustomHeader.css'

const { Text } = Typography



export default class CustomHeader extends Component {
  render() {
    return (
      <div>
          <Row className="header-row">
              <Col span={8}>
                <Row gutter={16} className="header-icon-container">
                    <Col >
                        <HomeOutlined className="header-icon"/>
                    </Col>
                    <Col>
                        <Text className="header-icon-text">Username</Text>
                    </Col>
                </Row>
              </Col>
              <Col span={16}>
                  <Row justify='end' gutter={20}>
                      <Col>Menu 1</Col>
                      <Col>Menu 2</Col>
                      <Col>Menu 3</Col>
                  </Row>
              </Col>
          </Row>
      </div>
    )
  }
}
