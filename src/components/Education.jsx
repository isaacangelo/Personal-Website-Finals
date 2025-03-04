import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Education.css'

function Education() {
  const education = [
    {
      id: 1,
      degree: "College Degree",
      field: "Information Technology",
      school: "Asia Pacific College",
      year: "2020 - Present",
      description: "Focused on software development and system design. Led multiple team projects in web development and mobile applications.",
      achievements: [
        "Dean's List 1st Year",
        "GPA: 3.9/4.0",
        "Honors"
      ]
    },
    {
      id: 2,
      degree: "Senior High School",
      field: "Science, Technology, Engineering, and Mathematics",
      school: "Asia Pacific College",
      year: "2020 - 2022",
      description: "Specialized in STEM subjects and research projects. Participated in regional science fairs and robotics competitions.",
      achievements: [
        "High Honors",
        "Best in Research",
        
      ]
    }
  ]

  return (
    <div className="education-container">
      <h1 className="section-title">Education</h1>
      <div className="timeline">
        {education.map(edu => (
          <div key={edu.id} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-header">
                <h2>{edu.degree}</h2>
                <span className="year">{edu.year}</span>
              </div>
              <h3>{edu.field}</h3>
              <h4>{edu.school}</h4>
              <p className="description">{edu.description}</p>
              <div className="achievements">
                <h5>Key Achievements:</h5>
                <ul>
                  {edu.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="certifications">
        <h2>Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <FontAwesomeIcon icon="certificate" />
            <h3>SAP MM (Materials Management)</h3>
            <p>LinkedIn Learning</p>
            <span className="cert-year">2024</span>
          </div>
          <div className="cert-card">
            <FontAwesomeIcon icon="certificate" />
            <h3>SAP Production Planning</h3>
            <p>LinkedIn Learning</p>
            <span className="cert-year">2024</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education