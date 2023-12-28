import React, { useState } from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import GameComponent from './components/GameComponent';

function App() {
  const [viewMode, setViewMode] = useState("home");

  if(viewMode === 'home'){

  }else if(viewMode === 'game'){

  }

  return (
    <div className="App">
      {viewMode === 'home' && <HomeComponent 
        viewMode={viewMode}
        setViewMode={setViewMode}/>}
      {viewMode === 'game' && <GameComponent viewMode={viewMode}/>}
    </div>
  );
}

export default App;
