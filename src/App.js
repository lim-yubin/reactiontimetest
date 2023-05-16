import "./App.css";

import React, { useState } from "react";

function App() {
  let startTime;
  let endTime;
  let responseTime;

  const startTest = () => {
    const screen = document.getElementById("screen");
    const result = document.getElementById("reuslt");

    if (screen.className === "waiting") {
      screen.className = "ready";
      screen.textContent = "초록색이 되면 클릭하세요";
      setTimeout(() => {
        startTime = new Date();
        screen.className = "now";
        screen.textContent = "클릭하세요";
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (screen.className === "ready") {
    } else if (screen.className === "now") {
      endTime = new Date();
      responseTime = endTime - startTime;
      result.textContent = responseTime + "ms";
      screen.className = "waiting";
      screen.textContent = "클릭해서 시작하세요";
    }
  };
  return (
    <>
      <div id="screen" className="waiting" onClick={startTest}>
        클릭해서 시작하세요
      </div>
      <h1 id="reuslt"></h1>
    </>
  );
}

export default App;
