import React from 'react';

function GameList(props) {
  return (
    <div id='gameListBox'>
      {props.musicList.map(game => (
        <div key={game.id}>
          <img src={game.imgsrc} alt={game.title} class='musicListImg' onClick={(e) => {
            props.setViewMode('play')
            props.setCurrentMusicID(game.id)
          }} />
        </div>
      ))}
    </div>
  );
}

export default GameList;
