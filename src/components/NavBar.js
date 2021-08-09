import React, { useState } from 'react';
import { Link } from 'react-router-dom'

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
        <nav className="fixed-top navbar navbar-expand-lg navbar-dark">
            <Link to="/" className='navbar-brand'>
                <span className="otherTitleSpecial" style={{color: 'white'}}><span className="t-letter">t</span>Draper</span>
                <div className="period" style={{color: 'rgba(226, 78, 66)', display: 'inline-block'}}>.</div>
                <div className="titleSpecial" style={{color: 'rgb(233, 128, 0)'}}>dev</div></Link>
            <button 
                className="navbar-toggler" 
                type="button"
                onClick={handleNavDropMenu}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${visible ? 'show' : ''}`} id="navBarDropDown">
                <ul className="navbar-nav">
                <li className="nav-item mx-lg-3">
                        <Link to='/' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item mx-lg-3">
                        <Link to='/About' className="nav-link">About</Link>
                    </li>
                    <li className="nav-item mx-lg-3">
                        <Link to='/Projects' className="nav-link">Projects</Link>
                    </li>
                    <li className="nav-item mx-lg-3">
                        <Link to='/Blog' className="nav-link">Blog</Link>
                    </li>
                    <li className="nav-item mx-lg-3">
                        <Link to='/Contact' className="nav-link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar