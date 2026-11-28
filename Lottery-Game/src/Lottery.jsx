import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = new useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div className="lottery">
      <h2>Lottery Game</h2>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
