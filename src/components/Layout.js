import React from 'react'
import {
    Switch,
    Route,
} from 'react-router-dom'

import Navbar from './NavBar'
import Home from './Home'
import Blog from './Blog'
import Footer from './Footer'
import About from './AboutMe'
import Projects from './Projects'

function Layout() {
    return (
        <>
        <Navbar/>
        <div className="container">
            <Switch>
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Blog" component={Blog} />
                <Route path="/Contact" component={Home} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
        <Footer />
        </>
    )
}

export default Layout