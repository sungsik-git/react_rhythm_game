import React from 'react';
import Background from '../Background';
import HomeButton from '../button/HomeButton';
import GameList from '../GameList';
import MusicListSlideButton from '../button/MusicListSlideButton';

function GameChoiceComponent(props){
    //ID의 최대값
    const maxMusicID = Math.max(...props.musicList.map(game => game.id));
    const minMusicID = Math.min(...props.musicList.map(game => game.id));

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
                maxMusicID={maxMusicID}
                minMusicID={minMusicID}
            />

        </div>
    );
}

export default GameChoiceComponent