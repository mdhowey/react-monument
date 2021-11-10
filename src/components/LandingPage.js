import React from 'react'
import About from './About'
import Archive from './Archive'
import Footer from './Footer'
import Gallery from './Gallery'
import Header from './Header'
import Nav from './Nav'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Archive />
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}

export default LandingPage
