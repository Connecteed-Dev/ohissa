import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AmareIlMare8 from "../assets/Amare il mare (8).png";
import AmareIlMare9 from "../assets/Amare il mare (9).png";
import ChiSiamo6 from "../assets/Chi siamo (6).png";
import Footer2 from "../assets/Footer (2).png";
import OhissaMenoImg from "../assets/OHissa menosessanta.png";
import Group7 from "../assets/Group 7 (1).png";
import Frame350_7 from "../assets/Frame 350 (7).png";
import Hero7 from "../assets/Hero (7).png";
import AmareIlMare15 from "../assets/Amare il mare (15).png";
import AscLogo from "../assets/Loghi/ASC-Landscape-Italian-r52nk2mg47canpctelhceat8bo2s8q4tciqxg0mqkg.png";
import CsrLogo from "../assets/Loghi/csr-r52nk3kab1dt5y95zjcydmwp2lbtys10q1ljqh7bpc.png";
import IfsLogo from "../assets/Loghi/IFS_Food_Box_RGB-1-r45mvu6xt600pd74fix1vzcynhebn64lvz3nnhr8cg.png";
import MscLogo from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";
import ItalianLandscapeBlueCMYK from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";
import PartitaGenereLogo from "../assets/Loghi/partita-di-genere-r45mvu6xt606uceeqcisg43yrmxl0xpyo0r09dppts.png";
import Logo10 from "../assets/image 10.png";
import Logo9 from "../assets/image 9.png";
import LogoFrame331 from "../assets/Frame 331.png";
import Logo7 from "../assets/image 7.png";
import Logo6 from "../assets/image 6.png";
import MenoSessantaMarchio from "../assets/MenoSessanta marchio POS RGB 1 (2).png";
import Logo1 from "../assets/Logo 1.png";
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
            <section className="full-width-section" style={{ background: '#fff', padding: '0', margin: '0', width: '100%' }}>
              <img src={Group7} alt="Hero OHissa Menosessanta" className="section-image" style={{ width: '100%', display: 'block', objectFit: 'cover', marginBottom: '-2px' }} />
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#fff', margin: '0', padding: '0' }}>
                <img src={MenoSessantaMarchio} alt="MenoSessanta Marchio" style={{ width: '210px', maxWidth: '90vw', margin: '32px auto 0 auto', display: 'block' }} />
                <p style={{ fontSize: '1.09rem', color: '#075659', fontFamily: 'Ubuntu, system-ui, sans-serif', lineHeight: 1.55, margin: '18px 0 0 0', maxWidth: '340px', width: '100%', textAlign: 'center', padding: '0 16px' }}>
                  La linea Menosessanta nasce da una selezione di Tonno a Pinna Gialla, Tonno Obeso, Ricciola Oceanica e Salmone, tutti 100% naturali e destinati ai canali Horeca, alla GDO e ai grossisti. Ogni prodotto viene surgelato all’origine a -60°C per garantire sicurezza, gusto e una consistenza superiore. Successivamente il pesce viene lavorato e confezionato in atmosfera protettiva nei nostri laboratori in Toscana, mantenendo freschezza e qualità premium.
                </p>
                <img src={Frame350_7} alt="Menosessanta prodotto" style={{ width: '240px', height: '220px', objectFit: 'cover', margin: '22px auto 32px auto', display: 'block', maxWidth: '95vw' }} />
              </div>
            </section>
          </>
        ) : (
          <>
            {/* Hero */}
            <img src={Group7} alt="Hero OHissa Menosessanta" style={{ width: "100%", display: "block", objectFit: 'cover', background: '#fff' }} />
            {/* Sezione contenuto */}
            <section style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', padding: '64px 0 32px', boxSizing: 'border-box', gap: '48px' }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingRight: '32px', minWidth: '320px', maxWidth: '520px' }}>
                <img src={Logo1} alt="Logo OHissa MenoSessanta" style={{ width: '320px', maxWidth: '90%', margin: '0 auto 24px auto', display: 'block' }} />
                <p style={{ fontSize: '1.18rem', color: '#075659', fontFamily: 'Ubuntu, system-ui, sans-serif', lineHeight: 1.6, textAlign: 'left', marginBottom: '32px' }}>
                  La linea Menosessanta è composta da filoni di Tonno a Pinna Gialla, Tonno Obeso, Ricciola Oceanica e Salmone al 100% naturali e destinati al canale dei Grossisti e alla Grande Distribuzione Organizzata. Tutti i prodotti vengono ibernati all’origine a -60°C per garantire la massima sicurezza e un gusto e una consistenza immutati – da qui il nome della gamma. Successivamente  il pesce viene lavorato e confezionato in ATM nei nostri laboratori in Toscana.<br /><br />
                  Scopri la nostra linea premium quality e la nostra specialità Quore di Tonno nel catalogo.  <br />Per richiedere il catalogo via mail scrivi a : <a href="mailto:informazioni@ohissa.it" style={{ color: '#075659', textDecoration: 'underline' }}>informazioni@ohissa.it</a>
                </p>
              </div>
              {/* Immagine a destra */}
              <img src={Frame350_7} alt="Menosessanta prodotto" style={{ width: '360px', height: '330px', objectFit: 'cover', marginLeft: '32px' }} />
            </section>
          </>
        )}
        {/* FOOTER */}
        <footer className="ohissa-footer" style={{ width: "100vw" }}>
          {/* fascia nera */}
          <div
            className="ohissa-footer-top"
            style={{
              background: "#111",
              color: "#fff",
              padding: "36px 24px 28px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            {/* Colonna indirizzi */}
            <div
              className="ohissa-footer-column"
              style={{ flex: "1 1 220px", maxWidth: 360 }}
            >
              <h4
                className="ohissa-footer-title"
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                }}
              >
                SEDE OPERATIVA
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                La Torba - Strada Statale
                <br />
                Aurelia KM 135, 85b
                <br />
                58011 Capalbio (GR)
              </p>

              <h4
                className="ohissa-footer-title"
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "22px 0 10px",
                }}
              >
                SEDE LEGALE
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Via San Gregorio, 55 - 20124
                <br />
                Milano (MI)
              </p>
            </div>

            {/* Colonna certificazioni */}
            <div
              className="ohissa-footer-column"
              style={{ flex: "1 1 220px", maxWidth: 360 }}
            >
              <h4
                className="ohissa-footer-title"
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                }}
              >
                CERTIFICAZIONI
              </h4>

              <div
                className="ohissa-cert-logos"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <div
                  className="ohissa-cert-row"
                  style={{ display: "flex", gap: 10, alignItems: "center" }}
                >
                  <img
                    src={MscLogo}
                    alt="Certificazione MSC"
                    style={{ maxHeight: 46 }}
                  />
                  <img
                    src={AscLogo}
                    alt="Certificazione ASC"
                    style={{ maxHeight: 46 }}
                  />
                </div>

                <div
                  className="ohissa-cert-row"
                  style={{ display: "flex", gap: 10, alignItems: "center" }}
                >
                  <img
                    src={IfsLogo}
                    alt="Certificazione IFS Food"
                    style={{ maxHeight: 60 }}
                  />
                  <div
                    className="ohissa-cert-iso"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: 12,
                      lineHeight: 1.4,
                    }}
                  >
                    <span>ISO 14001:2015</span>
                    <span>ISO 45001:2018</span>
                  </div>
                </div>

                <div
                  className="ohissa-cert-row"
                  style={{ display: "flex", gap: 10, alignItems: "center" }}
                >
                  <img
                    src={PartitaGenereLogo}
                    alt="Parità di Genere"
                    style={{ maxHeight: 60 }}
                  />
                  <img
                    src={CsrLogo}
                    alt="Ecovadis / CSR"
                    style={{ maxHeight: 60 }}
                  />
                </div>
              </div>
            </div>

            {/* Colonna contatti */}
            <div
              className="ohissa-footer-column"
              style={{ flex: "1 1 220px", maxWidth: 360 }}
            >
              <h4
                className="ohissa-footer-title"
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                }}
              >
                CONTATTI
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                <a
                  href="mailto:informazioni@ohissa.it"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  informazioni@ohissa.it
                </a>
              </p>

              <div
                className="ohissa-social-row"
                style={{
                  display: "flex",
                  gap: 10,
                  margin: "10px 0",
                }}
              >
                <a
                  href="https://www.facebook.com/ohissa.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#fff",
                    textDecoration: "none"
                  }}
                  aria-label="Facebook OHissa"
                >
                  f
                </a>
                <a
                  href="https://www.instagram.com/ohissa.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#fff",
                    textDecoration: "none"
                  }}
                  aria-label="Instagram OHissa"
                >
                  ig
                </a>
                <a
                  href="https://www.youtube.com/@ohissa"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    color: "#fff",
                    textDecoration: "none"
                  }}
                  aria-label="YouTube OHissa"
                >
                  yt
                </a>
              </div>

              <p
                style={{
                  margin: "8px 0 4px",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                Per professionisti:
              </p>
              <a
                href="https://www.linkedin.com/company/ohissa"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                  color: "#fff",
                  textDecoration: "none"
                }}
                aria-label="LinkedIn OHissa"
              >
                in
              </a>
            </div>
          </div>

          {/* riga testo centrale */}
          <div
            className="ohissa-footer-middle"
            style={{
              background: "#111",
              color: "#d0d0d0",
              textAlign: "center",
              fontSize: 11,
              padding: "14px 24px 18px",
              borderTop: "1px solid #2a2a2a",
            }}
          >
            OHISSA 2025 - OHISSA S.R.L. - Via San Gregorio 55 - 20124 Milano
            P.IVA 12646260960 - By Connecteed
          </div>

          {/* fascia bianca loghi istituzionali (qui placeholder) */}
          <div
            className="ohissa-footer-bottom"
            style={{
              background: "#fff",
              padding: "18px 24px 24px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 24,
            }}
          >
            <div
              style={{
                border: "1px dashed #ccc",
                padding: "6px 14px",
                fontSize: 11,
                color: "#777",
              }}
            >
              <img
                src={Logo10}
                alt="Fondo 1"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
              <img
                src={Logo9}
                alt="Fondo 2"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
              <img
                src={LogoFrame331}
                alt="Fondo 3"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
              <img
                src={Logo7}
                alt="Fondo 4"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
              <img
                src={Logo6}
                alt="Fondo 5"
                style={{ height: 42, width: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default OhissaMenoSessanta;