import React from 'react';

function Background(props) {
    var viewMode = props.viewMode;
    var background = null;
    if(viewMode === 'home'){
        background = <img src={require('../img/background.png')} id='background'/>
    }else if(viewMode === 'game'){
        background = <img src={require('../img/game1_background.png')} id='background'/>
    }
  return background;
}

export default Background;
