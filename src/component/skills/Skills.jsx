import React from 'react'
import "./skills.css"
import html from "../../assets/logos/icons8-html-logo-144.png"
import css from "../../assets/logos/icons8-css-logo-144.png"
import javascript from "../../assets/logos/icons8-javascript-144.png"
import nodejs from "../../assets/logos/icons8-nodejs-144.png"
import reactjs from "../../assets/logos/icons8-react-native-144.png"
import github from "../../assets/logos/icons8-github-128.png"
import expressjs from "../../assets/logos/icons8-express-js-144.png"


function Skills() {
  return (
    <div className='skills-box'>
      <div className='container'>
        <a>Skills</a>
        <div>
          <div className='skills-option'>
            <div className='skills'>
              <img src={html} alt="skills img" />
              <a1>HTML</a1>
              <a>Skill LeveL : 90%</a>
            </div>
            <div className='skills'>
              <img src={css} alt="skills img" />
              <a1>CSS</a1>
              <a>Skill LeveL : 80%</a>
            </div>
            <div className='skills'>
              <img src={javascript} alt="skills img" />
              <a1>JavaScript</a1>
              <a>Skill LeveL : 75%</a>
            </div>
            <div className='skills'>
              <img src={nodejs} alt="skills img" />
              <a1>NodeJs</a1>
              <a>Skill LeveL : 80%</a>
            </div>
            <div className='skills'>
              <img src={reactjs} alt="skills img" />
              <a1>React.Js</a1>
              <a>Skill LeveL : 70%</a>
            </div>
            <div className='skills'>
              <img src={expressjs} alt="skills img" />
              <a1>Express.Js</a1>
              <a>Skill LeveL : 85%</a>
            </div>
            <div className='skills'>
              <img src={github} alt="skills img" />
              <a1>Git/Github</a1>
              <a>Skill LeveL : 90%</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
