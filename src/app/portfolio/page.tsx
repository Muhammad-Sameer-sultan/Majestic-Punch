import Banner from '@/components/Banner'
import Porfolio from '@/components/Porfolio'
import Subcribe from '@/components/Subcribe'
import React from 'react'

const PortfolioPage = () => {
  return (
    <>
    <Banner title='portfolio' path='portfolio'  />
    <Porfolio bgshow={false} />
    <Subcribe />
    
    </>
  )
}

export default PortfolioPage