
import React from 'react'
import Navbar from './component/AboutPages/Navbar'
import Hero from './component/HomePage/Hero'
import Management from './component/HomePage/Management'
import Reports from './component/HomePage/Reports'
import Research from './component/HomePage/research'
import Resources from './component/HomePage/Resources'
import Services from './component/HomePage/Services'

const index = () => {
  return (

    <div>
      <Navbar />
      <Hero />
      <Services />
      <Research />
      <Reports />
      <Management />
      <Resources/>

    </div>

  )
}

export default index