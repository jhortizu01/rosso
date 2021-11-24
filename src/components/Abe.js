import React from 'react'
import abe from '../assets/Abe.png'
import '../styles/Abe.scss'

const Abe = () => {
  return (
    <div className="abe-container">
      <img src={abe} alt="image of abe" className="abe-img" />
      <p className="abe-title">Abe T.</p>
      <div className="style" />
      <h2 className="ux">UX/UI</h2>
      <h2 className="designer">Designer</h2>
      <section className="abe-description">
        <p>Since 2013 I've been freelancing as a visual/graphic designer, making digital products for web, mobile, and more.</p>
        <p>I've created logos, websites and marketing material for various clients in the healthcare, entertainment, and transportation/logistics industries.</p>
        <p>Follow me on insta at @abvrram.</p>
      </section>
      <section class="button-links">
        <a href="https://www.nviernodesign.com"><button className="abe-links">Portfolio</button></a>
        <a href="https://linkedin.com/in/abetrevinoatx"><button className="abe-links" id="abe">LinkedIn</button></a>
      </section>
    </div>
  )
}

export default Abe