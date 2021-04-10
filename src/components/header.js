import React from 'react';
import logo from './svg/logo.svg';

const Header = () => {
    return (
        <div id="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" id="logo" href="/">
                    <img src={logo} alt="logo"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbarulc">
                    <li className="nav-item">
                    <a className="nav-link" href="/"><span className="heads">Home</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#aboutus"><span className="heads">About us</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/"><span className="heads">Workshops</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/interns"><span className="heads">Internships</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact"><span className="heads">Contact us</span></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};
export default Header;