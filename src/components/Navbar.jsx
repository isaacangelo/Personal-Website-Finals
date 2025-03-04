import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="nav-logo">
          My Portfolio
        </NavLink>
        <div className="nav-links">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About Me
          </NavLink>
          <NavLink to="/education" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Education
          </NavLink>
          <NavLink to="/hobbies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Hobbies
          </NavLink>
          <NavLink to="/goals" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Goals
          </NavLink>
          <NavLink to="/experience" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            IT Experience
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Photo Gallery
          </NavLink>
          <NavLink to="/music" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Music
          </NavLink>
          <NavLink to="/feedback" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Feedback
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar