import React from 'react';
import mimage from './svg/mainimage.svg';

const Landing = () => {
    return (
        <div id="landing">
            <div className="register">
            Learn the very Technical Skills redesigning the world!
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" className="btn">Request Workshops</a>
            </div>
            <img src={mimage} className="mimage" alt="main loading" />
        </div>
    );
};
export default Landing;