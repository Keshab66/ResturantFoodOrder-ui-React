import React from 'react'
import './LandingM.css'
import restroAB from '../../images/restroAB.jpg'
import restroCF from '../../images/restroCF.jpg'
import restroDS from '../../images/restroDS.jpg'
import { Link } from 'react-router-dom'
const LandingMore = () => {
  return (
    <div className='Landing-more'>
      <div id='restrocontetnt'>
      <div id='about-section' className='row'>
          <div id='about-img' className='column'>
           <img src={restroAB} alt='Restro-about'></img>
          </div>
          <div className='column'  id='about-text'>
          <h1 className='about-heading'>About Vapour</h1>
            <h2>
            At Vapour, we’re serving up more than Last year. In fact, Europe Famous La-cas-Plazo is one of our unexpected specialties. Reminiscent of butcher shops back in the day, each slow-smoked, sizzling prime chop measures seven-fingers high. Our signature recipe, that we have perfected for more than four decades, is rubbed with a secret blend of seasonings, cured and roasted on a rotisserie with pecan wood for up to six hours before it’s topped with Cheese signature herb-garlic butter, then carved tableside.
            </h2>
          </div>
      </div>
  
      <div id='about-section' className='row2'>
          <div  className='column2'>
           <img src={restroCF} alt='Restro-about' id='restroCF'></img>
           <img src={restroDS} alt='restroDish' id='restroDS'></img>
          </div>
          <div className='column2'  id='about-text'>
          <h1 className='about-heading2'>The Chef</h1>
            <h2>
            Passion for food has driven me to every nook and corner of the world. From becoming the youngest executive chef at a five star hotel, to hosting my own cooking shows, it is my love for cooking that has got this far. Through this Bistro, I intend to take you on a culinary journey, exploring new places, cultures and flavours. Let’s engage, exchange and evolve our skills and taste buds.
            </h2>
          </div>
      </div>
      </div>
      <hr id='top-hr'></hr>
      <h2 className='circle-bar-header'>YOUR'S POINT</h2>
      <div className='circle-bar'>
        <div className='circle' id='circle1'>
      <Link to='/Menu' className='bottom-routes'><h1>Our Menu</h1></Link>  
        </div>
        <div className='circle' id='circle2'>
       <Link to='/News' className='bottom-routes'> <h1>News</h1></Link>
        </div>
        <div className='circle' id='circle3'>
        <Link to='/Email' className='bottom-routes'><h1>Email Us</h1></Link>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}

export default LandingMore
