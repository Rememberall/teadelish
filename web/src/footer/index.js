import React from 'react';

import './footer.css';

const Footer = () => (
  <footer>
    <input
      type="text"
      className="search"
      placeholder="Search for teas, venues"
    />
    <nav>
      <ul>
        <li className="selected">Home</li>
        <li>Profile</li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
