// to enable JSX in .js file
import * as React from 'react'
import { pageWrapper, centralContainer } from '../css/layout.module.css';
import CategoryKey from '../components/CategoryKey';
import Navigation from '../components/navigation';
import Graph from '../components/graph';
import { nodes, links } from '../components/data';

// function that returns a JSX element
const IndexPage = () => {
  return (
    <div style={{margin: '0px 5px 0 5px'}}>
      <div className={pageWrapper}>
        <div>
          <CategoryKey currentCategory={'Art'} />
        </div>
        <div className={centralContainer} style={{marginBottom: '0px'}}>
          <Navigation />
          <main style={{textAlign: 'center'}}>
            <Graph nodes={nodes} links={links} />
          </main>
        </div>
      </div>
    </div>
  )
}

// gatsby Head component to apply metadata
export const Head = () => <title>Home</title>

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default IndexPage