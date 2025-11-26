import { useEffect, useRef, useState } from "react";
import "../App.css";

import HeroSection from "../assets/HeroSection.png";          // desktop
import CorporateVideo from "../assets/Corporate Ohissa 2025 (1).mp4";
import TeaserVideo from "../assets/Teaser Ohissa 2025 vert.mp4";
import HeroMobile from "../assets/Hero.png";                  // mobile / tablet

import Certificazioni from "../assets/Certificazioni.png";
// import CorporateVideo from "../assets/Ohissa-per-lo-Sport-1.mp4";

import ScopriBenessere from "../assets/Scopri la linea benessere.png";
import PiuSicuroFrescoDesktop from "../assets/Più sicuro del fresco1.png";
import PiuSicuroFrescoMobile from "../assets/Più sicuro del fresco.png";
import CortiliaDesktop from "../assets/Cortilia (1).png";
import CortiliaMobile from "../assets/Cortilia.png";
import StoriaDesktop from "../assets/Storia.png";
import StoriaMobile from "../assets/Storia (1).png";
import ChiSiamoDesktop from "../assets/Chi siamo.png";
import ChiSiamoMobile from "../assets/Chi siamo (1).png";
import RicetteDesktop from "../assets/Ricette.png";
import RicetteMobile from "../assets/Ricette (1).png";
import FooterDesktop from "../assets/Footer.png";
import FooterMobile from "../assets/Footer (1).png";
import Footer1 from "../assets/Footer (1).png";
import frame405 from "../assets/Frame 405.png";

import Frame390 from "../assets/Frame 390.png";
import Frame390_1 from "../assets/Frame 390 (1).png";
import Frame390_2 from "../assets/Frame 390 (2).png";
import Rectangle from "../assets/Rectangle.png";
import Frame390_3 from "../assets/Frame 390 (3).png";
import Frame390_4 from "../assets/Frame 390 (4).png";

import GustoImg from "../assets/Gusto (1).png";               // desktop
import GustoMobile from "../assets/Gusto.png";                // mobile / tablet

import Navbar from "./Navbar";
// 🔴 NUOVI IMPORT PER GLI SFONDI DEI PRODOTTI
import BgSalmone from "../assets/Group 1 (1).png";
import BgPesceSpada from "../assets/Group 2 (1).png";
import BgTonnoAlalunga from "../assets/Group 3 (1).png";
import BgTonnoPinnaGialla from "../assets/Group 4 (2).png";
const ricette = [
  {
    img: Frame390,
    title: "OHissa burger",
    ingredienti:
      "Tartare di Tonno OHissa, un panino per burger, due foglie d’insalata, " +
      "un pomodoro rosso, Guacamole e olio extravergine d’oliva e sale.",
    preparazione:
      "Taglia il pane e scaldalo leggermente.\n" +
      "Spalma la guacamole sulla base, aggiungi poi lattuga, fette di pomodoro " +
      "e la tartare di Tonno OHissa condita con olio e sale.\n" +
      "Chiudi il panino e servi subito.",
  },
  {
    img: Frame390_1,
    title: "Tartare di Pesce Spada al Curry",
    ingredienti:
      "Tartare di Pesce Spada OHissa, salsa (maionese + curry in polvere), " +
      "olio extravergine d’oliva, sale, pepe, Aneto o finocchietto.",
    preparazione:
      "Condisci la Tartare di Pesce Spada OHissa con olio, sale e pepe.\n" +
      "Prepara la salsa mescolando maionese e curry.\n" +
      "Disponi poi la tartare in un coppapasta, aggiungi la salsa sopra " +
      "e decora con aneto.",
  },
  {
    img: Frame390_2,
    title: "Carpaccio di Pesce Spada al limone",
    ingredienti:
      "Tartare di Tonno OHissa, un panino per burger, due foglie d’insalata, " +
      "un pomodoro rosso, Guacamole e olio extravergine d’oliva e sale.",
    preparazione:
      "Taglia il pane e scaldalo leggermente.\n" +
      "Spalma la guacamole sulla base, aggiungi poi lattuga, fette di pomodoro " +
      "e la tartare di Tonno OHissa condita con olio e sale.\n" +
      "Chiudi il panino e servi subito.",
  },
  {
    img: Rectangle,
    title: "Salmone Saku con pomodori secchi",
    ingredienti:
      "Saku di Salmone OHissa, pane a fette, pomodori secchi sott’olio, olive nere, insalatina, olio evo, sale e pepe.",
    preparazione:
      "Tosta il pane. Prepara un letto di insalatina e disponi sopra le fette di pane tostato. Taglia il salmone a fettine e aggiungilo con pomodori secchi e olive. Completa con olio e pepe.",
  },
  {
    img: Frame390_3,
    title: "Poke OHissa",
    ingredienti:
      "Tartare di Salmone OHissa, riso per sushi, avocado a fette, " +
      "carote julienne, edamame, salsa Ponzu o soia e maionese al lime (opzionale).",
    preparazione:
      "Prepara il riso e lascialo raffreddare.\n" +
      "Disponi nella bowl il riso e sopra gli ingredienti a sezioni: " +
      "Tartare di Salmone OHissa, avocado, carote, edamame.\n" +
      "Condisci con salsa Ponzu o soia e una leggera maionese al lime.",
  },
  {
    img: Frame390_4,
    title: "Tartare di Tonno alla soia",
    ingredienti:
      "Tartare di Tonno OHissa, germogli di soia, salsa di soia, " +
      "olio di sesamo e semi di sesamo (opzionale).",
    preparazione:
      "Condisci la Tartare di Tonno OHissa con salsa di soia e olio di sesamo.\n" +
      "Disponi la tartare in un coppapasta e decora con germogli di soia.\n" +
      "Aggiungi poi semi di sesamo se desideri.",
  },
];


