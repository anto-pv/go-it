import React from 'react';
import aimage from './svg/aboutimage.svg';
import shape from './svg/aboutshape.svg';
import smile from './svg/smile.svg';

const About = () => {
    return (
        <div id="aboutus">
            <img className="shape" src={shape} alt="pallete"/>
            <span className="about"> About Us</span>
            <img src={aimage} className="abimage" alt="img loading" />
            <img src={smile} className="smile" alt="smile face" /><p className="happy"> 75&nbsp;Happy&nbsp;Interns</p>
        </div>
    );
};
export default About;