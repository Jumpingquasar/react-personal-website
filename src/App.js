import './App.css';
import {useEffect, useRef, useState} from "react";
import autoAnimate from '@formkit/auto-animate'
import useWindowDimensions from "./Tools/windowDimensions";

export const App = () => {
    const dimensions = useWindowDimensions()

    if (dimensions.width >= 1000) {
        return <AppWeb/>
    } else {
        return <AppWeb/>
    }
}

export const AppWeb = () => {

    const [show, setShow] = useState(false);
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
    }, [parent])

    const reveal = (event) => {

        if (!show){
            setShow(!show)
            let elements = document.getElementsByClassName("CircleClickable")
            elements[0].style.transform = "translate(25vw,0vh)"
            elements[1].style.transform = "translate(20vw,30vh)"
            elements[2].style.transform = "translate(-25vw,-25vh)"
            elements[3].style.transform = "translate(35vw,-35vh)"
            elements[4].style.transform = "translate(-10vw,0vh)"
            elements[5].style.transform = "translate(-30vw,30vh)"
            let elements_main = document.getElementsByClassName("ClickMe")
            elements_main[0].style.transform = "translate(43vw,40vh)"
            elements_main[0].style.borderRadius = "20%"
            elements_main[0].style.height = "4vw"
            elements_main[0].style.width = "4vw"
        }
        else {
            setShow(!show)
            let elements = document.getElementsByClassName("CircleClickable")
            elements[0].style.transform = "translate(0vw,0vh)"
            elements[1].style.transform = "translate(0vw,0vh)"
            elements[2].style.transform = "translate(0vw,0vh)"
            elements[3].style.transform = "translate(0vw,0vh)"
            elements[4].style.transform = "translate(0vw,0vh)"
            elements[5].style.transform = "translate(0vw,0vh)"
            let elements_main = document.getElementsByClassName("ClickMe")
            elements_main[0].style.transform = "translate(0vw,0vh)"
            elements_main[0].style.borderRadius = "100%"
            elements_main[0].style.height = "14.1vw"
            elements_main[0].style.width = "14.1vw"

        }
    }

    // const expand = (event) => {event.target.style.border = "2px solid #ffffff"}
    // const shrink = (event) => {event.target.style.border = "2px hidden #ffffff"}


    return (
        <div ref={parent} className={"App-body"}>
            <div className={"ClickMe"}
                 // onMouseEnter={expand}
                 // onMouseLeave={shrink}
                 onClick={reveal}>
                {show ? <text className={"closeText"}>X</text> : <text className={"openText"}>🖱️</text> }
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

export const AppMobile = () => {

    return(
        <div></div>
    )
}
