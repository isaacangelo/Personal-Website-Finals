import './About.css'
import profileImage from '../Images/ProfileWebsite1.webp'

function About() {
  return (
    <div className="about-container">
      <h1 className="section-title">About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-text">
          <h2>Hello, I'm Isaac Angelo Estabillo</h2>
          <p className="about-intro">
          I am a second year student who aims to graduate BSIT to be able to achieve my dreams. Studying Information Technology wasn't my first choice but I believe that this path that I took is the one closest to achieving my dreams which is to be successful and contented in life.
          </p>
          <div className="about-details">
            <div className="about-section">
              <h3>What I Do</h3>
              <ul>
                <li>Motorcycle Riding</li>
                <li>Gym</li>
                <li>Gaming</li>
                <li>Sports</li>
              </ul>
            </div>
            <div className="about-section">
              <h3>Technologies I Love</h3>
              <div className="tech-stack">
                <span className="tech-item">React</span>
                <span className="tech-item">Node.js</span>
                <span className="tech-item">Python</span>
                <span className="tech-item">SupaBase</span>
                <span className="tech-item">JavaScript</span>
                <span className="tech-item">HTML</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
