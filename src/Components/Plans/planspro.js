import React from 'react'
import {PiConfettiDuotone} from "react-icons/pi";
import {GiPowerRing} from "react-icons/gi";
import {GiRuneStone} from "react-icons/gi";
import blockchain from '../../Images/⛓ service.png'
import service from'../../Images/_ service.png'
import mobile from'../../Images/mobile.png'
import money1 from '../../Images/150,000 Frs.png'
import money3 from '../../Images/650,000 Frs.png'
import money2 from '../../Images/450,000 Frs.png'



import './plans.css';


const plans = () => {
  return (
  
    <section className='plans'>
    <div className="color">
    <h2 className='planstext'>Our Plans</h2>
      <div className='container plans_container'>
      <div className='Plans_birthday'>
      <h3>
        Website
      </h3>
 
        <div className='plans_content'>
         
        <article className='plans_details'>
           
             <div>
              <h4> <img src={service} target='cake' className="Plans-icons"/></h4>
             </div>
         </article>

         <article className='plans_details'>
         
          <div>
           <h4><img src={service} target='cake' className="Plans-icons"/></h4>
          </div>
      </article>

      <article className='plans_details'>
     
       <div>
        <h4><img src={service} target='cake' className="Plans-icons"/></h4>
       </div>
   </article>

   <article className='plans_details'>
   
    <div>
     <h4><img src={service} target='cake' className="Plans-icons"/></h4>
    </div>
 
</article>
<img src={money1} />

        
         </div>
         </div>
      

      {/*END OF Birthday Plans*/}
    

  <div className='plans_weddings'>
   <h3>Blockchain</h3>
   
  <div className='plans content'>

   <article className='plans_details'>
    
    <div>
    <h4><img src={blockchain} target='cake' className="Plans-icons"/></h4>
    </div>
   </article>

   <article className='plans_details'>
   
    <div>
    <h4><img src={blockchain} target='cake' className="Plans-icons"/></h4>
    </div>
   </article>

   <article className='plans_details'>

    <div>
    <h4><img src={blockchain} target='cake' className="Plans-icons"/></h4>
    </div>
   </article>

   <article className='plans_details'>
   
    <div>
    <h4><img src={blockchain} target='cake' className="Plans-icons"/></h4>
    </div>
   </article>
   <img src={money2} />
</div>
</div>

{/*End of Wedding Plan*/}


<div className='plans_Berial'>
<h3>mobile dev</h3>


<div className='plans content'>
<article className='plans_details'>

<div>
<h4><img src={mobile} target='cake' className="Plans-icons"/></h4>
</div>
</article>

<article className='plans_details'>

<div>
<h4><img src={mobile} target='cake' className="Plans-icons"/></h4>
</div>
</article>

<article className='plans_details'>

<div>
<h4><img src={mobile} target='cake' className="Plans-icons"/></h4>
</div>
</article>

<article className='plans_details'>

<div>
<h4><img src={mobile} target='cake' className="Plans-icons"/></h4>
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
