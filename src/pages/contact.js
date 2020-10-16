import React from 'react';
import { cp, tele, wa, gmail } from '../assets'
const Contact = () => {
  return (
  <body className="contact">
    <div className="flex-row">
      <div >
        <img className="cp" alt="ContactPerson" src={cp} />
      </div>
      <div className="contactMe">
        <h3><font className="contactMi">Contact</font> Me</h3>
        <a href="https://t.me/MFaniRosiful"><img className="iconProf" alt="telegram" src={tele} /></a>
        <a href="mailto:fhaniee@gmail.com"><img className="iconProf" alt="gmail" src={gmail} /></a>
        <a href="https://wa.me/6285646016716"><img className="iconProf" alt="whatsapp" src={wa} /></a>
      </div>
    </div>
      

  </body>
    )
};

export default Contact;
