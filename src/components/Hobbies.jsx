import { useState } from 'react'
import './Hobbies.css'
import Gaming from '../Images/PhotoIcons/Gaming.png'
import BasketBall from '../Images/PhotoIcons/BasketBall.png'
import Biking from '../Images/PhotoIcons/Biking.png'
import Dancing from '../Images/PhotoIcons/Dancing.png'
import TableTennis from '../Images/PhotoIcons/TableTennis.png'
import Volleyball from '../Images/PhotoIcons/Volleyball.png'

function Hobbies() {
  const [activeHobby, setActiveHobby] = useState(null)

  const hobbies = [
    {
      id: 1,
      title: "Gaming",
      icon: Gaming,
      description: "Immersing in virtual worlds and enjoying competitive gaming experiences.",
      details: [
        "Strategy games",
        "eSports competitions",
        "Online multiplayer",
        "Game streaming"
      ]
    },
    {
      id: 2,
      title: "Basketball",
      icon: BasketBall,
      description: "Playing competitive basketball and improving team coordination skills.",
      details: [
        "Team gameplay",
        "Shooting practice",
        "Strategic plays",
        "Physical fitness"
      ]
    },
    {
      id: 3,
      title: "Biking",
      icon: Biking,
      description: "Exploring new trails and staying fit through cycling adventures.",
      details: [
        "Trail riding",
        "Road cycling",
        "Bike maintenance",
        "Endurance training"
      ]
    },
    {
      id: 4,
      title: "Dancing",
      icon: Dancing,
      description: "Expressing creativity through movement and rhythm.",
      details: [
        "Contemporary dance",
        "Choreography",
        "Dance fitness",
        "Performance"
      ]
    },
    {
      id: 5,
      title: "Table Tennis",
      icon: TableTennis,
      description: "Developing quick reflexes and strategic gameplay in table tennis.",
      details: [
        "Singles matches",
        "Doubles play",
        "Spin techniques",
        "Tournament participation"
      ]
    },
    {
      id: 6,
      title: "Volleyball",
      icon: Volleyball,
      description: "Playing competitive volleyball and developing team synergy.",
      details: [
        "Team strategies",
        "Spiking techniques",
        "Beach volleyball",
        "Tournament play"
      ]
    }
  ]

  return (
    <div className="hobbies-container">
      <h1 className="section-title">Hobbies & Interests</h1>
      <div className="hobbies-grid">
        {hobbies.map(hobby => (
          <div
            key={hobby.id}
            className={`hobby-card ${activeHobby === hobby.id ? 'active' : ''}`}
            onClick={() => setActiveHobby(activeHobby === hobby.id ? null : hobby.id)}
          >
            <div className="hobby-icon">
              <img src={hobby.icon} alt={hobby.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h2>{hobby.title}</h2>
            <p>{hobby.description}</p>
            <div className={`hobby-details ${activeHobby === hobby.id ? 'show' : ''}`}>
              <ul>
                {hobby.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="interests-section">
        <h2>Other Interests</h2>
        <div className="interests-cloud">
          <span className="interest-tag">Technology</span>
          <span className="interest-tag">Travel</span>
          <span className="interest-tag">Cooking</span>
          <span className="interest-tag">Gaming</span>
          <span className="interest-tag">Art</span>
          <span className="interest-tag">Fitness</span>
          <span className="interest-tag">Writing</span>
          <span className="interest-tag">Movies</span>
        </div>
      </div>
    </div>
  )
}

export default Hobbies
