import React, { useState } from 'react';

const services = [
  { icon: '📱', title: 'Flutter App Development', desc: 'Custom mobile apps for iOS & Android.', details: 'I build high-performance, beautiful, and scalable mobile applications for both iOS and Android using Flutter. My apps feature smooth animations, native performance, and a single codebase for faster delivery.' },
  { icon: '🔥', title: 'Firebase Integration', desc: 'Realtime database, auth, and more.', details: 'Integrate your app with Firebase for real-time databases, authentication, cloud functions, push notifications, analytics, and more. I ensure secure and scalable backend solutions.' },
  { icon: '🔗', title: 'REST/GraphQL APIs', desc: 'Robust backend connectivity.', details: 'I design and integrate robust REST and GraphQL APIs to connect your app to powerful backends, enabling seamless data exchange and advanced features.' },
  { icon: '🎨', title: 'UI/UX for Mobile', desc: 'Beautiful, intuitive interfaces.', details: 'I craft stunning and intuitive user interfaces, focusing on user experience, accessibility, and modern design trends to make your app stand out.' },
  { icon: '🚀', title: 'App Store Deployment', desc: 'Launch on App Store & Play Store.', details: 'I handle the entire deployment process, ensuring your app meets all guidelines and is successfully published on the App Store and Google Play Store.' },
  { icon: '⚡', title: 'App Optimization', desc: 'Performance tuning & best practices.', details: 'I optimize your app for speed, battery efficiency, and smooth performance, following best practices and using the latest tools.' },
];

function ServiceModal({ open, onClose, service }) {
  if (!open || !service) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.5)', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}>
      <div style={{
        background: '#23233a', color: '#fff', borderRadius: '1.2rem', padding: '1.2rem 1rem',
        minWidth: 260, maxWidth: 400, boxShadow: '0 4px 32px #a259ff33', position: 'relative', textAlign: 'center'
      }}>
        <button onClick={onClose} style={{
          position: 'absolute', top: 12, right: 18, background: 'none', border: 'none',
          color: '#fff', fontSize: 28, cursor: 'pointer'
        }}>&times;</button>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{service.icon}</div>
        <h2 style={{ color: '#a259ff', marginTop: 0 }}>{service.title}</h2>
        <p style={{ marginBottom: '1.2rem', color: '#4e9cff', fontWeight: 600 }}>{service.desc}</p>
        <p style={{ fontSize: '1rem', color: '#e0e0e0' }}>{service.details}</p>
      </div>
    </div>
  );
}

const Services = ({ showAvatar, playJump }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="services-section">
      <h2 className="section-title">My Services</h2>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.desc}</p>
            <button className="service-learn-more" onClick={() => handleLearnMore(service)}>Learn More</button>
          </div>
        ))}
      </div>
      <ServiceModal open={modalOpen} onClose={handleCloseModal} service={selectedService} />
      <style>{`
        @media (max-width: 500px) {
          .services-grid {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 1.2rem !important;
            justify-items: center !important;
            margin: 0 auto !important;
          }
          .service-title {
            font-size: 0.7rem !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Services; 