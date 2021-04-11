import React from 'react';
import aim from './svg/johnny.jpg';
import imgs from './svg/mdm.png';

const Interns = () => (
        <div id="interns">
            <div id="even_detail">
            <div className="slides">
                <p className="heading">Modern Manufacturing &amp;Inventive Design Internship</p>
                    <div className="rows">
                        <div className="text"><p className="qot"><i>"Everything is designed. Few things are designed well."</i>— Brian Reed</p>
                            <ul>
                                <li>Online Virtual Internship</li>
                                <li>Training by Industry Experts</li>
                                <li>Project Based learning</li>
                                <li>Flexible Timing</li>
                                <li>Placment Offers</li>
                            </ul>
                            <div className="buttons">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" target="_blank" rel="noopener noreferrer" className="btn">Register Now</a>
                            </div>
                        </div>
                        <img src={imgs} alt ="mdm" />
                    </div>
                </div>
            </div>
            <div id="time_line">
            <ul className="upcomingEvents">
                <li id="eventHolder">  
                <div class="event-date-holder">
                    <span id="dateNumber">23</span>
                    <span id="dateDay">Jan</span>
                </div>
                <div class="event-details-holder">
                    <h1>Reg</h1>
                    <span id="eventDescription">last date ext</span>
                </div>
                </li>
                <li id="eventHolder">  
                <div class="event-date-holder">
                    <span id="dateNumber">23</span>
                    <span id="dateDay">Jan</span>
                </div>
                <div class="event-details-holder">
                    <h1>event</h1>
                    <span id="eventDescription">hands on</span>
                </div>
                </li>
            </ul>
            </div>
            <div id="speakers">
                <div className="container">
                <div className="apple">
                    <div className="col-lg-8">
                        <div className="title-centre">
                            <h2>Speakers</h2>
                        </div>
                    </div>
                </div>
                <div className="rowroot">
                    <div className="root">
                        <div>
                            <span><img src={aim} alt="pic"/></span>
                        </div>
                        <div className="details">
                            <ul>
                                <h4>Xavier</h4>
                                <p>
                                    Scientist,IBM
                                </p>
                            </ul>
                        </div>
                    </div>
                    <div className="root">
                        <div>
                            <span><img src={aim} alt="pic"/></span>
                        </div>
                        <div className="details">
                            <ul>
                                <h4>Xavier</h4>
                                <p>
                                    Scientist,IBM
                                </p>
                            </ul>
                        </div>
                    </div> 
                    <div className="root">
                        <div>
                            <span><img src={aim} alt="pic"/></span>
                        </div>
                        <div className="details">
                            <ul>
                                <h4>Xavier</h4>
                                <p>
                                    Scientist,IBM
                                </p>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
export default Interns;