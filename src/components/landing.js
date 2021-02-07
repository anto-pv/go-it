import React from 'react';
import mimage from './svg/mainimage.svg';
import ltext from './svg/landtext.svg';

const Landing = () => {
    return (
        <div id="landing">
            <div className="register">
            <img src={ltext} className="text" alt="text"/>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" className="btn">Register Now</a>
            </div>
            <img src={mimage} className="mimage" alt="main loading" />
        </div>
    );
};
export default Landing;