import React from 'react';
import innfo from './svg/bajaj 1.jpg';
import bigd from './svg/patner2.svg';
import conf from './svg/confident 1.png';

const Patner = () => {
    return (
        <div id="patner">
            <div className="patner">
            <span className="heading">Partners</span>
                <div className="column">
                <img src={innfo} alt="bajaj"/>
                <img src={bigd} alt="bajaj"/>
                <img src={conf} alt="bajaj"/>
                </div>
            </div> 
        </div>
    );
};
export default Patner;