import * as React from 'react';
import {
  container,
  heading,
} from '../css/layout.module.css';
import Navigation from './navigation';

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Navigation />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout