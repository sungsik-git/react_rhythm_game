import React, { useState, useEffect } from "react";

function Game1Note(props) {
  const [bottom, setBottom] = useState(900);
  const [missed, setMissed] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        const speed = 5;
        setBottom((prevBottom) => prevBottom - speed);

        if (bottom <= 0) {
          setMissed(true);
          clearInterval(intervalId);
          props.onMiss();
        }
      }, 16);

      return () => clearInterval(intervalId);
    }, props.startTime);

    return () => clearTimeout(timeoutId);
  }, [bottom, props.startTime, props.onMiss]);

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
