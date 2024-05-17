import { NavLink } from "react-router-dom";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <img
          src="src\assets\shelter-logo.png"
          alt="Logo de Wilder Shelter"
          className="landing-logo"
        />
      </nav>
      <section className="landing-info">
        <h1>WILDER SHELTER</h1>
        <h2>Trouve le refuge pour ta randonnée</h2>
        <NavLink to="/map" className="landing-link">
          Carte des refuges
        </NavLink>
      </section>
    </div>
  );
}

export default LandingPage;
