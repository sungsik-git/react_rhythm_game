// import React from 'react';

// function GameList(props) {
//   return (
//     <div id='gameListBox'>
//       {props.musicList.map(game => (
//         <div key={game.id} id='gameListBox'>
//           <img src={game.imgsrc} alt={game.title} class='musicListImg' onClick={(e) => {
//             props.setViewMode('play')
//             props.setCurrentMusicID(game.id)
//           }} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default GameList;

import React from 'react';

function GameList(props) {
  // currentMusicID와 일치하는 음악 정보 가져오기
  const currentMusic = props.musicList.find(game => game.id === props.currentMusicID);
  return (
    <div id='gameListBox'>
      {/* currentMusicID와 일치하는 음악 정보만 출력 */}
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
        </div>
      )}
    </div>
  );
}

export default GameList;
