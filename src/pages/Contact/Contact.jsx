import React from "react";
import './Contact.css'
import Header from '../../core/layouts/header-components'
import Footer from '../../core/layouts/footer-components'
import { MdOutlineEmail } from 'react-icons/md';

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
        <Header/>
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
              <h4>Email</h4>
              <h5>tejer_ideas@gmail.com</h5>
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
      <Footer/>
      </div>
     
    );
  };
  
  export default Contact;