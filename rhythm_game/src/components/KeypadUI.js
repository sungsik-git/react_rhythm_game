import React from "react";
import KeypadInfo from "./KeypadInfo";

function KeypadUI(){
    return(
        <div id="keypadContainer">
            <img src="../img/noteRoute.png" id="routeS"></img>
            <img src="../img/noteRouteLine.png" className="routeLine"></img>
            <img src="../img/noteRoute.png" id="routeD"></img>
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
            <img src="../img/noteRouteLine.png" className="routeLine"></img>
            <KeypadInfo />
        </div>
        
    );
}

export default KeypadUI