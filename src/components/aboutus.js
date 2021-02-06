import React from 'react';
import aimage from './svg/aboutimage.svg';
import shape from './svg/aboutshape.svg';

const About = () => {
    return (
        <div id="aboutus">
            <center className="about">About Us</center>
            <img src={aimage} className="abimage" alt="img loading" />
            <img className="shape" src={shape} alt="pallete"/>
        </div>
    );
};
export default About;