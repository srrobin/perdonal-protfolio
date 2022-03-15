import React from 'react';
import './header.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <div className="mainmenu-area">
        <div className="row justify-content-end">
            <div className="col-md-10 col-lg-10 col-sm-12">
                <div className="mainmenu">
                    <ul id="navigation">
                        <li><NavLink  to="/" className={(navInfo) => (navInfo.isActive ? 'active':'')}>about</NavLink></li> 
                        <li><NavLink  to="/skill" className={(navInfo) => (navInfo.isActive ? 'active':'')}>skill</NavLink></li>
                        <li><NavLink  to="/works" className={(navInfo) => (navInfo.isActive ? 'active':'')}>works</NavLink></li> 
                        <li><NavLink  to="/contact" className={(navInfo) => (navInfo.isActive ? 'active':'')}>contact</NavLink></li> 
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Header;
