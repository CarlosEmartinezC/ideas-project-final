import './Contact.css';

import React, { useRef, useState } from 'react';

import Imagen from '../../recursos/contact1.png'
import emailjs from 'emailjs-com';



const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_1jmfh8n',
        'template_7oqg7vj',
        formRef.current,
        '3inYLJhelhH5DgS3k'
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
         <img src={Imagen} alt='imagen1'></img>
        <section id="contact">
          <h5>Ponerse en contacto</h5>
          <h5>
          Estamos aquí para escucharte.<br/>
           Tu mensaje es importante para nosotros y haremos todo lo posible por responder tan pronto como sea posible.<br/>
           Por favor, asegúrate de proporcionar un correo electrónico válido para que podamos ponernos en contacto contigo.<br/>
            ¡Gracias por ayudarnos a mejorar!
          </h5>
          <h2>Contáctanos</h2>
          <div className="container contact__container">
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nombre Completo"
                name="user_name"
                required
              />
              <input
                type="text"
                placeholder="Correo electrónico"
                name="user_email"
                required
              />
              <textarea
                placeholder="Mensaje"
                rows="7"
                name="message"
                required
              ></textarea>
              <button type="submit" className="btn btn">
                Enviar mensaje
              </button>
              {message && <span>gracias, por enviarnos tu mensaje<br/>
              Tu privacidad es esencial para nosotros.<br/>
               En Fundacion tejer ideas, utilizamos tu correo electrónico solo<br/>
                para los propósitos específicos que nos proporcionaste.<br/>
                 No vendemos ni compartimos tu información.<br/>
                 Siempre respetamos las regulaciones de privacidad y<br/>
                  te mantendremos informado si usamos tus datos para nuevos fines.</span>}
            </form>
          </div>
        </section>
        </div>
      );
    };
    
    export default Contact;