// to enable JSX in .js file
import * as React from 'react'
import Layout from '../components/layout'

// fucntion that returns a JSX element
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

// gatsby Head component to apply metadata
export const Head = () => <title>Home Page</title>

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default IndexPage