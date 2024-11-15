import "./about.css"
import image1 from "../../assets/20241113_150332.jpg"

function About() {
  return <>
    <div className="about-area">
      <div className="about-container">
        <div className="about">
          <a>About me</a>
        </div>
        <div className="content">
          <img src={image1} alt="profile" className="img1" />
          <div className="bio">
            <div className="job">
              <p> I am Anuj Bhatt , I'm a Web developer</p>
            </div>
            <a>
              A passionate web developer with a creative mindset.
              Proficient in HTML, CSS, Bootstrap, JavaScript, and React.js.
            </a><br /><br />
            <a>
              I specialize in crafting dynamic and responsive web experiences. From creating sleek user interfaces to implementing interactive features, my skills in frontend development enable me to bring ideas to life with efficiency and precision.
            </a>
            <br /><br />
            Let's collaborate to build innovative and engaging digital solutions that captivate audiences and exceed expectations.

          </div>
        </div>
      </div>
    </div>
  </>
}

export default About;
