import React from 'react'
import Background from '../Background'
import HomeButton from '../HomeButton';
import GameChoiceButton from '../GameChoiceButton';

function Game1_Component(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}
            currentMusicID={props.currentMusicID}/>
            <HomeButton
            setViewMode={props.setViewMode}/>
            <GameChoiceButton
            setViewMode={props.setViewMode}/>
        </div>
    );
}

export default Game1_Component