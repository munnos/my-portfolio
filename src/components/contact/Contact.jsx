import React from 'react'
import './contact.css'
// import {TfiEmail} from 'react-icons/tfi';
// import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <div class="formContainer">
      <h1 id="header"> Contact Me</h1>
    <form action="https://formsubmit.co/munnos@hotmail.co.uk" method="POST">
     <input class="inputBox" type="text" name="name" placeholder="Your name" required></input>
     <input class="inputBox" type="email" name="email" placeholder="Email Address" required></input>
     <input class="inputBox" id="message" name="textarea" placeholder='Message' required></input>
     <button id="submitBtn" type="submit">Send</button>
</form>
</div>
  )
}

export default Contact


// <section id='contact'>
    //   <h5> Contact Me</h5>

    //   <div className="contactmeContainer">
    
    //   <article className="contactOption">
    //     <div className='styleIcon'>
    //     <TfiEmail/>
    //     </div>
    //     <h4> Email</h4>
    //     <a href="mailto:munnos@hotmail.co.uk">Email me</a>
    //   </article>

    
    //   <article className="contactOption">
    //   <div className='styleIcon'>
    //     <BsWhatsapp/>
    //     </div>  
    //     <h4> WhatsApp</h4>
    //     <a href="https://api.whatsapp.com/send?phone=07307955554">Message me</a>
    //   </article>
      


    //   </div>

    // </section>