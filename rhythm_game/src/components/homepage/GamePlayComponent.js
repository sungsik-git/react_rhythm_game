import React from 'react'
import Background from '../Background'
import HomeButton from '../button/HomeButton';
import GameChoiceButton from '../button/GameChoiceButton';

function GamePlayComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}
            currentMusicID={props.currentMusicID}
            musicList={props.musicList}/>
            <HomeButton
            setViewMode={props.setViewMode}/>
            <GameChoiceButton
            setViewMode={props.setViewMode}/>
        </div>
    );
}

export default GamePlayComponent