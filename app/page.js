import HomePageProducts from '@/components/homepage/home-page-products'
import HomepageSection from '@/components/homepage/homepage-component-1'
import HomepageComponent2 from '@/components/homepage/homepage-component-2'
import Landing_Section from '@/components/homepage/homepage-heroSection'
import Slider_landing_page from '@/components/homepage/homepage-slider'
import ServiceSolutions from '@/components/listing_swipper'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div className="min-h-[100vh] relative bg-red-200 w-full">
      <Slider_landing_page />
        </div>
      
      <HomepageSection/>
      <HomepageComponent2/>
      <HomePageProducts/>
     
    </div>
  )
}

export default Homepage