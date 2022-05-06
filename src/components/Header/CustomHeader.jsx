import React, { Component } from 'react'
import { Row, Col, Typography, Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

import './CustomHeader.css'

const { Text } = Typography
const { Item } = Menu

export default class CustomHeader extends Component {
    render() {
        return (
            <div>
                <Row className="header-row">
                    <Col span={8}>
                        <Row gutter={16} className="header-icon-container">
                            <Col >
                                <HomeOutlined className="header-icon" />
                            </Col>
                            <Col>
                                <Text className="header-icon-text">Username</Text>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={16}>
                        <Menu
                            mode="horizontal"
                            className="header-menu"
                        >
                            <Item>Item 1</Item>
                            <Item>Item 2</Item>
                            <Item>Item 3</Item>
                        </Menu>
                    </Col>
                </Row>
            </div>
        )
    }
}
