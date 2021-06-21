import { useState, useEffect } from "react";
import classes from "./App.module.css";

function App() {
  const [sClicked, setsClicked] = useState(false);
  const [cClicked, setcClicked] = useState(false);
  let [time, setTime] = useState(0);
  let [sTime, setsTime] = useState(0);
  let [mTime, setmTime] = useState(0);
  const [gameOn, setGameOn] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameOn) {
        setTime(time++);
        if (time > 99) {
          setsTime(sTime + 1);
          setTime(0);
        }
        if (sTime === 60) {
          setmTime(mTime + 1);
          setsTime(0);
        }
      }
    }, 4);

    return () => clearInterval(interval);
  }, [time, sTime, mTime, gameOn]);

  // const secondCalculator = () => {
  //   const timeValue = 1000 / 60;
  // };

  const startClickHandler = () => {
    setsClicked(true);
    setTimeout(() => {
      console.log("Clicked");
      setsClicked(false);
    }, 200);
    gameOn ? setGameOn(false) : setGameOn(true);
  };
  const clearClickHandler = () => {
    console.log("Clear Clicked");
    setcClicked(true);
    setTimeout(() => {
      console.log("Clicked");
      setcClicked(false);
    }, 200);
    setTime(0);
    setsTime(0);
    setmTime(0);
    setGameOn(false);
  };
  return (
    <div className={classes.App}>
      <div className={classes.header}>Stopwatch</div>
      <div className={classes.flexContainer}>
        <div className={classes.timerContainer}>
          <div className={classes.stpWch}>
            <div className={classes.box}>{mTime}</div>:
            <div className={classes.box}>{sTime}</div>:
            <div className={classes.box}>{time}</div>
          </div>
        </div>
        <button
          className={sClicked ? classes.btnFocus : null}
          onClick={startClickHandler}
        >
          {gameOn ? "Pause" : "Start"}
        </button>
        <button
          className={cClicked ? classes.btnFocus : null}
          onClick={clearClickHandler}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
