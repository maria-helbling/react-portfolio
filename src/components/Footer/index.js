import React from 'react';
import './style.css'

function Footer() {
    return (
       <>
        <footer className="footer">
        <div className="container text-center">
            <a href="https://www.linkedin.com/in/mariahelblingprofile/" target="blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/maria-helbling" target="blank"><i className="fab fa-github-square"></i></a>
        </div>
        <p className="text-center">&copy; 2020 Maria Helbling</p>
    </footer>
       </>
    )
}

export default Footer;
