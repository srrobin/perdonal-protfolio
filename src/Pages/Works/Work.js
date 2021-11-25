import React from 'react';
import info from '../../Utils/data'
import './work.css'
import '../../App.css'

const Work = (props) => {
    return (
        <div className="main-contend-area">
            <div className="row ">
                <div className="col-md-12"> 
                    <div className="title">
                        <h4>{props.title}</h4>  
                    </div>
                </div>
            </div>
            <div className="row">
                {info.projectItem.map(sp =>(
					<div className="col-md-4 col-sm-6"> 
                        <div className="single-project-item"> 
                            <img  className="project-preview" src={sp.project_image} alt="project "/>
                            <h4>{sp.project_title}</h4>
                            <div className="project_link">
                                <a href={sp.live_demo_link} className="mr_20">live demo</a>
                                <a href={sp.github_link}>github code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;