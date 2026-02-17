function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-sub">Here are some of my recent works</p>
        
        <div style={{ marginTop: '40px', display: 'grid', gap: '24px' }}>
          <div style={{
            background: 'var(--panel)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Project 1</h3>
            <p style={{ color: 'var(--muted)' }}>Description of your project</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
