import React, { useState } from 'react';

const tools = ['💙', '🎯', '🔥', '🌐', '⚛️', '🟢']; // Flutter, Dart, Firebase, Web, React, Node

const ConnectModal = ({ onClose }) => (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center'
  }}>
    <div className="card" style={{ padding: '2.5rem', minWidth: 400 }}>
      <button onClick={onClose} style={{ float: 'right', background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>&times;</button>
      <h2 style={{ color: '#a259ff', marginTop: 0, fontSize: '2rem' }}>Let's Connect</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem', marginTop: '2rem' }}>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asifaliabbasi118@gmail.com&su=Let's%20Connect" target="_blank" rel="noopener noreferrer" className="cta" style={{ textAlign: 'left', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem', justifyContent: 'flex-start', paddingLeft: '1rem' }}>
          <img src="/assets/Icons/icons8-gmail-480.png" alt="Gmail" style={{ width: 28, height: 28 }} /> Email Me
        </a>
        <a href="https://wa.me/+923138577675" target="_blank" rel="noopener noreferrer" className="cta" style={{ textAlign: 'left', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem', justifyContent: 'flex-start', paddingLeft: '1rem' }}>
          <img src="/assets/Icons/icons8-whatsapp-480.png" alt="WhatsApp" style={{ width: 28, height: 28 }} /> WhatsApp
        </a>
      </div>
    </div>
  </div>
);

const About = () => {
  const [showConnectModal, setShowConnectModal] = useState(false);

  return (
    <section className="about-section">
      <h2 className="section-title">About Me – Flutter Developer with Passion for Mobile Innovation</h2>
      <div className="about-content">

        <div className="about-text">
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
            I'm Asif Ali, a passionate Flutter developer with extensive experience in cross-platform mobile app development using Dart programming language. 
            I specialize in building scalable, beautiful Android and iOS applications from a single codebase. My expertise includes Firebase integration, 
            REST API connectivity, custom UI design, and app store deployment. Based in Karachi, Pakistan, I work with clients worldwide to deliver 
            high-quality Flutter applications.
          </p>
          <p style={{ fontSize: '1rem', color: '#a259ff', fontWeight: '600', marginBottom: '1.5rem' }}>
            "Code once. Run everywhere. Deliver quality." – My mission as a Flutter developer.
          </p>
          <div className="about-tools">
            {tools.map((tool, idx) => (
              <span className="about-tool" key={idx}>{tool}</span>
            ))}
          </div>
          <button className="about-connect" onClick={() => setShowConnectModal(true)}>Let's Connect</button>
        </div>
      </div>
      {showConnectModal && <ConnectModal onClose={() => setShowConnectModal(false)} />}
    </section>
  );
};

export default About; 