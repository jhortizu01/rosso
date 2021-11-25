import React from 'react'
import '../styles/Phil.scss'
import phil from '../assets/Phil.jpg'

const Phil = () => {
  return (
    <div className="phil-container">
    <img src={phil} alt="Phil" className="phil-img" />
    <p className="phil-title">Phil T.</p>
    <div className="style" />
    <h2 className="front-end">Front End</h2>
    <h2 className="dev">Developer</h2>
    <section className="phil-description">
      <p>I'm an insurance-broker turned software developer who has been playing with computers and Photoshop since I was a kid.  I used to used photo-editing software to design websites and now I've come full circle by designing a paint app by coding.  
      </p>  
      <p>I'm always looking for new ways to learn more! </p>
      <p>Feel free to reach out to me on LinkedIn or view my GitHub.</p>
    </section>
    <section className="button-links">
      <a href="https://www.linkedin.com/in/philongthan/"><button className="phil-links">LinkedIn</button></a>
      <a href="https://github.com/pthan1"><button className="phil-links">GitHub</button></a>
    </section>
  </div>
  )
}

export default Phil