import React from 'react';
import info from '../../Utils/data'

const StaticDemo = () => {
    return (
        <div className="row">
        {info.projectItem.map(sp =>(
            <div className="col-md-4 col-sm-6"> 
                <div className="single-project-item"> 
                    <img  className="project-preview" src={sp.project_image} alt="project "/>
                    <h4>{sp.project_title}</h4>
                    <div className="project_link">
                        <a href={sp.live_demo_link} className="mr_20" target='_blank' rel="noreferrer">live demo</a>
                        <a href={sp.github_link} target='_blank' rel="noreferrer">github code</a>
                    </div>
                </div>
            </div>
        ))}
    </div>
    );
};

export default StaticDemo;