import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Header.css';
import Typed from 'react-typed';
import Particles from 'react-particles-js';

const Header = () => {
    return (
        <>
        <Particles 
        params={{
            particles:{
                number:{
                    value: 30,
                    density: {
                        enable: true,
                        value_area:800
                    }
                },
                shape: {
                    type:"circle",
                    stroke: {
                        width: 6,
                        color: "#06cef7"
                    }
                }
            }
        }}
        />
        <div className="header-wrapper container-fluid">
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I'm 
                    <span> SHOZOL HOSSEN</span>
                </h1>
                <Typed 
                className = "typed-text text-center d-block" 
                strings = {["Front-end Developer", "MERN Developer", "Web Developer"]}
                typeSpeed={50}
                backSpeed={60}
                loop
                />
                <p className="h-sub-text">
                    I am a dedicated and    passionate MERN Stack developer seeking an opportunity to extend my
                    development skill. Experience in designing and developing user interfaces, testing,
                    debugging and problem solving.
                </p>
                <div className="icons">
                    <Link to={{ pathname: "https://www.linkedin.com/in/md-shozol-hossen-36ab581b8" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon lkin"/>
                    </Link>
                    <Link to={{ pathname: "https://github.com/sajolhossen08" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to={{ pathname: "https://www.facebook.com/profile.php?id=100024905292205" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to={{ pathname: "https://www.youtube.com/channel/UCOvt-oZIsY2fZaR48yBhbPg" }} target="_blank" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt"/>
                    </Link>
                </div>
            </header>
        </div>
        </div>
        </>
    );
};

export default Header;