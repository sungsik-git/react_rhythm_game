import React from 'react'
import Background from '../Background'
import GameStartButton from '../button/GameStartButton';

function HomeComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}
            currentMusicID={props.currentMusicID}/>
            <GameStartButton
            setViewMode={props.setViewMode} />
        </div>
    );
}

export default HomeComponent