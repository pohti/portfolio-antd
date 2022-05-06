import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

export default class CustomHeader extends Component {
  render() {
    return (
      <div>
          <Row>
              <Col span={8}>
                <Row gutter={16}>
                    <Col><HomeOutlined /></Col>
                    <Col>
                        <span>Min Marn Oo</span>
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
