import React, { Component } from 'react';
import '../css/portfolio.css';
import './Project';
import Project from './Project';

class Portfolio extends Component {
    render() {
        return (
            <div className="main-port-div">
                <div className="container">
                    <h1 className="port-heading">Portfolio</h1>
                    <div className="container">
                        <h1 className="port-sub-heading hvr-underline-from-center">Technical Skills</h1>
                        <div className="skill-div">
                            <span className="hvr-float-shadow">JavaScript</span>
                            <span className="hvr-float-shadow">Python</span>
                            <span className="hvr-float-shadow">Node.js</span>
                            <span className="hvr-float-shadow">React</span>
                            <span className="hvr-float-shadow">Express.js</span>
                        </div>
                        <div className="skill-div">
                            <span className="hvr-float-shadow">C++</span>
                            <span className="hvr-float-shadow">C</span>
                            <span className="hvr-float-shadow">Java</span>
                            <span className="hvr-float-shadow">HTML</span>
                            <span className="hvr-float-shadow">CSS</span>
                            <span className="hvr-float-shadow">MongoDB</span>
                            <span className="hvr-float-shadow">PHP</span>
                            <span className="hvr-float-shadow">MySQL</span>
                        </div>
                        <div className="skill-div">
                            <span className="hvr-float-shadow">Firebase</span>
                            <span className="hvr-float-shadow">Git</span>
                            <span className="hvr-float-shadow">Heroku</span>
                            <span className="hvr-float-shadow">Github</span>
                            <span className="hvr-float-shadow">VS Code</span>
                            <span className="hvr-float-shadow">Sublime</span>
                            <span className="hvr-float-shadow">DevC++</span>
                            <span className="hvr-float-shadow">Eclipse</span>
                        </div>
                    </div>
                    <div className="container">
                        <h1 className="port-sub-heading hvr-underline-from-center">Projects</h1>
                        <div className="projects-wrapper">
                            <Project 
                                title="Chat App" 
                                desc="A chatting application where multiple clients can connect and talk in different rooms. Implemented using concepts of Socket Programming and Nodejs." 
                                projectURL="https://github.com/i-am-expert/Chat-App"
                                tags={[
                                    "Node.js",
                                    "Express.js",
                                    "Socket.io"
                                ]}
                            />
                            <Project 
                                title="Fast Word" 
                                desc="A javascript application to test your typing speed. You can select the difficulty level and can also choose between word test and paragraph test." 
                                projectURL="https://github.com/i-am-expert/Fast-Word"
                                tags={[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "BootStrap"
                                ]}
                            />
                            <Project 
                                title="Blog App" 
                                desc="A MERN stack application where you can add, delete, view and edit blogs." 
                                projectURL="https://github.com/i-am-expert/Blog-App"
                                tags={[
                                    "MongoDB",
                                    "Express.js",
                                    "React",
                                    "Node.js"
                                ]}
                            />
                            <Project 
                                title="Brain Twister" 
                                desc="A quiz application, where you can select the number of questions, difficulty level and category. After completing the game, you can also view the correct answers. Developed using Javascript." 
                                projectURL="https://github.com/i-am-expert/Brain-Twister"
                                tags={[
                                    "HTML",
                                    "CSS",
                                    "JavaScript",
                                    "BootStrap"
                                ]}
                            />
                            <Project 
                                title="Fingerprint Liveness Detection" 
                                desc="A deep learning application to detect spoofed fingerprints. Convolutional Neural Network (CNN) is used to train the deep learning model."
                                projectURL="/"
                                tags={[
                                    "Python",
                                    "Deep Learning"
                                ]}
                            />
                            <Project 
                                title="Basic Programming Survey" 
                                desc="A MERN Stack application, where a user with valid email (Sending Verification Code) can submit his/her favorite programming language and can view overall results of already submitted responses (in the form of bar chart)."
                                projectURL="https://github.com/i-am-expert/Survey-App"
                                tags={[
                                    "MongoDB",
                                    "Express.js",
                                    "React",
                                    "Node.js"
                                ]}
                            />                                                                                     
                        </div>
                        <div className="more-projects text-center">
                            <a href="https://github.com/i-am-expert" className="more-btn btn hvr-float-shadow"><span className="more-text">Find More Projects</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
