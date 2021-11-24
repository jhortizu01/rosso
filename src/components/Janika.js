import React from 'react'
import '../styles/Janika.scss'
import janika from '../assets/Janika.jpeg'

const Janika = () => {
  return (
    <div className="janika-container">
    <img src={janika} alt="Janika" className="janika-img" />
    <p className="janika-title">Janika H.</p>
    <div className="style" />
    <h2 className="front-end">Front End</h2>
    <h2 className="dev">Developer</h2>
    <section className="Janika-description">
      <p>I got my start coding web pages at the ripe age of 14 customizing my Myspace page. Fast forward 15+ years later and I am creating fully functional web apps like Rosso!</p>
      <p>I love learning new tech and taking on challenges. Let's get to know each other!</p>
    </section>
    <section className="button-links">
      <a href="https://www.linkedin.com/in/janika-hortizuela/"><button className="janika-links">LinkedIn</button></a>
      <a href="https://janika-codes-stuff.herokuapp.com/"><button className="janika-links">Portfolio</button></a>
      <a href="https://github.com/jhortizu01"><button className="janika-links">GitHub</button></a>
    </section>
  </div>
  )
}

export default Janika