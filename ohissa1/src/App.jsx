import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Salmone from "./pages/salmone";
import PesceSpada from "./pages/PesceSpada";
import TonnoAlalunga from "./pages/TonnoAlalunga";
import TonnoPinnaGialla from "./pages/TonnoPinnaGialla";
import OhissaSport from "./pages/OhissaSport";
import PiuFrescoDelFresco from "./pages/PiuFrescoDelFresco";
import OhissaMenoSessanta from "./pages/Ohissamenosessanta";
import Terminal from "./components/Terminal";

function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Toggle terminal with Ctrl+` or Cmd+` (backtick key)
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pesce-spada" element={<PesceSpada />} />
        <Route path="/tonno-alalunga" element={<TonnoAlalunga />} />
        <Route path="/tonno-pinna-gialla" element={<TonnoPinnaGialla />} />
        <Route path="/ohissa-sport" element={<OhissaSport />} />
        <Route path="/piu-fresco-del-fresco" element={<PiuFrescoDelFresco />} />
        <Route path="/salmone" element={<Salmone />} />
        <Route path="/ohissamenosessanta" element={<OhissaMenoSessanta />} />
        <Route path="/ohissa-menosessanta" element={<OhissaMenoSessanta />} />
      </Routes>
      <Terminal isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
    </Router>
  );
}

export default App;
