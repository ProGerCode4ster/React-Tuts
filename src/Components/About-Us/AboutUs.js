import React from 'react'
import title from '../../Images/Banner.png'
import './AboutUs.css'
import Serve from '../Services/serve'
import Planspro from '../Plans/planspro'
import Footer from '../Footer/Footer';

const About_Us = () => {
  return (
 
    
    <div className='container banner_container'>
   
   
  
    <div className= 'Aboutus_banner_image'>
     <img src={title} alt='Banner'/>
    </div>
    
    <div className='Aboutus_banner_text'>
      <h3>Here is glimps into our <p>EXTRAordinary Team</p></h3>
    </div>

    <Serve/>
    <Planspro/>
    <Footer/>
    </div>
    
   
    
  )
}

export default About_Us