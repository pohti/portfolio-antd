import React, { Component } from 'react'
import {
  ToolOutlined
} from '@ant-design/icons'
import { work_data } from './work_data'
import './Work.css'
import { CustomTimeline } from '../common/Timeline'

export default class Work extends Component {
  render() {
    return (
      <div className="work-main-div">
        <CustomTimeline title="Work History" icon={<ToolOutlined />} data={work_data}/>
      </div>
    )
  }
}

