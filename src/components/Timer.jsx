import { useEffect } from "react";

function Timer(props) {

  useEffect(() => {
    let interval;
    if (props.isRunning) {
      interval = setInterval(() => {
        props.setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [props.isRunning]);

  return (
    <div className="timer">
      <p>Time: <span className="timer_time" style={{color: props.time>60?'#ff0000':'#85ff85'}}>{props.time}</span> seconds</p>
    </div>
  );
}

export default Timer;
