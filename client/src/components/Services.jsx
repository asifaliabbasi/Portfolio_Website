import React, { useState } from 'react';

const services = [
  { icon: '📱', title: 'Custom Flutter App Development', desc: 'Cross-platform mobile apps for iOS & Android from single codebase.', details: 'I build high-performance, beautiful, and scalable mobile applications for both iOS and Android using Flutter and Dart programming. My apps feature smooth animations, native performance, and a single codebase for faster delivery and cost-effective development.' },
  { icon: '🔥', title: 'Firebase Integration & Backend', desc: 'Realtime database, authentication, and cloud functions.', details: 'Integrate your Flutter app with Firebase for real-time databases, secure authentication, cloud functions, push notifications, analytics, and more. I ensure secure and scalable backend solutions that grow with your business.' },
  { icon: '🔗', title: 'REST/GraphQL API Integration', desc: 'Robust backend connectivity and data management.', details: 'I design and integrate robust REST and GraphQL APIs to connect your Flutter app to powerful backends, enabling seamless data exchange, third-party integrations, and advanced features.' },
  { icon: '🎨', title: 'Custom UI/UX Design', desc: 'Beautiful, intuitive Flutter interfaces.', details: 'I craft stunning and intuitive user interfaces using Flutter\'s rich widget library, focusing on user experience, accessibility, and modern design trends to make your app stand out in the market.' },
  { icon: '🚀', title: 'App Store Deployment', desc: 'Launch on Google Play Store & Apple App Store.', details: 'I handle the entire deployment process, ensuring your Flutter app meets all guidelines and is successfully published on the Google Play Store and Apple App Store with proper optimization.' },
  { icon: '⚡', title: 'Flutter App Optimization', desc: 'Performance tuning & best practices for Flutter apps.', details: 'I optimize your Flutter app for speed, battery efficiency, smooth performance, and smaller app size, following Flutter best practices and using the latest optimization techniques.' },
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
      <h2 className="section-title">Flutter App Development Services</h2>
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
      
      {/* FAQ Section */}
      <div style={{ marginTop: '3rem', background: 'rgba(36, 36, 64, 0.7)', borderRadius: '1.5rem', padding: '2rem' }}>
        <h3 style={{ color: '#a259ff', fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Frequently Asked Questions</h3>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <h4 style={{ color: '#4e9cff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>How much does it cost to build a Flutter app?</h4>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
              The cost depends on app complexity, features, and timeline. I provide competitive rates for Flutter development 
              starting from basic apps to complex enterprise solutions. Contact me for a detailed quote.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#4e9cff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Why choose Flutter for your mobile app?</h4>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
              Flutter allows building apps for both Android and iOS from a single codebase, reducing development time and costs. 
              It offers native performance, beautiful UI, and faster development cycles compared to traditional native development.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#4e9cff', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Do you provide Play Store / App Store uploads?</h4>
            <p style={{ color: '#e0e0e0', lineHeight: '1.6' }}>
              Yes, I handle the complete app deployment process including Google Play Store and Apple App Store submissions, 
              ensuring your Flutter app meets all guidelines and is successfully published.
            </p>
          </div>
        </div>
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