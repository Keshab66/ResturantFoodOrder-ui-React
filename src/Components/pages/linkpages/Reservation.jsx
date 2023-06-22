 import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import reservation from '../../../Assets/images/reservation.svg'
import './Reservation.css'
const Reservation = () => {

  const handleSubmit =(e)=>{
  e.preventDefault()
  }
   const [userfirst,setUserFirst]=useState();
    const [userlast,setUserLast]=useState();
    const [email,setEmail]=useState();
    const [person,setPerson]=useState();
    const [date,setDate]=useState()
    const onChange=(e)=>{
       var newVal=e.target.value;
       setUserFirst(newVal)
    }

  const handleFormdata=(e)=>{
    e.preventDefault()
  }
  return (
    <div className='hero'>
    <h1 className='reserv-header' >Reserve A Table ! ! !</h1>
    <div className='reserv'>
      <img src={reservation} alt='reservation'></img>
    </div>
    <div id='glow'>
     <div className='triangle-glow'>

     </div>
    </div>
    <form className='form-container'>
      <div id='login-right'>
         <form  action="" method='post' onSubmit={handleFormdata}>
         <div className='login-items'>
         <input type="text" placeholder='Enter First Name' required  onChange={onChange} />
         <input type="text" placeholder='Enter Last Name' required />
          <input type="email" placeholder='Enter  Email' required/>
          <input type="number" placeholder='Enter nuber of Person ' required />
          <input type='datetime-local'  placeholder='Choose Time Slot' /> 
          <select className='select-option'>
          <option>Choose Table Type</option>
            <option>Corner table</option>
            <option>Window Facing</option>
            <option>Central table</option>
            <option>Any Availibilty</option>
          </select>
          
          
        <Link>Terms of use</Link> and <Link>Privacy policy</Link>
        <button type='submit' onClick={handleSubmit}>Submit</button>
          </div>
         </form>
          <div className='signup-link'>
            <Link >New to Vapour? Explore More</Link>
          </div>
      </div>
    </form>
    </div>
  )
}

export default Reservation
