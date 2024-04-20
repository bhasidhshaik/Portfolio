import React from 'react';

function ContactMe() {
  return (
    <section className="contact-me" id="contact_me">
      <div className="contact-me-container">
        <div className="contact-me-heading">
          <h2>Send me a message!</h2>
          <h4>Got a question or proposal, or just want <br />to say hello? Go ahead.</h4>
        </div>
        <form action="https://formspree.io/f/xknldbll" method="post" className="contact-me-form">
          <div className="form-first-row">
            <div className="form-control">
              <input type="text" required="required" name="name" />
              <label>
                <span style={{ transitionDelay: '0ms' }}>E</span>
                <span style={{ transitionDelay: '50ms' }}>n</span>
                <span style={{ transitionDelay: '100ms' }}>t</span>
                <span style={{ transitionDelay: '150ms' }}>e</span>
                <span style={{ transitionDelay: '200ms' }}>r</span>
                <span style={{ transitionDelay: '250ms' }}> </span>
                <span style={{ transitionDelay: '300ms' }}>y</span>
                <span style={{ transitionDelay: '350ms' }}>o</span>
                <span style={{ transitionDelay: '400ms' }}>u</span>
                <span style={{ transitionDelay: '450ms' }}>r</span>
                <span style={{ transitionDelay: '500ms' }}> </span>
                <span style={{ transitionDelay: '550ms' }}>n</span>
                <span style={{ transitionDelay: '600ms' }}>a</span>
                <span style={{ transitionDelay: '650ms' }}>m</span>
                <span style={{ transitionDelay: '700ms' }}>e</span>
              </label>
            </div>
            <div className="form-control">
              <input type="email" required="required" name="email" />
              <label>
                <span style={{ transitionDelay: '0ms' }}>E</span>
                <span style={{ transitionDelay: '50ms' }}>n</span>
                <span style={{ transitionDelay: '100ms' }}>t</span>
                <span style={{ transitionDelay: '150ms' }}>e</span>
                <span style={{ transitionDelay: '200ms' }}>r</span>
                <span style={{ transitionDelay: '250ms' }}> </span>
                <span style={{ transitionDelay: '300ms' }}>y</span>
                <span style={{ transitionDelay: '350ms' }}>o</span>
                <span style={{ transitionDelay: '400ms' }}>u</span>
                <span style={{ transitionDelay: '450ms' }}>r</span>
                <span style={{ transitionDelay: '500ms' }}> </span>
                <span style={{ transitionDelay: '550ms' }}>E</span>
                <span style={{ transitionDelay: '600ms' }}>m</span>
                <span style={{ transitionDelay: '650ms' }}>a</span>
                <span style={{ transitionDelay: '700ms' }}>i</span>
                <span style={{ transitionDelay: '750ms' }}>l</span>
              </label>
            </div>
          </div>
          <div className="form-row2">
            <textarea name="message" id="contact-messege" cols="30" rows="10" placeholder="Enter your message here!"
              required minLength="20"></textarea>
          </div>
          <div className="form-submit-btn">
            <button type="submit">Send Message! <span>
              <svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow">
                <path fill="none" stroke="#fff" strokeWidth="2" strokeLinejoin="round"
                  d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"></path>
              </svg>
            </span></button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
