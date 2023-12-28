import React from 'react'

function GameStartButton(props) {
    return (
      <input 
        type='button' 
        id="gameStartButton" 
        onClick={() => {
          props.setViewMode("game");
        }}
      />
    );
  }
  
  export default GameStartButton;