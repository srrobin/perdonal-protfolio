import React from 'react';
import './footer.css'
import info from '../../Utils/data'
import cvPdf from '../../pdf/robin-cv.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCog } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
    return (
        <div className="footer-area">
            <div className="row">
                <div className="col-6">
                    <div className="btn-area"> 
                        {Object.keys(info.socials).map(key=>(
                        <a href={info.socials[key].link} target='_blank' rel="noreferrer"><abbr title={info.socials[key].abbr}>{info.socials[key].icon}</abbr></a>
                        ))}
                    
                        
                    <FontAwesomeIcon className='ml-3' color={'#E15D44'} icon={faCog}  spin size="lg"/>
                    </div>
                </div>
                <div className="col-6">
                    <div className="btn-area">
                    <a href={cvPdf}  target='_blank' rel="noreferrer" className="btn btn-outline-primary btn-sm float-right active ">print my resume</a>
                    </div>	 
                </div>
            </div>
        </div>
    );
};

export default Footer;