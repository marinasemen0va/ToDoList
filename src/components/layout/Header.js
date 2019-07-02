/**
 * Header.js, header component
 * @author Marina Semenova (https://github.com/marinasemen0va)
 */

// imports
import React from 'react';
import {Link} from 'react-router-dom';

// Header function
function Header() {
    return (
        <header style = {headerStyle}>
            <h1>
                To Do List
            </h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about"> About</Link>
        </header>
    )
}

// header styling
const headerStyle = {
    background: 'linear-gradient(to bottom, #6ccaff 0%,#002b50 100%)',
    color:'#fff',
    textShadow: '1px 2px 4px black',
    textAlign: 'center',
    padding: '10px 0px'
};

// link styling
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

// export
export default Header;