import React from 'react'
import Background from './Background'
import HomeButton from './HomeButton';

function GameComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}/>
            <HomeButton
            setViewMode={props.setViewMode}/>
        </div>
    );
}

export default GameComponent