import React from 'react'
import Footer from './Footer'
import Nevbar from './Nevbar'


export const About = () => {
    return (
        <>
        <Nevbar/>
          <div className="container">
            <h1>About us</h1>
            <p>Envato Tuts+ helps you learn creative skills and shape the life you want.
              As part of Envato’s creative ecosystem, Envato Tuts+ contributes to our mission of “helping people learn and earn online”. We love to see how people transform themselves and their lives by learning creative skills and earning money selling their creations or services to the world.
              Whether your day job is creative or not, life is better when you learn and apply creative skills regularly. To do this is satisfying in its own right and a practical investment in your future.
            </p>
            <h2> Our Unique Approach </h2>
            <h3 className='color'>Self-Directed Learning</h3>
            <p>It’s inspiring to see busy people who are committed to developing and refreshing their skills. This isn’t school: there aren’t any uniforms or tests or badges. For lifelong learners who are seeking practical skills and real-world outcomes, true motivation comes from within.
              So there’s no single ‘correct’ path at Envato Tuts+. Learn at your own pace, whenever or wherever you like. Focus deeply on one topic, or go broad across a wide range of areas. Whatever creative skills you seek, we’re here to help you take charge and shape your own path to a better future.
            </p>
          </div>
        <Footer/>
      </>
    )
  }
  