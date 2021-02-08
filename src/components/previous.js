import React, { useEffect, useState } from 'react';
import car from './svg/previousimg.svg';
import smile from './svg/smile.svg';

const Previous = () => {
    var k =1;
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    function reset() {
      setSeconds(0);
      setIsActive(false);
    }
    function toggle() {
        setIsActive(!isActive);
      }
    useEffect(() => {
      let interval = null;
      if(seconds<75){
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 100);
      } else {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [seconds]);
    window.addEventListener("scroll", function(event) {
        var offsets = document.getElementById('smile').getBoundingClientRect();
        var smiletop = offsets.top;
        if(smiletop>700){
            k=1;
            reset();
        }
        else if(smiletop<700 && k===1){
            k = 0;
            toggle();
        }
        else{
            k=0;
        }  
    }, false);
    return (
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
            <span className="feedback"><p>Amazing Sessions. Loved working with my friends on the Project." - Karthik Radhakrishnan</p>
            <p>"Student friendly Trainers and very informative interactions. Thank you Go iT." - Alby Shajan</p>
            <p>"Well Worth the Time, Effort and Money" - Vyshak Philip</p></span>
            <div className="interns"><img src={smile} id="smile" alt="smile"/>&nbsp;{seconds} Happy Interns</div>
        </div>
    );
};
export default Previous;