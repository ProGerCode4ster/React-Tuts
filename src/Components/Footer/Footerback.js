import React from 'react'
import {BsFire} from 'react-icons/bs';
import './footer.css'
import {BsCardImage} from 'react-icons/bs'

const Footer = () => {
  return (
    <section>
    <div className="engx">
    <article className='footer_details'>
   
          <BsCardImage className='footer_icon'/>
      <div>
       <h3>Eng.X</h3>
       <small className='text-light'>Founder</small>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
       
       </article>
    </div>


    
    <div className='Footer_Container'>

    
     <div className='Footer_Text'>

       <h3>Design and engineering by 'Your pseudo'<BsFire className='Footer_icon'/> </h3>
     
     </div>

    </div>
    </section>
  )
}

export default Footer