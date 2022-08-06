import React, { useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Row, Col} from 'react-bootstrap';

import AccLogo from'./AccLogo.png';
import EdwardsLogo from'./EdwardsLogo.png';
import MakersLogo from'./MakersLogo.png';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

function Experience() {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
          setWindowSize(getWindowSize());
        }
    
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, []);

    const fontSize = windowSize.innerWidth/45;
    return (
        <motion.div className="homeContainer"
        exit={{opacity: 0, transition: {duration: 1.6}}}
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 1}}}>
            <Row style={{width:'100%', height:'100%'}}>
                <Col className='expCol'>
                    <motion.div  className='expCol'
                    exit={{opacity: 0, y:100, transition: {delay: .6, duration: 1} }}
                    initial={{opacity: 0, y:100}}
                    animate={{opacity: 1, y:0, transition: {duration: 1}}}>
                        <img  src={AccLogo} style={{height:windowSize.innerHeight/4.7.toString()+'px'}} alt="AccentureLogo"/>
                        <h1 style={{color:'#000000', fontSize:fontSize}}>Technology Analyst</h1>
                    </motion.div>
                </Col>
                <Col className='expCol'>
                    <motion.div  className='expCol'
                    exit={{opacity: 0, y:100, transition: {delay: .3, duration: 1} }}
                    initial={{opacity: 0, y:100}}
                    animate={{opacity: 1, y:0, transition: {delay: .3, duration: 1}}}>
                        <img  src={EdwardsLogo} style={{height:windowSize.innerHeight/4.7.toString()+'px'}} alt="EdwardsLogo"/>
                        <h1 style={{color:'#ffffff', fontSize:fontSize}}>Algorithms Intern</h1>
                    </motion.div>
                </Col>
                <Col className='expCol'>
                    <motion.div  className='expCol'
                    exit={{opacity: 0, y:100, transition: {duration: 1} }}
                    initial={{opacity: 0, y:100}}
                    animate={{opacity: 1, y:0, transition: {delay: .6, duration: 1}}}>
                        <img  src={MakersLogo} style={{height:windowSize.innerHeight/4.7.toString()+'px'}} alt="MakersLogo"/>
                        <h1 style={{color:'#c1280d', fontSize:fontSize}}>Director of Events</h1>
                    </motion.div>
                </Col>
            </Row>
        </motion.div>
    )
}

export default Experience