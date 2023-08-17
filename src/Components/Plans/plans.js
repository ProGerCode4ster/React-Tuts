import React from 'react'
import Cake from '../../Images/Birthdays 🎂.png'
import Ring from '../../Images/Weddings 💍.png'
import Coffen from '../../Images/Berials⚱️.png'
import offers from '../../Images/🎊 offers.png'
import advantages from '../../Images/🎊 advantages.png'
import Berial from '../../Images/Berial.png'
import Ringwed from'../../Images/💍 offers.png'
import money1 from '../../Images/150,000 Frs.png'
import money3 from '../../Images/650,000 Frs.png'
import money2 from '../../Images/450,000 Frs.png'

import './plans.css';


const plans = () => {
  return (
  
    <section id='plans'>
    <div className="color">
    <h2 className='planstext'>Our Plans</h2>
      <div className='container plans_container'>
      <div className='Plans_birthday'>
      <h3>
       <img src={Cake} target='cake' className="Plans-icons"/>
      </h3>
 
        <div className='plans_content'>
         
        <article className='plans_details'>
          
             <div>
              <h4>  <img src={offers} target='offers'  className="Plans-icons"/></h4>
             </div>
         </article>

         <article className='plans_details'>
         
          <div>
           <h4> <img src={advantages} target='advantages'  className="Plans-icons"/></h4>
          </div>
      </article>

      <article className='plans_details'>
     
       <div>
        <h4> <img src={offers} target='offers'  className="Plans-icons"/></h4>
       </div>
   </article>

   <article className='plans_details'>
   
    <div>
     <h4> <img src={offers} target='offers'  className="Plans-icons"/></h4>
    </div>
 
</article>
<img src={money1} />

        
         </div>
         </div>
      

      {/*END OF Birthday Plans*/}
    

  <div className='plans_weddings'>
   <h3>  <img src={Ring} target='cake' className="Plans-icons"/></h3>
   
  <div className='plans content'>

   <article className='plans_details'>

    <div>
    <h4> <img src={Ringwed} target='offers'  className="Plans-icons"/></h4>
    </div>
   </article>

   <article className='plans_details'>

    <div>
    <h4><img src={Ringwed} target='offers'  className="Plans-icons"/></h4>
    </div>
   </article>

   <article className='plans_details'>
    
    <div>
    <h4><img src={Ringwed} target='offers'  className="Plans-icons"/></h4>
    </div>
   </article>

   <article className='plans_details'>
 
    <div>
    <h4><img src={Ringwed} target='offers'  className="Plans-icons"/></h4>
    </div>
   </article>
 <img src={money2} />
</div>
</div>

{/*End of Wedding Plan*/}


<div className='plans_Berial'>
<h3> <img src={Coffen} target='cake' className="Plans-icons"/></h3>


<div className='plans content'>
<article className='plans_details'>

<div>
<h4><img src={Berial} target='offers'  className="Plans-icons"/></h4>
</div>
</article>

<article className='plans_details'>

<div>
<h4><img src={Berial} target='offers'  className="Plans-icons"/></h4>
</div>
</article>

<article className='plans_details'>

<div>
<h4><img src={Berial} target='offers'  className="Plans-icons"/></h4>
</div>
</article>

<article className='plans_details'>

<div>
<h4><img src={Berial} target='offers'  className="Plans-icons"/></h4>
</div>
</article>
</div>
<img src={money3} />
</div>
</div>
</div>
  
    </section>
    
   
  ) 
}

export default plans
