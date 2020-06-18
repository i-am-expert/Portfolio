import React, { Component } from 'react';
import '../css/project.css';

class Project extends Component {
    render() {
        return (
            <div className="card hvr-float">
                <div className="card-head">
                    <i className="folder-icon fa fa-folder-open-o" aria-hidden="true"></i>
                    <a href={this.props.projectURL}>
                        <i className="github-icon fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="project-title">
                    <h5 style={{fontSize: "1.5em"}}>{this.props.title}</h5>
                </div>
                <div className="project-desc">
                    <p style={{fontSize: "1.1em", opacity: "70%"}}>{this.props.desc}</p>
                </div>
                <div className="project-tags text-muted">
                    {
                        this.props.tags.map((tag) => {
                            return <span key={tag} className="single-tag">{tag}</span>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Project;
