import React from 'react';
import imgs from './svg/mdm.png';
import img2 from './svg/Ai.png';
import img3 from './svg/bim2.jpg';

const Eventd = () => {
    return (
        <div id="event">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="5000">
                        <div className="slides">
                            <p className="heading">Modern Manufacturing &amp;Inventive Design Internship</p>
                            <div className="rows">
                                <div className="text"><p className="qot"><i>"Everything is designed. Few things are designed well."</i>— Brian Reed</p>
                                <ul>
                                    <li>Online Virtual Internship</li>
                                    <li>Training by Industry Experts</li>
                                    <li>Project Based learning</li>
                                    <li>Flexible Timing</li>
                                    <li>3 CAD Softwares in 10 Days</li>
                                </ul>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" className="btn">Register Now</a>
                                </div>
                                <img src={imgs} alt ="mdm" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                        <div className="slides">
                            <p className="heading"> Construction Technology: BIM</p>
                            <div className="rows">
                                <div className="text"><p className="qot"><i> “We shape our buildings; thereafter, they shape us.”</i> – Winston Churchill</p>
                                <ul>
                                    <li>Online Virtual Internship</li>
                                    <li>Training by Industry Experts</li>
                                    <li>Project Based learning</li>
                                    <li>Flexible Timing</li>
                                    <li>3 CAD Softwares in 10 Days</li>
                                </ul>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" className="btn">Register Now</a>
                                </div>
                                <img src={img3} alt ="img3" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="5000">
                    <div className="slides">
                        <p className="heading">AI and Modern Computer Science</p>
                        <div className="rows">
                            <div className="text"><p className="qot"><i>“As a technologist, I see how AI and the fourth industrial revolution will impact every aspect of people’s lives.”</i> – Fei-Fei Li</p>
                            <ul>
                                <li>Online Virtual Internship</li>
                                <li>Training by Industry Experts</li>
                                <li>Project Based learning</li>
                                <li>Flexible Timing</li>
                                <li>3 CAD Softwares in 10 Days</li>
                            </ul>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdHXwn-VPj6_dWlFl40KXVunNE7CIVkeTeJHS3dATuWPGxByw/viewform" className="btn">Register Now</a>
                            </div>
                        <img src={img2} alt ="img2" />
                         </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Eventd;