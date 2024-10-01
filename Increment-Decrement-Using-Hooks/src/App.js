import React, { useState, useEffect } from "react";
import "./App.css";

const UseState = () => {

  const [myNum, setMyNum] = useState(0);
  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });
  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button" onClick={() => setMyNum(myNum + 1)}>
        <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCRIMENT
        </div>
        <div
          class="button"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECRIMENT
        </div>
        <div
          class="button"
          onClick={() => (setMyNum(0))}>
           <span></span>
          <span></span>
          <span></span>
          <span></span>
          RESET
        </div>
      </div>
    </>
  );
};

export default UseState;
