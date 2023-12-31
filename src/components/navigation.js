import * as React from 'react';
// link is a prebuilt component maintained by gatsby
import { Link } from 'gatsby';
import {
  navLinks,
  navLinkItem,
  navLinkText
} from '../css/navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation