import React from 'react';
import Background from '../Background';
import HomeButton from '../HomeButton';
import GameList from '../GameList';

function GameChoiceComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}/>
            <HomeButton
            setViewMode={props.setViewMode}/>
            <GameList 
            musicList={props.musicList} setViewMode={props.setViewMode}/>
        </div>
    );
}

export default GameChoiceComponent