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
        setSKeyPressed(true);
        break;
      case "d":
        setDKeyPressed(true);
        break;
      case "f":
        setFKeyPressed(true);
        break;
      case " ":
        setSpaceKeyPressed(true);
        break;
      case "j":
        setJKeyPressed(true);
        break;
      case "k":
        setKKeyPressed(true);
        break;
      case "l":
        setLKeyPressed(true);
        break;
      default:
        break;
    }
  };

  const handleKeyUp = (e) => {
    switch (e.key) {
      case "s":
        setSKeyPressed(false);
        break;
      case "d":
        setDKeyPressed(false);
        break;
      case "f":
        setFKeyPressed(false);
        break;
      case " ":
        setSpaceKeyPressed(false);
        break;
      case "j":
        setJKeyPressed(false);
        break;
      case "k":
        setKKeyPressed(false);
        break;
      case "l":
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