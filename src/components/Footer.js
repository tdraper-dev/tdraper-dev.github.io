import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

function Footer() {

    return (
        <div id='footer' className="row">
            <div className="webIcon ">
                <a href="#" className="github" target="_blank">
                    <AiOutlineGithub />
                </a>
            </div>
            <div className="webIcon ">
                <a href="#" className="linkedIn" target="_blank">
                    <AiOutlineLinkedin />
                </a>
            </div>
            <div className="webIcon ">
                <Link to="/Contact" className="mail">
                    <AiOutlineMail />
                </Link>
            </div>
        </div>
    )
}

export default Footer