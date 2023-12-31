// to enable JSX in .js file
import * as React from 'react'
import { container } from '../css/layout.module.css';
import Navigation from '../components/navigation';
import Graph from '../components/graph';
import { nodes, links } from '../components/data';

// function that returns a JSX element
const IndexPage = () => {
  return (
        <div>
          <div className={container}>
          <Navigation />
          </div>
          <div style={{border: '2px solid #000', height: '800px', textAlign: 'center'}}>
            <Graph nodes={nodes} links={links} />
          </div>
      </div>
  )
}

// gatsby Head component to apply metadata
export const Head = () => <title>Home Page</title>

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default IndexPage