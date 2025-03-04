import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Isaac Angelo Estabillo. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/isaacangelo" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://www.linkedin.com/in/isaac-estabillo-350a67218/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
          <a href="https://www.instagram.com/_aesac/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
