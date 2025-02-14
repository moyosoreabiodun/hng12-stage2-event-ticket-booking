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
    <div>
      <label>Upload Image:</label>
      <div
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

      <label>Enter your Name</label>
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

      <label>Enter your Email*</label>
      <input type="email" name="email" placeholder="📧hello@avioflagos.io" value={formData.email} onChange={handleInputChange} required />

      <label>Special Request?</label>
      <textarea name="specialRequest" value={formData.specialRequest} onChange={handleInputChange}></textarea>

      <button onClick={() => setStep(1)}>Back</button>
      <button onClick={() => formData.email ? setStep(3) : alert("Email is required!")}>Get My {ticketType} Ticket</button>
    </div>
  );
}

export default AttendeeDetails;
