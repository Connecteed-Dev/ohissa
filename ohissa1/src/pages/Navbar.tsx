import React, { useState } from "react";
import Logo from "../assets/logo (2).png";
import Frame23 from "../assets/Frame 23.png";

const NAV_BG = "rgba(7, 86, 89, 0.4)"; // #075659 40%
const MENU_BG = "rgba(7, 86, 89, 0.85)"; // più scuro per il menu

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Mobile detection (semplice)
  const isMobile = window.innerWidth <= 700;

  return (
    <>
      <nav
        className="navbar"
        style={{
          background: menuOpen ? "transparent" : NAV_BG,
          borderBottom: "none",
          display: menuOpen ? "none" : "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isMobile ? "0.8rem 1.6rem" : "1.2rem 3.2rem",
          zIndex: 100,
          boxShadow: "none",
          minHeight: isMobile ? "56px" : "92px",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        {/* Bottone menu a sinistra */}
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            marginLeft: "0.5rem",
            marginRight: 0,
            position: "static",
            display: "flex",
            alignItems: "center",
            order: -1
          }}
          aria-label="Menu"
          onClick={() => setMenuOpen(true)}
        >
          <div
            style={{
              width: 28,
              height: 28,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
            }}
          >
            <span
              style={{
                display: "block",
                height: 3,
                width: 22,
                background: "#fff",
                borderRadius: 2,
                marginBottom: 5,
              }}
            ></span>
            <span
              style={{
                display: "block",
                height: 3,
                width: 22,
                background: "#fff",
                borderRadius: 2,
                marginBottom: 5,
              }}
            ></span>
            <span
              style={{
                display: "block",
                height: 3,
                width: 22,
                background: "#fff",
                borderRadius: 2,
              }}
            ></span>
          </div>
        </button>
        {/* Logo centrale */}
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
          <a href="/" style={{ display: "block" }}>
            <img
              src={Logo}
              alt="Logo OHissa"
              style={{
                height: isMobile ? "25px" : "48px",
                maxHeight: "56px",
                width: "auto",
                cursor: "pointer",
                transition: "height 0.2s",
                objectFit: "contain",
                display: "block",
              }}
            />
          </a>
        </div>
        {/* CTA Area Professionisti mobile a destra */}
        {isMobile && (
          <a
            href="/ohissamenosessanta"
            style={{
              marginLeft: "auto",
              marginRight: 0,
              padding: "1px 3px",
              border: "1px solid #fff",
              borderRadius: "4px",
              color: "#fff",
              background: "rgba(7,86,89,0.18)",
              fontWeight: 500,
              fontSize: "0.68rem",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
              lineHeight: "1.1",
              textAlign: "center",
              whiteSpace: "pre-line"
            }}
          >
            Area<br />Professionisti
          </a>
        )}
        {/* CTA Area Professionisti desktop, più piccolo */}
        {!isMobile && (
          <a href="/ohissamenosessanta" style={{ marginLeft: "auto", marginRight: "32px", padding: "10px 24px", border: "2px solid #fff", borderRadius: "8px", color: "#fff", background: "rgba(7,86,89,0.18)", fontWeight: 600, fontSize: "1.05rem", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}>Area Professionisti</a>
        )}
      </nav>

      {menuOpen && (
        <div
          className="fullscreen-menu"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: isMobile ? "50vh" : "100vh",
            background: "rgba(7,86,89,0.95)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            overflowY: "auto",
            padding: isMobile ? "12px 16px" : 0,
            margin: 0
          }}
        >
          {/* Bottone Area Professionisti sempre visibile in alto a destra */}
          {!isMobile && (
            <a href="/ohissamenosessanta" style={{ position: "fixed", top: 18, right: 32, padding: "10px 24px", border: "2px solid #fff", borderRadius: "8px", color: "#fff", background: "rgba(7,86,89,0.18)", fontWeight: 600, fontSize: "1.05rem", textDecoration: "none", transition: "background 0.2s, color 0.2s", zIndex: 100000 }}>
              Area Professionisti
            </a>
          )}
          {/* Logo e X centrati in desktop, logo centrato in alto in mobile, X a destra */}
          {!isMobile ? (
            <div style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginTop: "32px",
              marginBottom: "18px"
            }}>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 24,
                  background: "none",
                  border: "none",
                  color: "#fff",
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10001,
                  padding: 0,
                  fontSize: "inherit",
                  lineHeight: 1,
                }}
                aria-label="Chiudi menu"
              >
                <span style={{
                  display: "block",
                  width: 22,
                  height: 22,
                  position: "relative",
                }}>
                  <span style={{
                    position: "absolute",
                    top: 9.5,
                    left: 0,
                    width: 22,
                    height: 3,
                    background: "#fff",
                    borderRadius: 2,
                    transform: "rotate(45deg)",
                  }}></span>
                  <span style={{
                    position: "absolute",
                    top: 9.5,
                    left: 0,
                    width: 22,
                    height: 3,
                    background: "#fff",
                    borderRadius: 2,
                    transform: "rotate(-45deg)",
                  }}></span>
                </span>
              </button>
              <a href="/" style={{ display: "block", margin: "0 auto" }}>
                <img
                  src={Frame23}
                  alt="Logo OHissa"
                  style={{
                    height: "52px",
                    cursor: "pointer",
                    transform: "scale(1)",
                    transformOrigin: "center",
                    transition: "transform 260ms ease",
                    display: "block",
                  }}
                />
              </a>
            </div>
          ) : (
            <div style={{
              width: "100%",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingTop: "24px",
              marginBottom: "18px"
            }}>
              <button
                onClick={() => setMenuOpen(false)}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 18,
                  background: "none",
                  border: "none",
                  color: "#fff",
                  width: 28,
                  height: 28,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10001,
                  padding: 0,
                  fontSize: "inherit",
                  lineHeight: 1,
                }}
                aria-label="Chiudi menu"
              >
                <span style={{
                  display: "block",
                  width: 22,
                  height: 22,
                  position: "relative",
                }}>
                  <span style={{
                    position: "absolute",
                    top: 9.5,
                    left: 0,
                    width: 22,
                    height: 3,
                    background: "#fff",
                    borderRadius: 2,
                    transform: "rotate(45deg)",
                  }}></span>
                  <span style={{
                    position: "absolute",
                    top: 9.5,
                    left: 0,
                    width: 22,
                    height: 3,
                    background: "#fff",
                    borderRadius: 2,
                    transform: "rotate(-45deg)",
                  }}></span>
                </span>
              </button>
              <a href="/" style={{ display: "block", width: "100%", textAlign: "center" }}>
                <img
                  src={Frame23}
                  alt="Logo OHissa"
                  style={{
                    height: "54px",
                    margin: "0 auto 18px auto",
                    cursor: "pointer",
                    transform: "scale(2.4)",
                    transformOrigin: "center",
                    transition: "transform 260ms ease",
                    display: "block",
                  }}
                />
              </a>
            </div>
          )}
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "0.7rem" : "2.2rem",
              alignItems: "center",
              marginTop: "10px",
              width: "100%"
            }}
          >
            
            <a
              href="/salmone"
              className="menu-link"
              style={{
                color: "#fff",
                fontSize: isMobile ? "0.92rem" : "2rem",
                textAlign: "left",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%"
              }}
            >
              Salmone
            </a>
            <a
              href="/pesce-spada"
              className="menu-link"
              style={{
                color: "#fff",
                fontSize: isMobile ? "0.92rem" : "2rem",
                textAlign: "left",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%"
              }}
            >
              Pesce Spada
            </a>
            <a
              href="/tonno-alalunga"
              className="menu-link"
              style={{
                color: "#fff",
                fontSize: isMobile ? "0.92rem" : "2rem",
                textAlign: "left",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%"
              }}
            >
              Tonno Alalunga
            </a>
            <a
              href="/tonno-pinna-gialla"
              className="menu-link"
              style={{
                color: "#fff",
                fontSize: isMobile ? "0.92rem" : "2rem",
                textAlign: "left",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%"
              }}
            >
              Tonno A Pinna Gialla
            </a>
            <a
              href="/piu-fresco-del-fresco"
              className="menu-link"
              style={{
                color: "#fff",
                fontSize: isMobile ? "0.92rem" : "2rem",
                textAlign: "left",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%"
              }}
            >
              Più sicuro del fresco
            </a>
            <a
              href="/ohissa-sport"
              className="menu-link"
              style={{
                color: "#fff",
                fontSize: isMobile ? "0.92rem" : "2rem",
                textAlign: "left",
                whiteSpace: "normal",
                wordBreak: "break-word",
                maxWidth: "100%"
              }}
            >
              OHissa per una nutrizione sana e gustosa
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;