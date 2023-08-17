import React from 'react'
import './frontend.css'
import {BsCardImage} from 'react-icons/bs'

const frontend = () => {
  return (
    
    <section id = "frontend">
      <div className="color">
    <h2 className='frontendtext'>Frontends</h2>

    <div className='container Frontend_container'>
    
    <div className='frontend_content'>

    <article className='frontend_details'>

       <BsCardImage className='frontend_icon'/>
   <div>
    <h4>Eng.H</h4>
    <small className='text-light'>C.T.O</small>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   </div>
    
    </article>
      
    
    <div className='frontend_R'>
    <article className='frontend_details'>
    
   
<div className>
 <h4>Eng.R</h4>
 <small className='text-light'>frontend lead</small>
 <p></p>
</div>
<BsCardImage className='frontend_icon'/>
 </article>
     
 
 </div>
    </div>

    </div>
    </div>
    
    </section>
    
  )
}

export default frontend