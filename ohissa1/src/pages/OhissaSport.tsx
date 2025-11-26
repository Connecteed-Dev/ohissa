import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import frame405 from "../assets/Frame 405.png";
import Hero6 from "../assets/Hero (6).png";
import AmareIlMare13 from "../assets/Amare il mare (13).png";
import Frame384_4 from "../assets/Frame 384 (4).png";
import Frame427_1 from "../assets/Frame 427321007 (1).png";
import AmareIlMare14 from "../assets/Amare il mare (14).png";
import Frame427_008 from "../assets/Frame 427321008.png";
import Frame415_1 from "../assets/Frame 415 (1).png";
import Hero8 from "../assets/Hero (8).png";
import AmareIlMare16 from "../assets/Amare il mare (16).png";
import Frame384_5 from "../assets/Frame 384 (5).png";
import Frame427_2 from "../assets/Frame 427321007 (2).png";
import Frame381 from "../assets/Frame 381.png";
import Frame415_2 from "../assets/Frame 415 (2).png";
import Footer from "../assets/Footer.png";
import Footer1 from "../assets/Footer (1).png";

// SFONDI PRODOTTI
import BgSalmone from "../assets/Group 1 (1).png";
import BgPesceSpada from "../assets/Group 2 (1).png";
import BgTonnoAlalunga from "../assets/Group 3 (1).png";
import BgTonnoPinnaGialla from "../assets/Group 4 (2).png";

