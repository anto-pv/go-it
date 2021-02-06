import React from 'react';
import bajaj from './svg/bajaj 1.png';
import bigd from './svg/big dizzire 1.png';
import conf from './svg/confident 1.png';
import fb from './svg/federal bank 1.png';
import honda from './svg/honda 1.png';

const Patner = () => {
    return (
        <div id="patner">
            <span className="heading">Patners</span>
            <div className="patner">
                <div className="column">
                <img src={bajaj} alt="bajaj"/>
                <img src={bigd} alt="bajaj"/>
                <img src={conf} alt="bajaj"/>
                <img src={fb} alt="bajaj"/>
                <img src={honda} alt="bajaj"/></div>
            </div> 
        </div>
    );
};
export default Patner;