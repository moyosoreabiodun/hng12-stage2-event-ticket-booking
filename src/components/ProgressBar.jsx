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
        <div style={{ background: "#0E464F", height: "4px", borderRadius: "5px", width: "100%",  }}>
          <div
            style={{
              width: `${progress}%`,
              height: "4px",
              background: "#24A0B5",
              borderRadius: "5px",
              transition: "width 0.3s ease"
            }}
          />
        </div>
      </div>  
    );
}

  export default ProgressBar;