import React from 'react'
import img1 from "../../assets/20241113_150332.jpg"
import "./home.css"
import { Link } from "react-scroll"
import resume from "/my-resume1.pdf"

function Home() {
  return <>
    <div className="hero">
      <img className="img" src={img1} alt="Profile" />

      <div>
        <p className='bio-text'> <span> I'm Anuj Bhatt, </span> Web Developer  </p>
        <div className="hero-action">
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-40} duration={500}><div className="hero-connect"> Connect with me</div></Link>
          <a href={resume} className="hero-resume"> My Resume</a>
        </div>

      </div>
    </div>
  </>
}


export default Home
