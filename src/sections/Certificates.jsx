function Certificates() {
  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <p className="section-sub">My professional certifications and achievements</p>
        
        <div style={{ marginTop: '40px', display: 'grid', gap: '24px' }}>
          <div style={{
            background: 'var(--panel)',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '12px' }}>Certificate Name</h3>
            <p style={{ color: 'var(--muted)' }}>Issuing organization</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
