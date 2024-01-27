import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Graph Blog">
      <p>
        Hello and welcome to my 'graph blog', a place where I write about things I find interesting, 
        primarily from the worlds of <b style={{color: '#1f77b4'}}>computer science</b>, <b style={{color: '#e377c2'}}>mathematics</b>, 
        and <b style={{color: '#d62728'}}>art</b>.
        The blog also serves as a personal playground where I can get creative with coding and overengineer things for fun!
      </p>
      <h2>The graph</h2>
      <p>
        The graph on the home page acts as the blog's contents page.
        The little circles (a.k.a. <a href="https://en.wikipedia.org/wiki/Graph_theory#Definitions" style={{color: "#626262"}}>nodes</a>) represent blog articles, colour-coded according to topic. Clicking on the article's title will take you to the article itself.
        Articles are linked to one another through common themes. 
        As the number of articles grows, I intend to introduce more interesting ways of linking and filtering them.
      </p>
      <h3>Why?</h3>
      <p>
      I designed my blog like this because it enables me to visually convey the connections between the things I write about.
      It also makes for a cool landing page and a fun graphic for people to play with.
      </p>
      <h3>How?</h3>
      <p>
        I built this blog using <a href="https://www.gatsbyjs.com/" style={{color: "#626262"}}>Gatsby</a> and 
        the <a href="https://react.dev/" style={{color: "#626262"}}>React framework</a>. 
        I used <a href="https://d3js.org/" style={{color: "#626262"}}>d3.js</a> and <a href="https://observablehq.com" style={{color: "#626262"}}>Observable notebooks</a> to develop the graph on the home page.
        The site is deployed using <a href="https://www.netlify.com/" style={{color: "#626262"}}>Netlify</a>. 
        All source code for the blog is contained in <a href="https://github.com/zslade/graph-blog" style={{color: "#626262"}}>this GitHub repo</a>.
        {/* Feel free to report any bugs or share ideas for improvements via GitHub issues. */}
      </p>
      <p>
        This site is a work in progress. 
        Alongside publishing new articles, I will be making improvements to the look and functionality of the website itself, 
        such as ensuring easy navigation as the number of articles grows. 🌱
      </p>
      {/* <p>
        I post about my latest blog articles on <a href="https://www.linkedin.com/in/zoe-slade/" style={{color: "#626262"}}>LinkedIn</a> if you'd like to stay up to date.
      </p> */}
    </Layout>
  )
}

export const Head = () => <title>About</title>

export default AboutPage