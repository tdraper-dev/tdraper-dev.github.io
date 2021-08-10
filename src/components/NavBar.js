import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'

const NavLink = ({ path }) => {
    const navRef= useRef();


    const handleClick = () => {
        const prev = document.getElementsByClassName('activated')[0] || null;
        if(prev) {
            prev.classList.remove('activated')
        }
        navRef.current.classList.add('activated');
    }

    return (
    <li className="nav-item mx-lg-3">
        <Link onClick={handleClick} ref={navRef} to={`/${path}`} className={`nav-link ${path ? '' : 'activated'}`}>{path || 'Home'}</Link>
    </li>
    )
}

const NavBrand = () => {

    return (
        <Link to="/" className='navbar-brand'>
            <span 
                className="otherTitleSpecial" 
                style={{color: 'white'}}>
                <span 
                    className="t-letter">t
                </span>
                Draper
            </span>
            <div 
                className="period" 
                style={{color: 'rgba(226, 78, 66)', display: 'inline-block'}}
            >.</div>
            <div 
                className="titleSpecial" 
                style={{color: 'rgb(233, 128, 0)'}}
            >dev</div>
        </Link>
    )
}


function Navbar() {
    const [visible, setVisible] = useState(false)

    const handleNavDropMenu = () => {
        const navMenu = document.getElementById('navBarDropDown')
        navMenu.className=` navbar-collapse ${visible ? 'collapsing' : 'expanding'} `
        setTimeout(() => {
            setVisible(!visible)
            navMenu.className=`navbar-collapse collapse ${!visible ? 'show' : ''} `
        }, 300)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <NavBrand />
            <button 
                className="navbar-toggler" 
                type="button"
                onClick={handleNavDropMenu}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${visible ? 'show' : ''}`} id="navBarDropDown">
                <ul className="navbar-nav">
                    <NavLink path="" />
                    <NavLink path="About" />
                    <NavLink path="Projects" />
                    <NavLink path="Blog" />
                    <NavLink path="Contact" />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar