import React from 'react'
import Header from './Components/Header'
import AnySkillFeatures from './Components/AnySkillFeatures'
import Statistics from './Components/Statistics'
import CourseSection from './Components/CourseSection'
import SkillsSection from './Components/SkillsSection'
import PricingSection from './Components/PricingSection'
import OurFeatures from './Components/OurFeatures'
import FaqSection from './Components/FaqSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <AnySkillFeatures />
      <Statistics />
      <CourseSection />
      <SkillsSection />
      <PricingSection />
      <OurFeatures />
      <FaqSection />
      <Footer />
    </div>
  )
}

export default App
