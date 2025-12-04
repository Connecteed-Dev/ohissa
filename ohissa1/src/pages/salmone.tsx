import PescaProduzione from "../assets/1-3bb5d4b6.png";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

import Group1_1 from "../assets/Group 1 (1).png"; // hero salmone
import Frame350 from "../assets/Frame 350.png";   // tondo salmone

import Frame412 from "../assets/Frame 412.png";       // tartare
import Frame412_1 from "../assets/Frame 412 (1).png"; // saku
import Frame412_2 from "../assets/Frame 412 (2).png"; // poke
import ChiSiamoBg from "../assets/Chi siamo.png";

import ChiSiamo19 from "../assets/Chi siamo (19).png"; // cerchio verde ricetta
import ChiSiamo24 from "../assets/Chi siamo(24).png";
import Frame374 from "../assets/Frame 374.png";        // sfondo form contatti
import Ricetta from "../assets/Frame 38.png"; // immagine ricetta
// LOGHI CERTIFICAZIONI
import AscLogo from "../assets/Loghi/ASC-Landscape-Italian-r52nk2mg47canpctelhceat8bo2s8q4tciqxg0mqkg.png";
import CsrLogo from "../assets/Loghi/csr-r52nk3kab1dt5y95zjcydmwp2lbtys10q1ljqh7bpc.png";
import IfsLogo from "../assets/Loghi/IFS_Food_Box_RGB-1-r45mvu6xt600pd74fix1vzcynhebn64lvz3nnhr8cg.png";
import MscLogo from "../assets/Loghi/Italian-Landscape-Blue-CMYK.pdf-r45mw6eua0goumyy0kbyfooyc3voana00b16oslm9s.png";
import PartitaGenereLogo from "../assets/Loghi/partita-di-genere-r45mvu6xt606uceeqcisg43yrmxl0xpyo0r09dppts.png";
import Logo10 from "../assets/image 10.png";
import Logo9 from "../assets/image 9.png";
import LogoFrame331 from "../assets/Frame 331.png";
import Logo7 from "../assets/image 7.png";
import Logo6 from "../assets/image 6.png";

const API_BASE = "https://api.ohissa.it:8083";

const Salmone: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 900 : true
  );
  const isMobile = !isDesktop;

  const API_BASE = "https://api.ohissa.it";

// ===== STATO FORM =====
const [formData, setFormData] = useState({
  nome: "",
  cognome: "",
  email: "",
  messaggio: "",
  conosci_ohissa: "",
  voto_ohissa: "",
});

