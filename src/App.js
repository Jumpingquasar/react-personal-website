import './App.css';
import {useEffect, useRef, useState} from "react";
import autoAnimate from '@formkit/auto-animate'
import useWindowDimensions from "./Tools/windowDimensions";

export const App = () => {
    const dimensions = useWindowDimensions()

    switch (dimensions.width >= 1000) {
        case true:
            return <App_w/>
        case false:
            return <App_m/>
    }
}

export const App_w = () => {

    const [show, setShow] = useState(false);
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const reveal = (event) => {

        if (!show){
            setShow(!show)
            let elements = document.getElementsByClassName("CircleClickable")
            elements[0].style.transform = "translate(50vh,0vh)"
            elements[1].style.transform = "translate(40vh,30vh)"
            elements[2].style.transform = "translate(-45vh,-25vh)"
            elements[3].style.transform = "translate(55vh,-35vh)"
            elements[4].style.transform = "translate(-20vh,0vh)"
            elements[5].style.transform = "translate(-50vh,30vh)"
            let elements_main = document.getElementsByClassName("ClickMe")
            elements_main[0].style.transform = "translate(67vh,40vh)"
            elements_main[0].style.borderRadius = "20%"
            elements_main[0].style.height = "50px"
            elements_main[0].style.width = "50px"
        }
        else {
            setShow(!show)
            let elements = document.getElementsByClassName("CircleClickable")
            elements[0].style.transform = "translate(0vh,0vh)"
            elements[1].style.transform = "translate(0vh,0vh)"
            elements[2].style.transform = "translate(0vh,0vh)"
            elements[3].style.transform = "translate(0vh,0vh)"
            elements[4].style.transform = "translate(0vh,0vh)"
            elements[5].style.transform = "translate(0vh,0vh)"
            let elements_main = document.getElementsByClassName("ClickMe")
            elements_main[0].style.transform = "translate(0vh,0vh)"
            elements_main[0].style.borderRadius = "100%"
            elements_main[0].style.height = "100px"
            elements_main[0].style.width = "100px"

        }
    }

    // const expand = (event) => {event.target.style.transform = "scale(1.1)"}
    // const shrink = (event) => {event.target.style.transform = "scale(1)"}


    return (
        <div ref={parent} className={"App-body"}>
            <div className={"ClickMe"}
                 // onMouseEnter={expand}
                 // onMouseLeave={shrink}
                 onClick={reveal}>
            </div>
            <div className={"CircleClickable"}
                 // onMouseEnter={expand}
                 // onMouseLeave={shrink}
            >
                <text className={"circleText"}>Projects</text>
            </div>
            <div className={"CircleClickable"}
                // onMouseEnter={expand}
                // onMouseLeave={shrink}
            >
                <text className={"circleText"}>Photography</text>
            </div>
            <div className={"CircleClickable"}
                // onMouseEnter={expand}
                // onMouseLeave={shrink}
            >
                <text className={"circleText"}>Education</text>
            </div>
            <div className={"CircleClickable"}
                // onMouseEnter={expand}
                // onMouseLeave={shrink}
            >
                <text className={"circleText"}>About Me</text>
            </div>
            <div className={"CircleClickable"}
                // onMouseEnter={expand}
                // onMouseLeave={shrink}
            >
                <text className={"circleText"}>Aspirations</text>
            </div>
            <div className={"CircleClickable"}
                // onMouseEnter={expand}
                // onMouseLeave={shrink}
            >
                <text className={"circleText"}>Social</text>
            </div>

        </div>
    )
}

export const App_m = () => {

    return(
        <div></div>
    )
}
