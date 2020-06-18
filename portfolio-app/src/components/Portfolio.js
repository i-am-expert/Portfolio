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
                                title="Chat-App" 
                                desc="A chatting application where multiple clients can connect and talk in different rooms. Implemented using concepts of Socket Programming and Nodejs." 
                                projectURL="https://github.com/i-am-expert/Chat-App"
                                tags={[
                                    "Node.js",
                                    "Express.js",
                                    "Socket.io"
                                ]}
                            />
                            <Project 
                                title="Chat-App" 
                                desc="A chatting application where multiple clients can connect and talk in different rooms. Implemented using concepts of Socket Programming and Nodejs." 
                                projectURL="https://github.com/i-am-expert/Chat-App"
                                tags={[
                                    "Node.js",
                                    "Express.js",
                                    "Socket.io"
                                ]}
                            />
                            <Project 
                                title="Chat-App" 
                                desc="A chatting application." 
                                projectURL="https://github.com/i-am-expert/Chat-App"
                                tags={[
                                    "Node.js",
                                    "Express.js",
                                    "Socket.io"
                                ]}
                            />
                            <Project 
                                title="Chat-App" 
                                desc="A chatting application where multiple clients can connect and talk in different rooms. Implemented using concepts of Socket Programming and Nodejs." 
                                projectURL="https://github.com/i-am-expert/Chat-App"
                                tags={[
                                    "Node.js",
                                    "Express.js",
                                    "Socket.io"
                                ]}
                            />                                                                                    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
