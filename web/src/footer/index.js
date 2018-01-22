// @flow

import React from 'react';
import { Link } from 'react-router-dom';

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
        <li className="selected">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/checkin">Checkin</Link>
        </li>
      </ul>
    </nav>
  </footer>
);

export default Footer;
