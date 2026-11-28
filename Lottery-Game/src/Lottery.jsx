import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery() {
  let [ticket, setTicket] = new useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  let buyTicket = () =>{
    setTicket(genTicket(3));
  }
  return (
    <div className="lottery">
      <h2>Lottery Game</h2>
      <div>
        <Ticket ticket={ticket}></Ticket>
      </div>
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
