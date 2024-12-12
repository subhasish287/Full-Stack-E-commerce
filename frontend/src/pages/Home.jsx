import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections.jsx'
import BestCeller from '../components/BestCeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsLatterBox from '../components/NewsLatterBox.jsx'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestCeller/>
      <OurPolicy/>
      <NewsLatterBox/>
    </div>
  )
}

export default Home