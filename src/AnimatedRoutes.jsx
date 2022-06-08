import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Home from './components/Content/Home/Home'
import About from './components/Content/About/About'
import Skills from './components/Content/Skills/Skills'
import Work from './components/Content/Work/Work'
import Education from './components/Content/Education/Education'
import './Transitions.css'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={300}
        classNames='fade'
        key={location.key}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Work />} />
          <Route path="education" element={<Education />} />
          {/* <Route path="resume" element={<Resume />} /> */}
        </Routes>
      </CSSTransition>
    </TransitionGroup>

  )
}

export default AnimatedRoutes