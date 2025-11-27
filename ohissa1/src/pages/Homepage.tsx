import React, { useEffect, useRef, useState } from "react";
import "../App.css";

import HeroSection from "../assets/HeroSection.png";          // desktop
import CorporateVideo from "../assets/Corporate Ohissa 2025 (1).mp4";
import TeaserVideo from "../assets/Teaser Ohissa 2025 vert.mp4";
import HeroMobile from "../assets/Hero.png";                  // mobile / tablet

import Certificazioni from "../assets/Certificazioni.png";

import ScopriBenessere from "../assets/Scopri la linea benessere.png";
import PiuSicuroFrescoDesktop from "../assets/Più sicuro del fresco1.png";
import PiuSicuroFrescoMobile from "../assets/Più sicuro del fresco.png";
import CortiliaDesktop from "../assets/Cortilia (1).png";
import CortiliaMobile from "../assets/Cortilia.png";
import CortiliaBg from "../assets/Cortilia (1).png";
import StoriaDesktop from "../assets/Storia.png";
import StoriaMobile from "../assets/Storia (1).png";
import ChiSiamoDesktop from "../assets/Chi siamo.png";
import ChiSiamoMobile from "../assets/Chi siamo (1).png";
import ChiSiamo18 from "../assets/Chi siamo (18).png";
import RicetteDesktop from "../assets/Ricette.png";
import RicetteMobile from "../assets/Ricette (1).png";
import FrescoImg from "../assets/fresco.png";
import GenuinaImg from "../assets/HP/genuina.png";
import SportImg from "../assets/HP/sport.png";
import MaremmaImg from "../assets/Frame 9 (2).png";
import PesceCrudoImg from "../assets/Frame 9.png";
import MareImg from "../assets/Frame 9 (3).png";
import frame405 from "../assets/Frame 405.png";
import ChiSiamo21 from "../assets/Chi siamo (21).png";
// quella grande orizzontale
import ChiSiamoDesktopBg from "../assets/Chi siamo (21).png";
import ChiSiamoMobileImg from "../assets/Chi siamo (23).png";
// 👉 metti qui il nome reale del file stretto


import Logo10 from "../assets/image 10.png";
import Logo9 from "../assets/image 9.png";
import LogoFrame331 from "../assets/Frame 331.png";
import Logo7 from "../assets/image 7.png";
import Logo6 from "../assets/image 6.png";

import Frame390 from "../assets/Frame 390.png";
import Frame390_1 from "../assets/Frame 390 (1).png";
import Frame390_2 from "../assets/Frame 390 (2).png";
import Rectangle from "../assets/Rectangle.png";
import Frame390_3 from "../assets/Frame 390 (3).png";
import Frame390_4 from "../assets/Frame 390 (4).png";

import AscLogo from "../assets/Loghi/ASC-Landscape-Italian-r52nk2mg47canpctelhceat8bo2s8q4tciqxg0mqkg.png";
import CsrLogo from "../assets/Loghi/csr-r52nk3kab1dt5y95zjcydmwp2lbtys10q1ljqh7bpc.png";
import IfsLogo from "../assets/Loghi/IFS_Food_Box_RGB-1-r45mvu6xt600pd74fix1vzcynhebn64lvz3nnhr8cg.png";
import MscLogo from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";
import ItalianLandscapeBlueCMYK from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";
import PartitaGenereLogo from "../assets/Loghi/partita-di-genere-r45mvu6xt606uceeqcisg43yrmxl0xpyo0r09dppts.png";

import GustoImg from "../assets/Gusto (1).png";               // desktop
import GustoMobile from "../assets/Gusto.png";                // mobile / tablet

import Navbar from "./Navbar";

// SFONDI PRODOTTI
import BgSalmone from "../assets/Group 1 (1).png";
import BgPesceSpada from "../assets/Group 2 (1).png";
import BgTonnoAlalunga from "../assets/Group 3 (1).png";
import BgTonnoPinnaGialla from "../assets/Group 4 (2).png";

