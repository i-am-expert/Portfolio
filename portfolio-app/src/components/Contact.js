import React, { Component } from 'react';
import '../css/contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="container main-contact-div">
                <div className="contact-text">
                    <h1 className="contact-heading"><strong>Get in Touch!</strong></h1>
                    <p className="first-line">Need anything built, want to work together or simply want to have a chat?</p>
                    <p className="second-line">Drop me an e-mail at <span className="hvr-underline-from-center">rishabhsethi2708@gmail.com</span> or simply fill out the form below and I will reply to you soon!</p>
                </div>                
                <form class="form contact-form" autoComplete="off">
                    <h2 class="contact-h2">CONTACT ME</h2>
                    <p class="contact-p" type="Name"><input placeholder="Write your name here.." spellCheck="false"></input></p>
                    <p class="contact-p" type="Email"><input placeholder="Let me know how to contact you back.." spellCheck="false"></input></p>
                    <p class="contact-p" type="Message"><input placeholder="What would you like to tell me.."></input></p>
                    <button class="contact-btn">Send Message</button>
                </form>

            </div>
        )
    }
}

export default Contact;