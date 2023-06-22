import React from 'react'
import LandingMore from '../../LandingPage/LandingMore/LandingMore'
import LandingPage from '../../LandingPage/LandingPage'
import './Home.css'
const Home = () => {
  return (
    <div className='home-c'>
      <LandingPage></LandingPage>
      <LandingMore></LandingMore>
    </div>
  )
}

export default Home
