import { React } from "react";

function TicketSelection({ setStep, ticketType, setTicketType, ticketQuantity, setTicketQuantity }) {
    return (
      <div className="container">
        <div className="eventDetails">
            <h1>Techember Fest "25</h1>
            <p>Join us for an unforgettable experience at <br/>Techember Fest "25! Secure your spot now</p>
            <p><span>📍 Miniminimanimo, Lagos</span> || <span>March 15, 2025 | 7:00 PM</span></p>
        </div>

        <label>Select Ticket Type:</label>
      <div className="ticketButtons">
        <button 
          onClick={() => setTicketType("Free")} 
          style={{ background: ticketType === "Free" ? "#007BFF" : "#ccc" }}
        >
          <strong>Free</strong> <p>REGULAR ACCESS<br/>20/52</p>
        </button>
        <button 
          onClick={() => setTicketType("VIP")} 
          style={{ background: ticketType === "VIP" ? "#007BFF" : "#ccc" }}
        >
          <strong>$150</strong> <p>VIP ACCESS<br/>20/52</p>
        </button>
        <button 
          onClick={() => setTicketType("VVIP")} 
          style={{ background: ticketType === "VVIP" ? "#007BFF" : "#ccc" }}
        >
          <strong>$150</strong> <p>VVIP ACCESS<br/>20/52</p>
        </button>
      </div>
  
        <label>Number of Tickets</label>
        <select value={ticketQuantity} onChange={(e) => setTicketQuantity(e.target.value)}>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
          
        <button onClick={() => { setTicketType(""); setTicketQuantity(1); }}>Cancel</button>
        <button onClick={() => setStep(2)} disabled={!ticketType}>Next</button>
      </div>
    );
  }


export default TicketSelection;