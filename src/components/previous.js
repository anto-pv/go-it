import React from 'react';
import car from './svg/previousimg.svg';
import smile from './svg/smile.svg';

const Previous = () => (
        <div id="previous">
            <span className="heading">Previous</span>
            <div className="itext">
                <div className="textr">
                    <p className="f">Automotive Design - Internship</p>
                    <p className="s">In association with BMW Genius and Zindot Technologies.</p>
                    <p className="t">15 days of Certified Project based Internship introducing all intermediate concepts of Automotive Engineering, covering all aspects including Automotive Design, Manufacturing and Problem solving. Specially designed and undertaken by Experienced Engineers working in the industry to meet the requirements of any budding Automotive Engineer!</p>
                </div>
                <img src={car} className="car" alt="car"/>
            </div>
            <span className="feedback"><p><i>"Amazing Sessions. Loved working with my friends on the Project."</i> &nbsp;- Karthik Radhakrishnan</p>
            <p><i>"Student friendly Trainers and very informative interactions. Thank you Go iT."</i> &nbsp; - Alby Shajan</p>
            <p><i>"Well Worth the Time, Effort and Money"</i> &nbsp; - Vyshak Philip</p></span>
            <div className="interns"><img src={smile} id="smile" alt="smile"/>&nbsp;75 Happy Interns</div>
        </div>
    );
export default Previous;