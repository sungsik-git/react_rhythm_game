import React from "react";

function SelectedGameInfo(props){
    const currentMusic = props.musicList.find(game => game.id === props.currentMusicID)

    return(
      <div id="selectedGameInfoContainer">
        {currentMusic && (<div key={currentMusic.id} id="selectedGameInfo">
            <div>{currentMusic.title}</div>
            <div>{currentMusic.artist}</div>
        </div>
        )}
      </div>  
    );
}

export default SelectedGameInfo 