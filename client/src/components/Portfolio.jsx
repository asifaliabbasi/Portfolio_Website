import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    img: '/assets/apps/Lernora.png',
    title: 'Lernora - Learning Management System',
    desc: 'Full-featured LMS with courses, certificates, AI chatbot, and Stripe payments.',
    details: 'Lernora is a comprehensive Learning Management System built with Flutter for cross-platform support (Android, iOS, Web, Desktop). Features include course creation, video lessons, professional certificates, subscription management via Stripe, AI-powered chatbot using Google Gemini API, Zoom integration for live sessions, and a powerful analytics dashboard. Backend powered by Firebase with AWS S3 + CloudFront CDN for media delivery.',
    link: 'https://lernora.org',
    technologies: ['Flutter', 'Firebase', 'AWS S3', 'Stripe', 'Gemini AI', 'Zoom', 'GetX']
  },
  {
    img: '/assets/apps/ITResourceHub.png',
    title: 'IT Resource Hub - Educational Platform',
    desc: 'Structured guidance and curated resources for IT students and beginners.',
    details: "IT Resource Hub provides structured guidance, curated resources, and a clear path forward for IT students. By seniors who've been there, for juniors finding their way. Features include roadmaps, subjects with notes & past papers, community updates, FAQs, and contribution system. Built with React 19 and Firebase for authentication, Firestore database, and cloud storage.",
    link: 'https://itresourcehub.vercel.app',
    technologies: ['React 19', 'Firebase', 'Vite', 'Vercel', 'Lucide React', 'React Hook Form']
  },
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
    <div
      className="modal-backdrop"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="modal-content card"
        style={{
          minWidth: 280,
          maxWidth: 520,
          padding: '1.5rem 1.2rem',
          textAlign: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} style={{
          position: 'absolute', top: 12, right: 18, background: 'none', border: 'none',
          color: '#fff', fontSize: 28, cursor: 'pointer'
        }}>&times;</button>
        <img src={project.img} alt={project.title} style={{ objectFit: 'contain', width: '60%', borderRadius: '1rem', marginBottom: '1rem' }} />
        <h2 style={{ color: '#a259ff', marginTop: 0, fontSize: '1.4rem' }}>{project.title}</h2>
        <p style={{ marginBottom: '0.8rem', color: '#4e9cff' }}>{project.desc}</p>
        <p style={{ fontSize: '0.95rem', color: '#e0e0e0', marginBottom: '1rem', lineHeight: 1.5 }}>{project.details}</p>

        {/* Tech Stack Badges */}
        {project.technologies && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '1.2rem' }}>
            {project.technologies.map((tech, idx) => (
              <span key={idx} style={{
                background: 'rgba(162, 89, 255, 0.15)',
                color: '#a259ff',
                padding: '0.3rem 0.8rem',
                borderRadius: '1rem',
                fontSize: '0.8rem',
                fontWeight: 500,
                border: '1px solid rgba(162, 89, 255, 0.3)'
              }}>{tech}</span>
            ))}
          </div>
        )}

        {/* Link button - supports both github and live link */}
        <a
          href={project.link || project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
          style={{
            display: 'inline-block',
            textDecoration: 'none',
            marginTop: '0.5rem',
          }}
        >
          {project.link ? '🌐 Visit Website' : '📂 View on GitHub'}
        </a>
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