import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  color1,
  color2,
  color3,
  color4,
  color5
} from '../css/layout.module.css';
import { navLinkFooter} from '../css/navigation.module.css';
import Navigation from './navigation';

const Layout = ({ pageTitle, children }) => {
  const isAboutPage = pageTitle.includes('About');

  return (
    <div className={container}>
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
      <br></br>
      <hr></hr>
      <Link to="/" className={navLinkFooter}>Back to home</Link>
    </div>
  )
}

export default Layout