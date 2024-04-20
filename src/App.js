
import {useState} from "react";
import useWindowDimensions from "./Tools/windowDimensions";
import './App.css'
import useSound from "use-sound";
import backgroundMusic from './backgroundMusic.mp3'
import errorSound from './errorSound.mp3'
import congratzSound from './congratzSound.mp3'
import sans from './images/sans.png'
import temmie from './images/temmie.png'



export const AppV = () => {
    const dimensions = useWindowDimensions()

    if (dimensions.width >= 1000) {
        return <AppWebV/>
    } else {
        return <AppMobileV/>
    }
}

const AppWebV = () => {
    return(
        <div>
            <text>Telefonundan gir!</text>
        </div>
    )
}

const AppMobileV = () => {
    const dimensions = useWindowDimensions()
    const [isNoShown, setIsNoShown] = useState(true);    
    const [isTryAgainShown, setIsTryAgainShown] = useState(true);
    const [playBackgroundMusic] = useSound(backgroundMusic, { volume: 0.3, interrupt: true });    
    const [playErrorSound] = useSound(errorSound, { interrupt: true });
    const [playCongratzSound] = useSound(congratzSound, { interrupt: true });

    const [accepted, setAccepted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [FastLoading, setFastLoading] = useState(false);

    function onAccept() {
        setAccepted(true)
        playCongratzSound()
    }

    function onProgress(){
        setFastLoading(true)
        playBackgroundMusic()
        setTimeout(() => {            
            setLoading(false)
        }, 4000);
    }

    return(
        <div>
            {loading ? <div className="appBody"> <div class= {!FastLoading ? "loader" : 'loaderFast'}></div><button className="button" onClick={onProgress}>Press me!</button> </div> :
            !accepted ? <div className="appBody">
                <image className="temmie" src={temmie} alt='temmie'></image>
                <image className="sans" src={sans} alt='sans'></image>
                <text className="invitationText">Hey ydlle!<br></br> Would you be my valentine?</text>
                <div>
                    <button onClick={() => onAccept()} className="button">Of course!</button>
                    {isNoShown ? <button onClick={() => {
                        playErrorSound()
                        setIsNoShown(false)
                        }} 
                        className="button">no :c</button> : 
                        (isTryAgainShown && 
                        <button 
                            onClick={() => {
                            playErrorSound()
                            setIsTryAgainShown(false)
                            }} className="button">Try again :C</button>)}
                </div>
            </div>  : <div className="appBody">
                <text className="invitationText">Temks! ;3 ily</text>
                </div>
            }             
        </div>
    )
}
