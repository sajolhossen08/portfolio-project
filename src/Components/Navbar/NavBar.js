import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../images/Professional-jpg.jpg'
import './Navbar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="Shozol Hossen"/>
                 </div>

                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a href="https://doc-00-80-docs.googleusercontent.com/docs/securesc/8fheorou8c2crf15g9ksnf3vatfpkhu3/b9pe3ec3e4h790f290lpkgi35hagdq6f/1619956800000/17882233754118928546/17882233754118928546/1NI0oA-15s6W8Jsdw1AEiN6cS5pb5P78H?e=download&authuser=0&nonce=olqbu5h7iv930&user=17882233754118928546&hash=720sfvogfes83j1rhed9na624ob00j2t" target="_blank" rel="noopener noreferrer">
                            <button className="resume-download-btn">GET RESUME</button>
                        </a>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                    &copy;2021 Shozol Hossen
                    </p>
            </footer>
            </nav>
        </div>
    );
};

export default NavBar;