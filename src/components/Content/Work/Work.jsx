import React, { Component } from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs

export default class Work extends Component {
  render() {
    return (
      <Tabs>
        <TabPane tab={"ASDFASDFSDFSDF"} key="1">asdf</TabPane>
        <TabPane tab={"ASDFASDFSDFSDF"} key="2">asdf</TabPane>
        <TabPane tab={"ASDFASDFSDFSDF"} key="3">asdf</TabPane>
      </Tabs>
    )
  }
}
