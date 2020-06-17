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
                    <nav class="my-navbar navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container">
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav mr-auto">
                                </ul>
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <button class="nav-link myButt two">About</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link myButt two">Portfolio</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="nav-link myButt two">Contact</button>
                                    </li>
                                </ul>
                            </div>
                        </div>   
                    </nav>
                </div>
                <div className="centered" style={centerStyle}>
                    <h1 style={{fontSize: "3.5em"}}>Hi, I am Rishabh!</h1>
                    <div className="container text-content" style={{width: "100%"}}>
                        <p style={{width: "1000px"}}><span className="typed-text"></span><span className="cursor">&nbsp;</span></p>
                    </div>
                    <div>
                        <a href="#" class="hvr-icon-up" style={{color: "inherit", marginRight: "1rem"}}>
                            <i class="fa fa-4x fa-github hvr-icon" aria-hidden="true"></i>
                        </a>
                        <a href="#" class="hvr-icon-up" style={{color: "inherit", marginRight: "1rem"}}>
                            <i class="fa fa-4x fa-linkedin-square hvr-icon" aria-hidden="true"></i>
                        </a>
                        <a href="#" class="hvr-icon-up" style={{color: "inherit"}}>
                            <i class="fa fa-4x fa-instagram hvr-icon" aria-hidden="true"></i>
                        </a>
                    </div>
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
    color: "white",
    animation: "breath 4s linear infinite"
}

const centerStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white"
}

export default Intro;
