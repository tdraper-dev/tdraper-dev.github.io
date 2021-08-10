import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageBox } from './Projects'
import { BlogSheet } from './Blog'
import { blogPosts } from '../blogPosts/Blogs'
import { ContactBox } from './Contact'

import DMLogin from '../images/DungeonMapLogin(resized).png'
import CurHome from '../images/CurrencyConverterHome(resized).png'
import DawdHome from '../images/DawdHome(resized).png'
import IconTitle from './IconTitle'

import { ImHtmlFive } from 'react-icons/im'
import { SiCss3, SiJavascript, SiJquery, SiMongodb, SiBootstrap, SiSocketDotIo } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'

const homeIcons = [
    [
        <ImHtmlFive key={0} title="HTML5" className="homeIcon" color="rgb(227, 76, 38)"/>,
        
        <SiCss3 key={1}className="homeIcon" title="CSS3" color="rgb(38, 77, 228)" />,

        <SiJavascript key={2} className="homeIcon" title="Javascript" style={{backgroundColor: 'rgb(50, 51, 48)', color: 'rgb(240,219,79)'}} />,

        <FaReact key={3} className="homeIcon" title="React"  color="rgb(97, 219, 251)"/>,

        <FaNodeJs key={4} title="Nodejs" className="homeIcon" color="rgb(60, 135, 58)" />,

        <SiMongodb key={5} title="MongoDB" className="homeIcon" color="rgb(77, 179, 61)"/>,

        <SiSocketDotIo key={6} title="Socket.IO" className="homeIcon" />,

        <SiBootstrap key={7} title="Bootstrap" className="homeIcon" color="rgb(86, 61, 124)"/>
    ],
    [
        <ImHtmlFive key={0} title="HTML5" className="homeIcon" color="rgb(227, 76, 38)"/>,
        
        <SiCss3 key={1} className="homeIcon" title="CSS3" color="rgb(38, 77, 228)" />,

        <SiJavascript key={2} className="homeIcon" title="Javascript" style={{backgroundColor: 'rgb(50, 51, 48)', color: 'rgb(240,219,79)'}} />,

        <FaReact key={3} className="homeIcon" title="React"  color="rgb(97, 219, 251)"/>,

        <SiBootstrap key={4} title="Bootstrap" className="homeIcon" color="rgb(86, 61, 124)"/>
    ],
    [
        <ImHtmlFive key={0} title="HTML5" className="homeIcon" color="rgb(227, 76, 38)"/>,
        
        <SiCss3 key={1} className="homeIcon" title="CSS3" color="rgb(38, 77, 228)" />,

        <SiJavascript key={2} className="homeIcon" title="Javascript" style={{backgroundColor: 'rgb(50, 51, 48)', color: 'rgb(240,219,79)'}} />,

        <SiJquery key={3} title="jQuery" className="homeIcon" color="rgb(0, 109, 176)"/>,

        <SiBootstrap key={4} title="Bootstrap" className="homeIcon" color="rgb(86, 61, 124)"/>
    ]
]

const HomeContainer = ({ title, style, type, children }) => {

    return (
        <div 
            style={style}
            className={`homeProjectContainer ${type}`}>
            <h1 className="homeHeader">{title}</h1>
            {children}
        </div>
    )
}

function Home() {
    const [flip, setFlip] = useState(false);
    return (
        <div className="homeRow row">
            <IconTitle title="Hello, I'm Travis Draper" margin="mb-3" />
            <HomeContainer 
                type="projectPeak fadeLeft"
                title="Check out my work"
            >
                <ImageBox 
                    images={[DMLogin, CurHome, DawdHome]}
                    website={['https://thedungeonmap.herokuapp.com/login', 'https://powerful-tor-29629.herokuapp.com/', 'https://dawdlist.netlify.app/']}
                    icons={homeIcons}
                    classname="imageBox imageBoxHome"
                />
            </HomeContainer>
        </div>

    )
}

export default Home