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
      musicsrc: '../music/game1_selected.mp3', 
      imgsrc: '../img/game1_thumbnail.jpg' 
    },
    { 
      id: 2, 
      title: 'game2', 
      musicsrc: '../music/game2_selected.mp3', 
      imgsrc: '../img/game2_thumbnail.jpg'
    }
  ]);
  const [currentMusicID, setCurrentMusicID] = useState(1);

  return (
    <div className="App">
      {viewMode === 'home' && <HomeComponent 
        viewMode={viewMode}
        setViewMode={setViewMode}/>}
      {viewMode === 'game' && <GameChoiceComponent
        viewMode={viewMode}
        setViewMode={setViewMode}
        musicList={musicList}/>}
      {viewMode === 'play' && <GamePlayComponent 
        viewMode={viewMode}
        setViewMode={setViewMode}
        currentMusicID={currentMusicID}/>
      }
    </div>
  );
}

export default App;
