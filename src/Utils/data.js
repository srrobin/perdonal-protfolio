import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import {  faCog } from '@fortawesome/free-solid-svg-icons'


export default{ 
    name:' Sayam Rahman Robin',
    title:'frondend developer',
    birthday:'30 oct 1989',
    email:'srrobin07@gmail.com',
    phone: '018 27 57 87 68',
    job:' Freelancer',
    skype: 'srrobin07',
    profile_image:'images/1.png',
    contact_image:'images/bg2.png',
    button_down_icon:<FontAwesomeIcon icon={faCaretDown} />,
    projectItem:[
        {
         project_title:'Pet Hospital Application',
         live_demo_link:'www.facebook.com',
         github_link:'www.facebook.com',
         project_image:'images/pet2.jpg',
        },
        {
            project_title:'Pet Hospital Application',
            live_demo_link:'www.facebook.com',
            github_link:'https://github.com/srrobin/petclinic',
            project_image:'images/pet2.jpg',
        },
        {
            project_title:'Django Multi User',
            live_demo_link:'www.facebook.com',
            github_link:'https://github.com/srrobin/django-multi-user-app',
            project_image:'images/muser.jpg',
           },
           {
            project_title:'django Rest Framework',
            live_demo_link:'www.facebook.com',
            github_link:'https://github.com/srrobin/rest-framework-project',
            project_image:'images/drf.png',
           },

],
    education:[
            {
             ex_name:'ssc',
             group:'science',
             point:'4.94',
             pass_year:'2005',
             inst_name:'Laxmipur High school'
            },
            {
                ex_name:'hsc',
                group:'science',
                point:'4.10',
                pass_year:'2007',
                inst_name:'Muktaghacha college'
            },
            {
                ex_name:"honer's",
                group:'Mathametics',
                point:'2nd class',
                pass_year:'2015',
                inst_name:'NU(Dhaka College)'
               },

    ],
    socials:[
        {
            link:'https://www.facebook.com/srrobin07/',
            abbr:'facebook',
            icon:<FontAwesomeIcon icon={faFacebookSquare} size="lg" rotation={90}/> 
        },
        { 
            link:'www.facebook.com',
            abbr:'Twitter',
            icon:<FontAwesomeIcon icon={faTwitter} size="lg" rotation={90}/>
        },
        { 
            link:'www.facebook.com',
            abbr:'LinkedIn',
            icon:<FontAwesomeIcon icon={faLinkedin}  size="lg" rotation={90}/>
        },
        { 
            link:'www.facebook.com',
            abbr:' GitHub ',
            icon:<FontAwesomeIcon icon={faGithub} size="lg" rotation={90}/>
        },

    ],
    about_text_1:'Ever since I was a kid, I had a keen interest in Computer. I got my first computer at the age of 22 and I have been coding since then. I am doing my graduation in Mathematics,but I am eager to build a career in IT.' ,
    about_text_2:'I started my frontend career with bootstrap and then tried to improve it with React JS. I have taught myself some basic CS topics in the way as well. I have solved many problems in various online judges. For the last one year, I am focused on Python & Django .',
    about_text_3:'I have built a few apps using React JS & Django . Some of the other things that fascinate me are history, ethnology, languages, books, movies etc.',
}
