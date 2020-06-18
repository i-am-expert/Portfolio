import React, { Component } from 'react';
import '../css/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer-div container text-center">
                <div>
                    <p style={{marginBottom: ".2em"}}><span>Designed & built by Rishabh Sethi</span></p>
                </div>
                <div className="footer-icons">
                    <a className="footer-icon-class hvr-grow" href="https://github.com/i-am-expert"><i className="footer-icon fa fa-github"></i></a>
                    <a className="footer-icon-class hvr-grow" href="https://www.linkedin.com/in/rishabh-sethi-2708/"><i className="footer-icon fa fa-linkedin"></i></a>
                    <a className="footer-icon-class hvr-grow" href="https://www.facebook.com/rishabh.sethi.79"><i className="footer-icon fa fa-facebook"></i></a>
                    <a className="footer-icon-class hvr-grow" href="https://www.instagram.com/rishabhsethi2708/"><i className="footer-icon fa fa-instagram"></i></a>
                </div>
            </div>
        )
    }
}

export default Footer;
