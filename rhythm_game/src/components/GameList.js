import React from 'react';

function GameList(props) {
  return (
    <div id='gameListBox'>
      {props.musicList.map(game => (
        <div key={game.id}>
          <img src={game.imgsrc} alt={game.title} />
        </div>
      ))}
    </div>
  );
}

export default GameList;