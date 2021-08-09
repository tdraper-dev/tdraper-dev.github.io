import React from 'react'
import { Link } from 'react-router-dom'
import IconTitle from './IconTitle'
import { RiComputerLine } from 'react-icons/ri'
import { GoTools } from 'react-icons/go'
import { BsServer } from 'react-icons/bs'
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3, SiJavascript, SiJquery, SiMongodb, SiGraphql, SiBootstrap, SiSocketDotIo, SiJest, SiRedux, SiTypescript } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'

                /*Thank you for visiting my portfolio. My name is Travis Draper. This is where text will go describing who I am, why I chose to study web development, what I bring to the table, what I hope to get out of a career in web development, and why I'm a great candidate for any position.*/

function About() {

    return (
        <>
        <div className="aboutMeRow row">
            <IconTitle title="About Me">
                <p>
                    <span 
                        style={{color: 'rgb(226, 78, 66)'}}
                        className="specialText"
                    > devising artist</span>
                    <span 
                        style={{fontSize: '20px'}}
                    > | </span> 
                    <span 
                        style={{color: 'rgb(233, 128, 0)'}}
                        className="specialText"
                    > web developer</span>
                </p>
            </IconTitle>
            <div className="aboutTextBox mb-5">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My name is Travis Draper. I am a devising artist and web developer living and working out of Durham, North Carolina. My history with devising and theatrical performance stretches back over a decade, but my work with web development began more recently in early 2020. My study began as a curiosity about the work, inspired by both my undergraduate history with STEM and my web developer friends. I’ve discovered, however, that development offers just as much fulfillment, frustration, and creative outlet as devising an original piece of theatre. The integration and ultimate coalescence of the front and back ends, 3rd party libraries, frameworks, and APIs do spark a genuinely wonderful performance. Banging your head against a wall for three hours to solve a problem before having that <span className="noselect Aha" style={{color: 'rgb(232, 110, 128)'}}>“Aha!” </span> moment gives the same rush -- and bruises -- as figuring out the final beat of an act two climax.  It’s good work. It’s hard work. That’s what makes web development fulfilling work.
            <br/>
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Since finding my passion for development, I've put everything I have into learning this field and developing my coding sense. After completing two fullstack training courses and creating multiple projects, including an original self-led MERN stack project, I feel ready to present this portfolio as an an ever growing work-in-progress. As a lover of learning and a student of failure, I’m proud to share these applications with you. I feel they represent my self-taught journey from nothing to a confident humility and showcase my hobbies and curiosities. Enjoy at your leisure. If you’d like to ask any questions regarding these projects, my history of collaborative building, or working with your team, feel free to drop a line <Link to="/Contact" className="aboutTextLink">here</Link>. Thanks!
            <br/>
            <br/>

            <div className="signature">
                Programmatically Yours,
                <br />
                <br />
                <span style={{color: 'rgb(233, 128, 0)', fontWeight: '600'}}>Travis</span>
            </div>
            
            <hr className="my-5" />

            </div>
        </div>
        <div className="iconRow row">
            <IconTitle title="My Tech Stack" margin="mb-5" />
            <div className="stackContainer">
                <div id="frontEnd" className="displayIcon">
                    <RiComputerLine />
                </div>
                <h3 className="ps-1">Frontend</h3>
                <div className="iconBox iconSource d-flex mb-5">
                    <ImHtmlFive title="HTML5" className="icon" color="rgb(227, 76, 38)"/>
                    <SiCss3 title="CSS3" className="icon" color="rgb(38, 77, 228)" />
                    <SiJavascript title="Javascript" className="icon" style={{backgroundColor: 'rgb(50, 51, 48)', color: 'rgb(240,219,79)'}} />
                    <SiJquery title="jQuery" className="icon" color="rgb(0, 109, 176)"/>
                    <FaReact title="React" className="icon" color="rgb(97, 219, 251)"/>
                    <SiRedux title="Redux" className="icon" color="rgb(118, 74, 188)"/>
                    <SiTypescript title="Typescript" className="icon" color="rgb(0, 122, 204)" />
                </div>
            </div>
            <div className="stackContainer">
                <div id="backEnd" className="displayIcon">
                    <BsServer />
                </div>
                <h3 className="ps-1">Backend</h3>
                <div className="iconBox iconSource d-flex mb-5">
                    <FaNodeJs title="Nodejs" className="icon" color="rgb(60, 135, 58)" />
                    <SiMongodb title="MongoDB" className="icon" color="rgb(77, 179, 61)"/>
                    <SiGraphql title="GraphyQl" className="icon" color="rgb(229, 53, 171)"/>
                    <SiSocketDotIo title="Socket.IO" className="icon" />
                </div>
            </div>
            <div className="stackContainer">
                <div id="tools" className="displayIcon">
                    <GoTools />
                </div>
                <h3 className="ps-1">Tools</h3>
                <div className="iconBox iconSource d-flex mb-5">
                    <SiBootstrap title="Bootstrap" className="icon" color="rgb(86, 61, 124)"/>
                    <SiJest title="Jest" className="icon" color="rgb(153, 66, 91)"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default About