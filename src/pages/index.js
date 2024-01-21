// to enable JSX in .js file
import * as React from 'react'
import { container } from '../css/layout.module.css';
import Navigation from '../components/navigation';
import Graph from '../components/graph';
import { nodes, links } from '../components/data';

// function that returns a JSX element
const IndexPage = () => {
  return (
    <div style={{}}>
      <div className={container} style={{marginBottom: '0px'}}>
      <Navigation />
      </div>
      <main style={{textAlign: 'center'}}>
        <Graph nodes={nodes} links={links} />
      </main>
    </div>
  )
}

// gatsby Head component to apply metadata
export const Head = () => <title>Home Page</title>

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default IndexPage