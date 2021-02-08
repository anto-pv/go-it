import React from 'react';
import aimage from './svg/aboutimage.svg';

const About = () => {
    return (
        <div id="aboutus">
            <span className="about">About Us</span>
            <div className="img">
            <img src={aimage} className="abimage" alt="img loading" />
            <div className ="shape">We are a group of Engineers striving to provide Technical Training opportunities and to Promote those Technical and Practical Skills our Engineering Students need to land their Dream jobs and to prepare themselves for Industry 4.0
                <div className="row"><p><span className="tbold"> Afraid you don't have the expertise in the technical skills required for your dream job?<br/></span>
                Interact with our Experts working in Industries and learn with us to redesign yourselves with the latest Technologies.</p>
                <p><span className="tbold">Get Certified and Prepare yourself for Industry 4.0.<br/></span>
                We promote Project based learnings, whereby you can apply all what you learn with your friends or team and get Certified doing the same.</p>
                </div>
            </div>
            </div>
        </div>
    );
};
export default About;