import './App.css';
import {useState} from "react";
import useWindowDimensions from "./Tools/windowDimensions";

function App() {

    const { height, width } = useWindowDimensions();
    const [showProjects, setShowProjects] = useState(false);

    const expand = (event) => {event.target.style.scale = (2)}
    const shrink = (event) => {event.target.style.scale = (1)}

    const MainCircleClick = () => {
        let elements = document.getElementsByClassName("CircleClickable")

        let position = {transform: "translateX(100px)"}
        for (let i = 0; i < elements.length; i++){
            elements[i].style = position
        setShowProjects(true)
    }}

  return (
    <div className="App">
      <div className="App-body">

        <a className="ClickMe"
            hidden={showProjects}
            onMouseEnter={expand}
            onMouseLeave={shrink}
            onClick={MainCircleClick}>
        </a>

          <a className="CircleClickable"
             hidden={!showProjects}
             onMouseEnter={expand}
             onMouseLeave={shrink}>
          </a>

          <a className="CircleClickable"
             hidden={!showProjects}
             onMouseEnter={expand}
             onMouseLeave={shrink}>
          </a>

          <a className="CircleClickable"
             hidden={!showProjects}
             onMouseEnter={expand}
             onMouseLeave={shrink}>
          </a>

          <a className="CircleClickable"
             hidden={!showProjects}
             onMouseEnter={expand}
             onMouseLeave={shrink}>
          </a>

      </div>
    </div>
  );
}

export default App;