const CarouselRicette = ({ ricette }: { ricette: any[] }) => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const listener = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  // Carousel navigation logic
  const visibleItemsCount = isMobile ? 1 : 3;
  const prev = () => setIndex((i) => Math.max(0, i - visibleItemsCount));
  const next = () => setIndex((i) => Math.min(ricette.length - visibleItemsCount, i + visibleItemsCount));
  const visibleItems = ricette.slice(index, index + visibleItemsCount);
  return (
    <div style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}>
      {/* FRECCIA SINISTRA */}
      <button
        onClick={prev}
        disabled={index === 0}
        style={
          isMobile
            ? {
              width: "48px",
              height: "48px",
              border: "2px solid #075659",
              background: "#e0f7fa",
              borderRadius: "50%",
              boxShadow: "0px 2px 8px rgba(7,86,89,0.1)",
              fontSize: "2.3rem",
              color: index === 0 ? "#b0cfd1" : "#075659",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, color 0.2s, border 0.2s",
              outline: "none",
            }
            : {
              width: "48px",
              height: "48px",
              background: "transparent",
              fontSize: "2.3rem",
              color: index === 0 ? "#b0cfd1" : "#075659",
              cursor: index === 0 ? "not-allowed" : "pointer",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "none",
              borderRadius: "0",
              transition: "color 0.2s",
            }
        }
        onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!e.currentTarget.disabled) {
            if (isMobile) {
              e.currentTarget.style.background = '#b2ebf2';
              e.currentTarget.style.color = '#0097a7';
              e.currentTarget.style.borderColor = '#0097a7';
            } else {
              e.currentTarget.style.color = '#0097a7';
            }
          }
        }}
        onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!e.currentTarget.disabled) {
            if (isMobile) {
              e.currentTarget.style.background = '#e0f7fa';
              e.currentTarget.style.color = index === 0 ? '#b0cfd1' : '#075659';
              e.currentTarget.style.borderColor = '#075659';
            } else {
              e.currentTarget.style.color = index === 0 ? '#b0cfd1' : '#075659';
            }
          }
        }}
        aria-label="Precedente"
      >
        ‹
      </button>
      <div style={{ display: "flex", gap: isMobile ? "0" : "24px", width: isMobile ? "100%" : "auto", justifyContent: "center" }}>
        {visibleItems.map((r, i) => (
          <div
            key={i}
            style={{
              width: isMobile ? "94vw" : "360px",
              maxWidth: isMobile ? "94vw" : "360px",
              margin: isMobile ? "0 auto 18px auto" : "0 auto",
              borderRadius: "18px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.13)",
              background: isMobile ? "#f4f4f4" : "#fff",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              minHeight: isMobile ? "auto" : "360px",
              transition: "0.3s",
              alignItems: "stretch",
            }}
          >
            <img
              src={r.img}
              alt={r.title}
              style={{
                width: "100%",
                height: isMobile ? "170px" : "190px",
                objectFit: "cover",
                display: "block",
                borderTopLeftRadius: "18px",
                borderTopRightRadius: "18px",
              }}
            />
            <div
              style={{
                padding: "18px 16px 14px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flex: 1,
              }}
            >
              <h3
                style={{
                  color: "#075659",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                {r.title}
              </h3>
              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.5,
                  margin: 0,
                  color: "#333",
                }}
              >
                <b>Ingredienti:</b> {r.ingredienti}
              </p>
              <p
                style={{
                  fontSize: "0.98rem",
                  lineHeight: 1.5,
                  margin: 0,
                  color: "#333",
                }}
              >
                <b>Preparazione:</b> {r.preparazione}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginTop: "auto",
                  fontSize: "0.95rem",
                  color: "#075659",
                }}
              >
                <span>📶</span>
                <span>Facile</span>
                <span>⏱️</span>
                <span>5 min</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* FRECCIA DESTRA */}
      <button
        onClick={next}
        disabled={index >= ricette.length - visibleItemsCount}
        style={
          isMobile
            ? {
              width: "48px",
              height: "48px",
              border: "2px solid #075659",
              background: "#e0f7fa",
              borderRadius: "50%",
              boxShadow: "0px 2px 8px rgba(7,86,89,0.1)",
              fontSize: "2.3rem",
              color: index >= ricette.length - visibleItemsCount ? "#b0cfd1" : "#075659",
              cursor: index >= ricette.length - visibleItemsCount ? "not-allowed" : "pointer",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s, color 0.2s, border 0.2s",
              outline: "none",
            }
            : {
              width: "48px",
              height: "48px",
              background: "transparent",
              fontSize: "2.3rem",
              color: index >= ricette.length - visibleItemsCount ? "#b0cfd1" : "#075659",
              cursor: index >= ricette.length - visibleItemsCount ? "not-allowed" : "pointer",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "none",
              boxShadow: "none",
              borderRadius: "0",
              transition: "color 0.2s",
            }
        }
        onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!e.currentTarget.disabled) {
            if (isMobile) {
              e.currentTarget.style.background = '#b2ebf2';
              e.currentTarget.style.color = '#0097a7';
              e.currentTarget.style.borderColor = '#0097a7';
            } else {
              e.currentTarget.style.color = '#0097a7';
            }
          }
        }}
        onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
          if (!e.currentTarget.disabled) {
            if (isMobile) {
              e.currentTarget.style.background = '#e0f7fa';
              e.currentTarget.style.color = index >= ricette.length - visibleItemsCount ? '#b0cfd1' : '#075659';
              e.currentTarget.style.borderColor = '#075659';
            } else {
              e.currentTarget.style.color = index >= ricette.length - visibleItemsCount ? '#b0cfd1' : '#075659';
            }
          }
        }}
        aria-label="Successivo"
      >
        ›
      </button>
    </div>
  );
};

