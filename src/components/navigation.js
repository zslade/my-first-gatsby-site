import * as React from 'react';
// link is a prebuilt component maintained by gatsby
import { Link } from 'gatsby';
import {
  navContainer,
  navLinks,
  navLinkItem,
  navLinkText,
  navKey,
  navRight
} from '../css/navigation.module.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';

const Navigation = () => {
  return (
    <nav className={navContainer}>
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
        <li >
          <a     
            style={{
              color: `#0077B5`,
            }} 
            href={`https://www.linkedin.com/in/zoe-slade/`} 
            target='_blank'
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </li>
        </ul>
        <div className={navRight}>
              <StaticImage
                alt="Colour-coded key to blog post themes"
                src="../images/graph_key.svg"
                className={navKey}
              />
        </div>
    </nav>
  )
}

export default Navigation
