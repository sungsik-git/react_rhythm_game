import React from "react";

function MusicListSlideButton(props) {
  return (
    <div>
      <input
        type="button"
        onClick={() => props.setCurrentMusicID(props.currentMusicID - 1)}
        value="Prev"
      ></input>
      <input
        type="button"
        onClick={() => props.setCurrentMusicID(props.currentMusicID + 1)}
        value="Next"
      ></input>
    </div>
  );
}

export default MusicListSlideButton;
