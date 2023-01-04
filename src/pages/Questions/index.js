import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Questions = () => {
  const [stopClock, setStopClock] = useState(true);
  const [seconds, setSeconds] = useState(30);
  const onClick = (a, b) => {
    setStopClock((oldState) => !oldState);
  };
  const onUpdate = (a) => {
    setSeconds(a);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "300px", marginTop: "200px" }}>
        <CountdownCircleTimer
          isPlaying={stopClock}
          duration={30}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onUpdate={(a) => onUpdate(a)}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
        <button onClick={(a, b) => onClick(a, b)}>
          {stopClock === true ? "stop" : "start"}
        </button>
      </div>
    </div>
  );
};
export default Questions;
