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
                <div className="centered" style={centerStyle}>
                    <h1 style={{fontSize: "3.5em"}}>Hi, I am Rishabh!</h1>
                    <div className="container" style={{width: "100%"}}>
                        <p style={{width: "1000px"}}><span className="typed-text"></span><span className="cursor">&nbsp;</span></p>
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
