// This is the Footer component

import './footer.scss'; // Import the stylesheet
import React from 'react'; // Import the React library

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Subscribe to our newsletter to receive the latest updates:</h3>
          <form className="newsletter-form">
            <input className='form-control' type="email" placeholder="Email" />
            <button type="submit" className='btn btn-dark disabled'>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <h5>&copy; {new Date().getFullYear()} Architechs. All rights reserved.</h5>
      </div>
    </footer>
  );
}

export default Footer;
