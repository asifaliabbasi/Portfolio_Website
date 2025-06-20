import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    img: '/assets/apps/ShopEasy.png',
    title: 'ShopEasy - Flutter E-commerce App',
    desc: 'Modern cross-platform E-commerce app built with Flutter and Firebase.',
    details: 'ShopEasy is a modern E-commerce Flutter app designed for seamless online shopping across Android and iOS. Features include user-friendly interface, secure authentication, real-time product updates, and smooth checkout process. Built with Flutter and Dart for cross-platform compatibility and Firebase for robust backend services, ShopEasy ensures a fast, reliable, and scalable shopping experience.',
    github: 'https://github.com/asifaliabbasi/Ecommer_Application_CodeAlpha_task1',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cross-Platform']
  },
  {
    img: '/assets/apps/Friday AI Assistant.png',
    title: 'AI Assistant - Flutter App',
    desc: 'Smart AI companion built with Flutter and advanced AI integration.',
    details: 'AI Assistant is a smart AI companion Flutter app capable of answering questions, setting reminders, and assisting with daily tasks. Leveraging advanced AI and natural language processing, the app provides personalized responses and integrates with various services. Built using Flutter and Dart programming with Firebase backend, it offers real-time updates and secure cloud storage.',
    github: 'https://github.com/asifaliabbasi/AI-Assistant-Flutter-Application',
    technologies: ['Flutter', 'Dart', 'AI Integration', 'Firebase', 'NLP']
  },
  {
    img: '/assets/apps/CloudsNow.png',
    title: 'CloudsNow - Flutter Weather App',
    desc: 'Real-time weather app with beautiful UI built using Flutter.',
    details: 'CloudsNow delivers accurate weather updates in a beautiful Flutter app interface. The app provides real-time weather data, forecasts, and alerts for your location across Android and iOS platforms. With intuitive UI built in Flutter and Dart programming language, plus real-time data synchronization via APIs, CloudsNow keeps you informed about weather conditions wherever you are.',
    github: 'https://github.com/asifaliabbasi/weather_app',
    technologies: ['Flutter', 'Dart', 'API Integration', 'Weather API', 'Cross-Platform']
  },
  {
    img: '/assets/apps/ChitChat.png',
    title: 'ChitChat - Flutter Messaging App',
    desc: 'Secure real-time chat app built with Flutter and Firebase.',
    details: 'ChitChat is a secure real-time chat and messaging Flutter app supporting instant messaging, group chats, and media sharing. Features vibrant and easy-to-use interface built with Flutter and Dart programming. Includes Firebase for instant data synchronization, authentication, and real-time messaging capabilities across Android and iOS platforms.',
    github: 'https://github.com/asifaliabbasi/chit_chat_app-Flutter-Application',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Real-time Messaging', 'Cross-Platform']
  }
];

function ProjectModal({ open, onClose, project }) {
  if (!open || !project) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: '#23233a', color: '#fff', borderRadius: '1.2rem', padding: '1.2rem 1rem',
        minWidth: 260, maxWidth: 500, boxShadow: '0 4px 32px #a259ff33', position: 'relative', textAlign: 'center',
        transform: 'scale(1.1)'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 12, right: 18, background: 'none', border: 'none',
          color: '#fff', fontSize: 28, cursor: 'pointer'
        }}>&times;</button>
        <img src={project.img} alt={project.title} style={{objectFit: 'contain', width: '30%', borderRadius: '1rem', marginBottom: '1.2rem' }} />
        <h2 style={{ color: '#a259ff', marginTop: 0 }}>{project.title}</h2>
        <p style={{ marginBottom: '1.2rem' }}>{project.desc}</p>
        <p style={{ fontSize: '0.98rem', color: '#e0e0e0', marginBottom: '1.2rem' }}>{project.details}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #ff7eb3, #4e9cff)',
          color: '#fff',
          borderRadius: '1.25rem',
          fontWeight: 600,
          padding: '0.7rem 1.5rem',
          margin: '0.5rem 0 0.7rem 0',
          textDecoration: 'none',
          boxShadow: '0 2px 16px 0 rgba(160, 89, 255, 0.18)',
          transition: 'box-shadow 0.3s, transform 0.3s',
        }}>View on GitHub</a>
      </div>
    </div>
  );
}

const PortfolioCard = ({ project, onInView, onViewClick }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView && onInView) onInView();
  }, [inView, onInView]);
  return (
    <div ref={ref} className="portfolio-card" style={{ maxWidth: '320px', width: '85%' }}>
      <img src={project.img} alt={`${project.title} - Flutter app screenshot showing cross-platform mobile development`} className="portfolio-img" style={{ width: '100%', height: '220px', objectFit: 'contain', borderRadius: '16px', marginBottom: '1rem' }} />
      <h2 className="portfolio-title" style={{ textAlign: 'center' }}>{project.title}</h2>
      <p className="portfolio-desc" style={{ textAlign: 'center' }}>{project.desc}</p>
      <button className="portfolio-view" style={{ display: 'block', margin: '0 auto' }} onClick={() => onViewClick(project)}>View Project</button>
    </div>
  );
};

const Portfolio = ({ onCardInView }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewClick = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="portfolio-section">
      <h2 className="section-title">Recent Flutter Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <PortfolioCard key={idx} project={project} onInView={onCardInView} onViewClick={handleViewClick} />
        ))}
      </div>
      <ProjectModal open={modalOpen} onClose={handleCloseModal} project={selectedProject} />
      <style>{`
        @media (max-width: 500px) {
          .portfolio-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 1.2rem !important;
            justify-items: center !important;
            margin: 0 auto !important;
          }
          .portfolio-title {
            font-size: 0.7rem !important;
          }
          .portfolio-desc {
            font-size: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Portfolio; 