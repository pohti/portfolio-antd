import React, { Component } from 'react'
import { Row, Col, Progress, Image, Tabs } from 'antd'
import {
  BgColorsOutlined,
  DatabaseOutlined,
  MenuOutlined
} from '@ant-design/icons'
import {
  front_end_skills,
  back_end_skills,
  other_skills
} from './skills_data'

import './Skills.css'

const { TabPane } = Tabs

export default class Skills extends Component {
  render() {
    return (
      <div className="main-skills-div">
        <Tabs defaultActiveKey='frontend'>
          <TabPane
            tab={<TabTitle icon={<BgColorsOutlined />} title="Front-end" />}
            key="frontend"
          >
            <SkillList data={front_end_skills} />
          </TabPane>

          <TabPane
            tab={<TabTitle icon={<DatabaseOutlined />} title="Back-end" />}
            key="backend"
          >
            <SkillList data={back_end_skills} />
          </TabPane>

          <TabPane
            tab={<TabTitle icon={<MenuOutlined />} title="Other Skills" />}
            key="others"
          >
            <OtherSkills data={other_skills} />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

const TabTitle = ({ icon, title }) => (
  <span>
    {icon}{title}
  </span>
)

const SkillList = ({ data }) => {
  const skill_list = data.map(({ skill_name, icon, rating, color }) => (

    <Row className="skill-and-progress-div" key={skill_name}>
      <Col span={24}>
        <div className="skill-label-div">
          {skill_name}
        </div>
      </Col>
      <Col span={24}>
        <Progress
          type="line"
          percent={rating}
          showInfo={false}
          strokeWidth={4}
          strokeLinecap="square"
          strokeColor={color ? color : "rgb(231, 119, 67)"}
        />
      </Col>
    </Row>
  ))
  return (
    <div>
      {skill_list}
    </div>
  )
}

const OtherSkills = ({ data }) => {

  if (!data) return null

  const IconList = data.map(({ skill_name, icon_url }) => {
    return (
      <Col span={6} className="other-skills-individual-container" key={skill_name}>
        <div className="other-skills-icon-container">
          <Image
            src={icon_url}
            preview={false}
            className="other-skills-icon"
          />
        </div>
        <div className="other-skills-label">
          <span>{skill_name}</span>
        </div>
      </Col>
    )
  })

  return (
    <Row gutter={[4, 16]} className="other-skills-main-div">
      {data && IconList}
    </Row>
  )
}