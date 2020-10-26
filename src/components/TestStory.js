import React, { useEffect, useRef } from "react";
// import {Link} from 'react-router-dom'
import { animated, useSpring,useTransition,useTrail, interpolate } from 'react-spring';
// import mountain from '../assets/mountain.png'
import leaves1 from '../assets/Test/layer1a.png'
import leaves2 from '../assets/Test/layer1b.png'
import layer1 from '../assets/Test/layer1.png'
import tree from '../assets/Test/layer2.png'
import palace from '../assets/Test/layer3.png'
import layer4 from '../assets/Test/layer4.png'
import palaceProps from '../assets/Test/layer5.png'
import balloon from '../assets/Test/layer5a.png'
import sky from '../assets/Test/layer6.png'


export default function Teststory(props) {

    const ref = useRef()
    const calcLeavesLeft = o => `translateY(calc(${o * 0.5}%)) translateX(calc(-${o * 3}%)) scale(${o*0.01 + 1})`
    const calcLeavesRight = o => `translateY(calc(${o * 0.5}%)) translateX(calc(${o * 3}%)) scale(${o*0.01 + 1})`
    const calc = o => o > 0 ? `translateY(${o * 0.9}%) scale(${o * 0.02 + 1})` : `translateY(0%) scale(1)`
    const calc2 = o => `translateY(calc(${o * 0.5}% - 100px)) scale(${o*0.01 + 1})`
    const calcTree = o => `translateY(calc(${o * 0.005}% - 150px)) translateX(calc(-${o * 0.5}%)) scale(${o*0.001 + 1})`
    const calcPalace = o =>  `translateY(calc(${o * 0.09}% - 10px)) scale(${(o * 0.0009 )+ 1})`
    const calcpalaceProps = o =>  `translateY(calc(${o * 0.06}% - 100px)) scale(${(o * 0.0009 )+ 1})`
    const calcBalloon = o =>  `translateY(calc(${o * 0.06}% - 100px)) translateX(calc(-${o * 0.6}%)) scale(${(o * 0.0009 )+ 1})`
    const calcMountain = o =>  `translateY(calc(-${o * 0.009}% - 10px)) scale(${(o * 0.0009 )+ 1})`
    const calcSky = o =>  `translateY(calc(-${o * 0.0009}% )) `
    
    
    const calc3 = o =>  `translateY(calc(${o * 0.09}% - 200px)) scale(${(o * 0.0009 )+ 1})`
    const calc4 = o =>  `translateY(calc(${o * 0.9}% - 200px)) scale(${(o * 0.005 )+ 1})`


    // const calc2 = o => o > 100 ? `translateY(${(o - 100) * 2 - 20}%) scale(${((o - 100) * 0.02 )+ 1})`: `translateY(-20%) scale(${o*0.01 + 1})`
    // const calc2 = o => ``

    const handleScroll = () => {
        const posY = ref.current.getBoundingClientRect().top;
        const offset =  (window.pageYOffset - posY  > 0)?window.pageYOffset - posY:0
        set({ offset })
        console.log(offset)
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    })

    const [{ offset }, set] = useSpring(() => (

        { offset: 0 }
    ))

    return (
        <>
        {/* <div className="space-50"></div>
        <div className="space-50"></div> */}
        <div ref={ref}>
            <div className="container bg-lightblue ">
                {/* <animated.div style={{transform:offset.interpolate(calc)}} className="test-box bg-"></animated.div> */}
                {/* <animated.div style={{transform:offset.interpolate(calc3)}} className="test-box bg-"></animated.div> */}
                {/* <animated.div style={{transform:offset.interpolate(calc4)}} className="sun"></animated.div> */}


                <animated.div style={{transform:offset.interpolate(calcSky)}} className="test-box-sky ">
                    <img src={sky} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                <animated.div style={{transform:offset.interpolate(calcMountain)}} className="test-box-mountain ">
                    <img src={layer4} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                <animated.div style={{transform:offset.interpolate(calcpalaceProps)}} className="test-box-palace ">
                    <img src={palaceProps} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                <animated.div style={{transform:offset.interpolate(calcBalloon)}} className="test-box-balloon ">
                    <img src={balloon} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                <a >
                <animated.div style={{transform:offset.interpolate(calcPalace)}} className="test-box-palace ">
                    <img src={palace} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                </a>
                <animated.div style={{transform:offset.interpolate(calcTree)}} className="test-box-tree ">
                    <img src={tree} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                
                <animated.div style={{transform:offset.interpolate(calc)}} className="test-box  ">
                    <img src={layer1} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                <animated.div style={{transform:offset.interpolate(calcLeavesLeft)}} className="test-box-leaves  ">
                    <img src={leaves1} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                <animated.div style={{transform:offset.interpolate(calcLeavesRight)}} className="test-box-leaves  ">
                    <img src={leaves2} className="img-fluid img-fluid-2" alt=""/>
                </animated.div>
                <div className="space-1000"></div>
            </div>
        </div>
            
        </>
    )
}
