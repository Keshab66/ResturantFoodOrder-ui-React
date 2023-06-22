import React from 'react'
import './Menu.css'
import { menudata } from '../../Data/Menu-data'
import { menudrinks } from '../../Data/Menu-Drinks'
const Menu = () => {
  
  return (
    <div>
    <h1 className='starter-heading'>Apetizer,Snacks & Starters:-</h1>
    <div className='restro-menu'>
     {
      menudata.map((a)=>{
        return (
         <div key={a.id} className="menu-box"> 
         <div><img src={a.image} className="menu-photo" alt="menu" /></div>
         <div className='menu-items'>
         <h2>{a.title}</h2>
         <h4>Price:{a.price}</h4>
         <h5>Description:{a.about}</h5>
         <h3>{a.tags}</h3>
         </div>
         <button className='menu-btn'>Order Now</button>
         </div>
        )
      })
     }
    </div>
    <h1 className='starter-heading'>Vapour Special Drinks:-ROM/Whiskey/Vodka</h1>
    <div className='restro-menu'>
     {
      menudrinks.map((a)=>{
        return (
         <div key={a.id} className="menu-box"> 
         <div><img src={a.image} className="menu-photo" alt="menu" /></div>
         <div className='menu-items'>
         <h2>{a.title}</h2>
         <h4>Price:{a.price}</h4>
         <h5>Description:{a.about}</h5>
         <h3>{a.tags}</h3>
         </div>
         <button className='menu-btn'>Order Now</button>
         </div>
        )
      })
     }
    </div>
    </div>
  )
}

export default Menu
