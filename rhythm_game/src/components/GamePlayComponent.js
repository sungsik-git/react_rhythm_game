import React from 'react'
import Background from './Background'

function GamePlayComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}/>
        </div>
    );
}

export default GamePlayComponent