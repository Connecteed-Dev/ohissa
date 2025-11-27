import React, { useState, useEffect } from "react";
import "../App.css";
import Navbar from "./Navbar";
import Logo10 from "../assets/image 10.png";
import Logo9 from "../assets/image 9.png";
import LogoFrame331 from "../assets/Frame 331.png";
import Logo7 from "../assets/image 7.png";
import Logo6 from "../assets/image 6.png";
import PartitaGenereLogo from "../assets/Loghi/partita-di-genere-r45mvu6xt606uceeqcisg43yrmxl0xpyo0r09dppts.png";

import frame405 from "../assets/Frame 405.png";
import Hero6 from "../assets/Hero (6).png";
import AmareIlMare13 from "../assets/Amare il mare (13).png";
import Frame384_4 from "../assets/Frame 384 (4).png";
import Frame427_1 from "../assets/Frame 427321007 (1).png";
import AmareIlMare14 from "../assets/Amare il mare (14).png";
import Frame427_008 from "../assets/Frame 427321008.png";
import Frame415_1 from "../assets/Frame 415 (1).png";
import Group5_1 from "../assets/Group 5 (1).png";
import Frame384_6 from "../assets/Frame 384 (6).png";
import Frame412_11 from "../assets/Frame 412 (11).png";
import Frame412_12 from "../assets/Frame 412 (12).png";
import Frame412_13 from "../assets/Frame 412 (13).png";
import Frame412_14 from "../assets/Frame 412 (14).png";
import Hero8 from "../assets/2.png";
import AmareIlMare16 from "../assets/Amare il mare (16).png";
import Frame384_5 from "../assets/Frame 384 (5).png";
import Frame427_2 from "../assets/Frame 427321007 (2).png";
import Frame381 from "../assets/Frame 381.png";
import OhissaSportVideo from "../assets/Ohissa-per-lo-Sport-1.mp4";
import Frame415_2 from "../assets/Frame 415 (2).png";
import Footer from "../assets/Footer.png";
import Footer1 from "../assets/Footer (1).png";
import hero from "../assets/Group 5 (2).png"
import AscLogo from "../assets/Loghi/ASC-Landscape-Italian-r52nk2mg47canpctelhceat8bo2s8q4tciqxg0mqkg.png";
import CsrLogo from "../assets/Loghi/csr-r52nk3kab1dt5y95zjcydmwp2lbtys10q1ljqh7bpc.png";
import IfsLogo from "../assets/Loghi/IFS_Food_Box_RGB-1-r45mvu6xt600pd74fix1vzcynhebn64lvz3nnhr8cg.png";
import MscLogo from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";
import ItalianLandscapeBlueCMYK from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";

// SFONDI PRODOTTI (li tengo usati in un blocco hidden per evitare warning su import inutilizzati)
import BgSalmone from "../assets/Group 1 (1).png";
import BgPesceSpada from "../assets/Group 2 (1).png";
import BgTonnoAlalunga from "../assets/Group 3 (1).png";
import BgTonnoPinnaGialla from "../assets/Group 4 (2).png";

