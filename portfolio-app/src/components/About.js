import React, { Component } from 'react';
import '../css/about.css';

class About extends Component {

    resume = (e) => {
        e.preventDefault();
        window.location = "/resume.pdf";
    }

    codechef = () => {
        window.location = "https://www.codechef.com/users/i_am_expert";
    }

    codeforces = () => {
        window.location = "https://codeforces.com/profile/rishabh_sethi";
    }

    leetcode = () => {
        window.location = "https://leetcode.com/rishabh_sethi/";
    }

    render() {
        return (
            <div className="container main-div" id="about" style={mainDivStyle}>
                <div style={{display: "flex"}}>
                    <h1>ABOUT</h1>
                    <div style={{alignSelf: "center", marginLeft: "45em"}}>
                        <button onClick={this.resume} className="top-about-btn hvr-underline-from-center" style={{marginRight: "1em"}}>RESUME</button>
                        <a href="#contact" className="top-about-btn hvr-underline-from-center">HIRE ME</a>
                    </div>
                </div>      
                <div>
                    <img src="images/profile_pic.jpg" alt="Profile Pic" />
                    <p className="about-content">I have completed B.Tech from NIT Kurukshetra in Information Technology (2016-20). I am currently working as a software engineer in Bharti Airtel, Gurgaon. I am quite interested in Competitive Programming and Web Development.</p>
                </div> 
                <br />
                <div className="about-wrapper">
                    <div>
                        <h4 style={{marginBottom: "0.8em"}}>CONVENIENT</h4>
                        <div className="about-details">
                            <p><i className="about-icon fa fa-user" aria-hidden="true" style={{marginRight: ".5em"}}></i>Rishabh Sethi</p>
                            <p><i className="about-icon fa fa-calendar" aria-hidden="true" style={{marginRight: ".5em"}}></i>27<sup>th</sup> August 1998</p>
                            <p><i className="about-icon fa fa-envelope" aria-hidden="true" style={{marginRight: ".5em"}}></i>rishabhsethi2708@gmail.com</p>
                            <p><i className="about-icon fa fa-map-marker" aria-hidden="true" style={{marginRight: "1em"}}></i>Jaipur, Rajasthan</p>
                            <p><i className="about-icon fa fa-phone" aria-hidden="true" style={{marginRight: ".7em"}}></i>8525114256</p>
                        </div>
                    </div>
                    <div>
                        <h4 style={{marginBottom: "0.8em"}}>CODING PLATFORMS</h4>
                        <div className="coding-details">
                            <p><span className="iconify" data-icon="simple-icons:codechef" data-inline="false" style={{marginRight: ".5em"}}></span><button type="button" onClick={this.codechef} className="code-btn btn btn-outline-secondary">Codechef</button></p>
                            <p><span className="iconify" data-icon="simple-icons:codeforces" data-inline="false" style={{marginRight: ".5em"}}></span><button type="button" onClick={this.codeforces} className="code-btn btn btn-outline-secondary">Codeforces</button></p>
                            <p><span className="iconify" data-icon="simple-icons:leetcode" data-inline="false" style={{marginRight: ".5em"}}></span><button type="button" onClick={this.leetcode} className="code-btn btn btn-outline-secondary">Leetcode</button></p>
                        </div>
                    </div>
                </div>      
                <div className="about-arrow arrow bounce">
                    <a href="#portfolio" className="fa fa-chevron-down fa-2x"> </a>
                </div>
            </div>
        )
    }
}

const mainDivStyle = {
    //marginTop: "2em",
    paddingTop: "2em",
    height: "100vh"
}

export default About