/* -----------------------------------------------------
   CERTIFICAZIONI CAROUSEL
----------------------------------------------------- */
function CertificazioniCarousel() {
  const images = [Certificazioni];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const isMobile =
    typeof window !== "undefined" && window.innerWidth <= 900;

  return (
    <div className="cert-carousel-wrapper" style={{ marginBottom: 0 }}>
      {isMobile ? (
        <div
          style={{
            width: "100vw",
            overflow: "hidden",
            position: "relative",
            height: "120px",
          }}
        >
          <img
            src={images[current]}
            alt="Certificazioni OHissa"
            className="certifications-image"
            style={{
              width: "200vw",
              height: "120px",
              objectFit: "cover",
              position: "absolute",
              left: 0,
              animation: "certScroll 12s linear infinite",
            }}
          />
        </div>
      ) : (
        <img
          src={images[current]}
          alt="Certificazioni OHissa"
          className="certifications-image"
        />
      )}
    </div>
  );
}

/* -----------------------------------------------------
   HOMEPAGE
----------------------------------------------------- */
// Dati ricette
// (RIMOSSO: dichiarazione duplicata di 'ricette')
const Homepage = () => {
  // Stato flip per ogni card
  const [flipped, setFlipped] = useState([false, false, false, false, false, false]);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(ricette.length / cardsPerPage);
  // Stato per background prodotti desktop
  const [productsBg, setProductsBg] = useState(frame405);
  const gustoSectionRef = useRef<HTMLDivElement | null>(null);
  const [gustoProgress, setGustoProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isDesktop = !isMobile;

  /* RESPONSIVE LISTENER */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const updateMobile = () => setIsMobile(mq.matches);

    updateMobile();
    mq.addEventListener("change", updateMobile);

    return () => mq.removeEventListener("change", updateMobile);
  }, []);

  /* SCROLL ANIMATION PER GUSTO */
  useEffect(() => {
    const handleScroll = () => {
      if (!gustoSectionRef.current) return;

      const rect = gustoSectionRef.current.getBoundingClientRect();
      const windowH =
        window.innerHeight || document.documentElement.clientHeight;

      // t: 0 quando la sezione è appena sotto, 1 quando è ben centrata
      let t = (windowH - rect.top) / (windowH / 2);
      t = Math.max(0, Math.min(1, t));

      setGustoProgress(t);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />

      <div className="page-card">
        {/* HERO */}
        <header className="hero-section">
          <img
            src={isMobile ? HeroMobile : HeroSection}
            alt="Tonno che nuota nel mare"
            className="hero-image"
            style={{ width: isMobile ? "110vw" : "110vw", maxWidth: "110vw", height: "auto", display: "block", margin: "-200px 0 0 -5vw", objectFit: "cover", objectPosition: "center top" }}


          />
        </header>

        {/* CONTENUTO */}
        <main className="content">
          {/* TESTO HERO */}
          <section className="hero-text-block">
            <h1 className={isMobile ? "hero-title mobile" : "hero-title"}
              style={{
                fontSize: isMobile ? "1.8rem" : "3.2rem",
                fontWeight: 800,
                lineHeight: 1.12,
                color: "#075659",
                marginBottom: isMobile ? "18px" : "32px",
                textAlign: "center",
                letterSpacing: "-1px"
              }}>
              Amare il mare per gustare
              <br />
              il benessere.
            </h1>

            <p
              className={isMobile ? "hero-paragraph mobile" : "hero-paragraph"}
              style={{
                fontSize: isMobile ? "1.45rem" : "2.1rem",
                fontWeight: 400,
                lineHeight: 1.32,
                color: "#000000ff",
                marginBottom: isMobile ? "16px" : "28px",
                textAlign: "center"
              }}
            >
              OHissa seleziona, lavora e prepara per il consumo – anche a
              crudo – tonno, pesce spada, salmone e ricciola. Operiamo
              nella nostra sede in Maremma, con tecnologie innovative come
              l’ibernazione da fresco. Il nostro impegno è offrire
              un’alimentazione sana e gustosa, che esalta il palato e
              rispetta l’ambiente.
            </p>

            <p className="tagline"
              style={{
                fontSize: isMobile ? "1.7rem" : "2.5rem",
                fontWeight: 700,
                color: "#075659",
                textAlign: "center",
                marginBottom: isMobile ? "10px" : "18px"
              }}
            >OHissa: così buono che fa bene.</p>
          </section>

          {/* GUSTO – immagine di sfondo + testo che sale con lo scroll */}
          <section
            className="gusto-section"
            ref={gustoSectionRef}
          >
            <div className="gusto-sticky-container">
              <div className="gusto-image-wrapper">
                <div
                  className={`gusto-text ${isMobile ? "mobile" : ""}`}
                  style={{
                    transform: `translate(-50%, -50%) translateY(${(1 -
                      gustoProgress) * (isMobile ? 18 : 30)}vh)`,
                    opacity: gustoProgress,
                    fontSize: isMobile ? "2.2rem" : "3.2rem",
                    fontWeight: 500,
                    lineHeight: 1.18,
                    color: "#ffffffff",
                    textAlign: "center",
                    letterSpacing: "-1px"
                  }}
                >
                  Gusto, naturalità,
                  <br />
                  salute, alta qualità,
                  <br />
                  sostenibilità, sicurezza,
                  <br />
                  controllo, artigianalità,
                  <br />
                  tradizione, Maremma,
                  <br />
                  in una parola: OHissa.
                </div>

                <img
                  src={isMobile ? GustoMobile : GustoImg}
                  alt="Gusto OHissa"
                  className="gusto-image"
                  style={isMobile ? { marginBottom: "32px" } : {}}
                />
              </div>
            </div>
            );
            {"}"};
          </section>
          {isMobile ? (
            <section className="ohissa-mobile-products" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", padding: "0 0 24px 0", marginTop: "60px" }}>
              <div
                className="ohissa-mobile-products-inner"
                style={{
                  backgroundImage: ` url(${frame405})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  borderRadius: "18px",
                  maxWidth: "370px",
                  width: "100%",
                  margin: "0 auto",
                  padding: "24px 16px 24px 16px",
                  boxSizing: "border-box"
                }}
              >
                <h1 className="ohissa-mobile-products-title" style={{ color: "#fff", fontSize: "1.45rem", fontWeight: 700, marginBottom: "18px", textAlign: "center", lineHeight: 1.2 }}>Scopri la nostra linea<br />del benessere</h1>
                <div className="ohissa-mobile-products-buttons" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <a href="/tonno-pinna-gialla" className="btn"
                    style={{ width: "100%", fontSize: "1.08rem", padding: "12px 0", transition: "background-color 0.2s, color 0.2s, opacity 0.2s" }}
                    onTouchStart={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onTouchEnd={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOut={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                  >Tonno a pinne gialle</a>
                  <a href="/tonno-alalunga" className="btn"
                    style={{ width: "100%", fontSize: "1.08rem", padding: "12px 0", transition: "background-color 0.2s, color 0.2s, opacity 0.2s" }}
                    onTouchStart={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onTouchEnd={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOut={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                  >Tonno alalunga</a>
                  <a href="/salmone" className="btn"
                    style={{ width: "100%", fontSize: "1.08rem", padding: "12px 0", transition: "background-color 0.2s, color 0.2s, opacity 0.2s" }}
                    onTouchStart={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onTouchEnd={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOut={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                  >Salmone</a>
                  <a href="/pesce-spada" className="btn"
                    style={{ width: "100%", fontSize: "1.08rem", padding: "12px 0", transition: "background-color 0.2s, color 0.2s, opacity 0.2s" }}
                    onTouchStart={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onTouchEnd={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOver={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.opacity = '1'; }}
                    onMouseOut={e => { e.currentTarget.style.backgroundColor = '#fff'; e.currentTarget.style.opacity = '1'; }}
                  >Pesce spada</a>
                </div>
              </div>
            </section>
          ) : (
            <div className="ohissa-products-block" style={{ position: "relative" }}>
              <img src={productsBg} alt="Frame 405" className="ohissa-products-bg" style={{ transition: "0.3s", position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, objectFit: "cover" }} />
              <div className="ohissa-products-overlay" style={{ position: "relative", zIndex: 1 }}>
                <h1 className="ohissa-products-title">SCOPRI TUTTI I PRODOTTI OHISSA</h1>
                <div className="ohissa-products-buttons">
                  <a
                    href="/tonno-pinna-gialla"
                    className="btn"
                    onMouseOver={() => setProductsBg(BgTonnoPinnaGialla)}
                    onMouseOut={() => setProductsBg(frame405)}
                  >Tonno a pinne gialle</a>
                  <a
                    href="/tonno-alalunga"
                    className="btn"
                    onMouseOver={() => setProductsBg(BgTonnoAlalunga)}
                    onMouseOut={() => setProductsBg(frame405)}
                  >Tonno alalunga</a>
                  <a
                    href="/salmone"
                    className="btn"
                    onMouseOver={() => setProductsBg(BgSalmone)}
                    onMouseOut={() => setProductsBg(frame405)}
                  >Salmone</a>
                  <a
                    href="/pesce-spada"
                    className="btn"
                    onMouseOver={() => setProductsBg(BgPesceSpada)}
                    onMouseOut={() => setProductsBg(frame405)}
                  >Pesce spada</a>
                </div>
              </div>
              {/* Per mantenere la dimensione del blocco */}
              <div style={{ paddingTop: "56.25%", visibility: "hidden" }}></div>
            </div>
          )}

          {/* CERTIFICAZIONI – CAROSELLO AUTOMATICO */}
          <section className="certifications-section">
            <CertificazioniCarousel />
          </section>

          {/* SCOPRI LA NOSTRA LINEA DI BENESSERE */}
          <section className="full-width-section beige-bg">
            <img
              src={ScopriBenessere}
              alt="Scopri la nostra linea di benessere"
              className="section-image"
            />
            <video
              src={isMobile ? TeaserVideo : CorporateVideo}
              controls
              className="section-video"
              style={{ width: "100%", height: "520px", marginTop: "20px", objectFit: "cover" }}
            >
              Il tuo browser non supporta il tag video.
            </video>
          </section>

          {/* PIÙ SICURO DEL FRESCO – SFONDO BIANCO */}
          <section className="full-width-section white-bg">
            <img
              src={
                isMobile
                  ? PiuSicuroFrescoMobile
                  : PiuSicuroFrescoDesktop
              }
              alt="Più sicuro del fresco"
              className="section-image"
            />
          </section>

          {/* CORTILIA */}
          <section className="full-width-section">
            <img
              src={isMobile ? CortiliaMobile : CortiliaDesktop}
              alt="Cortilia OHissa"
              className="section-image"
            />
          </section>

          {/* STORIA – SFONDO BIANCO */}
          <section className="full-width-section white-bg">
            <img
              src={isMobile ? StoriaMobile : StoriaDesktop}
              alt="Storia OHissa"
              className="section-image"
            />
          </section>

          {/* CHI SIAMO */}
          <section className="full-width-section">
            <img
              src={isMobile ? ChiSiamoMobile : ChiSiamoDesktop}
              alt="Chi siamo OHissa"
              className="section-image"
            />
          </section>

          {/* RICETTE – 6 CARD */}
          {/* RICETTE – 6 CARD */}
          {/* RICETTE – 6 CARD */}
          <section className="full-width-section white-bg" style={{ padding: "32px 0" }}>
            <div style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "center",
              maxWidth: "1400px",
              margin: "0 auto",
              gap: "32px",
            }}>
              {ricette.slice(currentPage * cardsPerPage, currentPage * cardsPerPage + cardsPerPage).map((r) => (
                <div
                  key={r.title}
                  style={{
                    width: "370px",
                    minWidth: "260px",
                    maxWidth: "100%",
                    borderRadius: "20px",
                    boxShadow: "0 4px 18px rgba(0,0,0,0.13)",
                    background: "#fff",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "620px",
                    height: "auto"
                  }}
                >
                  <img
                    src={r.img}
                    alt={r.title}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  />
                  <div style={{ padding: "22px 16px 16px 16px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <h3 style={{ color: "#075659", fontSize: "1.45rem", fontWeight: 700, margin: "0 0 14px 0", letterSpacing: "-0.5px" }}>{r.title}</h3>
                    <div style={{ fontSize: "1.08rem", marginBottom: "10px", lineHeight: 1.32 }}><b>Ingredienti:</b> {r.ingredienti}</div>
                    <div style={{ fontSize: "1.08rem", marginBottom: "10px", lineHeight: 1.32 }}><b>Preparazione:</b> {r.preparazione}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "1.15rem", color: "#075659", marginTop: "auto" }}>
                      <span style={{ opacity: 0.7, fontSize: "1em" }}>📶</span>
                      <span>Facile</span>
                      <span style={{ opacity: 0.7, fontSize: "1em" }}>⏱️</span>
                      <span>5 min</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* CONTROLLI CAROSELLO */}
            <div style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "24px",
            }}>
              <button
                onClick={() => setCurrentPage((p) => (p > 0 ? p - 1 : p))}
                disabled={currentPage === 0}
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  border: "1px solid #075659",
                  background: currentPage === 0 ? "#eee" : "#fff",
                  color: "#075659",
                  cursor: currentPage === 0 ? "default" : "pointer",
                  minWidth: "40px",
                }}
              >
                ‹
              </button>
              <button
                onClick={() => setCurrentPage((p) => p < totalPages - 1 ? p + 1 : p)}
                disabled={currentPage === totalPages - 1}
                style={{
                  padding: "6px 10px",
                  borderRadius: "999px",
                  border: "1px solid #075659",
                  background: currentPage === totalPages - 1 ? "#eee" : "#fff",
                  color: "#075659",
                  cursor: currentPage === totalPages - 1 ? "default" : "pointer",
                  minWidth: "40px",
                }}
              >
                ›
              </button>
            </div>
          </section>
          {isDesktop ? (
            <img src={FooterDesktop} alt="Footer" style={{ width: '100vw', height: 'auto', display: 'block', borderRadius: '0', background: '#fff', position: 'relative', zIndex: 1 }} />
          ) : (
            <img src={FooterMobile} alt="Footer" style={{ width: '100%', display: 'block', background: '#fff', marginTop: '-80px' }} />
          )}
        </main>
      </div>
    </div>
  );
}
export default Homepage;