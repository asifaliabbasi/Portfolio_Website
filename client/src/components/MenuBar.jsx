import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const MenuBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Update active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveIndex(i);
          break;
        }
      }

      // Hide/show on scroll direction (optional - looks cool)
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Desktop: Floating Dot Navigation */}
      <nav className={`dot-nav ${isVisible ? 'visible' : 'hidden'}`}>
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`dot-item ${index === activeIndex ? 'active' : ''}`}
            aria-label={section.label}
          >
            <span className="dot"></span>
            <span className="dot-label">{section.label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile: Bottom Navigation Bar */}
      <nav className="mobile-nav">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={`mobile-nav-item ${index === activeIndex ? 'active' : ''}`}
          >
            <span className="mobile-nav-label">{section.label}</span>
          </a>
        ))}
      </nav>

      <style>{`
        /* Desktop Dot Navigation - Right Side */
        .dot-nav {
          position: fixed;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 20px;
          z-index: 1000;
          transition: opacity 0.3s, transform 0.3s;
        }

        .dot-nav.hidden {
          opacity: 0;
          transform: translateY(-50%) translateX(20px);
          pointer-events: none;
        }

        .dot-nav.visible {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        .dot-item {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--color-text-muted);
          border: 2px solid transparent;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .dot::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2px solid var(--color-primary);
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.3s ease;
        }

        .dot-item:hover .dot,
        .dot-item.active .dot {
          background: var(--color-primary);
          transform: scale(1.2);
        }

        .dot-item.active .dot::before {
          opacity: 1;
          transform: scale(1);
        }

        .dot-label {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-secondary);
          opacity: 0;
          transform: translateX(10px);
          transition: all 0.3s ease;
          white-space: nowrap;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .dot-item:hover .dot-label {
          opacity: 1;
          transform: translateX(0);
          color: var(--color-text);
        }

        .dot-item.active .dot-label {
          color: var(--color-primary);
        }

        /* Mobile Bottom Navigation */
        .mobile-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(15, 20, 25, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-top: 1px solid var(--color-glass-border);
          padding: 8px 4px;
          z-index: 1000;
          justify-content: space-around;
          align-items: center;
        }

        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 12px;
          text-decoration: none;
          color: var(--color-text-muted);
          transition: all 0.2s ease;
          border-radius: 8px;
        }

        .mobile-nav-item.active {
          color: var(--color-primary);
          background: rgba(99, 102, 241, 0.1);
        }

        .mobile-nav-label {
          font-size: 0.65rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Hide dot nav on mobile, show mobile nav */
        @media (max-width: 768px) {
          .dot-nav {
            display: none;
          }
          .mobile-nav {
            display: flex;
          }
        }

        /* Large screens - more spacing */
        @media (min-width: 1400px) {
          .dot-nav {
            right: 40px;
            gap: 24px;
          }
          .dot {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </>
  );
};

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
          background: var(--color-bg-secondary);
          color: var(--color-text-secondary);
          text-align: center;
          padding: 1rem 0.5rem;
          font-size: 0.95rem;
          margin-top: 2rem;
          border-top: 1px solid var(--color-glass-border);
        }
        .footer-info {
          margin-bottom: 0.5rem;
        }
        .footer-social a img {
          filter: grayscale(0.2) brightness(1.2);
          transition: filter 0.2s, transform 0.2s;
        }
        .footer-social a:hover img {
          filter: grayscale(0) brightness(1.5) drop-shadow(0 0 6px var(--color-primary));
          transform: scale(1.1);
        }
        @media (max-width: 768px) {
          .footer-bar {
            font-size: 0.75rem;
            padding: 0.5rem 0.2rem;
            margin-bottom: 70px; /* Space for mobile nav */
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