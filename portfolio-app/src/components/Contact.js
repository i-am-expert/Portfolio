import React, { Component } from 'react';
import '../css/contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="container main-contact-div" id="contact">
                <div className="contact-text">
                    <h1 className="contact-heading"><strong>Get in Touch!</strong></h1>
                    <p className="first-line">Need anything built, want to work together or simply want to have a chat?</p>
                    <p className="second-line">Drop me an e-mail at <span className="hvr-underline-from-center">rishabhsethi2708@gmail.com</span> or simply fill out the form below and I will reply to you soon!</p>
                </div>                
                <form className="form contact-form" autoComplete="off">
                    <h2 className="contact-h2">CONTACT ME</h2>
                    <p className="contact-p" type="Name"><input placeholder="Write your name here.." spellCheck="false"></input></p>
                    <p className="contact-p" type="Email"><input placeholder="Let me know how to contact you back.." spellCheck="false"></input></p>
                    <p className="contact-p" type="Message"><input placeholder="What would you like to tell me.."></input></p>
                    <button className="contact-btn">Send Message</button>
                </form>
                <div className="contact-arrow arrow bounce">
                    <a href="#portfolio" className="fa fa-chevron-up fa-2x"> </a>
                </div>

            </div>
        )
    }
}

export default Contact;