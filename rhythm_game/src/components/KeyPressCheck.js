import { useEffect } from "react";

function KeyPressCheck(props) {
  const {
    setSKeyPressed,
    setDKeyPressed,
    setFKeyPressed,
    setSpaceKeyPressed,
    setJKeyPressed,
    setKKeyPressed,
    setLKeyPressed,
  } = props;

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "s":
      case "S":
      case "ㄴ":
        setSKeyPressed(true);
        break;
      case "d":
      case "D":
      case "ㅇ":
        setDKeyPressed(true);
        break;
      case "f":
      case "F":
      case "ㄹ":
        setFKeyPressed(true);
        break;
      case " ":
        setSpaceKeyPressed(true);
        break;
      case "j":
      case "ㅓ":
      case "J":
        setJKeyPressed(true);
        break;
      case "k":
      case "K":
      case "ㅏ":
        setKKeyPressed(true);
        break;
      case "l":
      case "L":
      case "ㅣ":
        setLKeyPressed(true);
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (e) => {
    switch (e.key) {
      case "s":
      case "S":
      case "ㄴ":
        setSKeyPressed(false);
        break;
      case "d":
      case "D":
      case "ㅇ":
        setDKeyPressed(false);
        break;
      case "f":
      case "F":
      case "ㄹ":
        setFKeyPressed(false);
        break;
      case " ":
        setSpaceKeyPressed(false);
        break;
      case "j":
      case "ㅓ":
      case "J":
        setJKeyPressed(false);
        break;
      case "k":
      case "K":
      case "ㅏ":
        setKKeyPressed(false);
        break;
      case "l":
      case "L":
      case "ㅣ":
        setLKeyPressed(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return null;
}

export default KeyPressCheck;