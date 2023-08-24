import React, { useRef, useState } from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [message, setMessage] = useState(false);
    const formRef = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
      emailjs
        .sendForm(
          'service_k2qawqh',
          'template_c6rkpn6',
          formRef.current,
          'X7K7ebhIeOy3YwHki'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
  
      e.target.reset();
    };
    return (
        <div className='Contact'>
        
      <section id="contact">
        <h5>Ponerse en contacto</h5>
        <h5>
       Recibo sus mensajes y responderé lo antes posible si se proporciona el correo electrónico válido 
        </h5>
        <h2>Contáctame</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>email</h4>
              <h4>tejer_ideas@gmail.com</h4>
              <a href="mailto:mekomerikomg@gmail.com">Send a message</a>
            </article>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message && <span>Thanks, I'll reply ASAP </span>}
          </form>
        </div>
      </section>
     
      </div>
     
    );
  };
  
  export default Contact;