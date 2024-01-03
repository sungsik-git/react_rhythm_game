import React,{KeyboardEvent} from "react";
import KeypadInfo from "./KeypadInfo";

function KeypadUI(props){
    
    return(
        <div id="keypadContainer">
            <img src="../img/noteRoute.png" id="routeS"/>
            <img src="../img/noteRouteLine.png" className="routeLine" ></img>
            <img src="../img/noteRoute.png" id="routeD" />
            <img src="../img/noteRouteLine.png" className="routeLine"></img>
            <img src="../img/noteRoute.png" id="routeF"></img>
            <img src="../img/noteRouteLine.png" className="routeLine"></img>
            <img src="../img/noteRoute.png" id="routeSpace1"></img>
            <img src="../img/noteRoute.png" id="routeSpace2"></img>
            <img src="../img/noteRouteLine.png" className="routeLine"></img>
            <img src="../img/noteRoute.png" id="routeJ"></img>
            <img src="../img/noteRouteLine.png" className="routeLine"></img>
            <img src="../img/noteRoute.png" id="routeK"></img>
            <img src="../img/noteRouteLine.png" className="routeLine"></img>
            <img src="../img/noteRoute.png" id="routeL"></img>
            <KeypadInfo />
            <img src="../img/judgementLine.png" id="judgementLine"></img>
        </div>
        
    );
}

export default KeypadUI