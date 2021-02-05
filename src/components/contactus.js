import React from 'react';
import phone from './svg/phone.svg';
import linkedin from './svg/linkedin.svg';
import mail from './svg/mail.svg';

const Contact = () => {
    return (
        <div id="contact">
            <span className="heading">Contact&nbsp;Us</span> 
            <div className="frame">
                <img src={mail} className="mail" alt="mail"/>goitinc@gmail.com
                <img src={linkedin} className="linkedin" alt="linkedin"/>goitinc
                <img src={phone} className="phone" alt="phone"/>9656987236
            </div>
        </div>
    );
};
export default Contact;