import React from 'react';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="links">
          <a href="#">Terms of Service</a>
          <a href="#" className="link-border">Privacy Policy</a>
          <a href="#">Subscription Policy</a>
        </div>

        <div className="copy">
          <p>&copy;Copyright  &copy; 2020 PlantIn. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;