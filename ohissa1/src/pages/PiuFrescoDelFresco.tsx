import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

// HERO / CONTENUTI
import Group6 from "../assets/Group 6.png";
import Frame350_4 from "../assets/Frame 350 (4).png";
import Frame350_5 from "../assets/Frame 350 (5).png";
import Frame350_6 from "../assets/Frame 350 (6).png";
import PiuFrescoDelFrescoImg from "../assets/piu╠Ç fresco del fresco.png";
import ChiSiamo20 from "../assets/Chi siamo (20).png";
import PiuFrescoMain from "../assets/Più fresco del fresco.png";
import Logo10 from "../assets/image 10.png";
import Logo9 from "../assets/image 9.png";
import LogoFrame331 from "../assets/Frame 331.png";
import Logo7 from "../assets/image 7.png";
import Logo6 from "../assets/image 6.png";
import ChiSiamo22 from "../assets/Chi siamo (22).png";

// FOOTER LOGHI
import AscLogo from "../assets/Loghi/ASC-Landscape-Italian-r52nk2mg47canpctelhceat8bo2s8q4tciqxg0mqkg.png";
import CsrLogo from "../assets/Loghi/csr-r52nk3kab1dt5y95zjcydmwp2lbtys10q1ljqh7bpc.png";
import IfsLogo from "../assets/Loghi/IFS_Food_Box_RGB-1-r45mvu6xt600pd74fix1vzcynhebn64lvz3nnhr8cg.png";
import MscLogo from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";
import PartitaGenereLogo from "../assets/Loghi/partita-di-genere-r45mvu6xt606uceeqcisg43yrmxl0xpyo0r09dppts.png";

const PiuFrescoDelFresco: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 900 : true
  );

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="app" style={{ minHeight: "100vh", width: "100vw", background: "#fff" }}>
      <Navbar />
      <main style={{ width: "100%", background: "#fff" }}>
        {/* HERO */}
        <img src={Group6} alt="Hero Più fresco del fresco" style={{ width: "100%", display: "block", objectFit: "cover" }} />
        {isDesktop && (
          <section style={{ width: "100%", padding: "40px 0 24px", display: "flex", justifyContent: "center", background: "#fff" }}>
            <h1 style={{ color: "#00796b", fontFamily: "Ubuntu, system-ui, sans-serif", fontSize: "3rem", fontWeight: 700, margin: 0 }}>
              Più sicuro del fresco
            </h1>
          </section>
        )}
        {/* BLOCCO GUSTO E SICUREZZA ALIMENTARE */}
        <section
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            background: "#ffffff",
            padding: isDesktop ? "48px 0 48px 0" : "18px 0 18px 0",
          }}
        > 
          <div
            style={{
              width: "min(960px, 92vw)",
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              alignItems: "center",
              gap: isDesktop ? "56px" : "24px",
            }}
          >
            {/* MOBILE: layout verticale centrato */}
            {isDesktop ? (
              <>
                <div
                  style={{
                    width: 360,
                    height: 330,
                  }}
                >
                  <img
                    src={Frame350_4}
                    alt="Dettaglio pesce spada"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div
                  style={{
                    flex: 1,
                    color: "#075659",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 700,
                      margin: 0,
                      color: "#008578",
                    }}
                  >
                    Gusto e sicurezza alimentare
                  </h2>
                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      margin: 0,
                      color: "#555",
                    }}
                  >
                    Per mantenere intatto il gusto, la consistenza, il colore e le caratteristiche organolettiche del pesce fresco appena pescato e per garantire, allo stesso tempo, la massima sicurezza alimentare, Ohissa utilizza prodotti derivanti dalla tecnologia di ibernazione “Ultra Low Temperature” (ULT).<br /><br />Questa tecnica, che abbatte il rischio di parassitosi e di proliferazione dei batteri, risponde a tutte le regolamentazioni europee riguardanti la sicurezza del prodotto alimentare e in particolare la sicurezza di consumo a crudo.<br /><br />Grazie alla tecnologia Ultra-Low Temperature (ULT) Ohissa è come appena pescato ma, in più, garantisce anche un’ineguagliabile sicurezza alimentare.
                  </p>
                </div>
              </>
            ) : (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0px",
                }}
              >
                <h1 style={{ color: "#00796b", fontFamily: "Ubuntu, system-ui, sans-serif", fontSize: "2rem", fontWeight: 700, margin: "0 0 12px 0", textAlign: "center" }}>
                  Più sicuro del fresco
                </h1>
                <div style={{ width: 210, height: 190, overflow: "hidden", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img
                    src={Frame350_4}
                    alt="Dettaglio pesce spada"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <h2 style={{ fontSize: "2.1rem", fontWeight: 700, margin: "0 0 10px 0", color: "#008578", textAlign: "center" }}>
                  Gusto e sicurezza alimentare
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.7, margin: 0, color: "#555", textAlign: "center" }}>
                  Per mantenere intatto il gusto, la consistenza, il colore e le caratteristiche organolettiche del pesce fresco appena pescato e per garantire, allo stesso tempo, la massima sicurezza alimentare, Ohissa utilizza prodotti derivanti dalla tecnologia di ibernazione “Ultra Low Temperature” (ULT).<br /><br />Questa tecnica, che abbatte il rischio di parassitosi e di proliferazione dei batteri, risponde a tutte le regolamentazioni europee riguardanti la sicurezza del prodotto alimentare e in particolare la sicurezza di consumo a crudo.<br /><br />Grazie alla tecnologia Ultra-Low Temperature (ULT) Ohissa è come appena pescato ma, in più, garantisce anche un’ineguagliabile sicurezza alimentare.
                </p>
              </div>
            )}
          </div>
        </section>
       
        {/* TITOLO CENTRALE */}
        
