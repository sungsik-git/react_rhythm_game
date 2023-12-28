import React from 'react'

function GameStartButton(props){
    return(
        <input 
            type='button' 
            id="gameStartButton" 
            onClick={(e) => {
                props.setViewMode("game");
        }}>
        </input>
    );
}

export default GameStartButton