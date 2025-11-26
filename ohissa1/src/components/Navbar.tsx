import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="navbar">
			<div className="navbar-logo">
				<Link to="/">OHissa</Link>
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
					</ul>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
