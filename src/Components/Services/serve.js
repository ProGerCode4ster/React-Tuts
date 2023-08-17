import React from 'react'
import './serve.css'
import {BsCardImage} from 'react-icons/bs'

const serve = () => {

  return (
    <section className='services'>
    <h2>
     Our Services
    </h2>
    <div className='container service_container'>
    <div className='Website_Development'>
    
    <div className='services_content'>
  <article className='services_details'>

        <BsCardImage className='services_details_icon'/>
        <div>
           <h4 className='services_text'>Webdevelopment</h4>
        </div>
     
  </article>
     </div>

     </div>
      
      {/* End of Webdevelopment*/}

     <div className='Mobileapp_dev'>

     <div className='services_content'>

  <article className='services_details'>

     <BsCardImage className='services_details_icon'/>
     <div>
        <h4 className='services_text'>Mobile app dev</h4>
     </div>
  
  </article>

     </div>

     </div>

  {/* End of MobileAPPDEV*/}

     <div className='Blockchain'>

     <div className='services_content'>

  <article className='services_details'>

  <BsCardImage className='services_details_icon'/>
  <div>
     <h4 className='services_text'>Blockchain</h4>
  </div>

</article>

    </div>

    </div>
    
    </div>

    </section>
  )
}

export default serve