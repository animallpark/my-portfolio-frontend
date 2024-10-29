import React from 'react'
import { Link } from "react-scroll"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import "./footer.css"
function Footer() {
  return (
    <div className='footer'>
      <div className='upper'>
        <div className='footer-logo'>
          <a href='https://github.com/animallpark' className='logo'><FaGithub /></a>
          <a href='https://www.linkedin.com/in/anuj-bhatt-9b9084322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className='logo'><FaLinkedin /></a>
          <a href='https://www.instagram.com/anuj_bhattt/profilecard/?igsh=cDV6ZDZkaW9odWxu' className='logo'><FaInstagram /></a>
          <a href='mailto:anujb5606@gmail.com' className='logo'><IoMdMail /></a>
        </div>
        <div className='quick-links'>
          <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500}> <a className='links'>Home</a></Link>
          <Link activeClass="active" to="about-area" spy={true} smooth={true} offset={-50} duration={500}><a className='links'>About</a></Link>
          <Link activeClass="active" to="skills-box" spy={true} smooth={true} offset={-10} duration={500}><a className='links'>Skills</a></Link>
          <Link activeClass="active" to="outer" spy={true} smooth={true} offset={-10} duration={500}><a className='links'>Projects</a></Link>
        </div>
        <div className='details'>
          <a1>Phone : <span>+918510915469</span> </a1>
          <a2> Email : anujb5606@gamil.com
          </a2>
        </div>
      </div>
      <div className='lower'>
        <Link activeClass="active" to="hero" spy={true} smooth={true} offset={-50} duration={500}> <a1>My Portfolio</a1></Link>
        <a2>
          © 2024 Name. All rights reserved.
        </a2>
      </div>
    </div>
  )
}

export default Footer
