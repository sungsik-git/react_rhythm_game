import React from 'react'
import Background from '../Background'
import HomeButton from '../button/HomeButton';
import GameChoiceButton from '../button/GameChoiceButton';
import SelectedGameInfo from '../SelectedGameInfo';
import KeypadUI from '../KeypadUI';

function GamePlayComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}
            currentMusicID={props.currentMusicID}
            musicList={props.musicList}/>
            {/* button */}
            <HomeButton
            setViewMode={props.setViewMode}/>
            <GameChoiceButton
            setViewMode={props.setViewMode}/>
            {/* UI */}
            <SelectedGameInfo
            musicList={props.musicList}
            currentMusicID={props.currentMusicID}
            gameScore={props.gameScore}
            />
            <KeypadUI />
        </div>
    );
}

export default GamePlayComponent