import React from 'react'
import title from '../../Images/Banner.png'

const Banner = () => {
  return (
    <div className='container banner_container'>
   
    <div className= 'banner_image'>
     <img src={title} alt='Banner'/>
    </div>
    
    <div className='banner_text'>
      <h6>Hi, I am "Your Pseudo"</h6>
      <h3>I believe in myself and <p>there is not  website i cant build</p></h3>
    </div>
    
    </div>
  )
}

export default Banner