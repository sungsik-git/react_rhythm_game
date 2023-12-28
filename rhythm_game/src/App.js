import React, { useState } from 'react';
import './App.css';
import Backgrounnd from './components/Background';
import GameStartButton from './components/GameStartButton';

function App() {
  const [viewMode, setViewMode] = useState("home")
  console.log(viewMode)
  return (
    <div className="App">
      <Backgrounnd viewMode={viewMode}/>
      <GameStartButton />
    </div>
  );
}

export default App;
