import React, { Component } from 'react'
import {
  ReadOutlined,
  TrophyOutlined
} from '@ant-design/icons'
import {
  education_data,
  certificate_data
} from './data'
import './Education.css'
import { CustomTimeline } from '../common/Timeline'

export default class Education extends Component {
  render() {
    return (
      <div className="education-main-div">
        <CustomTimeline title="Education" icon={<ReadOutlined />} data={education_data}/>

        <CustomTimeline title="Certificates" icon={<TrophyOutlined />} data={certificate_data}/>
      </div>
    )
  }
}