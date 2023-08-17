import React from 'react'
import './backend.css'
import {BsCardImage} from 'react-icons/bs'
import Holder from '../../Images/Image Placeholder.png'

const backend = () => {
  return (

    <section id = "backend">
      <div className="colorback">
    <h2 className='backendtext'>Backends</h2>

    <div className='container backend_container'>
    
    <div className='backend_content'>

    <article className='backend_details'>

       <BsCardImage className='backend_icon'/>
      
   <div>
    <h4>Eng.H</h4>
    <small className='text-light'>C.H.R.O</small>
    <p className='enghtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
   </div>
    
    </article>
      
    
    
    <article className='backend_details'>
    <div className='backendicon2'>
    <BsCardImage className='backend_icon'/>
    </div> 
   
<div>
 <h4>Eng.B</h4>
 
 <small className='text-light'>backend lead</small>
 
 <p className='enghtext'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

 </div>
  
 </article>
     


    </div>
</div>
    
    </div>
    
    </section>
  )
}

export default backend