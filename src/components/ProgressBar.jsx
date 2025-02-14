import { React } from "react";

function ProgressBar({ step }) {
    const progress = (step / 3) * 100;

    const stepTitles = {
      1: "Ticket Selection",
      2: "Attendee Details",
      3: "Ready"
    };
  
    return (
        <div style={{ position: "relative", width: "100%", marginBottom: "20px" }}>
         {/* Step Labels */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "5px"
        }}>
          <span style={{ fontWeight: "bold" }}>{stepTitles[step]}</span>
          <span>Step {step}/3</span>
        </div>
  
        {/* Progress Bar */}
        <div style={{ background: "#ddd", height: "6px", borderRadius: "5px" }}>
          <div
            style={{
              width: `${progress}%`,
              height: "6px",
              background: "#007BFF",
              borderRadius: "5px",
              transition: "width 0.3s ease"
            }}
          />
        </div>
      </div>  
    );
}

  export default ProgressBar;