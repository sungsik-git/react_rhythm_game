import React from 'react'

function GameStartButton(props) {
    return (
      <input 
        type='button' 
        id="gameStartButton" 
        value="Game  Start"
        onClick={() => {
          props.setViewMode("game");
        }}
      />
    );
  }
  
  export default GameStartButton;