import React, { useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Timer from "react-compound-timer";
import {isMobile} from 'react-device-detect';

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}
function Home() {

    const [show, setShow] = useState(true);
    const [hello, setHello] = useState(true);
    const [img, setIMG] = useState(false);
    const [desc, setDesc] = useState(false);
    const [explore, setExplore] = useState(false);
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

    const opacityVariants = {
    nothing: {opacity: 0, transition: {duration: 1}},
    filled: {opacity: 1, transition: {duration: 1.4}}
    }


    return (
        <>
            <Timer initialTime={0}
            checkpoints={[
                {
                time: 1600,
                callback: () => {setShow(false)},
                },
                {
                time: 2800,
                callback: () => {setHello(false); setIMG(true); setShow(true)},
                },
                {
                time: 4400,
                callback: () => {setShow(false)},
                },
                {
                time: 6000,
                callback: () => {setIMG(false); setDesc(true); setShow(true)},
                },
                {
                time: 7600,
                callback: () => {setShow(false)},
                },
                {
                time: 8800,
                callback: () => {setDesc(false); setExplore(true); setShow(true)},
                }]}
            >
            {({ start, resume, pause, stop, reset, timerState }) => (
            <motion.div className="homeContainer"
            exit={{opacity: 0, transition: {duration: 1}}}
            initial={{opacity: 0}}
            animate={show ? "filled" : "nothing"}
            variants={opacityVariants}>
                <h1 style={isMobile ?  {fontSize:windowSize.innerWidth/25} : {fontSize:windowSize.innerWidth/40}}>{hello ? "Hello" : img ? "I'm Max Ginsberg, a software developer" : desc ? "builder, cook, plant lover, and more..." : "Feel free to explore. Thank you for visiting."}</h1>
            </motion.div>
            )}
            </Timer>
        </>
    )
}

export default Home;
