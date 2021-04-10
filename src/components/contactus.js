import React from 'react';
import phone from './svg/phone.svg';
import linkedin from './svg/linkedin.svg';
import mail from './svg/mail.svg';

const Contact = () => {
    return (
        <div id="contact">
            <center className="heading">Contact&nbsp;Us</center> 
            <center className="frame">
            <div className="linkedin" ><img src={linkedin} alt="linkedin"/><a className="texts" href="https://linkedin.com">LinkedIn</a></div>
                <div className="mail" ><img src={mail} alt="mail"/><span className="texts">goitinternships@gmail.com</span></div>
                <div className="phone" ><img src={phone} alt="phone"/><span className="texts">+919745675937</span></div>
            </center>
        </div>
    );
};
export default Contact;