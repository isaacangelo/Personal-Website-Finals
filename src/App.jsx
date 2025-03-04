import { Routes, Route, useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Goals from './components/Goals'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Feedback from './components/Feedback'
import Music from './components/Music'
import { MusicProvider } from './context/MusicContext'
import './App.css'
import backgroundVideo from './background/background3.gif'

function App() {
  const location = useLocation();
  
  return (
    <MusicProvider>
      <div className="app">
        <img
          className="background-video"
          src={backgroundVideo}
          alt="Background"
        />
        <Navbar />
        <main className="main-content">
          <TransitionGroup>
            <CSSTransition
              key={location.pathname}
              timeout={300}
              classNames="page-transition"
            >
            <div style={{ position: 'relative', width: '100%' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/music" element={<Music />} />
                <Route path="/feedback" element={<Feedback />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
        <Footer />
      </div>
    </MusicProvider>
  )
}

export default App
