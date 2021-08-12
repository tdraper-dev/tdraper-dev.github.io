import React from 'react'
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Navbar from './NavBar'
import Home from './Home'
import Blog from './Blog'
import Footer from './Footer'
import About from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

function Pages() {

    return (
        <div className="container">
            <Switch>
                <Route path="/About" component={About} />
                <Route path="/Projects" component={Projects} />
                <Route path="/Blog" component={Blog} />
                <Route path="/Contact" component={Contact} />
                <Route path="/*">
                    <Redirect to="/" />
                </Route>
            </Switch>

        </div>
    )
}

function Layout() {
    return (
        <>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Pages />
            </Switch>
        <Footer />
        </>
    )
}

export default Layout