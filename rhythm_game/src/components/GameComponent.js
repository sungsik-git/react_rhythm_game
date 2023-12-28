import React from 'react'
import Background from './Background'

function GameComponent(props){
    return(
        <div>
            <Background 
            viewMode={props.viewMode}/>
        </div>
    );
}

export default GameComponent