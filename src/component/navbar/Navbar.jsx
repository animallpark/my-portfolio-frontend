import { Link } from "react-scroll"
import "./navbar.css"
import sidebar from "../../assets/projects-image/167204-200.png"
import { useState } from "react"
function Navbar() {
  const [showmenu, setshowmenu] = useState(false);
  return <>
    <div className="navbar">
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-40} duration={500}><p3> Portfolio</p3></Link>
      </div>
      <div className="menu">
        <Link activeClass="nav-home" to="hero" spy={true} smooth={true} offset={-40} duration={500}><ul className="option" >Home</ul></Link>
        <Link activeClass="nav-about" to="about-area" spy={true} smooth={true} offset={-40} duration={500}><ul className="option">About</ul></Link>
        <Link activeClass="nav-skills" to="skills-box" spy={true} smooth={true} offset={-20} duration={500}> <ul className="option">Skills</ul></Link>
        <Link activeClass="nav-projects" to="outer" spy={true} smooth={true} offset={-70} duration={500}><ul className="option">Projects</ul></Link>
      </div>
      <Link activeClass="n-contact" to="contact" spy={true} smooth={true} offset={-10} duration={500}><ul1  >Contact me</ul1></Link>
      <div>
        <img className="sidebar-img" src={sidebar} onClick={() => setshowmenu(!showmenu)}></img>
      </div>
    </div>
    <div>
      <div className="mobile_menu" style={{ display: showmenu ? "flex" : "none" }}>
        <Link activeClass="nav-home" to="hero" spy={true} smooth={true} offset={-220} duration={500}><ul className="mob-option" onClick={() => setshowmenu(false)}>Home</ul></Link>
        <Link activeClass="nav-about" to="about-area" spy={true} smooth={true} offset={-150} duration={500}><ul className="mob-option" onClick={() => setshowmenu(false)} >About</ul></Link>
        <Link activeClass="nav-projects" to="outer" spy={true} smooth={true} offset={-220} duration={500}><ul className="mob-option" onClick={() => setshowmenu(false)}>Projects</ul></Link>
        <Link activeClass="nav-projects" to="outer" spy={true} smooth={true} offset={+900} duration={500}><ul className="mob-option" onClick={() => setshowmenu(false)}>Contact</ul></Link>
      </div>
    </div>
  </>
}

export default Navbar