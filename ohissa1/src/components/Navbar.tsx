import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


import Logo from '../assets/logo.png';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	// Mobile detection
	const isMobile = window.innerWidth <= 700;

	return (
		<nav className="navbar">
			<div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
				<img src={Logo} alt="Logo OHissa" style={{ height: isMobile ? 54 : 78, width: 'auto', transition: 'height 0.2s', marginRight: '8px' }} />
				<Link to="/" style={{ fontSize: '1.6rem', fontWeight: 700, color: '#fff', textDecoration: 'none', fontFamily: 'Ubuntu, system-ui, sans-serif' }}>OHissa</Link>
			</div>
			<div className="navbar-menu-icon" onClick={() => setMenuOpen(true)}>
				<span>☰</span>
			</div>
			{menuOpen && (
				<div className="fullscreen-menu">
					<button className="close-menu" onClick={() => setMenuOpen(false)}>
						×
					</button>
					<ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", width: "100vw" }}>
						<li><Link to="/" onClick={() => setMenuOpen(false)} className="menu-link">Home</Link></li>
						<li><Link to="/salmone" onClick={() => setMenuOpen(false)} className="menu-link">Salmone</Link></li>
						<li><Link to="/pesce-spada" onClick={() => setMenuOpen(false)} className="menu-link">Pesce Spada</Link></li>
						<li><Link to="/tonno-alalunga" onClick={() => setMenuOpen(false)} className="menu-link">Tonno Alalunga</Link></li>
						<li><Link to="/tonno-pinna-gialla" onClick={() => setMenuOpen(false)} className="menu-link">Tonno Pinna Gialla</Link></li>
						<li><Link to="/ohissa-sport" onClick={() => setMenuOpen(false)} className="menu-link">OHissa per lo Sport</Link></li>
						<li><Link to="/piu-fresco-del-fresco" onClick={() => setMenuOpen(false)} className="menu-link">Più sicuro del fresco</Link></li>
						<li><Link to="/ohissamenosessanta" onClick={() => setMenuOpen(false)} className="menu-link">Area Professionisti</Link></li>
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
