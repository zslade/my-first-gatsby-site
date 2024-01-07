import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Graph Blog">
      <p>
        Hello and welcome to "Graph Blog", a place where I write about things I find interesting, 
        primarily from the worlds of <b style={{color: '#1f77b4'}}>computer science</b>, <b style={{color: '#e377c2'}}>mathematics</b>, 
        and <b style={{color: '#d62728'}}>art</b>.
        The blog also serves as a personal playground where I can get creative with coding and overengineer things for fun!
      </p>
      <h2>The graph</h2>
      <p>
        The graph on the home page acts as the blog's contents page.
        The little circles (a.k.a. nodes) represent blog articles, colour-coded according to topic. Clicking on the article's title will take you to the article itself.
        Articles are linked to one another through common themes. 
        As the number of articles grows, I plan to introduce more interesting ways of linking and filtering them.
      </p>
      <h3>Why?</h3>
      <p>
        {/* I chose to design the blog like this because it allows me to visually represent the interconnectedness of things.
        I find it pretty fascinating how the same concepts crop up in seemingly disparate fields and 
        how the same phenomena can be understood from many different perspecives.
        (Maybe it's not all that profound and simply a reflection of how the human mind works, but I still find it pretty cool nonetheless.) */}
      </p>
      <h3>How?</h3>
      <p>
        I built this blog using <a href="https://www.gatsbyjs.com/" style={{color: "#626262"}}>Gatsby</a> and 
        the <a href="https://react.dev/" style={{color: "#626262"}}>React framework</a>. 
        I used <a href="https://observablehq.com" style={{color: "#626262"}}>Observable</a> to develop the graph on the home page before integrating with the Gatsby site.
        All source code for the blog is contained in <a href="https://github.com/zslade/graph-blog" style={{color: "#626262"}}>this GitHub repo</a>.
        Feel free to report any bugs or share ideas for improvements via GitHub issues.
      </p>
      <h2>The site</h2>
      <p>
        As well as new articles, there are lots of ideas I have for extending the appearance and functionality of the website itself.
        <br></br>
        <br></br>

        <b>Under development</b>
        <ul>
          <li>A "key" for article topics</li>
          <li>Tooltips for article summary display on hover</li>
          <li>Hyperlinked LinkedIn favicon for navigation bar</li>
        </ul>
      
        <b>Future developments</b>
        <ul>
          <li>Optional "linked list" display for large number of nodes (especially important for mobiles)</li>
          <li>Filtering options for users</li>
          <li>NLP to generate links between articles</li>
        </ul>
      </p>
      <p>
        I post about my latest blog articles on <a href="https://www.linkedin.com/in/zoe-slade/" style={{color: "#626262"}}>LinkedIn</a> if you'd like to stay up to date.
      </p>
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage