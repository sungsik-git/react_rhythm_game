import React from "react";

function MusicListSlideButton(props) {
    const maxMusicID = props.maxMusicID;
    const minMusicID = props.minMusicID;

    const prevHandle = () => {
        const newMusicID = props.currentMusicID - 1;
        if (newMusicID === 0) {
            props.setCurrentMusicID(maxMusicID);
        } else {
            props.setCurrentMusicID(newMusicID);
        }
    };

    const nextHandle = () => {
        const newMusicID = props.currentMusicID + 1;
        if (newMusicID > maxMusicID) {
            props.setCurrentMusicID(minMusicID);
        } else {
            props.setCurrentMusicID(newMusicID);
        }
    };
    
  return (
    <div>
      <input
        type="button"
        onClick={() => prevHandle() }
        value="Prev"
      ></input>
      <input
        type="button"
        onClick={() => nextHandle() }
        value="Next"
      ></input>
    </div>
  );
  
}



export default MusicListSlideButton;
