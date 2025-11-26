import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Group3 from "../assets/Group 3.png";
import Group3_1 from "../assets/Group 3 (1).png";
import Frame375_1 from "../assets/Frame 375 (1).png";
import Frame375_4 from "../assets/Frame 375 (4).png";
import Frame375_2 from "../assets/Frame 375 (2).png";
import PescaProduzione5 from "../assets/Pesca e produzione (5).png";
import Ricette10 from "../assets/Ricette (10).png";
import ChiSiamo15 from "../assets/Chi siamo (15).png";
import Frame374 from "../assets/Frame 374.png";
import Footer2 from "../assets/Footer (2).png";
import Footer from "../assets/Footer.png"
import Hero3 from "../assets/Hero (3).png";
import AmareIlMare2 from "../assets/Amare il mare (2).png";
import Frame406_2 from "../assets/Frame 406 (2).png";
import PescaProduzione6 from "../assets/Pesca e produzione (6).png";
import PescaProduzione9 from "../assets/Pesca e produzione (9).png";
import Frame406_6 from "../assets/Frame 406 (6).png";
import ChiSiamo16 from "../assets/Chi siamo (16).png";
import Ricette6 from "../assets/Ricette (6).png";
import ChiSiamo9 from "../assets/Chi siamo (9).png";
import Footer1 from "../assets/Footer (1).png";


const TonnoAlalunga: React.FC = () => {
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
      <main style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>
        {/* Mobile: hero then Frame 406 (6) right below, then Frame 375 (2) (no negative margin), then Pesca e produzione, then Chi siamo */}
        {!isDesktop && (
          <>
            <img src={Group3_1} alt="Hero Tonno mobile" style={{ width: "100vw", display: "block" }} />
            <section className="full-width-section">
              <img src={Frame406_6} alt="Frame 406 (6)" className="section-image" style={{ display: 'block', width: '100%', marginTop: 0 }} />
            </section>
            <section className="full-width-section white-bg">
              <img src={Frame375_2} alt="Amare il mare 2" className="section-image"  style={{ padding: 0, marginTop: 0 }}/>
            </section>
            <section className="full-width-section">
              <img src={PescaProduzione9} alt="Pesca e produzione" className="section-image" style={{ display: 'block', width: '100%', marginTop: 0 }} />
            </section>
            <section className="full-width-section">
              <img src={ChiSiamo16} alt="Chi siamo 16" className="section-image" style={{ display: 'block', width: '100%', marginTop: 0 }} />
            </section>
          </>
        )}

        {isDesktop && (
          <img src={Group3_1} alt="Tonno Alalunga" style={{ width: "100vw", height: "auto", display: "block" }} />
        )}
        {isDesktop && (
          <img src={Frame375_4} alt="Frame 375 (4)" style={{ width: "100vw", height: "auto", display: "block", background: "#fff" }} />
        )}
        {isDesktop && (
          <>
            <img src={PescaProduzione5} alt="Pesca e produzione" style={{ width: '100vw', height: 'auto', borderRadius: '0', display: 'block', background: '#fff' }} />
            <img src={Ricette10} alt="Ricette" style={{ width: '90vw', height: 'auto', display: 'block', background: '#fff' }} />
            <img src={ChiSiamo15} alt="Chi siamo" style={{ width: '100vw', height: 'auto', display: 'block', background: '#fff' }} />
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

export default TonnoAlalunga;
