import React from "react";

function Note(props) {
    //width 설정
    var width = '150px'
    if(props.keypad === 'space') width = '300px'
    // key에 따른 x좌표
    function setXPosition(keypad) {
        switch (keypad) {
        case "s":
            return 325;
        case "d":
            return 480;
        case "f":
            return 635;
        case "space":
            return 795;
        case "j":
            return 1110;
        case "k":
            return 1265;
        case "l": 
            return 1420;
        default:
            return 0;
        }
    }

    const noteStyle = {
        position: 'absolute',
        left: setXPosition(props.keypad),
        width: width,
        height: '68px'
    };

    return (
        <div>
        <img src="../img/noteBasic.png" alt="" style={noteStyle}></img>
        </div>
    );
    }

    export default Note;
