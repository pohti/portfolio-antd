import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography, Menu } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

import './CustomHeader.css'

const { Text } = Typography

const menuItems = [
    { label: <Link to="/about">About</Link>, key: 'about' },
    { label: <Link to="/skills">Skills</Link>, key: 'skills' },
    { label: <Link to="/work">Work</Link>, key: 'work' },
    { label: <Link to="/education">Education</Link>, key: 'education' },
]

export default class CustomHeader extends Component {

    state = {
        selectedMenuKeys: []
    }

    handleMenuItemClick = ({ key }) => {
        // console.log("Menu item clicked", key)
        this.setState({ selectedMenuKeys: [key] })
    }

    resetMenuHighlight = () => {
        this.setState({ selectedMenuKeys: ['about'] })
    }

    componentDidMount() {
        const path = extractPath()
        this.setState({ selectedMenuKeys: [path] })
    }

    render() {
        return (
            <Row className="header-row">
                {/* Icon and Username */}
                <Col span={8} className="header-icon-container">
                    <Row gutter={16}>
                        <Col>
                            <Link to="/" onClick={this.resetMenuHighlight}><HomeOutlined className="header-icon" /></Link>
                        </Col>
                        <Col>
                            <Link to="/" onClick={this.resetMenuHighlight}><Text className="header-icon-text">Min</Text></Link>
                        </Col>
                    </Row>
                </Col>

                {/* Header Menu */}
                <Col 
                    xs={{ span: 4, offset: 12 }}
                    sm={{ span: 4, offset: 12 }}
                    md={{ span: 12, offset: 4 }}
                    className="header-menu-container"
                >
                    <Menu
                        mode="horizontal"
                        className="header-menu"
                        items={menuItems}
                        onClick={this.handleMenuItemClick}
                        selectedKeys={this.state.selectedMenuKeys}
                    />
                </Col>
            </Row>
        )
    }
}

const extractPath = () => {
    let path_arr = window.location.href.split('/')
    let path = path_arr[path_arr.length - 1]
    return path
}