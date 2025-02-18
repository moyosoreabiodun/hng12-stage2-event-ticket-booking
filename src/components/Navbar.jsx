import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  return (

    <nav className="nav-bar">
        <img src="../public/ticz.svg" alt="Logo" width="50" /> 
        
        <div className="navbar-buttons"> 
            <button className="navbar-button" onClick={() => setActive("events")}>Events</button>
            <button className="navbar-button" onClick={() => setActive("my-tickets")}>My Tickets</button>
            <button className="navbar-button" onClick={() => setActive("about-project")}>About Project</button>
        </div>

        <div>
            <button className="my-tickets-button">My Tickets →</button>
        </div>
  </nav>
  );
}

export default Navbar;
