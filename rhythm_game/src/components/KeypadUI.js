import React,{KeyboardEvent} from "react";
import KeypadInfo from "./KeypadInfo";

function KeypadUI(props){
    if(props.sKeyPressed) document.getElementById("routeS").src = "../img/noteRoutePressed.png";
    else document.getElementById("routeS").src = "../img/noteRoute.png";
    if(props.dKeyPressed) document.getElementById("routeD").src = "../img/noteRoutePressed.png";
    else document.getElementById("routeD").src = "../img/noteRoute.png";
    if(props.fKeyPressed) document.getElementById("routeF").src = "../img/noteRoutePressed.png";
    else document.getElementById("routeF").src = "../img/noteRoute.png";
    if(props.spaceKeyPressed) {
        document.getElementById("routeSpace1").src = "../img/noteRoutePressed.png";
        document.getElementById("routeSpace2").src = "../img/noteRoutePressed.png";
    }else {
        document.getElementById("routeSpace1").src = "../img/noteRoute.png";
        document.getElementById("routeSpace2").src = "../img/noteRoute.png";
    }
    if(props.jKeyPressed) document.getElementById("routeJ").src = "../img/noteRoutePressed.png";
    else document.getElementById("routeJ").src = "../img/noteRoute.png";
    if(props.kKeyPressed) document.getElementById("routeK").src = "../img/noteRoutePressed.png";
    else document.getElementById("routeK").src = "../img/noteRoute.png";
    if(props.lKeyPressed) document.getElementById("routeL").src = "../img/noteRoutePressed.png";
    else document.getElementById("routeL").src = "../img/noteRoute.png";
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