import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faSkype } from '@fortawesome/free-brands-svg-icons'
import info from '../../Utils/data'
import './contact.css'

const Contact = () => {
    return (
        <div className="row justify-content-between">
					
        <div className="col-md-4 col-lg-4 col-sm-12">
            <p className="lead"><FontAwesomeIcon icon={faQuoteLeft}/> I feel very honored that the Hawaiian spirits chose to contact me.</p>
            <img src={info.contact_image} className="img-fluid" alt="Responsive "/>
            <div className="w-20"></div>

            <dl>
                <dt>Phone Number:</dt>
                <dd className="small"><FontAwesomeIcon icon={faPhoneSquare} color='#007BFF'/> {info.phone}</dd>
                <dt>Email Number:</dt>
                <dd className="small"><FontAwesomeIcon icon={faEnvelope} color='#007BFF'/> {info.email}</dd>
                <dt> Skype Number: </dt>
                <dd className="small"><FontAwesomeIcon icon={faSkype} color='#007BFF'/> {info.skype}</dd> 
              </dl>   
        </div>
        
        <div className="col-md-7 col-lg-7 col-sm-12"> 
          
            <div className="contact-form"> 
             <h4 className="font-weight-light">Contact With Me </h4> 
                <form name="contact form" netlify> 
                    <p> <label for="name">Name</label><input type="text" name="name" placeholder="write your name" /></p>
                    <p> <label for="email">Email</label><input type="email" name="email" placeholder="write your email number" /></p>
                    <p> <label for="tel">Phone Number</label><input type="tel" name="tel" placeholder="write your phone number" /></p>
                    <p> <label for="mess">I would like to discuss</label><textarea name="mess"  cols="30" rows="10"></textarea></p>
                    <p> <input type="submit"  value="Send your message"/></p>
                </form> 
            </div>
        </div>
    </div>
    );
};

export default Contact;