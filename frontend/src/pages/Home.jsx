import React, { useContext } from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollections.jsx'
import BestCeller from '../components/BestCeller.jsx'
import OurPolicy from '../components/OurPolicy.jsx'
import NewsLatterBox from '../components/NewsLatterBox.jsx'
import { ShopContext } from '../context/ShopContext.jsx'
import Login from './Login.jsx'

function Home() {
  const{showSearch,navigate,token}=useContext(ShopContext)
    if(showSearch){
      navigate("/collections")
    }
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestCeller/>
      <OurPolicy/>
      {/* <NewsLatterBox/> */}
      {!token && <Login/>}
      
    </div>
  )
}

export default Home