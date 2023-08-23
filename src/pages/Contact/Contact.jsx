import React from "react";
import './Contact.css'
import Header from '../../core/layouts/header-components'
import Footer from '../../core/layouts/footer-components'

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
        <></>
     
    );
  };
  
  export default Contact;