import { React } from "react";

function TicketSelection({ setStep, ticketType, setTicketType, ticketQuantity, setTicketQuantity }) {
    return (
      <div className="container">
        <div className="eventDetails">
            <h1>Techember Fest "25</h1>
            <p>Join us for an unforgettable experience at <br/>Techember Fest "25! Secure your spot now</p>
            <p><span>📍 Miniminimanimo, Lagos</span> || <span>March 15, 2025 | 7:00 PM</span></p>
        </div>
        <div className="line-break"></div>
        <label>Select Ticket Type:</label>
      <div className="ticketButtons">
        <button className="ticketButton"
          onClick={() => setTicketType("Free")} 
        >
          <strong>Free</strong> <p>REGULAR ACCESS<br/>20/52</p>
        </button>
        <button className="ticketButton"
          onClick={() => setTicketType("VIP")} 
        >
          <strong>$150</strong> <p>VIP ACCESS<br/>20/52</p>
        </button>
        <button className="ticketButton"
          onClick={() => setTicketType("VVIP")} 
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
          
        <div className="navigation-buttons">
          <button className="navigation-button-cancel" onClick={() => { setTicketType(""); setTicketQuantity(1); }}>Cancel</button>
          <button className="navigation-button-next" onClick={() => setStep(2)} disabled={!ticketType}>Next</button>
        </div>
      </div>
    );
  }


export default TicketSelection;