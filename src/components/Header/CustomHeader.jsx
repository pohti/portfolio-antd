import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography, Menu } from 'antd'
import { HomeOutlined, MenuOutlined } from '@ant-design/icons'

import './CustomHeader.css'

const { Text } = Typography

const menuItems = [
    { label: 'About', key: 'about' },
    { label: 'Skills', key: 'skills' },
    { label: 'Work', key: 'work' },
    { label: 'Education', key: 'education' }
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
        this.setState({ selectedMenuKeys: [] })
    }

    componentDidMount() {
        const path = extractPath()
        this.setState({ selectedMenuKeys: [path] })
    }

    handleMenuItemClick = (key) => {
        this.setState({ selectedMenuKeys: [key] })
    }

    HeaderMenu = () => {

        const MenuItems = menuItems.map(({ label, key }) => {
            const isSelected = this.state.selectedMenuKeys.includes(key)

            // console.log(key, isSelected)
            return (
                <Link to={`/${key}`} onClick={() => this.handleMenuItemClick(key)} key={key} className="header-menu-item"
                    style={{
                        color: isSelected && "#fff",
                        backgroundColor: isSelected && "rgb(231, 119, 67)"
                    }}
                >
                    {label}
                </Link >
            )
        })

        return (
            <div className="header-menu-div">
                {MenuItems}
            </div>
        )
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
                >
                    <this.HeaderMenu />
                </Col>
                {/* <Col span={3}>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="resume-link"
                    >
                        Resume
                    </a>
                </Col> */}
            </Row>
        )
    }
}

const extractPath = () => {
    let path_arr = window.location.href.split('/')
    let path = path_arr[path_arr.length - 1]
    return path
}
