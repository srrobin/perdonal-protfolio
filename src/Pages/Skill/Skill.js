import React from 'react';
import ProgressBar from '../../components/Progressbar/Progressbar';
import skillImage from '../../sobi/skills.jpg'
import BgImage from '../../sobi/bg4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons' 
import CollapseBtn from '../../components/Collapse/Collapse_Btn';

const Skill = () => {
    return (
	<>	
        <div className="row justify-content-between">
			<div className="col-md-5 col-lg-5 col-sm-12">
				<p className="lead"><FontAwesomeIcon icon={faQuoteLeft}/> When love and skill work together, expect a masterpiece.</p>
				<img src={skillImage} className="img-fluid" alt="Responsive image"/>
							
				<blockquote className="blockquote">
				<p className="mb-0 small">Soft skills get little respect but will make or break your career </p>
				<footer className="blockquote-footer">peggy klaus </footer>
				</blockquote>			
			</div>


            <div className="col-md-6 col-lg-6 col-sm-12">
				<ProgressBar label="HTML / CSS" skill="80"/>
				<ProgressBar label="Bootstrap 3/4" skill="70"/>
				<ProgressBar label="React Js" skill="30"/>
				<ProgressBar label="jQuery" skill="40"/>
				<ProgressBar label="Django" skill="70"/>
				<ProgressBar label="Rest Framework" skill="50"/>
				<ProgressBar label="MySQL / PostgreSQL" skill="70"/>
				<ProgressBar label="Git" skill="80"/>

				{/* <img src={BgImage} className="img-fluid" alt="Responsive image" width="150"/> */}
			</div>
        </div>
		<div className="second-area">
			<CollapseBtn label="Experience">
				<div className="experience-area">
					<p className="lead mb-1">FRONT END DEVELOPER</p>
					<ul>
						<li className="text-danger font-weight-bold">Hypertag Solution Ltd, Bangladesh</li>
						<li>Designed and developed templates for spring based app</li>
						<li>AngularJS Font-End Development</li>
						<li>Working with Json Data</li>
						<li>Jan/2015 –  Nov/2016</li> 
					</ul>
				</div>
			</CollapseBtn>
		</div>
	</>	
    );
};

export default Skill;