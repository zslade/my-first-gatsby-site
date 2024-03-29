import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
} from '../css/layout.module.css';
import { navLinkFooter} from '../css/navigation.module.css';
import Navigation from './navigation';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Navigation />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <br></br>
      <hr></hr>
      <Link to="/" className={navLinkFooter}>Back to home</Link>
    </div>
  )
}

export default Layout