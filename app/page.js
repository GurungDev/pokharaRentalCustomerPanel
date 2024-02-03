import ConnectCompany from '@/components/connectBanner'
import HomePageProducts from '@/components/homepage/home-page-products'
import HomepageSection from '@/components/homepage/homepage-component-1'
import HomepageComponent2 from '@/components/homepage/homepage-component-2'
import Slider_landing_page from '@/components/homepage/homepage-slider'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <div className="min-h-[100vh] relative  w-full">
      <Slider_landing_page />
        </div>
        <HomePageProducts/>
        <HomepageComponent2/>
      <HomepageSection/>
    </div>
  )
}

export default Homepage