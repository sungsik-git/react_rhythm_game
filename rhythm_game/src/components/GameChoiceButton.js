import React from "react";

function GameChoiceButton(props){
    return(
        <input type="button" value="Back" id="gameChoiceButton" onClick={() => {
            props.setViewMode("game")
        }}></input>
    );
}

export default GameChoiceButton