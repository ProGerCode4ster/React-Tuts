import React from 'react'
import title from '../../Images/Banner.png'
import './products.css'
import Frontend from '../Frontend/frontend'
import Backend from '../Backend/backend'
import Productfoot from '../Footer/Footerback'

const products = () => {
  return (
    <div className='container banner_container'>
   
    <div className= 'Product_banner_image'>
     <img src={title} alt='Banner'/>
    </div>
    
    <div className='Product_banner_text'>
      <h3> ...We also offer Software <p>_ Solution</p></h3>
    </div>
    
    <Frontend/>
    <Backend/>
    <Productfoot/>
    </div>
  )
}

export default products