const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
  "idle"
);
const [errorMessage, setErrorMessage] = useState<string>("");

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("loading");
  setErrorMessage("");

  try {
    // ⭐️⭐️⭐️ IL BACKEND VUOLE QUESTO FORMATO ESATTO ⭐️⭐️⭐️
    const payload = {
      name: formData.nome,
      surname: formData.cognome,
      email: formData.email,
      message: formData.messaggio,
      like: formData.voto_ohissa ? Number(formData.voto_ohissa) : 0,
      alreadyKnow: formData.conosci_ohissa === "si",
    };

    console.log("Payload inviato:", payload);

    const res = await fetch(`${API_BASE}/contact/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error(`Errore ${res.status}`);
    }

    setStatus("success");

    setFormData({
      nome: "",
      cognome: "",
      email: "",
      messaggio: "",
      conosci_ohissa: "",
      voto_ohissa: "",
    });
  } catch (err: any) {
    setStatus("error");
    setErrorMessage(err?.message || "Si è verificato un errore inatteso");
  }
};

  // =======================

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth > 900);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const formStyle: React.CSSProperties = isDesktop
    ? {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(850px, 95vw)",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
        padding: "32px 28px",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        gap: "18px",
      }
    : {
        position: "absolute",
        top: "56%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "clamp(320px, 90vw, 760px)",
        background: "#fff",
        borderRadius: "18px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
        padding: "22px 16px",
        zIndex: 3,
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      };

  return (
    <div
      className="app"
      style={{
        minHeight: "100vh",
        width: "100vw",
        background: "#ffffffff",
        overflowX: "hidden",
      }}
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
      >
        {/* HERO */}
        <img
          src={Group1_1}
          alt="Salmone"
          style={{
            width: "100vw",
            maxWidth: "100%",
            display: "block",
          }}
        />

        {/* SEZIONE TESTO "SALMONE" */}
        <section
          style={{
            width: "100vw",
            background: "#ffffffff",
            padding: isDesktop ? "64px 0 72px" : "40px 0 40px",
            display: "flex",
            justifyContent: "center",
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
            <div
              style={{
                width: isDesktop ? 360 : 260,
                height: isDesktop ? 330 : 240,
              }}
            >
              <img
                src={Frame350}
                alt="Salmone"
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
                color: "#111",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <h2
                style={{
                  fontSize: isDesktop ? "2.6rem" : "2.2rem",
                  fontWeight: 700,
                  color: "#00a6a0",
                  margin: 0,
                }}
              >
                Salmone
              </h2>
              <p
                style={{
                  fontSize: isDesktop ? "1.08rem" : "1rem",
                  lineHeight: 1.7,
                  margin: 0,
                  color: "#111",
                }}
              >
                Il Salmone è un pesce molto apprezzato dalle carni morbide e
                gustose, dal tipico colore rosato. È ricco di proteine ad alto
                valore biologico, oltre che di sali minerali (fosforo e
                selenio), vitamine del gruppo B, vitamina D, A e acidi grassi
                essenziali.
              </p>
              <p
                style={{
                  fontSize: isDesktop ? "1.08rem" : "1rem",
                  lineHeight: 1.7,
                  margin: 0,
                  color: "#111",
                }}
              >
                È un pesce pregiato dal sapore delicato e caratteristico, ricco
                di Omega 3 che, riducendo il colesterolo cattivo, hanno una
                funzione protettiva sul sistema cardiocircolatorio.
              </p>
            </div>
          </div>
        </section>

        {/* PESCA & PRODUZIONE */}
        <section
          style={{
            width: "100vw",
            backgroundColor: "#ffffffff",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: isDesktop ? "100%" : "100vw",
              margin: isDesktop ? "0 auto" : "0",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={PescaProduzione}
              alt="Pesca e produzione"
              style={{
                width: isDesktop ? "100%" : "120vw",
                height: isDesktop ? "800px" : "88vw",
                maxHeight: isDesktop ? "900px" : "480px",
                display: "block",
                borderRadius: isDesktop ? 0 : 0,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: isDesktop ? "18%" : "18%",
                left: isDesktop ? "6%" : "50%",
                transform: isDesktop ? "none" : "translateX(-50%)",
                maxWidth: isDesktop ? "420px" : "90vw",
                width: isDesktop ? undefined : "90vw",
                color: "#fff",
                padding: isDesktop ? undefined : "0 8vw",
                textAlign: isDesktop ? "left" : "center",
                zIndex: 2,
                borderRadius: isDesktop ? undefined : "18px",
              }}
            >
              <h3
                style={{
                  fontSize: isDesktop ? "3.8rem" : "1.1rem",
                  fontWeight: 700,
                  marginBottom: "12px",
                }}
              >
                Pesca &amp; Produzione
              </h3>
              <p
                style={{
                  fontSize: isDesktop ? "1.35rem" : "0.9rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Il nostro Salmone proviene da pesca sostenibile certificata in
                Norvegia e viene lavorato secondo standard FAO e UE.La FAO definisce la parola "allevamento"
                come una fondamentale
                opportunità per fornire risorse alimentari alla popolazione
                mondiale più povera e per sostenere i consumi dei paesi
                occidentali.
              </p>
            </div>
          </div>
        </section>

        {/* TAGLI DI SALMONE */}
        <section
          style={{
            width: "100vw",
            background: "#fff",
            padding: isDesktop ? "64px 0 72px" : "40px 0 40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "min(960px, 92vw)",
              display: "flex",
              flexDirection: "column",
              gap: isDesktop ? "40px" : "32px",
            }}
          >
            <h2
              style={{
                color: "#00a6a0",
                fontSize: isDesktop ? "2.1rem" : "1.8rem",
                fontWeight: 700,
                margin: 0,
              }}
            >
              Tagli di Salmone
            </h2>
            {/* Tartare */}
            <div
              style={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                alignItems: "center",
                gap: "28px",
              }}
            >
              <div
                className="story-image-wrapper"
                style={{ position: "relative", width: 370, height: 410 }}
              >
                <img
                  src={Frame412}
                  alt="Tartare"
                  className="story-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="story-text"
                style={{ flex: "1 1 0%", color: "#111" }}
              >
                <h3
                  className="story-title"
                  style={{
                    color: "#00a6a0",
                    fontSize: "1.5rem",
                    margin: "0 0 8px",
                  }}
                >
                  Tartare
                </h3>
                <p
                  className="story-body"
                  style={{ fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
                >
                  Il pesce crudo è rigorosamente tagliato a coltello in cubetti
                  molto piccoli di grandezza non superiore al centimetro (una
                  dadolata piccola e precisa) riassemblati in graziosi tortini.
                </p>
              </div>
            </div>
            {/* Saku */}
            <div
              style={{
                display: "flex",
                flexDirection: isDesktop ? "row-reverse" : "column",
                alignItems: "center",
                gap: "28px",
              }}
            >
              <div
                className="story-image-wrapper"
                style={{ position: "relative", width: 370, height: 410 }}
              >
                <img
                  src={Frame412_1}
                  alt="Saku"
                  className="story-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="story-text"
                style={{ flex: "1 1 0%", color: "#111" }}
              >
                <h3
                  className="story-title"
                  style={{
                    color: "#00a6a0",
                    fontSize: "1.5rem",
                    margin: "0 0 8px",
                  }}
                >
                  Saku
                </h3>
                <p
                  className="story-body"
                  style={{ fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
                >
                  È la parte più nobile del filetto del pesce tagliata in un
                  compatto blocchetto rifilato e senza pelle: un taglio
                  leggermente spesso e morbidissimo.
                </p>
              </div>
            </div>
            {/* Poke */}
            <div
              style={{
                display: "flex",
                flexDirection: isDesktop ? "row" : "column",
                alignItems: "center",
                gap: "28px",
              }}
            >
              <div
                className="story-image-wrapper"
                style={{ position: "relative", width: 370, height: 410 }}
              >
                <img
                  src={Frame412_2}
                  alt="Poke"
                  className="story-image"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="story-text"
                style={{ flex: "1 1 0%", color: "#111" }}
              >
                <h3
                  className="story-title"
                  style={{
                    color: "#00a6a0",
                    fontSize: "1.5rem",
                    margin: "0 0 8px",
                  }}
                >
                  Poke
                </h3>
                <p
                  className="story-body"
                  style={{ fontSize: "0.98rem", lineHeight: 1.7, margin: 0 }}
                >
                  Di origine hawaiana, il filetto del pesce è tagliato in
                  cubetti: poke in hawaiano significa proprio “tagliare a
                  pezzi”. È un taglio molto morbido e gustoso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUGGERIMENTO RICETTA */}
{/* SUGGERIMENTO RICETTA */}
<section
            style={
              isMobile
                ? {
                    position: "relative",
                    width: "100vw",
                    minHeight: 480,
                    display: "flex",
                    justifyContent: "center",
                    padding: "52px 0 64px",
                    overflow: "hidden",
                    backgroundImage: `url(${ChiSiamoBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }
                : {
                    position: "relative",
                    width: "100vw",
                    minHeight: 480,
                    display: "flex",
                    justifyContent: "center",
                    padding: "72px 0 76px",
                    overflow: "hidden",
                  }
            }
          >
            {!isMobile && (
              <img
                src={ChiSiamo24}
                alt="Chi siamo OHissa"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  objectFit: "cover",
                  opacity: 0.7,
                }}
              />
            )}
            <div
              style={{
                position: "relative",
                width: "min(960px, 92vw)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
                zIndex: 2,
              }}
            >
    <h2
      style={{
        color: "#fff",
        fontSize: isDesktop ? "2.1rem" : "1.7rem",
        fontWeight: 700,
        textAlign: "center",
        margin: 0,
        textShadow: "0 2px 10px rgba(0,0,0,0.5)",
      }}
    >
      Un suggerimento per una ricetta sfiziosa e veloce
    </h2>

    <div
      style={{
        background: "rgba(255,255,255,0.97)",
        borderRadius: "18px",
        boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
        maxWidth: 520,
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={Ricetta}
        alt="Ricetta con Salmone"
        style={{
          width: "100%",
          height: 230,
          objectFit: "cover",
          display: "block",
        }}
      />
      <div style={{ padding: "18px 20px 16px" }}>
        <h3
          style={{
            fontWeight: 700,
            fontSize: "1.18rem",
            margin: "0 0 8px",
            color: "#222",
          }}
        >
          Saku di Salmone, mango, crema di mango e uova di Salmone
        </h3>
        <p
          style={{
            fontSize: "0.98rem",
            lineHeight: 1.7,
            margin: 0,
            color: "#444",
          }}
        >
          Un piatto fresco, dal sapore esotico: il gusto ricco e
          avvolgente del Salmone è bilanciato dalla freschezza e dalla
          leggera acidità del mango, usato sia a cubetti che in crema.
          L&apos;aggiunta delle uova di Salmone garantisce al piatto la
          giusta sapidità.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* FORM CONTATTI OHISSA */}
        <div
          style={{
            position: "relative",
            width: "100vw",
            display: "flex",
            background: isMobile ? "#ffffffff" : "#fff",
            paddingBottom: isMobile ? "24px" : 0,
          }}
        >
          {!isMobile && (
            <img
              src={Frame374}
              alt="Frame 374"
              style={{
                width: "auto",
                height: "100vh",
                display: "block",
                borderRadius: 0,
                background: "#fff",
              }}
            />
          )}

          {isMobile ? (
            // MOBILE
            <div
              style={{
                width: "100%",
                maxWidth: 360,
                margin: "0 ",
              }}
            >
              <img
                src={Frame374}
                alt="Frame 374 mobile"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "0 0 0 0",
                }}
              />

              <h2
                style={{
                  textAlign: "center",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  margin: "16px 0 10px 0",
                  color: "#008578",
                  lineHeight: 1.2,
                }}
              >
                Cosa ne pensi di OHissa?
                <br />
                Vuoi saperne di più?
              </h2>

              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                style={{
                  width: "100%",
                  background: "#ffffff",
                  borderRadius: "0 0 18px 18px",
                  padding: "14px 12px 16px",
                  boxSizing: "border-box",
                  fontFamily: "Ubuntu, system-ui, sans-serif",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    fontSize: "0.8rem",
                  }}
                >
                  <label style={{ fontWeight: 500 }}>Nome*</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Inserisci il tuo nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                      border: "1.5px solid #009688",
                      fontSize: "0.8rem",
                      fontFamily: "inherit",
                    }}
                  />

                  <label style={{ fontWeight: 500 }}>Cognome*</label>
                  <input
                    type="text"
                    name="cognome"
                    placeholder="Inserisci il tuo cognome"
                    required
                    value={formData.cognome}
                    onChange={handleChange}
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                      border: "1.5px solid #009688",
                      fontSize: "0.8rem",
                      fontFamily: "inherit",
                    }}
                  />

                  <label style={{ fontWeight: 500 }}>Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Inserisci la tua email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                      border: "1.5px solid #009688",
                      fontSize: "0.8rem",
                      fontFamily: "inherit",
                    }}
                  />

                  <label style={{ fontWeight: 500 }}>Messaggio</label>
                  <textarea
                    name="messaggio"
                    rows={4}
                    placeholder="Scrivi il tuo messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                      border: "1.5px solid #009688",
                      fontSize: "0.8rem",
                      fontFamily: "inherit",
                      resize: "vertical",
                    }}
                  />
                </div>

                <div style={{ marginTop: "10px", fontSize: "0.8rem" }}>
                  <label style={{ fontWeight: 500 }}>Conosci già OHissa?</label>
                  <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: 400,
                      }}
                    >
                      <input
                        type="radio"
                        name="conosci_ohissa"
                        value="si"
                        checked={formData.conosci_ohissa === "si"}
                        onChange={handleChange}
                        style={{ accentColor: "#00bfae" }}
                      />
                      Si
                    </label>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: 400,
                      }}
                    >
                      <input
                        type="radio"
                        name="conosci_ohissa"
                        value="no"
                        checked={formData.conosci_ohissa === "no"}
                        onChange={handleChange}
                        style={{ accentColor: "#00bfae" }}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div style={{ marginTop: "8px", fontSize: "0.8rem" }}>
                  <label style={{ fontWeight: 500 }}>
                    Quanto ti è piaciuto OHissa?
                  </label>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      marginTop: "4px",
                      flexWrap: "wrap",
                    }}
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <label
                        key={n}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                          fontWeight: 400,
                        }}
                      >
                        <input
                          type="radio"
                          name="voto_ohissa"
                          value={n}
                          checked={formData.voto_ohissa === String(n)}
                          onChange={handleChange}
                          style={{ accentColor: "#00bfae" }}
                        />
                        {n}
                      </label>
                    ))}
                  </div>
                </div>

                {status === "success" && (
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: "0.8rem",
                      color: "#00695c",
                    }}
                  >
                    Messaggio inviato correttamente.
                  </p>
                )}
                {status === "error" && (
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: "0.8rem",
                      color: "#c62828",
                    }}
                  >
                    Errore nell&apos;invio. {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    background: "#00695c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    padding: "10px",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    marginTop: "12px",
                    opacity: status === "loading" ? 0.7 : 1,
                  }}
                >
                  {status === "loading" ? "Invio in corso..." : "Invia"}
                </button>
              </form>
            </div>
          ) : (
            // DESKTOP
            <form
              onSubmit={handleSubmit}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "min(560px, 90vw)",
                background: "#ffffff",
                borderRadius: "18px",
                padding: "24px 26px 26px",
                boxSizing: "border-box",
                boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                fontFamily: "Ubuntu, system-ui, sans-serif",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "10px",
                }}
              >
                Cosa ne pensi di OHissa?
                <br />
                Vuoi saperne di più?
                <br />
                
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "0.95rem",
                }}
              >
                <label style={{ fontWeight: 500 }}>Nome*</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Inserisci il tuo nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1.5px solid #009688",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                  }}
                />

                <label style={{ fontWeight: 500 }}>Cognome*</label>
                <input
                  type="text"
                  name="cognome"
                  placeholder="Inserisci il tuo cognome"
                  required
                  value={formData.cognome}
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1.5px solid #009688",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                  }}
                />

                <label style={{ fontWeight: 500 }}>Email*</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Inserisci la tua email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1.5px solid #009688",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                  }}
                />

                <label style={{ fontWeight: 500 }}>Messaggio</label>
                <textarea
                  name="messaggio"
                  rows={4}
                  placeholder="Scrivi il tuo messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  style={{
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1.5px solid #009688",
                    fontSize: "1rem",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "24px",
                  flexWrap: "wrap",
                  marginTop: "10px",
                  fontSize: "0.95rem",
                }}
              >
                <div>
                  <label style={{ fontWeight: 500 }}>Conosci già OHissa?</label>
                  <div style={{ display: "flex", gap: "12px", marginTop: "4px" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: 400,
                      }}
                    >
                      <input
                        type="radio"
                        name="conosci_ohissa"
                        value="si"
                        checked={formData.conosci_ohissa === "si"}
                        onChange={handleChange}
                        style={{ accentColor: "#00bfae" }}
                      />
                      Si
                    </label>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: 400,
                      }}
                    >
                      <input
                        type="radio"
                        name="conosci_ohissa"
                        value="no"
                        checked={formData.conosci_ohissa === "no"}
                        onChange={handleChange}
                        style={{ accentColor: "#00bfae" }}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div>
                  <label style={{ fontWeight: 500 }}>
                    Quanto ti è piaciuto OHissa?
                  </label>
                  <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <label
                        key={n}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2px",
                          fontWeight: 400,
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="radio"
                          name="voto_ohissa"
                          value={n}
                          checked={formData.voto_ohissa === String(n)}
                          onChange={handleChange}
                          style={{ accentColor: "#00bfae" }}
                        />
                        {n}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {status === "success" && isDesktop && (
                <div
                  style={{
                    marginTop: 18,
                    fontSize: "1.15rem",
                    color: "#00695c",
                    background: "#e6f9f3",
                    borderRadius: 10,
                    padding: "18px 24px",
                    textAlign: "center",
                    fontWeight: 600,
                    boxShadow: "0 2px 12px rgba(0,191,174,0.08)",
                  }}
                >
                  Grazie per averci contattato!<br />
                  Il tuo messaggio è stato inviato con successo.<br />
                  Ti risponderemo al più presto.<br />
                  <span style={{fontWeight:400, fontSize:"1rem"}}>Il team OHissa ti augura una buona giornata!</span>
                </div>
              )}
              {status === "error" && (
                <p
                  style={{
                    marginTop: 10,
                    fontSize: "0.85rem",
                    color: "#c62828",
                  }}
                >
                  Errore nell&apos;invio. {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                style={{
                  background: "#00695c",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  marginTop: "14px",
                  width: "100%",
                  opacity: status === "loading" ? 0.7 : 1,
                }}
              >
                {status === "loading" ? "Invio in corso..." : "Invia"}
              </button>
            </form>
          )}
        </div>

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
                  aria-label="Facebook OHissa"
                  style={{width:28,height:28,borderRadius:"50%",border:"1px solid #fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",textDecoration:"none"}}
                >f</a>
                <a
                  href="https://www.instagram.com/ohissa.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram OHissa"
                  style={{width:28,height:28,borderRadius:"50%",border:"1px solid #fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",textDecoration:"none"}}
                >ig</a>
                <a
                  href="https://www.youtube.com/@ohissa.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube OHissa"
                  style={{width:28,height:28,borderRadius:"50%",border:"1px solid #fff",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:12,color:"#fff",textDecoration:"none"}}
                >yt</a>
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

export default Salmone;
