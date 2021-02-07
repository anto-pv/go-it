import React from 'react';
import car from './svg/previousimg.svg';
import smile from './svg/smile.svg';

const Previous = () => {
    return (
        <div id="previous">
            <center className="heading">Previous</center>
            <center>
            <img src={car} alt="car"/>
            <span className="feedback"><p>Amazing Sessions. Loved working with my friends on the Project." - Shibu</p>
            <p>"Student friendly Trainers and very informative interactions. Thank you Go iT." - AntoPeee</p>
            <p>"Well Worth the Time, Effort and Money" - Biju</p></span>
            <div className="interns"><img src={smile} alt="smile"/> 75 Happy Interns</div></center>
        </div>
    );
};
export default Previous;