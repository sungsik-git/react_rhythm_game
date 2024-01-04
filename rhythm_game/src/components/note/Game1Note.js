import React, { useState, useEffect } from "react";

function Game1Note(props) {
  const [bottom, setBottom] = useState(900);
  const [missed, setMissed] = useState(false);
  const [visibility, setVisibility] = useState('hidden');
  const [isNoteDropping, setIsNoteDropping] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const intervalId = setInterval(() => {
        const speed = 5;

        setBottom((prevBottom) => {
          const newBottom = prevBottom - speed;

          if (newBottom <= 0) {
            setMissed(true);
            clearInterval(intervalId);
            props.onMiss();
          }

          if (newBottom < 80) {
            setVisibility('hidden');
          }

          return newBottom;
        });
      }, 16);

      return () => clearInterval(intervalId);
    }, props.startTime);

    return () => clearTimeout(timeoutId);
  }, [props.startTime, props.onMiss]);

  const handleKeyDown = (event) => {
    if (!isNoteDropping) {
      // 노트가 떨어지는 중에만 키보드 이벤트 처리
      // 특정 키에 대한 처리 등을 추가할 수 있음
    }
  };

  const handleKeyUp = (event) => {
    if (!isNoteDropping) {
      // 노트가 떨어지는 중에만 키보드 이벤트 처리
      // 특정 키에 대한 처리 등을 추가할 수 있음
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isNoteDropping, handleKeyDown, handleKeyUp]);

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
