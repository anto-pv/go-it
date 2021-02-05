import React from 'react';
const Header = () => {
    return (
        <div id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" id="logo" href="/">
                    <p><span className="go-">Go-</span><span className="i">i</span><span className="T">T</span></p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link">About US</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">Internship</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link">Contact US</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};
export default Header;