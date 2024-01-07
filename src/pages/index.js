// to enable JSX in .js file
import * as React from 'react'
import { container } from '../css/layout.module.css';
import Navigation from '../components/navigation';
import Graph from '../components/graph';
import { nodes, links } from '../components/data';

// function that returns a JSX element
const IndexPage = () => {
  return (
    <div className={container}>
        <Navigation />
        <Graph nodes={nodes} links={links} />
      </div>
  )
}

// gatsby Head component to apply metadata
export const Head = () => <title>Home Page</title>

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default IndexPage