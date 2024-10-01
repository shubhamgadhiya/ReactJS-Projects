import React, {useEffect, useRef, useState} from 'react';

function Counter() {
  const [time, setTime] = useState(0);

  console.log('time', time);
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(false);
  const [value, setValue] = useState(0);

  const intervalRef = useRef(null);

  const handleInput = event => {
    setTime(parseFloat(event.target.value) * 60);
    setValue(event.target.value);
    if (event.target.value < 0) alert('Enter Value of Greter then 0');
  };

  const formetTime = () => {
    if (Number.isNaN(time) || time < 0) {
      return '00 : 00';
    }
    const min = String(Math.floor(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');

    return `${min} : ${sec}`;
  };
  const handlestart = () => {
    if(value == 0) return alert("Enter a minute ")
    setActive(true);
    setPause(false);
  };
  const handlepause = () => {
    setPause(!pause);
  };
  const handlereset = () => {
    clearInterval(intervalRef.current);
    setActive(false);
    setPause(false);
    setTime(0);
    setValue(0);
  };
  useEffect(() => {
    if (active && !pause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    } else if (active && time === 0) {
      clearInterval(intervalRef.current);
      setActive(false);
      alert('time is up');
    }
    return () => clearInterval(intervalRef.current);
  }, [active, pause, time]);
  return (
    <div className="countdown-timer">
      <h1>Counter Timer</h1>
      <div className="timer-display">
        <input
          type="number"
          placeholder="Enter time in minutes"
          onChange={handleInput}
          defaultValue={0}
          value={value}
        />
        <div>{formetTime()}</div>

        <div className="timer-controls">
          <button onClick={handlestart} disabled={active}>
            Start
          </button>
          <button onClick={handlepause} disabled={!active}>
            {pause ? 'Resume' : 'Pause'}
          </button>
          <button onClick={handlereset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
