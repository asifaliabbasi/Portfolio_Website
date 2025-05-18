import React, { useState, useEffect } from 'react';
import SplineEmbed from './SplineEmbed';

const tools = ['💙', '🎯', '🔥', '🌐', '⚛️', '🟢']; // Flutter, Dart, Firebase, Web, React, Node

const AVATAR_OPTIONS = [
  { label: 'Greetings', path: '/assets/avtar/greetings.glb' },
  { label: 'Jump', path: '/assets/avtar/jump.glb' }
];

const robotMessages = [
  "Hi I'm Nemo",
  "Welcome to Asif Ali's portfolio!",
  "We build beautiful Flutter apps.",
  "Ask me about Firebase, SQL, and APIs!"
];

const robotDetails = [
  "I'm Nemo, your friendly 3D robot assistant on this portfolio!",
  "Explore Asif Ali's work, skills, and services in mobile app development.",
  "We specialize in building beautiful, scalable Flutter apps for iOS and Android.",
  "I can tell you more about integrating Firebase, SQL databases, and APIs into your apps!"
];

const socialLinks = [
  { icon: '/assets/Icons/github.png', alt: 'GitHub', url: 'https://github.com/asifaliabbasi' },
  { icon: '/assets/Icons/icons8-linkedin-48.png', alt: 'LinkedIn', url: 'https://www.linkedin.com/in/asif-ali-abbasi-49636b202/' },
  { icon: '/assets/Icons/icons8-instagram-48.png', alt: 'Instagram', url: 'https://instagram.com/asifaliabbasi_118' },
  { icon: '/assets/Icons/Fiverr.png', alt: 'Fiverr', url: 'https://www.fiverr.com/s/o84vaxV' },
  { icon: '/assets/Icons/upwork.png', alt: 'Upwork', url: 'https://www.upwork.com/freelancers/~0165e87ea9b3edc37f?mp_source=share' },
];

