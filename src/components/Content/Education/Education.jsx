import React, { Component } from 'react'
import { Timeline } from 'antd'
import './Education.css'

const { Item } = Timeline

export default class Education extends Component {
  render() {
    return (
      <div>
        <div className="education-main-div">
          <div style={{ fontSize: "140%" }}>
            <b>Education</b>
          </div>
          <Timeline className="education-timeline">
            <Item>
              <TimelineContent
                label="Apr 2017 - Sep 2020"
                title="Bachelor of Computing, Information Technology"
                subtitle="University of Wollongong (SIM)"
              />
            </Item>
            <Item>
              <TimelineContent
                label="Apr 2012 - Mar 2015"
                title="Diploma in Electrical and Electronic Engineering"
                subtitle="Singapore Polytechnic"
              />
            </Item>
            {/* <Item dot={<div/>}></Item> */}
          </Timeline>
        </div>


        <div className="education-main-div">
          <div style={{ fontSize: "140%" }}>
            <b>Certificates</b>
          </div>
          <Timeline className="education-timeline">
            <Item style={{ minHeight: "100px" }}>
              <TimelineContent
                label="Nov 2021"
                title="AWS Certified: Solutions Architect - Associate"
              />
            </Item>
            <Item>
              <TimelineContent
                label="Feb 2021"
                title="Microsoft Certified: Azure Fundamentals"
              />
            </Item>
          </Timeline>
        </div>
      </div>
    )
  }
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