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
                    <button className="resume-download-btn">GET RESUME</button>
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