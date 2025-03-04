import { useState } from 'react'
import './Goals.css'

function Goals() {
  const [activeCategory, setActiveCategory] = useState('personal')

  const goals = {
    personal: [
      {
        id: 1,
        title: "Fitness Journey",
        timeline: "2024",
        progress: 60,
        milestones: [
          { text: "Establish Workout Routine", completed: true },
          { text: "Achieve Target Weight", completed: true },
          { text: "Run 5K", completed: true },
          { text: "Complete Marathon", completed: false }
        ]
      },
      {
        id: 2,
        title: "Strength Training Goals",
        timeline: "2024",
        progress: 40,
        milestones: [
          { text: "Master Proper Form", completed: true },
          { text: "Achieve Bench Press Goal", completed: false },
          { text: "Reach Squat Target", completed: false },
          { text: "Complete 10 Pull-ups", completed: false }
        ]
      }
    ],
    educational: [
      {
        id: 3,
        title: "Mobile App Development",
        timeline: "2024-2025",
        progress: 25,
        milestones: [
          { text: "Learn React Native Fundamentals", completed: true },
          { text: "Build App UI/UX Design", completed: false },
          { text: "Implement Core Features", completed: false },
          { text: "Deploy to App Stores", completed: false }
        ]
      }
    ]
  }

  return (
    <div className="goals-container">
      <h1 className="section-title">My Goals</h1>
      
      <div className="goals-nav">
        {Object.keys(goals).map(category => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="goals-content">
        {goals[activeCategory].map(goal => (
          <div key={goal.id} className="goal-card">
            <div className="goal-header">
              <h2>{goal.title}</h2>
              <span className="timeline">{goal.timeline}</span>
            </div>
            
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${goal.progress}%` }}
              >
                <span className="progress-text">{goal.progress}%</span>
              </div>
            </div>

            <div className="milestones">
              <h3>Milestones</h3>
              <ul>
                {goal.milestones.map((milestone, index) => (
                  <li 
                    key={index}
                    className={milestone.completed ? 'completed' : ''}
                  >
                    <span className="milestone-check">
                      {milestone.completed ? '✓' : '○'}
                    </span>
                    {milestone.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="goals-quote">
        <blockquote>
          "Success is not final, failure is not fatal: it is the courage to continue that counts."
          <footer>- Winston Churchill</footer>
        </blockquote>
      </div>
    </div>
  )
}

export default Goals
