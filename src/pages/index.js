import { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import _ from 'lodash'

import AnimatedRoutes from './AnimatedRoutes'
import background from './nature.gif';
import Resume from './ResumeMaxGinsberg.pdf'
import {
    faGithub,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Navbar as BSNavbar, Nav } from 'react-bootstrap'
import {isMobile} from 'react-device-detect';

//this is what creates the app in full. It creates the navbar, which connects all the pages together then creates the app itself which has all the routes to all the pages.

function NavbarLink(props) {
    return (
        <li className="nav-item">
            <Link to={props.to} className="nav-link" onClick={props.onClick}>
                {props.children || ''}
            </Link>
        </li>
    )
}

function Navbar(props) {
    console.log(isMobile)
    return (
        <BSNavbar expand="lg" {...props}>
            <Link to="/" className="navbar-brand" style={isMobile ? {"fontSize" : "50px", "marginLeft": "20px", "marginRight": "30px"} : {"fontSize" : "50px", "marginLeft": "60px", "marginRight": "80px"}}>
                Max Ginsberg
            </Link>
            <BSNavbar.Toggle aria-controls="navbar-nav" />

            <BSNavbar.Collapse id="navbar-nav">
                <>
                    <Nav className="mr-auto">
                        <NavbarLink to="/experience">Experience</NavbarLink>
                        <NavbarLink to="/portfolio">Portfolio</NavbarLink>
                        <NavbarLink to="/contact">Contact</NavbarLink>
                        <a className="nav-item nav-link" href={Resume} target="_blank" rel="noreferrer">Resume</a>
                    </Nav>
                    <Nav>
                        <a className="nav-item nav-link" href={"https://github.com/mginsy"} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <a className="nav-item nav-link" href={"https://www.linkedin.com/in/max-ginsberg-729215159/"} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        
                    </Nav>
                </>
            </BSNavbar.Collapse>
        </BSNavbar>
    )
}

const myStyle={
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh'
};

function App() {
    return (
        <div className ="App" style={myStyle}> 
            <Navbar className="primaryHome" style={{zIndex:2}}/>
            <AnimatedRoutes />
        </div>
    )

    /*
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar className="primaryHome" />
                        <Home />
                    </Route>
                    <Route exact path="/experience">
                        <Navbar />
                        <Experience />
                    </Route>
                    <Route exact path="/portfolio">
                        <Navbar />
                        <Portfolio />
                    </Route>
                    <Route exact path="/contact">
                        <Navbar />
                        <Contact />
                    </Route>
                    <Route exact path="/resume">
                        <Navbar />
                        <Resume />
                    </Route>
                </Switch>
        </Router>
    )*/
}

export default App
