import React from 'react'
import Intro from '../LandingPage/LandingPage'
import About from '../About/About'
import Experience from '../Experience/Experience'
import SidebarPage from '../Sidebar/SidebarPage'

function HomePage() {
  return (
    <div className='homePage'>
        <Intro/>
        <About/>
        <Experience/>
        <SidebarPage/>
    </div>
  )
}

export default HomePage;