import React from 'react';

function Background(props) {
    var viewMode = props.viewMode;
    var background = null;
    if(viewMode === 'home'){
        background = <img src={require('../img/home_background.png')} id='background'/>
    }else if(viewMode === 'game'){
        background = <img src={require('../img/game_choice_background.jpg')} id='background'/>
    }else if(viewMode === 'play'){
        background = <img src={require('../img/game1_thumbnail.jpg')} id='background'/>
    }
  return background;
}

export default Background;
