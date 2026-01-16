import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <p className="footer-text">
        Crafted by Prathamesh Bavkar © {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
