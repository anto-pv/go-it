import React from 'react';
import mimage from './svg/mainimage.svg';

const Landing = () => {
    return (
        <div id="landing">
            <p className="maintext">Get the right<br/>products to market,<br/>faster<br/>
            <span className="blacktext">
            Modern Manufacturing &amp;<br/>Inventive Design Internship</span><span className="small">
            <br/>Everyday carry direct trade post-ironic iPhone meggings godard
            actually food truck kale chips hexagon poutine.</span></p>
            <button className="btn">Register</button>
            <img src={mimage} className="mimage" alt="main loading" />
        </div>
    );
};
export default Landing;