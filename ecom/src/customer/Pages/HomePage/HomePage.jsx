import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCardCarousel from '../../components/HomeSectionCard/HomeSectionCardCarousel'
import { mens_kurta } from '../../../data/mens_kurta'

export const HomePage = () => {
  return (
    <div>
        <MainCarousel />
        <div className='py-10 space-y-10 px-5 lg:px-10 flex flex-col justify-center'> 
          <HomeSectionCardCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
          <HomeSectionCardCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
          <HomeSectionCardCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
          <HomeSectionCardCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
          <HomeSectionCardCarousel data={mens_kurta} SectionName={"Men's Kurta"} />
        </div>
    </div>
  )
}

export default HomePage