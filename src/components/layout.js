// src/components/layout.js
import React from 'react';
import { Link } from 'gatsby';
import CategoryKey from './CategoryKey';
import { pageWrapper, centralContainer, mainContent, heading, color1, color2, color3, color4, color5, navLinkFooter } from '../css/layout.module.css';
import Navigation from './navigation';

const Layout = ({ pageTitle, children, currentCategory }) => {
  const isAboutPage = pageTitle.includes('About');

  return (
    <div className={pageWrapper}>
      <div>
        <CategoryKey currentCategory={currentCategory} />
      </div>
      <div className={centralContainer}>
        <Navigation />
          <main>
            <h1 className={heading}>
              {isAboutPage ? (
                <>
                  About{" "}
                  <span className={color1}>G</span>
                  <span className={color2}>r</span>
                  <span className={color3}>a</span>
                  <span className={color4}>p</span>
                  <span className={color5}>h</span>
                  {" "}
                  <span className={color1}>B</span>
                  <span className={color2}>l</span>
                  <span className={color3}>o</span>
                  <span className={color4}>g</span>
                </>
              ) : (
                pageTitle
              )}
            </h1>
            {children}
          </main>
        <br />
        <hr />
        <Link to="/" className={navLinkFooter}>Back to home</Link>
      </div>
    </div>
  );
};

export default Layout;
