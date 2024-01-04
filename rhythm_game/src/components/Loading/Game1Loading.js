import React from "react";
import Game1Note from "../note/Game1Note";

function Game1Loading(props) {
    const handleMiss = () => {
        console.log("Missed!");
        // 노트를 놓친 경우 수행할 작업을 추가합니다.
      };
    
    const createNotes = () => {
        const notesData = [
          { startTime: 1000, keypad: "s", pressTime: 0 },
          { startTime: 2000, keypad: "d", pressTime: 0 },
          { startTime: 3000, keypad: "f", pressTime: 0 },
          { startTime: 4000, keypad: "space", pressTime: 0 },
          { startTime: 5000, keypad: "j", pressTime: 0 },
          { startTime: 6000, keypad: "k", pressTime: 0 },
          { startTime: 7000, keypad: "l", pressTime: 0 },
        ];
        return notesData.map((noteData, index) => (
            <Game1Note
              key={index}
              startTime={noteData.startTime}
              keypad={noteData.keypad}
              pressTime={noteData.pressTime}
              noteSpeed={props.noteSpeed}
              onMiss={handleMiss}
            />
          ));
        };
      
        return <div>{createNotes()}</div>;
}

export default Game1Loading;
