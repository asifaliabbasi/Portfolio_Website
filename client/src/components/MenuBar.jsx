import React from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const MenuBar = () => (
  <nav className="menu-bar">
    <ul>
      {sections.map((section, idx) => (
        <li key={section.id} style={{ marginBottom: idx !== sections.length - 1 ? '1.5rem' : 0 }}>
          <a href={`#${section.id}`} className="menu-link">
            {section.label}
          </a>
        </li>
      ))}
    </ul>
    <style>{`
      @media (max-width: 500px) {
        .menu-bar {
          padding: 0.1rem 0.2rem !important;
          margin-left: 10px !important;
          margin-right: 10px !important;
        }
        .menu-bar ul {
          padding: 2 !important;
          margin-left: 10px !important;
        }
        .menu-bar li {
          margin-bottom: 0.3rem !important;
        }
        .menu-link {
          font-size: 0.7rem !important;
          padding: 0.15rem 0.3rem !important;
        }
      }
    `}</style>
  </nav>
);

export default MenuBar;

// Footer component

const socialLinks = [
  { icon: '/assets/Icons/github.png', alt: 'GitHub', url: 'https://github.com/asifaliabbasi' },
  { icon: '/assets/Icons/icons8-linkedin-48.png', alt: 'LinkedIn', url: 'https://www.linkedin.com/in/asif-ali-abbasi-49636b202/' },
  { icon: '/assets/Icons/icons8-instagram-48.png', alt: 'Instagram', url: 'https://instagram.com/asifaliabbasi_118' },
  { icon: '/assets/Icons/Fiverr.png', alt: 'Fiverr', url: 'https://www.fiverr.com/s/o84vaxV' },
  { icon: '/assets/Icons/upwork.png', alt: 'Upwork', url: 'https://www.upwork.com/freelancers/~0165e87ea9b3edc37f?mp_source=share' },
];

export function Footer() {
  return (
    <footer className="footer-bar">
      <div className="footer-info">
        <span>© {new Date().getFullYear()} Asif Ali. All rights reserved.</span>
      </div>
      <div className="footer-social">
        {socialLinks.map(link => (
          <a key={link.alt} href={link.url} target="_blank" rel="noopener noreferrer">
            <img src={link.icon} alt={link.alt} style={{ width: 24, height: 24, margin: '0 6px', verticalAlign: 'middle' }} />
          </a>
        ))}
      </div>
      <style>{`
        .footer-bar {
          width: 100%;
          background: #181823;
          color: #a2a2b8;
          text-align: center;
          padding: 0.7rem 0.5rem 0.5rem 0.5rem;
          font-size: 0.95rem;
          margin-top: 2rem;
        }
        .footer-info {
          margin-bottom: 0.3rem;
        }
        .footer-social a img {
          filter: grayscale(0.2) brightness(1.2);
          transition: filter 0.2s;
        }
        .footer-social a:hover img {
          filter: grayscale(0) brightness(1.5) drop-shadow(0 0 6px #a259ff);
        }
        @media (max-width: 500px) {
          .footer-bar {
            font-size: 0.75rem;
            padding: 0.5rem 0.2rem 0.3rem 0.2rem;
          }
          .footer-social a img {
            width: 18px !important;
            height: 18px !important;
            margin: 0 3px !important;
          }
        }
      `}</style>
    </footer>
  );
} 