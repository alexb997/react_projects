import React, { Component } from 'react'
// LifeCycle Hooks can only be used in class componets!
// Stateless Functional Component
const NavBar = ({totalCounters}) =>{
    console.log('NavBar - Rendered');

    return <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
        </nav>;
}

export default NavBar;