import React, { useState } from 'react'
import Background from '../Background'
import HomeButton from '../button/HomeButton';
import GameChoiceButton from '../button/GameChoiceButton';
import SelectedGameInfo from '../SelectedGameInfo';
import KeypadUI from '../KeypadUI';
import KeyPressCheck from '../KeyPressCheck';
import Game from '../Game';

function GamePlayComponent(props){
    //key pressed check
    const [sKeyPressed, setSKeyPressed] = useState(false)
    const [dKeyPressed, setDKeyPressed] = useState(false)
    const [fKeyPressed, setFKeyPressed] = useState(false)
    const [spaceKeyPressed, setSpaceKeyPressed] = useState(false)
    const [jKeyPressed, setJKeyPressed] = useState(false)
    const [kKeyPressed, setKKeyPressed] = useState(false)
    const [lKeyPressed, setLKeyPressed] = useState(false)
    
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
            <KeypadUI 
                sKeyPressed={sKeyPressed}
                dKeyPressed={dKeyPressed}
                fKeyPressed={fKeyPressed}
                spaceKeyPressed={spaceKeyPressed}
                jKeyPressed={jKeyPressed}
                kKeyPressed={kKeyPressed}
                lKeyPressed={lKeyPressed}
            />
            {/* keyPressCheck */}
            <KeyPressCheck 
                setSKeyPressed={setSKeyPressed}
                setDKeyPressed={setDKeyPressed}
                setFKeyPressed={setFKeyPressed}
                setSpaceKeyPressed={setSpaceKeyPressed}
                setJKeyPressed={setJKeyPressed}
                setKKeyPressed={setKKeyPressed}
                setLKeyPressed={setLKeyPressed}
            />
            {/* Note */}
            <Game />
        </div>
    );
    
}

export default GamePlayComponent