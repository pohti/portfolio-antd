import React, { Component } from 'react'
import { Timeline } from 'antd'
import {
  ReadOutlined,
  TrophyOutlined
} from '@ant-design/icons'
import {
  education_data,
  certificate_data
} from './data'
import './Education.css'

const { Item } = Timeline

export default class Education extends Component {
  render() {
    return (
      <div className="education-main-div">
        <div className="education-timeline-div">
          <div className="timeline-title-row">
            <div className="timeline-title-icon">
              <ReadOutlined />
            </div>
            <b>Education</b>
          </div>
          <Timeline className="education-timeline">
            <TimelineContentList data={education_data}/>
          </Timeline>
        </div>


        <div className="certificate-timeline-div">
          <div className="timeline-title-row">
            <div className="timeline-title-icon">
              <TrophyOutlined />
            </div>
            <b>Certificates</b>
          </div>
          <Timeline className="education-timeline">
            <TimelineContentList data={certificate_data}/>
          </Timeline>
        </div>
      </div>
    )
  }
}

const TimelineContentList = ({ data }) => {
  return data.map(({ date, title, subtitle }) => (
    <Item>
      <TimelineContent
        label={date}
        title={title}
        subtitle={subtitle}
      />
    </Item>
  ))
}


const TimelineContent = ({ label, title, subtitle }) => {
  return (
    <div className="timeline-content">
      <div className="timeline-label">
        <span>{label}</span>
      </div>
      <div className="timeline-item-title">
        <b>{title}</b>
      </div>
      <div className="timeline-item-subtitle">
        <span>{subtitle}</span>
      </div>
    </div>
  )
}