import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavLink = ({ path }) => {
    const navRef= useRef();
    const location = useLocation()
    const pathNow = location.pathname.substring(1)

    const handleClick = () => {
        const prev = document.getElementsByClassName('activated')[0] || null;
        if(prev) {
            prev.classList.remove('activated')
        }
        navRef.current.classList.add('activated');
    }

    return (
    <li className="nav-item mx-lg-3">
        <Link 
            onClick={handleClick} 
            ref={navRef} 
            to={`/${path}`} 
            className={`nav-link ${pathNow === path ? 'activated' : ''}`}>{path || 'Home'}</Link>
    </li>
    )
}

const NavBrand = () => {

    return (
        <Link to="/" className='navbar-brand' ariaLabel="Path to home page of Travis Draper portfolio">
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
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
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
                    <NavLink path="/" ariaLabel="Path to home page of Travis Draper portfolio"/>
                    <NavLink path="About" ariaLabel="Path to About Me section of Travis Draper portfolio"/>
                    <NavLink path="Projects" ariaLabel="Path to Projects section of Travis Draper portfolio"/>
                    <NavLink path="Blog" ariaLabel="Path to Blog section of Travis Draper portfolio"/>
                    <NavLink path="Contact" ariaLabel="Path to Contact Me form of Travis Draper portfolio"/>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar