import "../styles/skills.css";

export default function Skills(){
  const skills = ["React", "Node.js", "MongoDB", "Express", "Firebase", "Git", "JavaScript", "Python", "HTML/CSS"];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-sub">Technologies and tools I work with</p>

        <div className="skills-grid">
          {skills.map(skill => (
            <div key={skill} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
