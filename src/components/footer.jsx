// This is the Footer component

import './footer.scss'; // Import the stylesheet
import React from 'react'; // Import the React library

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>Subscribe to our newsletter to receive the latest updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Architechs. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
