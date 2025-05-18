import React from 'react';

const tools = ['💙', '🎯', '🔥', '🌐', '⚛️', '🟢']; // Flutter, Dart, Firebase, Web, React, Node

const About = () => (
  <section className="about-section">
    <h2 className="section-title">About Me</h2>
    <div className="about-content">
      <div className="about-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Large, perfect profile image */}
        <img
          src="/assets/WhatsApp Image 2025-05-13 at 03.04.34_ab76eabe.jpg"
          alt="Profile"
          style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #4e9cff', boxShadow: '0 0 24px #a259ff' }}
        />
      </div>
      <div className="about-text">
        <p>
          I'm a Full Stack Mobile Developer specializing in Flutter. I build scalable, beautiful apps and love working with the latest tech.
        </p>
        <div className="about-tools">
          {tools.map((tool, idx) => (
            <span className="about-tool" key={idx}>{tool}</span>
          ))}
        </div>
        <button className="about-connect">Let's Connect</button>
      </div>
    </div>
  </section>
);

export default About; 