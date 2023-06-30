import React from 'react';
import '../styles.css/contact.css';

const Contact = () => {
  return <section className='con'>
     <div className="container">
        <div className="contact-box">
          <div className="left" />
          <div className="right input_container">
            <form action="index.html" className="validation" id="validation">
              <div className="input-row">
                <input type="text" name="name" placeholder="Name*" required />
              </div>
              <div className="input-row">
                <input type="email" name="email" placeholder="Email*" required />
              </div>
              <div className="input-row">
                <input type="text" name="phone" placeholder="Phone*" required />
              </div>
              <div className="input-row">
                <input type="text" name="subject" placeholder="Subject*" required />
              </div>
              <div className="input-row">
                <textarea placeholder="Message*" name="formMessage" required defaultValue={""} />
              </div>
              <div className="text-center">
                <input type="submit" defaultValue="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

  </section>
}

export default Contact