// DATI RICETTE
const ricette = [
  {
    img: Frame390,
    title: "OHissa burger",
    ingredienti:
      "Tartare di Tonno OHissa, un panino per burger, due foglie d’insalata, un pomodoro rosso, Guacamole e olio extravergine d’oliva e sale.",
    preparazione:
      "Taglia il pane e scaldalo leggermente. Spalma la guacamole sulla base, aggiungi poi lattuga, fette di pomodoro e la tartare di Tonno OHissa condita con olio e sale. Chiudi il panino e servi subito.",
  },
  {
    img: Frame390_1,
    title: "Tartare di Pesce Spada al Curry",
    ingredienti:
      "Tartare di Pesce Spada OHissa, salsa (maionese + curry in polvere), olio extravergine d’oliva, sale, pepe, aneto o finocchietto.",
    preparazione:
      "Condisci la Tartare di Pesce Spada OHissa con olio, sale e pepe. Prepara la salsa mescolando maionese e curry. Disponi poi la tartare in un coppapasta, aggiungi la salsa sopra e decora con aneto.",
  },
  {
    img: Frame390_2,
    title: "Carpaccio di Pesce Spada al limone",
    ingredienti:
      "Filetto di Pesce Spada OHissa, succo di limone, olio extravergine d’oliva, sale, pepe e prezzemolo fresco.",
    preparazione:
      "Affetta finemente il Pesce Spada OHissa e disponilo su un piatto. Condisci con succo di limone, olio, sale e pepe. Completa con prezzemolo tritato e servi subito.",
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
      "Tartare di Salmone OHissa, riso per sushi, avocado a fette, carote julienne, edamame, salsa Ponzu o soia e maionese al lime (opzionale).",
    preparazione:
      "Prepara il riso e lascialo raffreddare. Disponi nella bowl il riso e sopra gli ingredienti a sezioni: Tartare di Salmone OHissa, avocado, carote, edamame. Condisci con salsa Ponzu o soia e una leggera maionese al lime.",
  },
  {
    img: Frame390_4,
    title: "Tartare di Tonno alla soia",
    ingredienti:
      "Tartare di Tonno OHissa, germogli di soia, salsa di soia, olio di sesamo e semi di sesamo (opzionale).",
    preparazione:
      "Condisci la Tartare di Tonno OHissa con salsa di soia e olio di sesamo. Disponi la tartare in un coppapasta e decora con germogli di soia. Aggiungi poi semi di sesamo se desideri.",
  },
];

