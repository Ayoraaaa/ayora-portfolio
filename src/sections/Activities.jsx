function Activities() {
  return (
    <section id="activities" className="section">
      <div className="container">
        <h2 className="section-title">Activities & Leadership</h2>
        <p className="section-sub">My involvement in extracurricular activities</p>
        
        <div style={{ marginTop: '40px', display: 'grid', gap: '24px' }}>
          <div style={{
            background: 'var(--panel)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Activity Name</h3>
            <p style={{ color: 'var(--muted)' }}>Your role and description</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
