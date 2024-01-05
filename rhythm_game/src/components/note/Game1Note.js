import React, { useState, useEffect } from "react";

function Game1Note(props) {
  const [bottom, setBottom] = useState(900);
  const [missed, setMissed] = useState(false);
  const [visibility, setVisibility] = useState('visibility');
  var noteSpeed = 5;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBottom((prevBottom) => {

        let newBottom = prevBottom - noteSpeed;

        if (newBottom <= 0) {
          setMissed(true);
          clearInterval(intervalId);
        }

        if (newBottom < 80) {
          setVisibility('hidden');
        } else {
          setVisibility('block');
        }

        return newBottom;
      });
    }, 16);

    return () => clearInterval(intervalId);
  }, [props.onMiss]);

  

  const setXPosition = (keypad) => {
    switch (keypad) {
      case "s":
        return 325;
      case "d":
        return 480;
      case "f":
        return 635;
      case "space":
        return 795;
      case "j":
        return 1110;
      case "k":
        return 1265;
      case "l":
        return 1420;
      default:
        return 0;
    }
  };

  const getWidth = (keypad) => {
    return keypad === 'space' ? '300px' : '150px';
  };

  const noteStyle = {
    visibility: visibility,
    position: 'absolute',
    left: setXPosition(props.keypad),
    bottom: bottom + 'px',
    width: getWidth(props.keypad),
    height: '68px'
  };

  return (
    <div>
      <img src="../img/noteBasic.png" alt="" style={noteStyle}></img>
    </div>
  );
}

export default Game1Note;
