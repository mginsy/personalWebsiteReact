import React from 'react'
import {BrowserRouter as Router, Route, useLocation, Routes} from 'react-router-dom'
import _ from 'lodash'

import Home from './Home'
import Experience from './Experience'
import Portfolio from './Portfolio'
import {Contact} from './Contact'

import {AnimatePresence} from 'framer-motion'

function AnimatedRoutes(){
    const location = useLocation();


    return(
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />}/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes