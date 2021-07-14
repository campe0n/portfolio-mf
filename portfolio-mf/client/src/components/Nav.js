import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return(
        <nav>
            <Link to='/' className="navLink">Home</Link>
            <Link to='/aboutMe' className="navLink">About Me</Link>
            <Link to='/projects' className="navLink">Projects</Link>
            <Link to='/resume' className="navLink">Resume</Link>
        </nav>
    )
}

export default Nav;