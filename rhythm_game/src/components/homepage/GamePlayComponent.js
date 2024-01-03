import React, { useState } from 'react'
import Background from '../Background'
import HomeButton from '../button/HomeButton';
import GameChoiceButton from '../button/GameChoiceButton';
import SelectedGameInfo from '../SelectedGameInfo';
import KeypadUI from '../KeypadUI';
import KeyPressCheck from '../KeyPressCheck';
import Note from '../Note';

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
                sKeyPressed={sKeyPressed}
                setSKeyPressed={setSKeyPressed}
                dKeyPressed={dKeyPressed}
                setDKeyPressed={setDKeyPressed}
                fKeyPressed={fKeyPressed}
                setFKeyPressed={setFKeyPressed}
                spaceKeyPressed={spaceKeyPressed}
                setSpaceKeyPressed={setSpaceKeyPressed}
                jKeyPressed={jKeyPressed}
                setJKeyPressed={setJKeyPressed}
                kKeyPressed={kKeyPressed}
                setKKeyPressed={setKKeyPressed}
                lKeyPressed={lKeyPressed}
                setLKeyPressed={setLKeyPressed}
            />
            {/* Note */}
            <Note />
        </div>
    );
    
}

export default GamePlayComponent