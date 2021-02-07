import React from 'react';
import bajaj from './svg/bajaj 1.png';
import bigd from './svg/patner2.svg';
import conf from './svg/confident 1.png';

const Patner = () => {
    return (
        <div id="patner">
            <center className="heading">Patners</center>
            <div className="patner">
                <center className="column">
                <img src={bajaj} alt="bajaj"/>
                <img src={bigd} alt="bajaj"/>
                <img src={conf} alt="bajaj"/>
                </center>
            </div> 
        </div>
    );
};
export default Patner;