import React from 'react'


const Navbar = () => {
  return (
    <div className='container navbar_container'>
     <div className='navbar'>

     <a href='/' target='blank'>Home</a>
  
     <a href='/Products' target='blank'>Products</a>

     <a href='/About' target='blank'>About-Us</a> 
     
    <span className='contact'> <a href='/contact' target='blank' className='contact'>Contact-Us</a> </span>
    
    </div>
    </div>
    
  )
}

export default Navbar