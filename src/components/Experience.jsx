import './Experience.css'

function Experience() {
  const projects = [{
        id: 1,
        name: "E-commerce Website Redesign",
        role: "UI/UX Designer",
        period: "2023",
        description: "Led the complete redesign of an e-commerce platform focusing on user experience and modern design principles",
        highlights: [
          "Conducted user research and created detailed user personas",
          "Designed intuitive user flows and wireframes",
          "Created responsive and accessible UI components",
          "Increased user engagement by 45%"
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"]
      },
      {
        id: 2,
        name: "FarmFresh Market",
        role: "Mobile App Developer",
        period: "2022",
        description: "Developed a mobile application for farmers to sell crops directly to consumers",
        highlights: [
          "Implemented real-time inventory tracking for farm products",
          "Created user-friendly ordering system",
          "Integrated secure payment processing",
          "Built farmer-side management dashboard"
        ],
        technologies: ["React Native", "Firebase", "Node.js", "MongoDB", "Stripe"]
      }
  ]

  return (
    <div className="experience-container">
      <h1 className="section-title">Projects</h1>
      
      <div className="experience-content">
        {projects.map(item => (
          <div key={item.id} className="experience-card">
            <div className="card-header">
              <div className="header-main">
                <h2>{item.role || item.name}</h2>
                <span className="period">{item.period}</span>
              </div>
              {item.company && (
                <h3 className="company">{item.company}</h3>
              )}
            </div>

            <p className="description">{item.description}</p>

            <div className="details-section">
              <h4>{item.responsibilities ? 'Key Responsibilities' : 'Project Highlights'}</h4>
              <ul>
                {(item.responsibilities || item.highlights).map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>

            <div className="tech-stack">
              <h4>Technologies Used</h4>
              <div className="tech-tags">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="skills-section">
        <h2>Core Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>UI/UX Design</h3>
            <div className="skill-tags">
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Adobe XD</span>
              <span className="skill-tag">Sketch</span>
              <span className="skill-tag">User Research</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Mobile Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">React Native</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">RESTful APIs</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Development Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Jira</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