const HireMeModal = ({ onClose }) => (
  <div style={{
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.4)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center'
  }}>
    <div className="card" style={{ padding: '2.5rem', minWidth: 400 }}>
      <button onClick={onClose} style={{ float: 'right', background: 'none', border: 'none', color: '#fff', fontSize: 28, cursor: 'pointer' }}>&times;</button>
      <h2 style={{ color: '#a259ff', marginTop: 0, fontSize: '2rem' }}>Hire Me / Contact</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem', marginTop: '2rem' }}>
        <a href="https://www.upwork.com/freelancers/~0165e87ea9b3edc37f?mp_source=share" target="_blank" rel="noopener noreferrer" className="cta" style={{ textAlign: 'left', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem', justifyContent: 'flex-start', paddingLeft: '1rem' }}>
          <img src="/assets/Icons/icons8-upwork-500.png" alt="Upwork" style={{ width: 28, height: 28 }} /> Hire me on Upwork
        </a>
        <a href="https://www.fiverr.com/s/AyjwPoP" target="_blank" rel="noopener noreferrer" className="cta" style={{ textAlign: 'left', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem', justifyContent: 'flex-start', paddingLeft: '1rem' }}>
          <img src="/assets/Icons/icons8-fiverr-480.png" alt="Fiverr" style={{ width: 36, height: 36 }} /> Hire me on Fiverr
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=asifaliabbasi118@gmail.com&su=Hire%20Me%20Inquiry" target="_blank" rel="noopener noreferrer" className="cta" style={{ textAlign: 'left', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem', justifyContent: 'flex-start', paddingLeft: '1rem' }}>
          <img src="/assets/Icons/icons8-gmail-480.png" alt="Gmail" style={{ width: 28, height: 28 }} /> Email Me Directly
        </a>
        <a href="https://wa.me/+923138577675" target="_blank" rel="noopener noreferrer" className="cta" style={{ textAlign: 'left', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.7rem', fontSize: '1.1rem', justifyContent: 'flex-start', paddingLeft: '1rem' }}>
          <img src="/assets/Icons/icons8-whatsapp-480.png" alt="WhatsApp" style={{ width: 28, height: 28 }} /> Contact me on WhatsApp
        </a>
      </div>
    </div>
  </div>
);

function useProfileImageSize() {
  const [size, setSize] = useState(260);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 500) {
        setSize(220);
      } else if (window.innerWidth <= 700) {
        setSize(320);
      } else {
        setSize(260);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return size;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 700);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
}

const Hero = ({ showAvatar, playJump }) => {
  const [showModal, setShowModal] = useState(false);
  const [robotMsgIndex, setRobotMsgIndex] = useState(0);
  const [showRobotModal, setShowRobotModal] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showMsgDetail, setShowMsgDetail] = useState(false);
  const profileImgSize = useProfileImageSize();
  const isMobile = useIsMobile();

  useEffect(() => {
    let typingTimeout;
    let pauseTimeout;
    let i = 0;
    setTypedText('');
    setIsTyping(true);

    function typeChar() {
      setTypedText(robotMessages[robotMsgIndex].slice(0, i + 1));
      i++;
      if (i < robotMessages[robotMsgIndex].length) {
        typingTimeout = setTimeout(typeChar, 40);
      } else {
        setIsTyping(false);
        pauseTimeout = setTimeout(() => {
          setRobotMsgIndex((prev) => (prev + 1) % robotMessages.length);
        }, 3000);
      }
    }

    typingTimeout = setTimeout(typeChar, 40);

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(pauseTimeout);
    };
  }, [robotMsgIndex]);

  return (
    <section className="hero-section" style={{ position: 'relative', minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2.5rem', boxSizing: 'border-box' }}>
      {/* Top right logos */}
      <div
        style={{
          position: 'absolute',
          top: '2.2rem',
          right: '2.2rem',
          display: 'flex',
          gap: '1.2rem',
          zIndex: 20,
          alignItems: 'center'
        }}
      >
        <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Icons/flutter.png" alt="Flutter" style={{ width: 38, height: 38 }} />
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Icons/firebase.png" alt="Firebase" style={{ width: 38, height: 38 }} />
        </a>
        <a href="https://en.wikipedia.org/wiki/SQL" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Icons/sql.png" alt="SQL" style={{ width: 38, height: 38 }} />
        </a>
        <a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer">
          <img src="/assets/Icons/api.png" alt="API" style={{ width: 38, height: 38 }} />
        </a>
      </div>
      {/* Main row: profile + robot */}
      <div className="hero-main-row" style={{ display: 'flex', width: '100%', alignItems: 'stretch', justifyContent: 'space-between', gap: '1.2rem', position: 'relative' }}>
        {isMobile && showAvatar && (
          <div style={{
            width: '460px',
            maxWidth: '40vw',
            minWidth: '270px',
            height: '520px',
            pointerEvents: 'none',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            flex: 1,
            marginTop: '3rem'
          }}
          className="robot-container"
          >
            {/* Robot speech bubble */}
            <div
              className="robot-msg-bubble"
              onClick={() => setShowMsgDetail(true)}
              style={{
                marginBottom: '0',
                position: 'relative',
                top: '65px',
                zIndex: 20,
                background: 'rgba(30,30,40,0.98)',
                color: '#a259ff',
                fontWeight: 600,
                fontSize: '1.15rem',
                borderRadius: '18px',
                padding: '0.7rem 1.3rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                pointerEvents: 'auto',
                textAlign: 'center',
                maxWidth: '90%',
                animation: 'robotMsgFadeIn 3.1s cubic-bezier(.4,2,.6,1) 0.2s both',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background 0.2s',
              }}
              title="Click to see more details"
            >
              {typedText}
              <span style={{
                display: 'inline-block',
                width: '1ch',
                color: '#a259ff',
                animation: isTyping ? 'blink 1s steps(1) infinite' : 'none'
              }}>|</span>
              <span style={{
                content: "",
                position: 'absolute',
                left: '50%',
                bottom: '-16px',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '16px solid rgba(30,30,40,0.98)',
                display: 'block',
              }}></span>
              <style>{`
                @keyframes robotMsgFadeIn {
                  0% { opacity: 0; transform: translateY(-30px) scale(0.9);}
                  100% { opacity: 1; transform: translateY(0) scale(1);}
                }
                @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
                }
                @media (max-width: 700px) {
                  .hero-main-row .robot-msg-bubble {
                    position: absolute !important;
                    display: none !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                    font-size: 0.7rem !important;
                    padding: 0.15rem 0.3rem !important;
                    border-radius: 7px !important;
                    top: 0.5rem !important;
                  }
                }
                @media (max-width: 500px) {
                  .hero-main-row .robot-msg-bubble {
                    position: absolute !important;
                    display: none !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                    font-size: 0.6rem !important;
                    padding: 0.05rem 0.10rem !important;
                    border-radius: 3px !important;
                    top: -1.2rem !important;
                  }
                }
              `}</style>
            </div>
            <div className="robot-canvas-wrapper" style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
              <SplineEmbed />
            </div>
          </div>
        )}
        <div
          className="hero-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '2.2rem',
            maxWidth: '540px',
            width: '100%',
            minWidth: '260px',
            padding: '3.5rem 0',
            paddingLeft: '32px',
            transition: 'margin 0.3s',
            zIndex: 10,
            position: 'relative',
            flex: 1
          }}
        >
          {/* Profile Image and Tools */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <img
              src="/assets/WhatsApp Image 2025-05-13 at 03.04.34_ab76eabe.jpg"
              alt="Profile"
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #4e9cff',
                boxShadow: '0 0 24px #a259ff',
                marginBottom: '1.2rem'
              }}
            />
          </div>
          {/* Main Hero Text Section */}
          <div style={{ width: '100%' }}>
            <div style={{ fontSize: '1.35rem', color: '#a259ff', fontWeight: 700, marginBottom: '0.3rem' }}>Hi I&apos;m</div>
            <h1 className="hero-name" style={{ fontSize: '3.2rem', fontWeight: 900, margin: 0, lineHeight: 1.1, color: '#ff7eb3' }}>Asif Ali</h1>
            <h1 className="hero-headline" style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0.5rem 0', color: '#b47aff', position: 'relative', zIndex: 11, overflow: 'hidden' }}>I Build Scalable Cross-Platform Apps with Flutter</h1>
            <p style={{ color: '#4e9cff', marginBottom: '1.2rem', fontSize: '1.05rem' }}>
            </p>
            <div className="hero-cta-buttons" style={{ display: 'flex', gap: '1.2rem', marginTop: '1.2rem' }}>
              <button className="cta hire-me" onClick={() => setShowModal(true)}>Hire Me</button>
              <a href="\resume.pdf" download className="cta download-cv" style={{ textDecoration: 'none' }}>Download Resume</a>
            </div>
          </div>
        </div>
        {!isMobile && showAvatar && (
          <div style={{
            width: '460px',
            maxWidth: '40vw',
            minWidth: '270px',
            height: '520px',
            pointerEvents: 'none',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
            flex: 1,
            marginTop: '3rem'
          }}
          className="robot-container"
          >
            {/* Robot speech bubble */}
            <div
              className="robot-msg-bubble"
              onClick={() => setShowMsgDetail(true)}
              style={{
                marginBottom: '0',
                position: 'relative',
                top: '65px',
                zIndex: 20,
                background: 'rgba(30,30,40,0.98)',
                color: '#a259ff',
                fontWeight: 600,
                fontSize: '1.15rem',
                borderRadius: '18px',
                padding: '0.7rem 1.3rem',
                boxShadow: '0 2px 12px rgba(0,0,0,0.10)',
                pointerEvents: 'auto',
                textAlign: 'center',
                maxWidth: '90%',
                animation: 'robotMsgFadeIn 3.1s cubic-bezier(.4,2,.6,1) 0.2s both',
                cursor: 'pointer',
                userSelect: 'none',
                transition: 'background 0.2s',
              }}
              title="Click to see more details"
            >
              {typedText}
              <span style={{
                display: 'inline-block',
                width: '1ch',
                color: '#a259ff',
                animation: isTyping ? 'blink 1s steps(1) infinite' : 'none'
              }}>|</span>
              <span style={{
                content: "",
                position: 'absolute',
                left: '50%',
                bottom: '-16px',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '12px solid transparent',
                borderRight: '12px solid transparent',
                borderTop: '16px solid rgba(30,30,40,0.98)',
                display: 'block',
              }}></span>
              <style>{`
                @keyframes robotMsgFadeIn {
                  0% { opacity: 0; transform: translateY(-30px) scale(0.9);}
                  100% { opacity: 1; transform: translateY(0) scale(1);}
                }
                @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
                }
                @media (max-width: 700px) {
                  .hero-main-row .robot-msg-bubble {
                  display: none !important;
                    position: absolute !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                    font-size: 0.7rem !important;
                    padding: 0.15rem 0.3rem !important;
                    border-radius: 7px !important;
                    top: 0.5rem !important;
                  }
                }
                @media (max-width: 500px) {
                  .hero-main-row .robot-msg-bubble {
                    position: absolute !important;
                    display: none !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                    font-size: 0.6rem !important;
                    padding: 0.05rem 0.10rem !important;
                    border-radius: 3px !important;
                    top: -1.2rem !important;
                  }
                }
              `}</style>
            </div>
            <div className="robot-canvas-wrapper" style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
              <SplineEmbed />
            </div>
          </div>
        )}
      </div>
      {/* Social icons row absolutely positioned over the robot area, not inside the canvas */}
      {showAvatar && (
        <div
          style={{
            position: 'absolute',
            left: 'calc(50% + 320px)', // Move a little more to the right
            bottom: '48px',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '1.2rem',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 30,
            pointerEvents: 'auto',
            padding: 0,
            boxShadow: 'none',
          }}
        >
          {socialLinks.map((link) => (
            <a key={link.alt} href={link.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src={link.icon}
                alt={link.alt}
                style={{
                  width: 32,
                  height: 32,
                  display: 'block',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 6px #23233a)',
                }}
              />
            </a>
          ))}
        </div>
      )}
      {/* Robot message details modal */}
      {showMsgDetail && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.5)', zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: '#23233a', color: '#fff', borderRadius: '1.2rem', padding: '2rem 1.5rem',
            minWidth: 260, maxWidth: 400, boxShadow: '0 4px 32px #a259ff33', position: 'relative', textAlign: 'center'
          }}>
            <button onClick={() => setShowMsgDetail(false)} style={{
              position: 'absolute', top: 12, right: 18, background: 'none', border: 'none',
              color: '#fff', fontSize: 28, cursor: 'pointer'
            }}>&times;</button>
            <h2 style={{ color: '#a259ff', marginTop: 0 }}>More Info</h2>
            <p style={{ fontSize: '1.1rem', color: '#e0e0e0', margin: '1.2rem 0' }}>{robotDetails[robotMsgIndex]}</p>
          </div>
        </div>
      )}
      {/* Robot Modal */}
      {showRobotModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.4)', zIndex: 10001, display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <div style={{
            background: '#232232', color: '#fff', borderRadius: 18, padding: '2.5rem 2rem',
            minWidth: 320, maxWidth: 400, boxShadow: '0 4px 32px #a259ff33', position: 'relative'
          }}>
            <button onClick={() => setShowRobotModal(false)} style={{
              position: 'absolute', top: 12, right: 18, background: 'none', border: 'none',
              color: '#fff', fontSize: 28, cursor: 'pointer'
            }}>&times;</button>
            <h2 style={{ color: '#a259ff', marginTop: 0 }}>Flutter App Development</h2>
            <p>
              We specialize in building beautiful, scalable, and high-performance Flutter apps for iOS and Android.<br /><br />
              From UI/UX to backend integration (Firebase, SQL, APIs), we deliver complete cross-platform solutions.
            </p>
          </div>
        </div>
      )}
      {showModal && <HireMeModal onClose={() => setShowModal(false)} />}
      {/* Responsive: stack content on small screens */}
      <style>{`
        .robot-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .robot-canvas-wrapper {
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: -2rem;
        }
        .hero-content img[alt="Profile"] {
          width: 220px;
          height: 220px;
        }
        @media (max-width: 900px) {
          .hero-content {
            margin-right: 0 !important;
            max-width: 100vw !important;
            padding: 2rem 0 !important;
          }
        }
        @media (max-width: 700px) {
          .hero-section {
            flex-direction: column !important;
            align-items: flex-start !important;
            min-height: 0!important;
            padding: 1rem !important;
          }
          .hero-main-row {
            flex-direction: column !important;
            width: 100% !important;
            align-items: stretch !important;
          }
          .hero-content,
          .hero-main-row > div:not(.hero-content) {
            width: 100% !important;
            max-width: 100vw !important;
          }
          .robot-container {
            margin-top: 2.5rem !important;
          }
          .hero-content img[alt="Profile"] {
            width: 200px !important;
            height: 200px !important;
          }
        }
        @media (max-width: 500px) {
          .hero-content {
            
            overflow: visible !important;
          }
          .hero-content img[alt="Profile"] {
            width: 300px !important;
            height: 300px !important;
            transform: scale(3.5) !important;
            margin-left: 150px !important;
            margin-top: -60px !important;
            border: 2px solid #a259ff !important;
          }
          section {
            margin: 5px 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            min-height: unset !important;
            max-height: unset !important;
          }
          .card {
            padding: 1.2rem !important;
            min-width: 180px !important;
            max-width: 90vw !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero; 