const OhissaSport: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth <= 768 : false
  );
  const [isDesktop, setIsDesktop] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth > 768 : false
  );
  const [desktopBg, setDesktopBg] = useState<string>(frame405);

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function handleBgChange(bg: string, arg1: string): void {
    setDesktopBg(bg);
  }

  function handleBgReset(): void {
    setDesktopBg(frame405);
  }

  return (
    <div
      className="ohissa-page"
      style={{ minHeight: "100vh", width: "100vw", background: "#ffffff" }}
    >
      <Navbar />

      <main
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >        <img src={hero} alt="Hero Più fresco del fresco" style={{
            width: "100vw",
            maxWidth: "100%",
            display: "block",
          }} />

        {/* HERO -------------------------------------------------------------- */}
        <section style={{ width: "100%", position: "relative" }}>
         
          {/* decorazioni nascoste ma usate per non sprecare asset */}
          <img
            src={AmareIlMare13}
            alt=""
            style={{ display: "none" }}
          />
          <img
            src={AmareIlMare14}
            alt=""
            style={{ display: "none" }}
          />
          <img
            src={Group5_1}
            alt=""
            style={{ display: "none" }}
          />
        </section>

        {/* BLOCCO TESTO NERO: “OHissa per lo sport” ------------------------- */}
        <section
          style={{
            width: "100%",
            background: "#ffffffff",
            color: "#000000ff",
            padding: isMobile ? "32px 16px 40px" : "48px 16px 56px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              color: "#0bb3ac",
              fontSize: isMobile ? "1.8rem" : "2.4rem",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            OHissa per lo sport
          </h1>
          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: isMobile ? "0.95rem" : "1.05rem",
              lineHeight: 1.6,
            }}
          >
            “OHissa” rimanda all’incitamento di un lavoro fatto con forza,
            dedizione e sacrificio: il lavoro dei pescatori. Questi stessi
            valori si ritrovano anche nel mondo dello sport e nel cuore di
            ogni sportivo, di qualsiasi età.
            <br />
            <br />
            Per questo, è nato il progetto OHissa per lo Sport. Un progetto
            che supporta i giovani sportivi, aiutandoli a imparare a mangiare
            in modo corretto per poter vincere le proprie sfide, ma sempre con
            gran gusto.
            <br />
            <br />
            Noi di OHissa sappiamo infatti quanto sia profondo il legame tra
            attività sportiva e alimentazione e quanto una corretta e sana
            nutrizione incida sulla performance sportiva, anche negli atleti
            più giovani.
          </p>
        </section>

        {/* RIGA CON I 3 CERCHI (TOP) ---------------------------------------- */}
        <section
          style={{
            width: "100%",
            background: "#ffffff",
            display: "flex",
            justifyContent: "center",
            padding: isMobile ? "24px 0 40px" : "40px 0 56px",
          }}
        >
          <img
            src={Frame384_6}
            alt="Sport icons"
            style={{
              width: isMobile ? "90%" : "100%",
              display: "block",
            }}
          />
        </section>

        {/* SEZIONE VERDE PETROLIO: ALIMENTAZIONE + CARDS -------------------- */}
        <section
          style={{
            width: "100%",
            
            padding: isMobile ? "40px 16px" : "56px 16px 72px",
            boxSizing: "border-box",
          }}
        >
         {/* CARD PRODOTTI --------------------------------------------------- */}
<div
  style={{
    maxWidth: "960px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  }}
>
  {/* Tonno Pinna Gialla */}
  <div
    style={{
  background: "rgba(39, 108, 111, 0.2)",
  borderRadius: "18px",
  padding: isMobile ? "16px" : "20px 24px",
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: "stretch",
  gap: isMobile ? "14px" : "20px",
  color: "#053542",
}}
  >
    <div
      style={{
        position: "relative",
        width: isMobile ? "100%" : 200,
        height: isMobile ? "100%" : 200,
        flexShrink: 0,
      }}
    >
      <img
        src={Frame412_11}
        alt="Tonno Pinna Gialla"
        style={{
          width: "100%",
          height: "100%",
         
          display: "block",
        }}
      />
      {/* pallino dorato in alto a destra */}
      
    </div>

    <div style={{ flex: 1, fontSize: "0.96rem", lineHeight: 1.6 }}>
      <h3
        style={{
          fontSize: isMobile ? "1.15rem" : "1.35rem",
          fontWeight: 700,
          margin: "0 0 4px",
          color: "#008578",
        }}
      >
        Tonno Pinna Gialla
      </h3>
      <p
        style={{
          fontWeight: 700,
          margin: "0 0 8px",
          color: "#005b68",
        }}
      >
        Il carburante dei campioni. Muscoli forti, mente lucida.
      </p>
      <p style={{ margin: 0 }}>
        Fonte di proteine, di calcio e di ferro, ma anche ricco di
        alcune vitamine fondamentali:
        <br />
        <b>Niacina (Vitamina B3)</b>, utile per chi pratica sport in
        quanto aiuta a mantenere un buon tono muscolare;
        <br />
        <b>B6</b>, che stimola le funzioni cerebrali e previene
        l’invecchiamento;
        <br />
        <b>B12</b>, che è fondamentale per il buon funzionamento
        dell’organismo: contribuisce infatti alla trasformazione dei
        nutrienti in energia e alla riduzione dello stress.
      </p>
    </div>
  </div>

  {/* Tonno Alalunga */}
  <div
    style={{
  background: "rgba(39, 108, 111, 0.2)",
  borderRadius: "18px",
  padding: isMobile ? "16px" : "20px 24px",
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: "stretch",
  gap: isMobile ? "14px" : "20px",
  color: "#053542",
}}
  >
    <div
      style={{
        position: "relative",
        width: isMobile ? "100%" : 200,
        height: isMobile ? "100%" : 200,
        flexShrink: 0,
      }}
    >
      <img
        src={Frame412_12}
        alt="Tonno Alalunga"
        style={{
          width: "100%",
          height: "100%",
          
          display: "block",
        }}
      />
      {/* pallino dorato in alto a sinistra */}
      
    </div>

    <div style={{ flex: 1, fontSize: "0.96rem", lineHeight: 1.6 }}>
      <h3
        style={{
          fontSize: isMobile ? "1.15rem" : "1.35rem",
          fontWeight: 700,
          margin: "0 0 4px",
          color: "#008578",
        }}
      >
        Tonno Alalunga
      </h3>
      <p
        style={{
          fontWeight: 700,
          margin: "0 0 8px",
          color: "#005b68",
        }}
      >
        Leggerezza potente. Proteine nobili, grassi buoni.
      </p>
      <p style={{ margin: 0 }}>
        Con le stesse virtù del suo cugino, il Tonno Pinna Gialla, è ricco
        di proteine e povero di grassi.
        <br />
        <br />
        Gran parte dei grassi che contiene sono i polinsaturi
        <b> Omega-3</b>, che tengono a bada i livelli di colesterolo
        cattivo nel sangue e sono grandi alleati delle funzioni cerebrali,
        favorendo la concentrazione e aiutando la memoria.
      </p>
    </div>
  </div>

  {/* Salmone */}
  <div
    style={{
  background: "rgba(39, 108, 111, 0.2)",
  borderRadius: "18px",
  padding: isMobile ? "16px" : "20px 24px",
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: "stretch",
  gap: isMobile ? "14px" : "20px",
  color: "#053542",
}}
  >
    <div
      style={{
        position: "relative",
        width: isMobile ? "100%" : 200,
        height: isMobile ? "100%" : 200,
        flexShrink: 0,
      }}
    >
      <img
        src={Frame412_13}
        alt="Salmone"
        style={{
          width: "100%",
          height: "100%",
          
          display: "block",
        }}
      />
      {/* pallino dorato in alto a destra */}
      
    </div>

    <div style={{ flex: 1, fontSize: "0.96rem", lineHeight: 1.6 }}>
      <h3
        style={{
          fontSize: isMobile ? "1.15rem" : "1.35rem",
          fontWeight: 700,
          margin: "0 0 4px",
          color: "#008578",
        }}
      >
        Salmone
      </h3>
      <p
        style={{
          fontWeight: 700,
          margin: "0 0 8px",
          color: "#005b68",
        }}
      >
        Il re degli Omega-3. Cuore protetto, cervello attivo.
      </p>
      <p style={{ margin: 0 }}>
        Con un alto valore energetico, il Salmone è ricco di <b>fosforo</b> e
        <b> magnesio</b>, entrambi sali minerali essenziali per la
        produzione di energia, processo in cui è impegnata anche la
        <b> Vitamina B2</b>, pure presente nel Salmone.
        <br />
        <br />
        Inoltre, <b>Vitamina B5</b>, <b>Folato</b> e <b>Acido Ascorbico</b>{" "}
        riducono lo stato di stanchezza e fatica.
      </p>
    </div>
  </div>

  {/* Pesce spada */}
  <div
    style={{
  background: "rgba(39, 108, 111, 0.2)",
  borderRadius: "18px",
  padding: isMobile ? "16px" : "20px 24px",
  display: "flex",
  flexDirection: isMobile ? "column" : "row",
  alignItems: "stretch",
  gap: isMobile ? "14px" : "20px",
  color: "#053542",
}}
  >
    <div
      style={{
        position: "relative",
        width: isMobile ? "100%" : 200,
        height: isMobile ? "100%" : 200,
        flexShrink: 0,
      }}
    >
      <img
        src={Frame412_14}
        alt="Pesce spada"
        style={{
          width: "100%",
          height: "100%",
         
          display: "block",
        }}
      />
      {/* pallino dorato in alto a sinistra */}
      
      
    </div>

    <div style={{ flex: 1, fontSize: "0.96rem", lineHeight: 1.6 }}>
      <h3
        style={{
          fontSize: isMobile ? "1.15rem" : "1.35rem",
          fontWeight: 700,
          margin: "0 0 4px",
          color: "#008578",
        }}
      >
        Pesce spada
      </h3>
      <p
        style={{
          fontWeight: 700,
          margin: "0 0 8px",
          color: "#005b68",
        }}
      >
        Energia e resistenza. Per performance da campioni.
      </p>
      <p style={{ margin: 0 }}>
        Eccezionale fonte di proteine con bassi livelli di grassi, è anche
        ricco di:
        <br />
        <b>Potassio</b>, che partecipa alla contrazione muscolare;
        <br />
        <b>Vitamina B1</b>, chiamata “vitamina del morale” per la sua
        capacità di condizionare in positivo l’attitudine mentale;
        <br />
        <b>Colina (Vitamina J)</b>, che ritarda il senso di fatica.
      </p>
    </div>
  </div>
</div>

        </section>


        {/* SECONDO BLOCCO TESTO + VIDEO ------------------------------------ */}
        <section
          style={{
            width: "100%",
            background: "#ffffff",
            padding: isMobile ? "40px 16px 24px" : "56px 16px 32px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#0bb3ac",
              fontSize: isMobile ? "1.6rem" : "2rem",
              fontWeight: 800,
              marginBottom: "16px",
            }}
          >
            OHissa per lo sport
          </h2>
          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto 32px auto",
              fontSize: isMobile ? "0.95rem" : "1.05rem",
              lineHeight: 1.6,
              color: "#333",
            }}
          >
            OHissa per lo Sport coinvolge e supporta associazioni sportive come
            l’Unione Sportiva Livorno Basket, il Centro Padel Firenze e
            l’Argentario Basket. L’azienda, con la collaborazione del Dott.
            Naitana, organizza corsi di alimentazione sportiva dedicati ai
            giovani atleti presso le società coinvolte.
          </p>

          {/* video OHissa per lo Sport */}
          <video
            controls
            style={{
              width: isMobile ? "90%" : "500px",
              maxWidth: "100%",
              borderRadius: "12px",
              display: "block",
              margin: "0 auto 16px auto",
              background: "#000"
            }}
          >
            <source src={OhissaSportVideo} type="video/mp4" />
            Il tuo browser non supporta il video HTML5.
          </video>

        </section>

        {/* RIGA CON I 3 CERCHI (BOTTOM) ------------------------------------ */}
        <section
          style={{
            width: "100%",
            background: "#ffffff",
            display: "flex",
            justifyContent: "center",
            padding: isMobile ? "24px 0 32px" : "40px 0 48px",
          }}
        >
          <img
            src={Frame384_6}
            alt="Sport icons bottom"
            style={{
              width: isMobile ? "90%" : "100%",
             
              display: "block",
            }}
          />
          <img src={Frame415_1} alt="" style={{ display: "none" }} />
        </section>

{/* CTA BLU: “SCOPRI LA NOSTRA LINEA DEL BENESSERE” ----------------- */}
{isMobile ? (
  <section className="ohissa-mobile-products" style={{ marginBottom: 32 }}>
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
    
    
  </div>
)}

         {/* FOOTER (identico a Salmone) */}
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

          {/* fascia bianca loghi istituzionali (placeholder) */}
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

export default OhissaSport;
