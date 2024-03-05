import React from 'react'
import Details from './detail'
import FormSectionConsultancy from './form'
 
 
const MainSection = () => {
  return (
    <div className='app-layout flex flex-col min-[1100px]:flex-row   items-start justify-between py-[7.5rem]'>
        <Details/>
        <FormSectionConsultancy/>
    </div>
  )
}

export default MainSection