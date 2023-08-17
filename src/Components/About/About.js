import React from 'react'

import Me from '../../Images/Wedding.png'

const About = () => {
  return (
    <div className=' about_container'>
    
    <div className='about_event'>
      <h1>We plan your Events</h1>
      Lorem ipsum dolor, sit amet consectetur adipisicing 
      elit. Quaerat animi nostrum excepturi nesciunt 
      fugit asperiores doloremque vitae quas a placeat,
       minima quibusdam voluptatum. Commodi at nostrum 
       odio unde vero esse. Lorem ipsum dolor sit amet 
       consectetur adipisicing elit. Unde veritatis quos 
       corrupti eos earum laudantium reiciendis eligendi 
       et, repellat nihil tempore aut nobis minima 
       ducimus quo laborum laboriosam obcaecati eius.
       <p><a href='/Learn'>Learn more about us</a></p>
    </div>
    
    <div className='about-image'>
   
       <img src={Me} alt='Wedding'/>
    </div>
    </div>
  )
}

export default About