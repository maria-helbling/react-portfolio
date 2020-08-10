import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

function Nav() {
    return (
        <header>
            <nav className="top-bar">
                <div className="top-bar-left">
                    <Link className="navbar-brand text-center text-uppercase stat" to="index.html">Maria Helbling</Link>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <Link className={window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"} to="/about">
                                About
                                </Link>
                        </li>
                        <li>
                            <Link className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"} to="/portfolio">
                                Portfolio
                                </Link>
                        </li>
                        <li>
                            <Link className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"} to="/contact">
                                Contact
                                </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;
