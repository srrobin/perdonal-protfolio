import React, { useState } from 'react';
import info from '../../Utils/data'
import './work.css'
import '../../App.css'

const Work = () => {
    const[items,setItems] = useState(info.projectItem);
    
    const filterItem = (categItem)=>{
          const updatesItem = info.projectItem.filter((currentItem) =>{ 
               return  currentItem.type === categItem;
           })
           setItems(updatesItem);
    } 

    return (
        <div className="main-contend-area">
            <div className="row ">
                <div className="col-md-12"> 
                    <div className="title">
                        <h5 className='active' onClick={() => setItems(info.projectItem)}>All</h5>
                        
                        <h5 className='active' onClick={() => filterItem('react')}>React</h5> 
                        <h5 className='active' onClick={() => filterItem('static')}>Static</h5>
                        <h5 className='active' onClick={() => filterItem('drf')}>DRF</h5>    
                    </div>
                </div>
            </div>
            <div className="row">
                {items.map(item =>(
					<div className="col-md-4 col-sm-6" key={item.project_title}> 
                        <div className="single-project-item"> 
                        <small className='text-danger em'>{item.type}</small>
                            <img  className="project-preview" src={item.project_image} alt="project "/>
                            <h4>{item.project_title}</h4>
                            <div className="project_link">
                                <a href={item.live_demo_link} className="mr_20" target='_blank' rel="noreferrer">live demo</a>
                                <a href={item.github_link} target='_blank' rel="noreferrer">github code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;