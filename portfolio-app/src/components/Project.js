import React, { Component } from 'react';
import '../css/project.css';

class Project extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-head">
                    <i class="folder-icon fa fa-folder-open-o" aria-hidden="true"></i>
                    <a href={this.props.projectURL}>
                        <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="project-title">
                    <h5>{this.props.title}</h5>
                </div>
                <div class="project-desc">
                    <p>{this.props.desc}</p>
                </div>
                <div class="project-tags text-muted">
                    {
                        this.props.tags.map((tag) => {
                            return <span class="single-tag">{tag}</span>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Project;
