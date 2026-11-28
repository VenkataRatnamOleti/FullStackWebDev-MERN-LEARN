import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";
import Button from "./Button";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = new useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div className="lottery">
      <h2>Lottery Game</h2>
      <Ticket ticket={ticket} />
      <Button action={buyTicket}></Button>
      <h3>{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
