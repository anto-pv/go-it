import React from 'react';
import logo from './svg/logo.svg';

const Header = () => {
    return (
        <div id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" id="logo" href="/">
                    <img src={logo} alt="logo"></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="ulc">
                    <li className="nav-item">
                    <a className="nav-link" href="#aboutus"><span classname="heads">About US</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/"><span classname="heads">Internship</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact"><span classname="heads">Contact US</span></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};
export default Header;