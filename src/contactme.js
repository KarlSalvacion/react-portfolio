import React, { useState } from 'react';
import './contactme.css';

const ContactMe = () => {

  return (
    <div id="contactMe" className="Contact">
        <div id="Contact" className="contacttexts">
            <h1 className="contacttitle">Contact Me</h1>
            <p className="contactdesc">You can contact me with this form below</p>
        </div>

        <form className="contact-form">
            <div className="FullName">
                <input type="text" className="form-control" id="inputName" placeholder="Full Name" required />
            </div>

            <div className="EmailAddress">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email Address" required />
            </div>

            <div className="MobileNum">
                <input type="tel" className="form-control" id="inputMobileNum" placeholder="Mobile Number" required />
            </div>

            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: 150 }} required />
                <label for="floatingTextarea">Message</label>
            </div>

            <div className="col-12">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  );
};


export default ContactMe;