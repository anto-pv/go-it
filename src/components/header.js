import React from 'react';
const Header = () => {
    return (
        <div id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height:"107px", width:"100%"}}>
            <div class="container-fluid">
                <a class="navbar-brand" id="logo" href="/">
                    <p><span className="go-">Go-</span><span className="i">i</span><span className="T">T</span></p>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width:"29.7%",marginLeft: "65.6%",display: "flex",flexDirection: "row",justifyContent: "center",alignItems: "center"}}>
                    <li className="nav-item">
                    <a className="nav-link" href="/"><span classname="heads">About US</span></a>
                    </li>
                    <li className="nav-item" style={{width:"700px",height:"40px",top:"49px"}}>
                    <a className="nav-link" href="/"><span classname="heads">Internship</span></a>
                    </li>
                    <li className="nav-item" style={{width:"700px",height:"40px",top:"49px"}}>
                    <a className="nav-link" href="/"><span classname="heads">Contact US</span></a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};
export default Header;