const OhissaSport: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 700 : false
  );
  const isDesktop = !isMobile;

  const defaultBg = frame405;
  const [desktopBg, setDesktopBg] = useState<string>(defaultBg);

  // debug: log import URLs and desktopBg changes
  useEffect(() => {
    // DEBUG: log tipo e valore degli import
    console.log('Imported BgSalmone ->', BgSalmone, typeof BgSalmone);
    console.log('Imported BgPesceSpada ->', BgPesceSpada, typeof BgPesceSpada);
    console.log('Imported BgTonnoAlalunga ->', BgTonnoAlalunga, typeof BgTonnoAlalunga);
    console.log('Imported BgTonnoPinnaGialla ->', BgTonnoPinnaGialla, typeof BgTonnoPinnaGialla);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('OhissaSport desktopBg changed ->', desktopBg);
  }, [desktopBg]);

  // wrapper that logs and changes bg (helps ensure handler fired)
  const handleBgChange = (img: string, label?: string) => {
    // eslint-disable-next-line no-console
    console.log('handleBgChange called for', label, img, typeof img);
    // Forza conversione in stringa se serve
    let url = img;
    if (typeof img === 'object' && img !== null) {
      url = (img as { default?: string }).default ?? "";
    }
    setDesktopBg(url);
  };

  const handleBgReset = () => {
    // eslint-disable-next-line no-console
    console.log('handleBgReset called');
    let url = defaultBg;
    if (typeof defaultBg === 'object' && defaultBg !== null) {
      url = defaultBg;
    }
    setDesktopBg(url);
  };

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      className="ohissa-page"
      style={{ minHeight: "100vh", width: "100vw", background: "#fff" }}
    >
      <Navbar />

      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: "0px",
        }}
      >
        {/* HEADER SPORT DESKTOP/MOBILE */}
        {isMobile ? (
          <>
            <img src={Hero8} alt="Hero 8" style={{ width: "100%", display: "block" }} />
            <img src={AmareIlMare16} alt="Amare il mare 16" style={{ width: "100%", display: "block" }} />
            <img src={Frame384_5} alt="Frame 384 (5)" style={{ width: "100%", display: "block" }} />
            <img src={Frame427_2} alt="Frame 427321007 (2)" style={{ width: "100%", display: "block" }} />
            <div style={{ width: "100%", background: "#fff", textAlign: "center", padding: "32px 0 0 0" }}>
              <h1 style={{ color: "#075659", fontSize: "2.2rem", fontWeight: 700, marginBottom: "18px" }}>OHissa per lo sport</h1>
              <p style={{ color: "#333", fontSize: "1.15rem", maxWidth: "700px", margin: "0 auto 32px auto", lineHeight: 1.6 }}>
                OHissa per lo Sport coinvolge e supporta associazioni sportive come l’Unione Sportiva Livorno Basket, il Centro Padel Firenze e l’Argentario Basket. L’azienda, con la collaborazione del Dott. Naitana, organizza corsi di alimentazione sportiva dedicati ai giovani atleti presso le società coinvolte.
              </p>
                {/* Video rimosso perché il file non esiste */}
                <img src={Frame381} alt="Frame 381" style={{ width: "120px", display: "block", margin: "0 auto 18px auto" }} />
                <img src={Frame384_5} alt="Frame 384 (5)" style={{ width: "100vw", display: "block", margin: "0 auto 18px auto" }} />
            </div>
          </>
        ) : (
          <>
            <img
              src={Frame415_1}
              alt="Frame 415 (1)"
              style={{ width: "100%", display: "block" }}
            />
            <div style={{ width: "100%", background: "#fff", display: "flex", justifyContent: "center", padding: "32px 0 0 0" }}>
              <div style={{ width: "100vw", maxWidth: "1200px", textAlign: "center", margin: "0 auto" }}>
                <h1 style={{
                  color: "#075659",
                  fontSize: "4.5rem",
                  fontWeight: 900,
                  marginBottom: "36px",
                  letterSpacing: "-2px",
                  textAlign: "center",
                  lineHeight: 1.1
                }}>OHissa per lo sport</h1>
                <p style={{
                  color: "#333",
                  fontSize: "2.1rem",
                  maxWidth: "1280px",
                  margin: "0 auto 60px auto",
                  lineHeight: 1.7,
                  textAlign: "center"
                }}>
                  OHissa per lo Sport coinvolge e supporta associazioni sportive come l’Unione Sportiva Livorno Basket, il Centro Padel Firenze e l’Argentario Basket. L’azienda, con la collaborazione del Dott. Naitana, organizza <b style={{fontWeight:800}}>corsi di alimentazione sportiva dedicati ai giovani atleti presso le società coinvolte.</b>
                </p>
                {/* Video rimosso perché il file non esiste */}
                <img src={Frame381} alt="Frame 381" style={{ width: "300px", display: "block", margin: "0 auto 22px auto" }} />
                <img src={Frame415_2} alt="Frame 415 (2)" style={{ width: "100%", maxWidth: "1200px", display: "block", margin: "0 auto 22px auto" }} />
              </div>
            </div>
          </>
        )}
        

        <div style={{ width: "100%", background: "#fff", paddingBottom: "0px" }}>
          {isMobile ? (
  <>
    
    {/* BLOCCO MOBILE – COME SCREENSHOT */}
    <section className="ohissa-mobile-products">
      <div
        className="ohissa-mobile-products-inner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${frame405})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="ohissa-mobile-products-title">
          Scopri la nostra linea<br />del benessere
        </h1>

        <div className="ohissa-mobile-products-buttons">
          <a href="/tonno-pinna-gialla" className="btn">
            Tonno a pinne gialle
          </a>
          <a href="/tonno-alalunga" className="btn">
            Tonno alalunga
          </a>
          <a href="/salmone" className="btn">
            Salmone
          </a>
          <a href="/pesce-spada" className="btn">
            Pesce spada
          </a>
        </div>
      </div>
    </section>
  </>
) : null}


        {/* DESKTOP: blocco con hover dinamico */}
        {isDesktop && (
  <div className="ohissa-products-block" style={{ position: "relative" }}>
    <img
      src={desktopBg}
      alt="Prodotti OHissa"
      className="ohissa-products-bg"
      style={{
        transition: "0.3s",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        objectFit: "cover"
      }}
    />
    <div className="ohissa-products-overlay" style={{ position: "relative", zIndex: 1 }}>
      <h1 className="ohissa-products-title">SCOPRI TUTTI I PRODOTTI OHISSA</h1>
      <div className="ohissa-products-buttons">
        <a
          href="/tonno-pinna-gialla"
          className="btn"
          onMouseOver={() => handleBgChange(BgTonnoPinnaGialla, 'pinna')}
          onMouseOut={() => handleBgReset()}
        >
          Tonno a pinne gialle
        </a>
        <a
          href="/tonno-alalunga"
          className="btn"
          onMouseOver={() => handleBgChange(BgTonnoAlalunga, 'alalunga')}
          onMouseOut={() => handleBgReset()}
        >
          Tonno alalunga
        </a>
        <a
          href="/salmone"
          className="btn"
          onMouseOver={() => handleBgChange(BgSalmone, 'salmone')}
          onMouseOut={() => handleBgReset()}
        >
          Salmone
        </a>
        <a
          href="/pesce-spada"
          className="btn"
          onMouseOver={() => handleBgChange(BgPesceSpada, 'spada')}
          onMouseOut={() => handleBgReset()}
        >
          Pesce spada
        </a>
      </div>
    </div>
    {/* Per mantenere la dimensione del blocco */}
    <div style={{ paddingTop: "56.25%", visibility: "hidden" }}></div>
  </div>
)}

        {isDesktop ? (
          <img
            src={Footer}
            alt="Footer"
            style={{
              width: "100vw",
              height: "auto",
              display: "block",
              margin: "0",
              borderRadius: "0",
              background: "#fff",
              position: "relative",
              zIndex: 1,
            }}
          />
        ) : (
          <img
            src={Footer1}
            alt="Footer"
            style={{
              width: "100%",
              display: "block",
              background: "#fff",
              marginTop: "0",
            }}
          />
        )}
        {/* Add closing tag for the div opened at line 98 */}
        </div>
      </main>
    </div>
  );
};

export default OhissaSport;
