
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import PiuSicuroFresco5 from "../assets/Più sicuro del fresco (5).png";
import AmareIlMare6 from "../assets/Amare il mare (6).png";
import AmareIlMare7 from "../assets/Amare il mare (7).png";
import ChiSiamo5 from "../assets/Chi siamo (5).png";
import PiuFrescoMain from "../assets/Più fresco del fresco.png"; // nome asset invariato
import Footer2 from "../assets/Footer (2).png";
import Footer from "../assets/Footer.png"
import Footer1 from "../assets/Footer (1).png";


const PiuFrescoDelFresco: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 900 : true);
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <div className="app" style={{ minHeight: "100vh", width: "100vw", background: "#fff" }}>
      <Navbar />
      <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", background: "#fff" }}>
        {/* Mobile: single image */}
        {!isDesktop && (
          <section className="full-width-section">
            <img src={PiuFrescoMain} alt="Più sicuro del fresco" className="section-image" style={{ width: '100%', display: 'block' }} />
          </section>
        )}

        {isDesktop && (
          <img src={PiuSicuroFresco5} alt="Più sicuro del fresco" style={{ width: "100%", display: "block" }} />
        )}
        {/* Inserisci qui i contenuti specifici */}
{!isDesktop && (
          <img src={Footer1} alt="Footer" style={{ width: '100%', display: 'block', background: '#fff', marginTop: '-80px' }} />
        )}         </main>
    </div>
  );
};

export default PiuFrescoDelFresco;
