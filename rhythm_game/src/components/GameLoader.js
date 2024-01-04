import React from "react";
import Game1Loading from "./Loading/Game1Loading";

function GameLoader(props) {
    const currentMusicID = props.currentMusicID;
    var game = null;
    
    if(currentMusicID===1){
        game = <Game1Loading />
    }
    return game;
}

export default GameLoader;
