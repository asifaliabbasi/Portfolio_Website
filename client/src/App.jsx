import MenuBar, { Footer } from './components/MenuBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Contact from './components/Contact';
import React, { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {
  const [avatarSection, setAvatarSection] = useState('hero');
  const [playJump, setPlayJump] = useState(false);
  const servicesRef = useRef();
  const { ref: servicesInViewRef, inView: servicesInView } = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (servicesInView) {
      setAvatarSection('services');
      setPlayJump(true);
      setTimeout(() => setPlayJump(false), 1200);
    } else {
      setAvatarSection('hero');
    }
  }, [servicesInView]);

  return (
    <div className="app-root" style={{ paddingLeft: '48px' }}>
      <MenuBar />
      <section id="hero">
        <Hero showAvatar={true} playJump={false} />
      </section>
      <section id="about"><About /></section>
      <section id="services" ref={servicesInViewRef}>
        <Services showAvatar={avatarSection === 'services'} playJump={playJump} />
      </section>
      <section id="portfolio"><Portfolio /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App; 