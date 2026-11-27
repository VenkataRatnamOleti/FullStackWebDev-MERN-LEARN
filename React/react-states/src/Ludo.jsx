import { useState } from "react";

export default function Ludo() {
  let [moves, setMoves] = new useState({
    blue: 0,
    red: 0,
    green: 0,
    yellow: 0,
  });

  let [arr, setArr] = new useState(["no moves"]);

  function updateBlue() {
    // setMoves((prevMoves) => {
    //   return { ...prevMoves, blue: prevMoves.blue + 1 };
    // }); // Spreading of Object is needed

    setArr((prevArr) => {
      return [...prevArr, "blue"];
    });
    console.log(arr);
  }

  function updateRed() {
    setMoves((prevMoves) => {
      return { ...prevMoves, red: prevMoves.red + 1 };
    }); // Spreading of Object is needed
  }

  function updateGreen() {
    setMoves((prevMoves) => {
      return { ...prevMoves, green: prevMoves.green + 1 };
    }); // Spreading of Object is needed
  }

  function updateYellow() {
    setMoves((prevMoves) => {
      return { ...prevMoves, yellow: prevMoves.yellow + 1 };
    }); // Spreading of Object is needed
  }
  return (
    <div>
      <p>Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue = {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Red = {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={updateRed}>
          +1
        </button>
        <p>Green = {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={updateGreen}>
          +1
        </button>
        <p>Yellow = {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
      </div>
    </div>
  );
}