const Homepage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isDesktop = !isMobile;

  const gustoSectionRef = useRef<HTMLDivElement | null>(null);
  const [gustoProgress, setGustoProgress] = useState(0);

  const [productsBg, setProductsBg] = useState(frame405);

  // RESPONSIVE
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const updateMobile = () => setIsMobile(mq.matches);
    updateMobile();
    mq.addEventListener("change", updateMobile);
    return () => mq.removeEventListener("change", updateMobile);
  }, []);

  // ANIMAZIONE SCROLL TESTO "GUSTO"
  useEffect(() => {
    const handleScroll = () => {
      if (!gustoSectionRef.current) return;
      const rect = gustoSectionRef.current.getBoundingClientRect();
      const windowH = window.innerHeight || document.documentElement.clientHeight;
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

  // Cambia lo sfondo prodotti al passaggio hover
  function handleBgReset() {
    setProductsBg(frame405);
  }

  function handleBgChange(bg: string, _prod: string) {
    setProductsBg(bg);
  }

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
            style={{
              width: "100%",

              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
          />
        </header>

        {/* TESTO HERO */}
        <section
          className="hero-text-block"
          style={{
            background: "#ffffff",
            padding: isMobile ? "32px 16px 40px" : "48px 16px 0px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "1.9rem" : "3rem",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#075659",
              marginBottom: isMobile ? "16px" : "0px",
              textAlign: "center",
              letterSpacing: "-1px",
            }}
          >
            Amare il mare per gustare
            <br />
            il benessere.
          </h1>

          <p
            style={{
              fontSize: isMobile ? "1.05rem" : "1.25rem",
              lineHeight: 1.6,
              color: "#000",
              maxWidth: "900px",
              textAlign: "center",
              marginBottom: isMobile ? "16px" : "20px",
            }}
          >
            OHissa seleziona, lavora e prepara per il consumo – anche a crudo –
            tonno, pesce spada, salmone e ricciola. Operiamo nella nostra sede in
            Maremma, con tecnologie innovative come l’ibernazione da fresco. Il
            nostro impegno è offrire un’alimentazione sana e gustosa, che esalta
            il palato e rispetta l’ambiente.
          </p>

          <p
            style={{
              fontSize: isMobile ? "1.2rem" : "1.5rem",
              fontWeight: 700,
              color: "#075659",
              textAlign: "center",
            }}
          >
            OHissa: così buono che fa bene.
          </p>
        </section>

        {/* GUSTO */}
        <section
          className="gusto-section"
          ref={gustoSectionRef}
          style={{
            width: "100vw",
            background: "rgba(255, 255, 255, 1)",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="gusto-image-wrapper"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={isMobile ? GustoMobile : GustoImg}
              alt="Gusto OHissa"
              className="gusto-image"
              style={{
                width: "100%",
                display: "block",
                objectFit: "cover",
              }}
            />
            <div
              className={`gusto-text ${isMobile ? "mobile" : ""}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) translateY(${(1 - gustoProgress) * (isMobile ? 18 : 30)
                  }vh)`,
                opacity: gustoProgress,
                fontSize: isMobile ? "1.7rem" : "2.6rem",
                fontWeight: 500,
                lineHeight: 1.2,
                color: "#fff",
                textAlign: "center",
                letterSpacing: "-0.5px",
                textShadow: "0 2px 10px rgba(0,0,0,0.6)",
                padding: "0 12px",
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
          </div>
        </section>

        {/* PRODOTTI – SCOPRI LA LINEA DEL BENESSERE */}

        {isMobile ? (
          <section className="ohissa-mobile-products">
            <div
              className="ohissa-mobile-products-inner"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${frame405})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                marginTop: "60px",
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
        ) : null}


        {/* DESKTOP: blocco con hover dinamico */}
        {isDesktop && (
          <div className="ohissa-products-block" style={{ position: "relative" }}>
            <img
              src={productsBg}
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


          </div>
        )}

        {/* CERTIFICAZIONI – FASCIA VERDE */}
        <section
          className="certifications-section"
          style={{
            background: "#075659",
            padding: "24px 16px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              maxWidth: "1100px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                marginRight: "8px",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "1rem",
                  lineHeight: 1.2,
                  textAlign: "right",
                }}
              >
                ISO 14001:2015
                <br />
                ISO 45001:2018
              </span>
            </div>
            <img
              src={ItalianLandscapeBlueCMYK}
              alt="MSC"
              style={{
                height: 56,
                background: "#fff",
                borderRadius: 8,
              }}
            />
            <img
              src={AscLogo}
              alt="ASC"
              style={{
                height: 56,
                background: "#fff",
                borderRadius: 8,
              }}
            />
            <img
              src={IfsLogo}
              alt="IFS Food"
              style={{
                height: 56,
                background: "#fff",
                borderRadius: 8,
              }}
            />
            <img
              src={CsrLogo}
              alt="Ecovadis"
              style={{
                height: 56,
                background: "#fff",
                borderRadius: 8,
              }}
            />
          </div>
        </section>

        {/* VIDEO – RISPETTO SENZA ALTERAZIONI */}
        <section
          style={{
            width: "100vw",
            background: "#ffffff",
            padding: "32px 0 40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "min(1200px, 100vw)",
              padding: "0 16px",
            }}
          >
            <video
              src={isMobile ? TeaserVideo : CorporateVideo}
              controls
              style={{
                width: "100%",
                height: isMobile ? "220px" : "420px",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            >
              Il tuo browser non supporta il tag video.
            </video>
          </div>
        </section>

        {/* PIÙ SICURO DEL FRESCO / ALIMENTAZIONE / SPORT */}
        <section
          className="full-width-section white-bg"
          style={{
            padding: "48px 16px 52px",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            gap: "60px",
          }}
        >
          {/* Più sicuro del fresco — IMMAGINE A DESTRA */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: "32px",
              justifyContent: "center",
            }}
          >
            {/* Testo */}
            <div style={{ maxWidth: 420, order: isMobile ? 2 : 1 }}>
              <h2
                style={{
                  color: "#075659",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                Più sicuro del fresco
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#075659",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                OHissa è più sano del fresco grazie alla tecnologia ULT, ovvero
                l'ibernazione, una tecnologia superiore al congelamento, che
                applichiamo già a bordo.
              </p>
            </div>

            {/* Immagine */}
            <img
              src={FrescoImg}
              alt="Più sicuro del fresco"
              style={{
                width: isMobile ? "85%" : "40%",
                objectFit: "cover",
                order: isMobile ? 1 : 2,
              }}
            />
          </div>

          {/* Alimentazione genuina — IMMAGINE A SINISTRA */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: "32px",
              justifyContent: "center",
            }}
          >
            {/* Immagine a sinistra */}
            <img
              src={GenuinaImg}
              alt="Alimentazione genuina"
              style={{
                width: isMobile ? "85%" : "40%",
                objectFit: "cover",
                order: isMobile ? 1 : 1,
              }}
            />

            {/* Testo a destra */}
            <div style={{ maxWidth: 420, order: isMobile ? 2 : 2 }}>
              <h2
                style={{
                  color: "#075659",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                Alimentazione genuina
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#075659",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                I prodotti OHissa sono lavorati al naturale senza additivi chimici,
                mantenendo intatte le proprietà nutritive del pesce appena pescato.
              </p>
            </div>
          </div>

          {/* OHissa per lo sport — IMMAGINE A DESTRA */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              alignItems: "center",
              gap: "32px",
              justifyContent: "center",
            }}
          >
            {/* Testo */}
            <div style={{ maxWidth: 420, order: isMobile ? 2 : 1 }}>
              <h2
                style={{
                  color: "#075659",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                OHissa per lo sport
              </h2>
              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#075659",
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                Sappiamo quanto sia profondo il legame tra attività sportiva e
                alimentazione e quanto la nutrizione incida sulla performance.
              </p>
            </div>

            {/* Immagine */}
            <img
              src={SportImg}
              alt="OHissa per lo sport"
              style={{
                width: isMobile ? "85%" : "40%",
                objectFit: "cover",
                order: isMobile ? 1 : 2,
              }}
            />
          </div>
        </section>


        {/* CORTILIA */}
        <section className="full-width-section" style={{ position: "relative", width: "100%", padding: 0, margin: 0 }}>
          <img
            src={isMobile ? CortiliaMobile : CortiliaDesktop}
            alt="Cortilia OHissa"
            className="section-image"
            style={{ width: "100%", display: "block" }}
          />
          <a
            href="https://www.cortilia.it/produttori/ohissa?srsltid=AfmBOorllWXqUNxzaRk0F4ve8rHmF3Vw_l-I6NGlOEZOZU4UgOQDbHlv"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              top: isMobile ? "60%" : "50%",
              right: isMobile ? "8%" : "7%",
              transform: isMobile ? "translateY(-50%)" : "translateY(-50%)",
              background: "#ff7e6b",
              color: "#fff",
              borderRadius: "24px",
              padding: isMobile ? "10px 22px" : "16px 38px",
              fontWeight: 700,
              fontSize: isMobile ? "1rem" : "1.18rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
              border: "none",
              textDecoration: "none",
              zIndex: 2,
              transition: "background 0.2s, color 0.2s",
              cursor: "pointer",
              display: "inline-block"
            }}
            aria-label="Scopri di più su Cortilia"
            onMouseOver={e => e.currentTarget.style.background = '#ff5a3c'}
            onMouseOut={e => e.currentTarget.style.background = '#ff7e6b'}
          >
            Scopri di più
          </a>
        </section>

        {/* STORIA – TRE BLOCCHI */}
        <section className="full-width-section white-bg storia-ohissa">
          <div className="story-container">
            {/* BLOCCO 1 */}
            <div className="story-block">
              <div className="story-image-wrapper">
                <img
                  src={MaremmaImg}
                  alt="Paesaggio Maremma"
                  className="story-image"
                />

              </div>
              <div className="story-text">
                <h3 className="story-title">
                  Lavorato artigianalmente in Maremma
                </h3>
                <p className="story-body">
                  Parlare di OHissa senza raccontare la Maremma sarebbe
                  impossibile. È qui, in questo angolo autentico del sud della
                  Toscana, che affondano le nostre radici da generazioni. Il
                  legame con questa terra è profondo e indissolubile.
                </p>
                <p className="story-body">
                  OHissa non è semplicemente italiana: è orgogliosamente
                  maremmana.
                </p>
              </div>
            </div>

            {/* BLOCCO 2 */}
            <div className="story-block" style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row-reverse', alignItems: 'center' }}>
              <div className="story-image-wrapper" style={{ flex: isMobile ? 'none' : '1 1 0', minWidth: isMobile ? undefined : 0 }}>
                <img
                  src={PesceCrudoImg}
                  alt="Pesce crudo OHissa"
                  className="story-image"
                />
              </div>
              <div className="story-text" style={{ flex: isMobile ? 'none' : '1 1 0', minWidth: isMobile ? undefined : 0 }}>
                <h3 className="story-title">Pesce crudo di alta qualità</h3>
                <p className="story-body">
                  Utilizziamo esclusivamente materia prima premium, proveniente
                  da una filiera rigorosamente controllata e lavorata a mano in
                  Maremma. Questo ci permette di garantire i più alti standard
                  di qualità e sicurezza.
                </p>
                <p className="story-body">
                  OHissa è sinonimo di qualità, affidabilità e controllo.
                </p>
              </div>
            </div>

            {/* BLOCCO 3 */}
            <div className="story-block">
              <div className="story-image-wrapper">
                <img
                  src={MareImg}
                  alt="Bambina che gioca in mare"
                  className="story-image"
                />

              </div>
              <div className="story-text">
                <h3 className="story-title">Autentica espressione di salute</h3>
                <p className="story-body">
                  Per noi di OHissa “sano come un pesce” non è un modo di dire,
                  ma un impegno quotidiano. Selezioniamo solo i migliori tagli
                  di pesce crudo, pescati e lavorati con cura e maestria.
                </p>
                <p className="story-body">
                  Utilizziamo solo conservanti naturali, quando necessari, per
                  mantenere intatte le proprietà organolettiche e il valore
                  nutrizionale.
                </p>
                <p className="story-body">
                  OHissa è salute e gusto: un equilibrio perfetto tra
                  naturalità, qualità e nutrimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHI SIAMO */}
        <section
          className="full-width-section chi-siamo-bg"
          style={{
            position: "relative",
            width: "100%",
            padding: 0,
            margin: 0,
            overflow: "hidden",
          }}
        >
          {/* SFONDO: MOBILE vs DESKTOP */}
          <img
            src={isMobile ? ChiSiamoMobileImg : ChiSiamoDesktopBg}
            alt="Chi siamo OHissa"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />

          {/* TESTO SOVRAPPOSTO */}
          <div
            style={{
              position: "absolute",
              // posizione diversa tra mobile e desktop
              top: isMobile ? "18%" : "50%",
              left: isMobile ? "10%" : "58%",
              transform: isMobile ? "none" : "translateY(-50%)",
              maxWidth: isMobile ? "75%" : 430,
              width: isMobile ? "75%" : "auto",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "4px" : "10px",
              textAlign: "left",
              fontFamily: "Ubuntu, system-ui, sans-serif",
              marginTop: 50,
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "2.95rem" : "1.9rem",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Chi siamo
            </h2>

            <p
              style={{
                fontSize: isMobile ? "1.32rem" : "0.96rem",
                lineHeight: isMobile ? 1.35 : 1.5,
                margin: 0,
              }}
            >
              OHissa è una linea di prodotti del Gruppo Manno, uno dei
              principali players europei del settore, che mette in campo
              la propria centenaria esperienza nel mondo ittico, con
              un’attenzione maniacale al benessere del consumatore finale.
            </p>

            <p
              style={{
                fontSize: isMobile ? "1.32rem" : "0.96rem",
                lineHeight: isMobile ? 1.35 : 1.5,
                margin: 0,
              }}
            >
              Il termine Ohissa rimanda all’incitamento di un lavoro
              fatto con forza, dedizione, sacrificio e passione, come il
              lavoro dei pescatori.
            </p>

            <p
              style={{
                fontSize: isMobile ? "1.32rem" : "0.96rem",
                lineHeight: isMobile ? 1.35 : 1.5,
                margin: 0,
              }}
            >
              I prodotti OHissa sono naturali, sani, controllati e
              proposti in diversi tagli.
            </p>

            <p
              style={{
                fontSize: isMobile ? "1.32rem" : "0.96rem",
                lineHeight: isMobile ? 1.35 : 1.5,
                margin: 0,
              }}
            >
              Tradizione, salute ed etica sono i valori che da sempre
              guidano il Gruppo Manno.
            </p>
          </div>
        </section>

        {/* LE NOSTRE RICETTE – CAROSELLO */}
        <section
          className="full-width-section white-bg"
          style={{
            padding: "40px 0 56px",
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              color: "#075659",
              fontSize: "2.1rem",
              fontWeight: 700,
              marginBottom: "28px",
              textAlign: "center",
            }}
          >
            Le nostre ricette
          </h2>

          {/* CAROSELLO */}
          <CarouselRicette ricette={ricette} />
        </section>

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
                SEDE OPERATIVA
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
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  f
                </span>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  ig
                </span>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    border: "1px solid #fff",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  yt
                </span>
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
              <span
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  border: "1px solid #fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                }}
              >
                in
              </span>
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
            P.IVA 12646260960 - By Webmaremma
          </div>

          {/* fascia bianca loghi istituzionali – placeholder */}
          <div
            className="ohissa-footer-bottom"
            style={{
              background: "#fff",
              padding: "18px 24px 24px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "40px",
              flexWrap: "wrap",
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

        </footer>
      </div>
    </div>
  );
};

export default Homepage;
