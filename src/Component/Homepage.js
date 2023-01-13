import React from 'react'
import Navebar from './Navebar'
import Header from './Header'
import About from './About'
import Skill from './Skill'
import Project from './Project'
import Contact from './Contact'
import End from './End'


function HomePage() {
  return (
    <div>
      <Header/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    
    </div>
  )
}

export default HomePage
