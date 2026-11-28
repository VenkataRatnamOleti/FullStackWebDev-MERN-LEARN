import TicketNum from "./TicketNum"
import "./Ticket.css";

export default function Ticket({ticket}){
    return (
        <div className="Ticket">
            <p>Ticket</p>
            <br />
            {ticket.map((num, idx)=>{
                return <TicketNum num={num} key={idx}/>
            })}
        </div>
    )
}