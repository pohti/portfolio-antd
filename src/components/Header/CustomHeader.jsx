import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Typography, Drawer } from 'antd'
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
        selectedMenuKeys: [],
        innerWidth: null,
        innerHeight: null,
        drawerVisible: false,
    }

    resetMenuHighlight = () => {
        this.setState({ selectedMenuKeys: [] })
    }

    componentDidMount() {
        const path = extractPath()
        this.setState({ selectedMenuKeys: [path] })

        this.updateWindowDimensions()
        window.addEventListener("resize", this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }

    updateWindowDimensions = () => {
        this.setState({
            innerHeight: window.innerHeight,
            innerWidth: window.innerWidth
        })
        //console.log(this.state.innerHeight, this.state.innerWidth)
    }

    handleMenuItemClick = (key) => {
        this.setState({ selectedMenuKeys: [key] })
    }

    openDrawer = () => { this.setState({ drawerVisible: true }) }
    closeDrawer = () => { this.setState({ drawerVisible: false }) }

    BigHeaderMenu = () => {

        const MenuItems = menuItems.map(({ label, key }) => {
            const isSelected = this.state.selectedMenuKeys.includes(key)

            // console.log(key, isSelected)
            return (
                <Link to={`/${key}`} onClick={() => this.handleMenuItemClick(key)} key={key} className="header-menu-item"
                    style={{
                        color: isSelected && "#fff",
                        backgroundColor: isSelected && "rgba(231, 119, 67, 0.287)"
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

    SmallHeaderMenu = () => {
        return (
            <div className="header-menu-div">
                <div className="small-menu-icon-container"
                    onClick={this.openDrawer}
                >
                    <MenuOutlined />
                </div>
            </div>
        )
    }

    DrawerMenu = () => {
        const bgColor = "#1e3145"

        const MenuItems = menuItems.map(({ label, key }) => {
            const isSelected = this.state.selectedMenuKeys.includes(key)

            // console.log(key, isSelected)
            return (
                <Link to={`/${key}`} onClick={() => this.handleMenuItemClick(key)} key={key} className="drawer-menu-item"
                    style={{
                        color: isSelected && "#fff",
                        backgroundColor: isSelected && "rgba(223, 103, 47, 0.599)"
                    }}
                >
                    {label}
                </Link >
            )
        })

        return (
            <Drawer
                //title="Draw Menu"
                placement="right"
                visible={this.state.drawerVisible}
                onClose={this.closeDrawer}
                width={150}
                headerStyle={{ backgroundColor: bgColor }}
                drawerStyle={{ backgroundColor: bgColor }}
                bodyStyle={{
                    padding: 0,
                    paddingTop: "35px"
                }}
                closeIcon={null}
            >
                <div className="drawer-menu-div">
                    {MenuItems}
                </div>
            </Drawer>
        )
    }

    render() {
        const innerWidth = this.state.innerWidth
        const HeaderMenu = (innerWidth < 900) ? <this.SmallHeaderMenu /> : <this.BigHeaderMenu />


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
                <Col span={8} offset={8}>
                    {HeaderMenu}
                </Col>


                <this.DrawerMenu />

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
