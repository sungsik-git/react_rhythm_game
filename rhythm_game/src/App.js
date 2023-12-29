import React, { useState } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import GameChoiceComponent from './components/GameChoiceComponent';
import GamePlayComponent from './components/GamePlayComponent';

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
        viewMode={viewMode}/>
      }
    </div>
  );
}

export default App;
