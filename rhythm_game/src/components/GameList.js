import React from 'react';

function GameList(props) {
  // currentMusicID와 일치하는 음악 정보 가져오기
  const currentMusic = props.musicList.find(game => game.id === props.currentMusicID);
  return (
    <div id='gameListBox'>
      {currentMusic && (
        <div key={currentMusic.id} id='gameListBox'>
          <img
            src={currentMusic.imgsrc}
            alt={currentMusic.title}
            className='musicListImg'
            onClick={() => {
              props.setViewMode('play');
              props.setCurrentMusicID(currentMusic.id);
            }}
          />
          <div id='musicInfo'>{currentMusic.title} - {currentMusic.artist}</div>
        </div>
      )}
    </div>
  );
}

export default GameList;
