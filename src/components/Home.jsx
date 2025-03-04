import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p className="hero-subtitle">Full Stack Developer & Tech Enthusiast</p>
          <div className="hero-buttons">
            <Link to="/about" className="hero-btn primary">Learn More</Link>
            <Link to="/feedback" className="hero-btn secondary">Get in Touch</Link>
          </div>
        </div>
      </div>
      
      <section className="intro-section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-card">
              <FontAwesomeIcon icon="code" />
              <h3>Development</h3>
              <p>Passionate about creating elegant solutions through code</p>
            </div>
            <div className="intro-card">
              <FontAwesomeIcon icon="paint-brush" />
              <h3>Design</h3>
              <p>Crafting beautiful and intuitive user experiences</p>
            </div>
            <div className="intro-card">
              <FontAwesomeIcon icon="rocket" />
              <h3>Innovation</h3>
              <p>Always learning and exploring new technologies</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-content">
                <h3>Project 1</h3>
                <p>Description of an amazing project that showcases your skills</p>
                <a href="#" className="featured-link">Learn More →</a>
              </div>
            </div>
            <div className="featured-card">
              <div className="featured-content">
                <h3>Project 2</h3>
                <p>Another fantastic project that demonstrates your expertise</p>
                <a href="#" className="featured-link">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 