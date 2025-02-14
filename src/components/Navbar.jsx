import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  return (

    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", borderBottom: "1px solid #ddd" }}>
        <img src="logo.png" alt="Logo" width="50" /> 
        
        <div> 
            <button onClick={() => setActive("events")}>Events</button>
            <button onClick={() => setActive("my-tickets")}>My Tickets</button>
            <button onClick={() => setActive("about-project")}>About Project</button>
        </div>

        <div>
            <button>My Tickets →</button>
        </div>
  </nav>
  );
}

export default Navbar;
