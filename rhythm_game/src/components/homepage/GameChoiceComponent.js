import React from 'react';
import Background from '../Background';
import HomeButton from '../button/HomeButton';
import GameList from '../GameList';
import MusicListSlideButton from '../button/MusicListSlideButton';

function GameChoiceComponent(props){
    return(
        <div>
            <Background 
                viewMode={props.viewMode}
                currentMusicID={props.currentMusicID}/>
            <HomeButton
                setViewMode={props.setViewMode}/>
            <GameList 
                musicList={props.musicList} 
                setViewMode={props.setViewMode}
                setCurrentMusicID={props.setCurrentMusicID}
                currentMusicID={props.currentMusicID}
                setMusicList={props.setMusicList}/>
            <MusicListSlideButton
                setCurrentMusicID={props.setCurrentMusicID}
                currentMusicID={props.currentMusicID}
            />

        </div>
    );
}

export default GameChoiceComponent