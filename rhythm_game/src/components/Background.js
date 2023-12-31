import React from 'react';

function Background(props) {
    const viewMode = props.viewMode;
    const currentMusicID = props.currentMusicID;
    let background = null;

    if (viewMode === 'home') {
        background = <img src={'/img/home_background.png'} id='background' alt='Home Background' />;
    } else if (viewMode === 'game') {
        background = <img src={'/img/game_choice_background.jpg'} id='background' alt='Game Choice Background' />;
    } else if (viewMode === 'play') {
        //music id별 배경 이미지를 불러옴
        if(currentMusicID === 1){
            background = <img src={'/img/game1_thumbnail.jpg'} id='background' alt='Game 1 Thumbnail' />;
        }else if(currentMusicID === 2){
            background = <img src={'/img/game2_thumbnail.jpg'} id='background' alt='Game 2 Thumbnail' />;
        }else if(currentMusicID === 3){
            background = <img src={'/img/game3_thumbnail.jpg'} id='background' alt='Game 3 Thumbnail' />;
        }else if(currentMusicID === 4){
            background = <img src={'/img/game4_thumbnail.jpg'} id='background' alt='Game 4 Thumbnail' />;
        }else if(currentMusicID === 5){
            background = <img src={'/img/game5_thumbnail.jpg'} id='background' alt='Game 5 Thumbnail' />;
        }
    }

    return background;
}

export default Background;
