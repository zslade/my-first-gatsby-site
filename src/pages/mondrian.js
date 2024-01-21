import * as React from 'react'
import Layout from '../components/layout'
import article_image from "./mondrian_painting.png"
import { rescaledImage } from '../css/image.module.css';

const MondrianPage = () => {
  return (
    <Layout pageTitle="The Ultimate Abstraction">
      <figure style={{textAlign: 'center'}}>
        <img src={article_image} alt="Painting by the artist Mondrian" className={rescaledImage}/>
        <figcaption style={{fontSize: "10px"}}><i>Composition in Red, Yellow and Blue, Piet Mondrian (1928). Movement: De Stijl, Neoplasticism, Abstract, Modern.</i></figcaption>
      </figure>
      <br></br>
      <p>
        Pictured above is the painting 'Composition in Red, Yellow and Blue' by Dutch artist Piet Mondrian. 
        In order to understand the simple form of this painting and why it became a revered work of art, 
        we first have to know a bit about De Stijl, the avant-garde movement of art, architecture and design which arose in Holland in 1917.
      </p>
      <p>
        De Stijl (Dutch for “The Style”) formed a set of principles that guided artistic creation. 
        In stark contrast to traditional approaches to painting which depicted the world as perceived by the human eye, De Stijl would not try to reproduce real objects in any way. 
        Instead its proponents sought to represent reality in its purest form by reducing it to its essential attributes: 
        the primary colours (red, blue and yellow), the non-colours (black, white and grey) and horizontal and vertical lines. 
        Hence De Stijl paintings, like the one pictured here, are very simple compositions made up of only these basic elements.
      </p>
      <p>
        So whilst you might be thinking, “I could paint that, that’s not art!”, its simplicity is kind of the whole point. 
        Recombine these basic elements in various ratios and you can recreate every painting you have ever seen - 
        in this sense, Mondrian’s painting can be thought of as the deconstruction of all art ever!
      </p>
      <p>
        This painting and the ideas behind it might seem a bit far-out (after all, it does belong to an avant-garde art movement), 
        but there are other fields which share in this quest to understand the world through abstraction. 
        One in particular that comes to my mind is particle physics*.
        </p>
      <p>
        For particle physicists, the simplest building blocks of reality are the fundamental particles (electrons, photons, quarks, etc) 
        which they seek to identify through experiment, astronomical observation and theoretical brute force. 
        The abstract representation of these fundamental constituents takes the form of mathematical equations. 
        The ultimate abstraction, and indeed the ultimate goal for particle physics, is a single simple equation which underpins all observed physical phenomena.
      </p>
      <p>
        The strict rules which govern the composition of Mondrian’s work are reminiscent of the uncompromising axioms of mathematics and the physical laws 
        which the universe seemingly obeys**. With Mondrian’s work the logical end of the line for abstraction in art, 
        I like to think of this painting as the artistic equivalent of the physicist’s search for the Theory of Everything.
      </p>
      <p>
        Even though I enjoy the ideas behind this painting, I also like it from a purely aesthetic point of view. 
        The bright primary colours and simple shapes remind me of childhood and evoke a sense of play. 
        But I also find calm in how the larger expanses of white perfectly balance the intensity of the colourful blocks 
        and comfort in the predictable pattern of the black lines. Mondrian himself spoke of De Stijl as “A utopian perception of spiritual harmony”, and who doesn’t want to experience that?
      </p>
      <p>
        Whether you enjoy this painting or not, the movement to which it belongs has had huge influence on architecture and design. 
        At the time, the simple compositions of De Stijl represented a radical departure from the norm. Armed with their advocation of pure abstraction, 
        De Stijl artists went far beyond the confines of their traditional training and boldly propelled art into an entirely new realm. 
        In doing so, they established an iconic aesthetic which has persisted for over one hundred years and can be seen everywhere from the buildings of London 
        to the catwalks of Milan. A great deal of what we think of today as just ‘modernist’ is in fact rooted in this revolutionary movement known as De Stijl.
      </p>
      <p>
      <i>You can see 'Composition in Red, Yellow and Blue' at the Wilhelm-Hack-Museum in Germany.</i>
      </p>
      <br></br>
      <p style={{fontSize: '12px'}}>
      * Another is philosophy, in particular Plato’s Theory of Forms. Indeed, Mondrian was fascinated by theosophy, a spiritual movement grounded in ancient texts that was set on uncovering universal truths.
      </p>
      <p style={{fontSize: '12px'}}>
      ** Indeed, it wouldn’t be too surprising to hear that the swathes of scientific discoveries and radical developments in scientific thinking at the beginning of the 20th century had an impact on artists at the time. For example, during this period Hilma Af Klint produced The Atom Series and Theo Van Doesburg attempted to capture the essence of four-dimensional spacetime on canvas.
      </p>
    </Layout>
  )
}

export const Head = () => <title>The Ultimate Abstraction</title>

 // include meta data for date of article

export default MondrianPage