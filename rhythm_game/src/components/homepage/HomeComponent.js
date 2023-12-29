import React from 'react'
import Background from '../Background'
import GameStartButton from '../GameStartButton';

function HomeComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}/>
            <GameStartButton
            setViewMode={props.setViewMode} />
        </div>
    );
}

export default HomeComponent