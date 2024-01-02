import React, { useState } from 'react';
import './App.css';
import HomeComponent from './components/homepage/HomeComponent';
import GameChoiceComponent from './components/homepage/GameChoiceComponent';
import GamePlayComponent from './components/homepage/GamePlayComponent';

function App() {
  const [viewMode, setViewMode] = useState("home");
  const [musicList, setMusicList] = useState([
    { 
      id: 1, 
      title: 'game1', 
      artist: 'artist1',
      musicsrc: '../music/game1_selected.mp3', 
      imgsrc: '/img/game1_thumbnail.jpg' 
    },
    { 
      id: 2, 
      title: 'game2', 
      artist: 'artist2',
      musicsrc: '../music/game2_selected.mp3', 
      imgsrc: '/img/game2_thumbnail.jpg'
    },
    { 
      id: 3, 
      title: 'game3', 
      artist: 'artist3',
      musicsrc: '../music/game3_selected.mp3', 
      imgsrc: '/img/game3_thumbnail.jpg'
    },
    { 
      id: 4,
      title: 'game4', 
      artist: 'artist4',
      musicsrc: '../music/game4_selected.mp3', 
      imgsrc: '/img/game4_thumbnail.jpg'
    },
    { 
      id: 5, 
      title: 'game5', 
      artist: 'artist5',
      musicsrc: '../music/game5_selected.mp3', 
      imgsrc: '/img/game5_thumbnail.jpg'
    }
  ]);
  const [currentMusicID, setCurrentMusicID] = useState(1);
  return (
    <div className="App">
      {viewMode === 'home' && <HomeComponent 
        viewMode={viewMode}
        setViewMode={setViewMode}
        musicList={musicList}
        currentMusicID={currentMusicID}
        />
      }

      {viewMode === 'game' && <GameChoiceComponent
        viewMode={viewMode}
        setViewMode={setViewMode}
        musicList={musicList}
        setMusicList={setMusicList}
        currentMusicID={currentMusicID}
        setCurrentMusicID={setCurrentMusicID}/>
      }

      {viewMode === 'play' && <GamePlayComponent 
        viewMode={viewMode}
        setViewMode={setViewMode}
        musicList={musicList}
        currentMusicID={currentMusicID}
        />
      }
    </div>
  );
}

export default App;
