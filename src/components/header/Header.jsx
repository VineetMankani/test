import React from 'react';

import CTA from './CTA'
import Socials from './Socials'
import './header.css';

import ME from '../../assets/me.jpg'

const Header = () => {
    return (
        <header className="text-center pt-5 vh-100">
            <div className="container">
                <h5 className="text-info">Hey! I am</h5>
                <h1 className="">Vineet Mankani</h1>
                <h5 className="text-info">Fullstack Web Developer</h5>
            </div>
            <CTA />
            <div className="my-5">
                <img src={ME} alt="Vineet Mankani" />
            </div>

            <Socials />
            <a href="#contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-mouse" viewBox="0 0 16 16"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"/></svg>
                Scroll Down
            </a>
        </header>
    )
}

export default Header;