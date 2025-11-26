import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Group1 from "../assets/Group 1.png";
import Group1_1 from "../assets/Group 1 (1).png";
// removed Amare il mare for mobile replacement

import Ricette8 from "../assets/Ricette (8).png";
import AmareIlMare11 from "../assets/Amare il mare (11).png";
import ChiSiamo11 from "../assets/Chi siamo (11).png";
import Frame427321004 from "../assets/Frame 427321004.png";
import Frame406_5 from "../assets/Frame 406 (5).png";
import Frame4 from "../assets/Frame 4.png";

// desktop will use Ricette8 as well
// import Ricette3 from "../assets/Ricette (3).png";
import PescaProduzione from "../assets/Pesca e produzione.png";
import Frame4_3 from "../assets/Frame 4 (3).png";
import Frame374 from "../assets/Frame 374.png";
import Footer from "../assets/Footer.png";
import Footer2 from "../assets/Footer (2).png";
import Footer1 from "../assets/Footer (1).png";


const Salmone: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth > 900 : true);
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 900);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const formStyle = isDesktop
    ? {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'min(850px, 95vw)',
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        padding: '32px 24px',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
      }
    : {
        position: 'absolute',
        top: '62%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 'clamp(320px, 90vw, 760px)',
        background: '#fff',
        borderRadius: '18px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.13)',
        padding: '20px 12px',
        zIndex: 3,
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        alignItems: 'center',
      };
  return (
    <div className="app" style={{ minHeight: "100vh", width: "100vw", background: "#fff" }}>
      <Navbar />
      <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
        {/* Mobile: show Hero then specific sequence (requested) */}
        {!isDesktop && (
          <>
            <img src={Group1_1} alt="Hero Salmone mobile" style={{ width: "100vw", display: "block" }} />
            <section className="full-width-section white-bg" style={{ padding: 0 }}>
              <img src={AmareIlMare11} alt="Amare il mare" className="section-image" style={{ display: 'block', width: '100%', marginTop: 0 }} />
            </section>
            <section className="full-width-section white-bg" style={{ padding: 0 }}>
              <img src={Frame427321004} alt="Frame 427321004" className="section-image" style={{ display: 'block', width: '100%', marginTop: 0 }} />
            </section>
            <section className="full-width-section white-bg">
              <img src={Frame406_5} alt="Frame 406 (5)" className="section-image" style={{ display: 'block', width: '100%', marginTop: 0 }} />
            </section>
            <section className="full-width-section white-bg">
              <img src={ChiSiamo11} alt="Chi siamo" className="section-image" style={{ display: 'block', width: '100%', marginTop: 0 }} />
            </section>
          </>
        )}
        {/* Desktop / fallback: original hero */}
        {isDesktop && (
          <img src={Group1_1} alt="Salmone" style={{ width: "100vw", maxWidth: "100%", display: "block" }} />
        )}
        {isDesktop && (
          <img src={Frame4} alt="Frame 4" style={{ width: "100vw", maxWidth: "100%", display: "block", background: "#fff" }} />
        )}
        {/* 'Chi siamo' desktop section removed */}
        {isDesktop && (
          <>
            <img src={Frame4_3} alt="Frame 4 (3)" style={{ width: '100vw', height: 'auto', display: 'block', background: '#fff' }} />
            <img src={Ricette8} alt="Ricette" style={{ width: '100vw', height: 'auto', display: 'block', marginBottom: '-32px', borderRadius: '0', background: '#fff' }} />
            <img src={ChiSiamo11} alt="Chi siamo" style={{ width: '100vw', height: 'auto', display: 'block', background: '#fff'}} />
          </>
        )}
         <div style={{
          position: 'relative',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <img src={Frame374} alt="Frame 374" style={{ width: '100vw', height: 'auto', display: 'block', borderRadius: '0', background: '#fff' }} />
            <form action="mailto:informazioni@ohissa.it" method="POST" encType="text/plain" style={formStyle as React.CSSProperties}>
            <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700, marginBottom: '8px', fontFamily: 'Ubuntu, system-ui, sans-serif' }}>
              Cosa ne pensi di OHissa?<br/>Vuoi saperne di più?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <label style={{ fontWeight: 500 }}>Nome*</label>
              <input type="text" placeholder="Inserisci il tuo nome" required style={{ padding: '10px', borderRadius: '8px', border: '1.5px solid #009688', fontSize: '1rem', fontFamily: 'inherit' }} />
              <label style={{ fontWeight: 500 }}>Cognome*</label>
              <input type="text" placeholder="Inserisci il tuo cognome" required style={{ padding: '10px', borderRadius: '8px', border: '1.5px solid #009688', fontSize: '1rem', fontFamily: 'inherit' }} />
              <label style={{ fontWeight: 500 }}>Email*</label>
              <input type="email" placeholder="Inserisci la tua email" required style={{ padding: '10px', borderRadius: '8px', border: '1.5px solid #009688', fontSize: '1rem', fontFamily: 'inherit' }} />
              <label style={{ fontWeight: 500 }}>Com'è stata la tua esperienza con Ohissa?</label>
              <textarea placeholder="Descrivi la tua esperienza" rows={4} style={{ padding: '10px', borderRadius: '8px', border: '1.5px solid #009688', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', marginTop: '6px' }}>
              <div>
                <label style={{ fontWeight: 500 }}>Quanto ti è piaciuto OHissa?</label>
                <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                  {[1,2,3,4,5].map(n => (
                    <label key={n} style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 400 }}>
                      <input type="radio" name="piaciuto" value={n} style={{ accentColor: '#00bfae' }} />{n}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label style={{ fontWeight: 500 }}>Lo ricomprerai?</label>
                <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 400 }}>
                    <input type="radio" name="ricomprare" value="si" style={{ accentColor: '#00bfae' }} />Si
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 400 }}>
                    <input type="radio" name="ricomprare" value="no" style={{ accentColor: '#00bfae' }} />No
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" style={{ background: '#00695c', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', marginTop: '12px' }}>
              Invia
            </button>
          </form>
        </div>
 {isDesktop ? (
          <img src={Footer} alt="Footer" style={{ width: '100vw', height: 'auto', display: 'block', margin: '-120px 0 0 0', borderRadius: '0', background: '#fff', position: 'relative', zIndex: 1 }} />
        ) : (
          <img src={Footer1} alt="Footer" style={{ width: '100%', display: 'block', background: '#fff', marginTop: '-80px' }} />
        )}      </main>
    </div>
  );
};

export default Salmone;
