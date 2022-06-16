import React from 'react';

import './navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#top">Vineet Mankani</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#top">Home</a>
                        <a className="nav-link" href="#about">About</a>
                        <a className="nav-link" href="#skills">Skills</a>
                        <a className="nav-link" href="#projects">Projects</a>
                        <a className="nav-link" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar