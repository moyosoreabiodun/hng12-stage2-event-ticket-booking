import { React } from "react";
import Barcode from "react-barcode";

function TicketDisplay({ formData, ticketType, setStep, ticketQuantity }) {
    const handleDownload = () => {
        alert("Downloading ticket...");
      };
    
    return (
      <div class="container">
        <h1>Your Ticket is Booked!</h1>
        <p>Check your email for a copy or you can <strong>download</strong></p>
        
        <div>
            <h1>Techember Fest "25</h1>
            <p>📍 Miniminimanimo, Lagos</p>
            <p>📅March 15, 2025 | 7:00 PM</p>
            {formData.image && <img src={formData.image} alt="Uploaded" width="100" />}
            
            <div>
                <p><span>Enter your name</span> <br/> {formData.name}</p>
                <p><span>Enter your email*</span> <br/> {formData.email}</p>
                <p><span> Ticket Type:</span> <br/> {ticketType}</p>
                <p><span> Ticket for:</span> <br/> {ticketQuantity}</p>
                <p><span> Special Request?</span> <br/> {formData.specialRequest}</p>
            </div>
        </div>
        <div>
            <Barcode value={`${formData.email}-${ticketType}-${ticketQuantity}`} />
        </div>
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <button 
            onClick={() => setStep(1)} 
            style={{ padding: "10px 15px", background: "#28A770", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Book Another Ticket
            </button>

            <button 
            onClick={handleDownload} 
            style={{ padding: "10px 15px", background: "#28A745", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
            Download Ticket
            </button>
        </div>
      </div>
    );
  }
  
export default TicketDisplay;
 