<section
  style={{
    width: "100vw",
    background: "#ffffff",
    padding: isDesktop ? "64px 0 72px" : "40px 0 40px",
    display: "flex",
    justifyContent: "center",
  }}
>
  <div
    style={{
      width: "min(960px, 92vw)",
      display: "flex",

      // FOTO A DESTRA SU DESKTOP – TESTO A SINISTRA
      flexDirection: isDesktop ? "row-reverse" : "column",

      alignItems: "center",
      gap: isDesktop ? "56px" : "24px",
    }}
  >
    {/* FOTO */}
    {isDesktop ? (
      <div
        style={{
          width: 360,
          height: 330,
        }}
      >
        <img
          src={Frame350_5}
          alt="Dettaglio pesce spada"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    ) : (
      <div style={{ width: 210, height: 190, overflow: "hidden", margin: "0 auto 10px auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src={Frame350_5}
          alt="Dettaglio pesce spada"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    )}

    {/* TESTO */}
    <div
      style={{
        flex: 1,
        color: "#075659",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h2
        style={{
          fontSize: isDesktop ? "2.4rem" : "2.1rem",
          fontWeight: 700,
          margin: 0,
          color: "#008578",
        }}
      >
        Genuinità e freschezza
      </h2>

      <p
        style={{
          fontSize: isDesktop ? "1.05rem" : "1rem",
          lineHeight: 1.7,
          margin: 0,
          color: "#555",
        }}
      >
        A La Torba, nei nostri laboratori, dove vengono rispettati i più alti
        standard di sicurezza e controllo, la materia prima più pregiata viene
        decongelata e tagliata al coltello direttamente dalle mani dei nostri
        esperti per far sì che il pesce mantenga intatta la sua naturalezza.
        <br />
        <br />
        Per garantire la massima genuinità, i prodotti vengono trattati solo
        con sale (e zucchero nel caso del Salmone) e spediti nel giro di poche
        ore dal decongelamento.
        <br />
        <br />
        La tecnologia ULT e gli altissimi standard garantiti nei nostri
        laboratori fanno di Ohissa una linea di prodotti come appena pescati.
      </p>
    </div>
  </div>
</section>

        {/* BLOCCO ULTRA-LOW TEMPERATURE */}
<section
  style={{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    background: "#ffffff",
    padding: "48px 0 48px 0",
  }}
>
  <div
    style={{
      width: isDesktop ? "100%" : "94vw",
      maxWidth: isDesktop ? "1040px" : "420px",
      borderRadius: "24px",
      overflow: "hidden",
      backgroundColor: "#075659",
      backgroundImage: `url(${ChiSiamo22})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      boxSizing: "border-box",
      padding: isDesktop ? "56px 56px 48px 56px" : "18px 8px 18px 8px",
      color: "#ffffff",
      fontFamily: "Ubuntu, system-ui, sans-serif",
      display: "flex",
      flexDirection: "column",
      gap: isDesktop ? "80px" : "32px",
      alignItems: "center",
    }}
  >
    {/* RIGA SUPERIORE */}
    {isDesktop ? (
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
          width: "100%",
        }}
      >
        <img
          src={Frame350_6}
          alt="ULT top"
          style={{
            width: 220,
            height: 220,
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            marginBottom: 0,
          }}
        />
        <div style={{ flex: 1, maxWidth: "520px", textAlign: "left" }}>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "1.6rem",
              fontWeight: 700,
              margin: "0 0 14px 0",
              letterSpacing: "0.04em",
            }}
          >
            ULTRA-LOW TEMPERATURE
          </h2>
          <p
            style={{
              fontSize: "0.98rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            La tecnologia Ultra Low Temperature (ULT) è un processo di
            ibernazione flash a -60° attuato già sui pescherecci: il pesce,
            appena pescato, viene ibernato e mantenuto a temperature
            ultra-basse fino al momento della lavorazione nei nostri
            laboratori in Maremma.
            <br />
            <br />
            La temperatura così bassa è cruciale per garantire la nostra
            qualità premium perché interrompe il normale deterioramento del
            pesce e ci permette, quindi, di offrire un pesce come appena
            pescato.
          </p>
        </div>
      </div>
    ) : (
      <div
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          justifyContent: "center",
          gap: "18px",
          width: "100%",
        }}
      >
        <img
          src={Frame350_6}
          alt="ULT top"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            objectFit: "cover",
            display: "block",
            marginBottom: "12px",
          }}
        />
        <div style={{ flex: 1, maxWidth: "100%", textAlign: "center" }}>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "1.2rem",
              fontWeight: 700,
              margin: "0 0 14px 0",
              letterSpacing: "0.04em",
            }}
          >
            ULTRA-LOW TEMPERATURE
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            La tecnologia Ultra Low Temperature (ULT) è un processo di
            ibernazione flash a -60° attuato già sui pescherecci: il pesce,
            appena pescato, viene ibernato e mantenuto a temperature
            ultra-basse fino al momento della lavorazione nei nostri
            laboratori in Maremma.
            <br />
            <br />
            La temperatura così bassa è cruciale per garantire la nostra
            qualità premium perché interrompe il normale deterioramento del
            pesce e ci permette, quindi, di offrire un pesce come appena
            pescato.
          </p>
        </div>
      </div>
    )}

    {/* RIGA INFERIORE */}
    <div
      style={{
        display: "flex",
        flexDirection: isDesktop ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: isDesktop ? "40px" : "18px",
        width: "100%",
      }}
    >
      <img
        src={PiuFrescoDelFrescoImg}
        alt="ULT bottom"
        style={{
          width: isDesktop ? 220 : 120,
          height: isDesktop ? 220 : 120,
          borderRadius: "50%",
          objectFit: "cover",
          display: "block",
          marginBottom: isDesktop ? 0 : "12px",
        }}
      />
      <div style={{ flex: 1, maxWidth: isDesktop ? "540px" : "100%", textAlign: isDesktop ? "left" : "center" }}>
        <h2
          style={{
            color: "#ffffff",
            fontSize: isDesktop ? "1.6rem" : "1.2rem",
            fontWeight: 700,
            margin: "0 0 14px 0",
            letterSpacing: "0.04em",
          }}
        >
          ULTRA-LOW TEMPERATURE
        </h2>
        <p
          style={{
            fontSize: isDesktop ? "0.98rem" : "0.92rem",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          L’Ultra Low Temperature (ULT), è preferibile al normale
          congelamento perché garantisce sicurezza alimentare e massima
          qualità.
          <br />
          <br />
          Il congelamento convenzionale, infatti, raggiunge una temperatura
          media di soli -18° ed è un processo molto lento. La lentezza
          provoca la creazione di cristalli di ghiaccio più grandi rispetto
          a quelli che si generano usando temperature ultra-basse. La
          grandezza dei cristalli potrebbe causare una spaccatura dei
          tessuti muscolari e delle cellule, provocando una dispersione
          dell’acqua intracellulare e la perdita di alcuni nutrienti: i
          batteri presenti per natura all’interno delle carni, in questa
          condizione, potrebbero proliferare causando un conseguente aumento
          della carica batterica.
          <br />
          <br />
          La tecnologia ULT -60°, invece, garantisce che il prodotto
          mantenga intatte tutte le caratteristiche nutritive e le sue
          qualità organolettiche, ma anche consistenza, gusto e colore.
          <br />
          <br />
          Ohissa è sicuro, sano e gustoso.
        </p>
      </div>
    </div>
  </div>
</section>


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

export default PiuFrescoDelFresco;
