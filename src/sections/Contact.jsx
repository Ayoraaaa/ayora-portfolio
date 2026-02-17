function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">Feel free to reach out for collaborations or just a friendly chat</p>
        
        <div style={{ marginTop: '40px', maxWidth: '600px', margin: '40px auto 0' }}>
          <div style={{
            background: 'var(--panel)',
            padding: '32px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>Email: your.email@example.com</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#" style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                padding: '10px 20px',
                border: '1px solid var(--accent)',
                borderRadius: '8px',
                transition: '0.3s'
              }}>LinkedIn</a>
              <a href="#" style={{
                color: 'var(--accent)',
                textDecoration: 'none',
                padding: '10px 20px',
                border: '1px solid var(--accent)',
                borderRadius: '8px',
                transition: '0.3s'
              }}>GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
