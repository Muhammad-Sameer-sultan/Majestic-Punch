import Banner from '@/components/Banner'
import Porfolio from '@/components/Porfolio'
import Pricing from '@/components/Pricing'
import Services from '@/components/Services'
import Subcribe from '@/components/Subcribe'
import React from 'react'

const ServicesPage = () => {
  return (
    <>
<Banner title='services' path='services' />
    <Services showbg={false} />
    <Pricing />
    <Porfolio />
    <Subcribe />
    </>
  )
}

export default ServicesPage