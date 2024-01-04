import React from "react";
import Note from "./Note";

function Game(props) {
    const createNotes = () => {
        const notesData = [
          { startTime: 1000, keypad: "s", pressTime: 0 },
          { startTime: 2000, keypad: "d", pressTime: 0 },
          { startTime: 3000, keypad: "f", pressTime: 0 },
          { startTime: 3000, keypad: "space", pressTime: 0 },
          { startTime: 3000, keypad: "j", pressTime: 0 },
          { startTime: 3000, keypad: "k", pressTime: 0 },
          { startTime: 3000, keypad: "l", pressTime: 0 },
        ];
        return notesData.map((noteData, index) => (
            <Note
              key={index}
              startTime={noteData.startTime}
              keypad={noteData.keypad}
              pressTime={noteData.pressTime}
            />
          ));
        };
      
        return <div>{createNotes()}</div>;
}

export default Game;
