import React from 'react';
import './progressbar.css'

const Progressbar = (props) => {
    return (
        <div className="single-progressbar"> 
        <p className="font-weight-light mb-2">{props.label}</p>  
        <div className="progress" style={{height:"10px"}}>
        <div className={`progress-bar ${props.className}`}  style={{width:`${props.skill}%` , height:"10px"}}></div>
         </div>
       </div>
    );
};

export default Progressbar;