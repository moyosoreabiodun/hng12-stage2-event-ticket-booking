import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import ProgressBar from "./components/ProgressBar";
import TicketSelection from "./components/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails";
import TicketDisplay from "./components/TicketDisplay";


function App() {
  const [step, setStep] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialRequest: "",
    image: null,
  });

  return (
    <div>
      <Navbar className="nav-bar" />
      <ProgressBar className="progress-bar" step={step} />
      {step === 1 && (
        <TicketSelection 
          setStep={setStep} 
          ticketType={ticketType} 
          setTicketType={setTicketType} 
          ticketQuantity={ticketQuantity} 
          setTicketQuantity={setTicketQuantity} 
        />
      )}
      {step === 2 && (
        <AttendeeDetails 
          setStep={setStep} 
          formData={formData} 
          setFormData={setFormData}
          ticketType={ticketType} 
        />
      )}
      {step === 3 && <TicketDisplay formData={formData} ticketType={ticketType} ticketQuantity={ticketQuantity} />}
    </div>
  );
}

export default App;
