import React from 'react';

function Background(props) {
    var viewMode = props.viewMode;
    var currentMusicID = props.currentMusicID;
    var background = null;
    if(viewMode === 'home'){
        background = <img src={require('../img/home_background.png')} id='background'/>
    }else if(viewMode === 'game'){
        background = <img src={require('../img/game_choice_background.jpg')} id='background'/>
    }else if(viewMode === 'play'){
        //선택한 노래의 ID에 따라 해당곡의 썸네일이 출력
        if(currentMusicID === 1){
            background = <img src={require('../img/game1_thumbnail.jpg')} id='background'/>
        }else if(currentMusicID === 2){
            background = <img src={require('../img/game2_thumbnail.jpg')} id='background'/>
        }
    }
  return background;
}

export default Background;
