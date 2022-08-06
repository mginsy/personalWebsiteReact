import React, { useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import Timer from "react-compound-timer";


//https://lottiefiles.com/91145-health-insurance
//https://lottiefiles.com/9234-medicine-icon
//https://lottiefiles.com/2649-patient-successfully-added
//https://lottiefiles.com/61069-medicine-pills
//https://lottiefiles.com/38255-medicine-service

/*
<div className="offset-md-1 col-md-6 my-auto">
    <Lottie animationData={animationData} loop={ true }/>
</div>
*/

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

// this is the home page it is just a simple HTML page with no confusing components. It has various text, image, and youtube link objects including a lottie animation which is the pill animation on the front page
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
                <h1 style={{fontSize:windowSize.innerWidth/40}}>{hello ? "Hello" : img ? "I'm Max Ginsberg, a software developer" : desc ? ", builder, cook, plant lover, and more..." : "Feel free to explore. Thank you for visiting"}</h1>
            </motion.div>
            )}
            </Timer>
        </>
    )
}

export default Home;
