import { React } from "react";
import Barcode from "react-barcode";

function TicketDisplay({ formData, ticketType, setStep, ticketQuantity }) {
    const handleDownload = () => {
        alert("Downloading ticket...");
      };
    
    return (
      <div class="container">
        <div className="booked-ticket-heading">
        <h1>Your Ticket is Booked!</h1>
        <p>Check your email for a copy or you can <strong>download</strong></p>
        </div>

        <div className="ticket-details">
            <h1>Techember Fest "25</h1>
            <p>📍 Miniminimanimo, Lagos</p>
            <p>📅March 15, 2025 | 7:00 PM</p>
            {formData.image && <img src={formData.image} alt="Uploaded" width="100" />}
            
            <div className="attendee-ticket">
                <p><span>Enter your name</span> <br/> {formData.name}</p>
                <p><span>Enter your email*</span> <br/> {formData.email}</p>
                <p><span> Ticket Type:</span> <br/> {ticketType}</p>
                <p><span> Ticket for:</span> <br/> {ticketQuantity}</p>
                <p><span> Special Request?</span> <br/> {formData.specialRequest}</p>
            </div>
        </div>
        <div className="barcode-container">
            <Barcode className="barcode" value={`${formData.email}-${ticketType}-${ticketQuantity}`} />
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <button className="navigation-button-cancel"
            onClick={() => setStep(1)}>
              Book Another Ticket
            </button>

            <button className="navigation-button-next"
            onClick={handleDownload} >
            Download Ticket
            </button>
        </div>
      </div>
    );
  }
  
export default TicketDisplay;
 