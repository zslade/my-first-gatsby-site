import * as React from 'react'
import Layout from '../components/layout'
import article_image from "../images/mondrian_painting.png"
import { rescaledImage } from '../css/image.module.css';

const MondrianPage = () => {
  return (
    <Layout pageTitle="The ultimate abstraction?">
      <div style={{textAlign: 'center'}}>
        <figure>
          <img src={article_image} alt="Painting by the artist Mondrian" className={rescaledImage}/>
          <figcaption><i>This is the image caption</i></figcaption>
        </figure>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac augue eget velit vestibulum ultrices. Nulla facilisi. Fusce vel fermentum odio, et vulputate libero. Quisque ut justo non sem bibendum aliquam. Ut elementum, tortor at blandit ultrices, augue justo malesuada orci, eu fringilla orci eros nec velit. Nam at ex vel turpis posuere luctus. In hac habitasse platea dictumst. Phasellus non mauris nec est facilisis consequat. Maecenas convallis mi non augue ultricies, id consectetur erat tincidunt.
          t sem. Quisque eu lectus eu urna interdum fermentum. Vivamus et fringilla justo, vel dictum dui.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac augue eget velit vestibulum ultrices. Nulla facilisi. Fusce vel fermentum odio, et vulputate libero. Quisque ut justo non sem bibendum aliquam. Ut elementum, tortor at blandit ultrices, augue justo malesuada orci, eu fringilla orci eros nec velit. Nam at ex vel turpis posuere luctus. In hac habitasse platea dictumst. Phasellus non mauris nec est facilisis consequat. Maecenas convallis mi non augue ultricies, id consectetur erat tincidunt.
      </p>
    </Layout>
  )
}

export const Head = () => <title>The ultimate abstraction?</title>

export default MondrianPage