import React from 'react';
import mimage from './svg/mainimage.svg';

const Landing = () => {
    return (
        <div id="landing">
            <p className="maintext">Learn the very Technical Skills redesigning the world!
            <span className="blacktext">
            Modern Manufacturing &amp;<br/>Inventive Design Internship</span><span className="small">
            <br/>Upcoming Training Programs Virtual internship</span></p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" className="btn">Register</a>
            <img src={mimage} className="mimage" alt="main loading" />
        </div>
    );
};
export default Landing;