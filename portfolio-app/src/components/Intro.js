import React, { Component } from 'react';
import '../css/intro.css';

class Intro extends Component {
    componentDidMount() {
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArray = ["Web Developer!", "Competitive Programmer!", "Tech Enthusiast!"];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000; // Delay between current and next text
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } 
            else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            setTimeout(type, typingDelay + 1100);
        }
        }

        document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
            if(textArray.length) setTimeout(type, newTextDelay + 250);
        });
    }
    render() {
        return (
            <div className="mainDiv" style={mainDivStyle}>
                <div className="my-header">
                    <nav className="my-navbar navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav mr-auto">
                                </ul>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a href="#about" className="nav-link myButt two">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#portfolio" className="nav-link myButt two">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#contact" className="nav-link myButt two">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>   
                    </nav>
                </div>
                <div className="centered" style={centerStyle}>
                    <h1 style={{fontSize: "3.5em"}}>Hi, I am Rishabh!</h1>
                    <div className="container text-content" style={{width: "100%"}}>
                        <p className="myPara" style={{width: "1000px"}}><span className="typed-text"></span><span className="cursor">&nbsp;</span></p>
                    </div>
                    <div>
                        <a href="https://github.com/i-am-expert" className="hvr-icon-up" style={{color: "inherit", marginRight: "1.3rem"}}>
                            <i className="fa fa-4x fa-github hvr-icon" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/rishabh-sethi-2708/" className="hvr-icon-up" style={{color: "inherit", marginRight: "1.3rem"}}>
                            <i className="fa fa-4x fa-linkedin-square hvr-icon" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/rishabhsethi2708/" className="hvr-icon-up" style={{color: "inherit"}}>
                            <i className="fa fa-4x fa-instagram hvr-icon" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div className="intro-arrow arrow bounce">
                    <a href="#about" className="fa fa-chevron-down fa-2x"> </a>
                </div>
            </div>
        )
    }
}

const mainDivStyle = {
    backgroundImage: `url("/images/intro_back.jpg")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: "100vh",
    overflow: "auto",
    opacity: "85%",
    position: "relative",
    textAlign: "center",
    animation: "breath 4s linear infinite",
    backgroundColor: "#000",
    color: "#eee",
}

const centerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white"
}

export default Intro;
