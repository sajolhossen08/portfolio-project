import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../images/Professional-jpg.jpg'
import './Navbar.css';

const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img className="img-fluid" src={avatar} alt="Shozol Hossen"/>
                    <h4 style={{color: "#06cef7"}}>Shozol Hossen</h4>
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
                        <NavLink to="/projects" exact activeClassName="active">
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
                    <li>
                        <a class="text-decoration-none mt-1" href="https://drive.google.com/uc?export=download&amp;id=1NI0oA-15s6W8Jsdw1AEiN6cS5pb5P78H" download="">
                            <button type="button" class="font-weight-light text-uppercase resume-download-btn">
                                GET RESUME
                            </button>
                        </a>
                    </li>
                </ul>

                <footer className="footer">
                    <p>
                    <small>&copy; 2021 <span> Shozol Hossen</span></small>
                    </p>
            </footer>
            </nav>
        </div>
    );
};

export default NavBar;