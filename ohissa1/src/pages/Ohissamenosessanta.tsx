import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AmareIlMare8 from "../assets/Amare il mare (8).png";
import AmareIlMare9 from "../assets/Amare il mare (9).png";
import ChiSiamo6 from "../assets/Chi siamo (6).png";
import Footer2 from "../assets/Footer (2).png";
import OhissaMenoImg from "../assets/OHissa menosessanta.png";
import Hero7 from "../assets/Hero (7).png";
import AmareIlMare15 from "../assets/Amare il mare (15).png";

const OhissaMenoSessanta: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="app" style={{ minHeight: "100vh", width: "100vw", background: "#fff" }}>
      <Navbar />
      <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", background: "#fff" }}>
        {/* Mobile: Hero (7).png, Amare il mare (15).png, Footer */}
        {!isDesktop ? (
          <>
            <section className="full-width-section">
              <img src={Hero7} alt="Hero 7" className="section-image" />
            </section>
            <section className="full-width-section">
              <img src={AmareIlMare15} alt="Amare il mare 15" className="section-image" />
            </section>
            <img src={Footer2} alt="Footer" style={{ width: "100%", display: "block", background: "#fff", marginTop: "-80px" }} />
          </>
        ) : (
          <img src={OhissaMenoImg} alt="OHissa menosessanta" style={{ width: "100%", display: "block", background: "#fff" }} />
        )}
      </main>
    </div>
  );
};

export default OhissaMenoSessanta;