import React from 'react'
import "./project.css"
import { Link } from 'react-scroll'
import imag1 from "../../assets/projects-image/61iIYjgoJeL.png"
import imag2 from "../../assets/projects-image/7118435.jpg"
import imag3 from "../../assets/projects-image/watercolor-calculator-3d-icon_766233-3999.avif"


function Projects() {
  return (
    <div className='outer'>
      <a className='middle-tittle'>Projects</a>
      <div className='border'>
        <div className='projects'>
          <img src={imag2} className='myntra' alt="image*" />
          <a className='title'>Myntra-Clone</a>
          <a className='description'> A Myntra clone website is an e-commerce platform that mimics the functionality and design of Myntra, focusing on fashion and lifestyle products. </a> <hr /> <hr />
          <a className='description'> Skills Used : React, Express</a>

        </div>
        <div className='projects'>
          <img src={imag3} className='calc' alt="image*" />
          <a href='https://anuj01-calculator.netlify.app/' className='title'>Basic Calculator</a>

          <a className='description'> A basic calculator website is a simple online tool that allows users to perform fundamental arithmetic operations. Key features typically include.     Users can perform simple calculations, such as addition (+), subtraction (-), multiplication (×), and division (÷).</a>
          <a className='description'> Skills Used : html, CSS , javascript</a>
        </div>
        <div className='projects'>
          <img src={imag1} className='game' alt="image*" />
          <a className='title'>Rock Papper Scissor Game </a>
          <a className='description'> A Stone Paper Scissors game website is an interactive platform where users can play the classic hand game against either a computer or other players. Key features typically include:
            A scoring system that displays wins, losses, and draws, along with a leaderboard for multiplayer sessions.
          </a>
          <a className='description'> Skills Used : html, CSS , javascript</a>
        </div>
      </div>
    </div>
  )
}

export default Projects
