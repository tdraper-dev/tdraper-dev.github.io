import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {

    return (
        <div id='footer' className="row">
            <div className="webIcon ">
                <a href="https://github.com/tdraper-dev" rel="noreferrer" className="github" target="_blank" aria-label="Path to Travis Draper's GitHub website with project source codes">
                    <AiOutlineGithub />
                </a>
            </div>
            <div className="webIcon ">
                <a href="https://www.linkedin.com/in/tdraper-dev/" className="linkedIn" target="_blank" rel="noreferrer" aria-label="Path to Travis Draper's LinkedIn profile page">
                    <AiOutlineLinkedin />
                </a>
            </div>
            <div className="webIcon ">
                <Link to="/Contact" className="mail" aria-label="Path to Contact Me Form on Travis Draper portfolio">
                    <AiOutlineMail />
                </Link>
            </div>
        </div>
    )
}

export default Footer