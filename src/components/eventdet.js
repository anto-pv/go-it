import React from 'react';
import imgs from './svg/mdm.png';

const Eventd = () => {
    return (
        <div id="event">
            <p className="heading">Modern Manufacturing &amp;
Inventive Design Internship</p>
            <div className="rows">
                <div className="text"><p className="qot">"Everything is designed. Few things are designed well."— Brian Reed</p>
                <ul>
                    <li>Online Virtual Internship</li>
                    <li>Training by Industry Experts</li>
                    <li>Project Based learning</li>
                    <li>Flexible Timing</li>
                    <li>3 CAD Softwares in 10 Days</li>
                </ul>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" className="btn">Register Now</a>
                </div>
                <img src={imgs} alt ="mdm" />
            </div>
        </div>
    );
};
export default Eventd;