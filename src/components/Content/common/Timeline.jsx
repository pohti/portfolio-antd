import React from 'react'
import { Timeline } from 'antd'

const { Item } = Timeline

export const CustomTimeline = ({ title, icon, data }) => (
  <div className="education-timeline-div">
    <div className="timeline-title-row">
      <div className="timeline-title-icon">
        {icon}
      </div>
      <b>{title}</b>
    </div>
    <Timeline className="education-timeline">
      <TimelineContentList data={data} />
    </Timeline>
  </div>
)

export const TimelineContentList = ({ data }) => {
  return data.map(({ date, title, subtitle }) => (
    <Item key={title}>
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