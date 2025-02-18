import { useState } from "react";
import TicketSelection from "./TicketSelection";

function AttendeeDetails({ setStep, formData, setFormData, ticketType }) {
  const [dragging, setDragging] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (file) => {
    setFormData({ ...formData, image: URL.createObjectURL(file) });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="container">
      <label>Upload Profile Photo</label>
      <div className="photo-container"
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
        style={{
          border: "2px dashed #007BFF",
          padding: "20px",
          textAlign: "center",
          background: dragging ? "#e6f7ff" : "#fff",
          cursor: "pointer",
        }}
      >
        {formData.image ? (
          <img src={formData.image} alt="Uploaded" width="100" />
        ) : (
          <p>Drag & Drop or Click to Upload</p>
        )}
      </div>
      <input 
        type="file" 
        id="fileInput" 
        style={{ display: "none" }} 
        accept="image/*" 
        onChange={(e) => handleImageUpload(e.target.files[0])} 
      />
      <div className="line-break"></div>
      <div className="label-input">
      <label className="attendee-label">Enter your Name</label>
      <input className="attendee-input" type="text" name="name" value={formData.name} onChange={handleInputChange} />
      </div>

      <label className="attendee-label">Enter your Email*</label>
      <input className="attendee-input" type="email" name="email" placeholder="📧hello@avioflagos.io" value={formData.email} onChange={handleInputChange} required />

      <label className="attendee-label">Special Request?</label>
      <textarea className="attendee-input" name="specialRequest" value={formData.specialRequest} onChange={handleInputChange} rows={3}></textarea>

      <div className="navigation-buttons">
        <button className="navigation-button-cancel" onClick={() => setStep(1)}>Back</button>
        <button className="navigation-button-next" onClick={() => formData.email ? setStep(3) : alert("Email is required!")}>Get My {ticketType} Ticket</button>
      </div>
    </div>
  );
}

export default AttendeeDetails;
