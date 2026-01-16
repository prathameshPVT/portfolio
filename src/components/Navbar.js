import React from 'react';

const Navbar = ({ isScrolled, menuOpen, setMenuOpen }) => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
        PRATHAMESH.DEV
      </a>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleNavClick(e, '#skills')}>Skills</a></li>
        <li><a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
        <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
      </ul>
      <button 
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Navbar;
