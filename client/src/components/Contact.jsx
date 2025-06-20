import React, { useRef } from 'react';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent('Portfolio Contact: ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=asifaliabbasi118@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Hire Me – Let's Build Your Flutter App</h2>
      <p style={{ textAlign: 'center', color: '#4e9cff', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
        Looking for a reliable Flutter app developer? Let's work together to create your cross-platform mobile application. 
        I specialize in Flutter development, Firebase integration, and delivering high-quality apps for both Android and iOS.
      </p>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="contact-submit">Get Flutter Development Quote</button>
      </form>
    </section>
  );
};

export default Contact; 