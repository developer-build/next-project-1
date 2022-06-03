
import React from 'react'
import Navbar from './component/AboutPages/Navbar'
import BottomFooter from './component/Footer/BottomFooter'
import Footer from './component/Footer/Footer'
import Hero from './component/HomePage/Hero'
import Management from './component/HomePage/Management'
import Person from './component/HomePage/Person'
import Reports from './component/HomePage/Reports'
import Research from './component/HomePage/research'
import Resources from './component/HomePage/Resources'
import Services from './component/HomePage/Services'

const index = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <Person/>
      <Services />
      <Research />
      <Reports />
      <Management />
      <Resources />
      <Footer/>
      <BottomFooter/>
    </div>

  )
}

export default index