import React, {useEffect} from "react";
import KeypadInfo from "./KeypadInfo";

function KeypadUI(props){
    useEffect(() => {
        // 키 S
        if (props.sKeyPressed) {
          document.getElementById("routeS").src = "../img/noteRoutePressed.png";
        } else {
          document.getElementById("routeS").src = "../img/noteRoute.png";
        }
      
        // 키 D
        if (props.dKeyPressed) {
          document.getElementById("routeD").src = "../img/noteRoutePressed.png";
        } else {
          document.getElementById("routeD").src = "../img/noteRoute.png";
        }
      
        // 키 F
        if (props.fKeyPressed) {
          document.getElementById("routeF").src = "../img/noteRoutePressed.png";
        } else {
          document.getElementById("routeF").src = "../img/noteRoute.png";
        }
      
        // 키 Space1, Space2
        if (props.spaceKeyPressed) {
          document.getElementById("routeSpace1").src = "../img/noteRoutePressed.png";
          document.getElementById("routeSpace2").src = "../img/noteRoutePressed.png";
        } else {
          document.getElementById("routeSpace1").src = "../img/noteRoute.png";
          document.getElementById("routeSpace2").src = "../img/noteRoute.png";
        }
      
        // 키 J
        if (props.jKeyPressed) {
          document.getElementById("routeJ").src = "../img/noteRoutePressed.png";
        } else {
          document.getElementById("routeJ").src = "../img/noteRoute.png";
        }
      
        // 키 K
        if (props.kKeyPressed) {
          document.getElementById("routeK").src = "../img/noteRoutePressed.png";
        } else {
          document.getElementById("routeK").src = "../img/noteRoute.png";
        }
      
        // 키 L
        if (props.lKeyPressed) {
          document.getElementById("routeL").src = "../img/noteRoutePressed.png";
        } else {
          document.getElementById("routeL").src = "../img/noteRoute.png";
        }
      }, [props.sKeyPressed, props.dKeyPressed, props.fKeyPressed, props.spaceKeyPressed, props.jKeyPressed, props.kKeyPressed, props.lKeyPressed]);
      
    return(
        <div id="keypadContainer">
            <img src="../img/noteRoute.png" id="routeS" alt=""/>
            <img src="../img/noteRouteLine.png" className="routeLine" alt=""></img>
            <img src="../img/noteRoute.png" id="routeD" alt=""/>
            <img src="../img/noteRouteLine.png" className="routeLine" alt=""></img>
            <img src="../img/noteRoute.png" id="routeF" alt=""></img>
            <img src="../img/noteRouteLine.png" className="routeLine" alt=""></img>
            <img src="../img/noteRoute.png" id="routeSpace1" alt=""></img>
            <img src="../img/noteRoute.png" id="routeSpace2" alt=""></img>
            <img src="../img/noteRouteLine.png" className="routeLine" alt=""></img>
            <img src="../img/noteRoute.png" id="routeJ" alt=""></img>
            <img src="../img/noteRouteLine.png" className="routeLine" alt=""></img>
            <img src="../img/noteRoute.png" id="routeK" alt=""></img>
            <img src="../img/noteRouteLine.png" className="routeLine" alt=""></img>
            <img src="../img/noteRoute.png" id="routeL" alt=""></img>
            <KeypadInfo />
            <img src="../img/judgementLine.png" id="judgementLine" alt=""></img>
        </div>
        
    );
}

export default KeypadUI