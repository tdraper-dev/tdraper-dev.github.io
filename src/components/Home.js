import React, { useState, useEffect } from 'react'
import { ImageBox } from './Projects'
import { Stack } from './AboutMe'
import DMLogin from '../images/DungeonMapLogin(resized).png'
import CurHome from '../images/CurrencyConverterHome(resized).png'
import DawdHome from '../images/DawdHome(resized).png'
import IconTitle from './IconTitle'

import { RiComputerLine } from 'react-icons/ri'
import Taiwan from '../images/Travis_Taiwan.jpg'
import { GoTools } from 'react-icons/go'
import { BsServer } from 'react-icons/bs'
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3, SiJavascript, SiJquery, SiMongodb, SiGraphql, SiBootstrap, SiSocketDotIo, SiJest, SiRedux, SiTypescript } from 'react-icons/si'
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

const HomeContainer = ({ title, style, type='', children }) => {

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

    useEffect(() => {
        const nav = document.getElementById('navbar')
        nav.style.paddingBottom='400px'
        return () => {
            nav.style.paddingBottom="200px"
        }
    }, [])

    return (
        <div className="container-fluid">
        <div className="homeRow row">
            <IconTitle title="" margin="mb-3" />
            <div className="col-s-12 col-md-10 col-lg-12 landingBox d-flex">
                <Stack
                    containerStyles='imageStack'
                    typeIcon={Taiwan}
                />
                <p className='col-10 col-xxl-11 landingGreeting'>
                    <p className="boldBig">Travis Draper</p>
                    <p className="noP">Full stack web designer, theater artist, and puppeteer from Durham, NC.</p>
                </p>
            </div>
            <HomeContainer
                type="projectStack col-12 col-xl-4 fadeLeft">
                <Stack
                    type={'Frontend'}
                    typeIcon={<RiComputerLine />}
                    iconStyles={'col-5'}
                >
                    <ImHtmlFive title="HTML5" className="icon" color="rgb(227, 76, 38)"/>
                    <SiCss3 title="CSS3" className="icon" color="rgb(38, 77, 228)" />
                    <SiJavascript title="Javascript" className="icon" style={{backgroundColor: 'rgb(50, 51, 48)', color: 'rgb(240,219,79)'}} />
                    <SiJquery title="jQuery" className="icon" color="rgb(0, 109, 176)"/>
                    <FaReact title="React" className="icon" color="rgb(97, 219, 251)"/>
                    <SiRedux title="Redux" className="icon" color="rgb(118, 74, 188)"/>
                    <SiTypescript title="Typescript" className="icon" color="rgb(0, 122, 204)" />
                </Stack>
                <Stack type="Backend" typeIcon={<BsServer />}>
                    <FaNodeJs title="Nodejs" className="icon" color="rgb(60, 135, 58)" />
                    <SiMongodb title="MongoDB" className="icon" color="rgb(77, 179, 61)"/>
                    <SiGraphql title="GraphyQl" className="icon" color="rgb(229, 53, 171)"/>
                    <SiSocketDotIo title="Socket.IO" className="icon" />
                </Stack>
                <Stack 
                    type="Tools" 
                    typeIcon={<GoTools />}
                    headerStyles="ps-xl-5"
                >
                    <SiBootstrap title="Bootstrap" className="icon" color="rgb(86, 61, 124)"/>
                    <SiJest title="Jest" className="icon" color="rgb(153, 66, 91)"/>
                </Stack>
            </HomeContainer>

            <HomeContainer 
                type="projectPeak fadeRight col-10 col-xl-7 "
               
            >
                <ImageBox 
                    images={[DMLogin, CurHome, DawdHome]}
                    website={['https://thedungeonmap.herokuapp.com/login', 'https://powerful-tor-29629.herokuapp.com/', 'https://dawdlist.netlify.app/']}
                    icons={homeIcons}
                    classname="imageBox imageBoxHome"
                />
            </HomeContainer>

        </div>
        </div>


    )
}

export default Home