import React, { Component } from 'react'
import ResumePDF from './resume.pdf'

export default class Resume extends Component {
  render() {
    return (
      <embed src={ResumePDF} width="100%" height="1000px"></embed>
    )
  }
}
