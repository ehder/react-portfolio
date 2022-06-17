import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com' 

const email = "mailto:ehderlel@gmail.com";
const messenger = "https://m.me/ehdarler";
const whatsapp = "https://web.whatsapp.com/send?phone+959799623994";

const Contact = () => {


const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_6s7a55x', 'template_e1bhq4w', form.current, 'xoDl_9sgvK4QSGM-m') 
  e.target.reset();
};


  
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        
        <div className="contact__options">
          
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ehderlel@gmail.com</h5>
            <a href={email}>Send a message</a>
          </article>

          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Saw Eh Dar Ler</h5>
            <a href={messenger}>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>Saw Eh Dar Ler</h5>
            <a href={whatsapp}>Send a message</a>
          </article>

        </div>
        
        {/* =============== FORM ============== */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name ='email' placeholder='Your Email'/>
          <textarea name='message' id='' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>

    </section>
  )
}

export default Contact

// for sending email directly from webpage we use EmailJs: https://www.emailjs.com/
//npm install emailjs-com --save

