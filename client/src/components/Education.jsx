import React from 'react';

const education = [
  { institution: 'Sindh Agriculture University Tandojam', years: '2022-2026', degree: 'BS Information Technology' },
];

const experience = [
  { company: 'Cadet College Ghotki', years: '2019-Present', role: 'Media Manager', desc: 'Managing media and communications for Cadet College Ghotki.' },
  { company: 'Rotaract International Club SAU Tandojam', years: '2023-2025', role: 'Media Influencer', desc: 'Promoting club activities and engaging with the community as a media influencer.' },
  { company: 'CodeAlpha', years: 'Feb 2025-Present', role: 'Application Developer Intern', desc: 'Developing applications as an intern, focusing on real-world projects and learning new technologies.' },
  { company: 'Upwork & Fiverr', years: '2023-Present', role: 'Mobile App Developer', desc: 'Building mobile applications for clients worldwide as a freelancer on Upwork and Fiverr.' },
];

const Education = () => (
  <section className="education-section">
    <h2 className="section-title">Education & Experience</h2>
    <div className="education-timeline">
      <h3 style={{ color: '#a259ff', marginBottom: '0.7rem' }}>Education</h3>
      {education.map((item, idx) => (
        <div
          className="education-entry"
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            background: 'rgba(36, 36, 64, 0.7)',
            borderRadius: '1.2rem',
            marginBottom: '2rem',
            padding: '1.5rem 2rem',
            boxShadow: '0 0 24px #a259ff22'
          }}
        >
          <div
            style={{
              minWidth: 140,
              fontWeight: 700,
              color: '#ff7eb3',
              fontSize: '1.15rem',
              textAlign: 'left',
              marginRight: '2rem',
              marginTop: 2
            }}
          >
            {item.years}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 700, color: '#4e9cff', fontSize: '1.15rem' }}>{item.institution}</span>
              <span style={{ color: '#a259ff', fontWeight: 600, fontSize: '1.05rem', marginBottom: 6 }}>{item.degree}</span>
            </div>
          </div>
        </div>
      ))}
      <h3 style={{ color: '#4e9cff', margin: '2rem 0 0.7rem 0' }}>Experience</h3>
      {experience.map((item, idx) => (
        <div
          className="education-entry"
          key={education.length + idx}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            background: 'rgba(36, 36, 64, 0.7)',
            borderRadius: '1.2rem',
            marginBottom: '2rem',
            padding: '1.5rem 2rem',
            boxShadow: '0 0 24px #a259ff22'
          }}
        >
          <div
            style={{
              minWidth: 140,
              fontWeight: 700,
              color: '#ffcb47',
              fontSize: '1.15rem',
              textAlign: 'left',
              marginRight: '2rem',
              marginTop: 2
            }}
          >
            {item.years}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{ fontWeight: 700, color: '#4e9cff', fontSize: '1.15rem' }}>{item.company}</span>
              <span style={{ color: '#a259ff', fontWeight: 600, fontSize: '1.05rem', marginBottom: 6 }}>{item.role}</span>
            </div>
            {item.desc && (
              <div style={{ color: '#fff', fontSize: '1.05rem', marginTop: 8, textAlign: 'left' }}>{item.desc}</div>
            )}
          </div>
        </div>
      ))}
    </div>
    <style>{`
      .education-entry {
        background: rgba(36, 36, 64, 0.7) !important;
        border-radius: 1.2rem !important;
      }
      @media (max-width: 500px) {
        .education-entry {
          background: rgba(36, 36, 64, 0.7)!important;
          box-shadow: none !important;
          border: none !important;
          font-size: 0.9rem !important;
          width: 93vw !important;
          max-width: 99vw !important;
          height: 17vh !important;
          max-height: 17vh !important;
          padding-top: 10px !important;
          padding-bottom: 10px !important;
        }
        .education-entry span,.education-entry div{
          font-size: 0.8rem !important;
          margin: 0px !important;
      
          
        }
           .education-entry div{
            padding-left: 10px !important;
           }
      }
    `}</style>
  </section>
);

export default Education; 