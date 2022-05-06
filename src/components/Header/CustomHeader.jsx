import React, { Component } from 'react'
import { Row, Col, Typography, Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

import './CustomHeader.css'

const { Text } = Typography

const menuItems = [
    { label: 'About', key: 'about' },
    { label: 'Skills', key: 'skills' },
    { label: 'Work', key: 'work' },
    { label: 'Education', key: 'education' },
]

export default class CustomHeader extends Component {
    handleMenuItemClick = ({key}) => {
        console.log("Menu item clicked", key)
    }

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
                            items={menuItems}
                            onClick={this.handleMenuItemClick}
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}
