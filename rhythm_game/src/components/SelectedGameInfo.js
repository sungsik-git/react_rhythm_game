import React from "react";

function SelectedGameInfo(props){
    const currentMusic = props.musicList.find(game => game.id === props.currentMusicID)

    return(
      <div id="selectedGameInfoContainer">
        {currentMusic && (<div key={currentMusic.id} id="selectedGameInfo">
            <h3>{currentMusic.title}</h3>
            <h3>{currentMusic.artist}</h3>
        </div>
        )}
      </div>  
    );
}

export default SelectedGameInfo 