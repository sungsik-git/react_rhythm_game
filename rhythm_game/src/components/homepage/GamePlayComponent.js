import React from 'react'
import Background from '../Background'
import HomeButton from '../HomeButton';

function GamePlayComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}
            currentMusicID={props.currentMusicID}/>
            <HomeButton
            setViewMode={props.setViewMode}/>
        </div>
    );
}

export default GamePlayComponent