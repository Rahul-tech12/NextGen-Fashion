import React from "react";
import "./HomePage.css";
import { FaBolt, FaPalette, FaMagic, FaArrowRight } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="landing-wrapper">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>
            Create <span>Future-Ready</span>  
            Fashion with Powerful <span>AI</span>
          </h1>

          <p>
            Turn your imagination into real fashion designs.  
            From clothing to shoes — generate, customize, and export designs  
            with the world’s smartest AI fashion engine.
          </p>

          <div className="hero-buttons">
            <a href="/design" className="btn-primary">Start Designing</a>
            <a href="/register" className="btn-secondary">Join Now</a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/register.png" alt="AI Fashion Design" />
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features-section">
        <h2>Why Choose NextGen Fashion?</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <FaMagic className="icon" />
            <h3>AI Powered Clothing</h3>
            <p>Generate shirts, hoodies, jackets, dresses & more in seconds.</p>
          </div>

          <div className="feature-card">
            <FaPalette className="icon" />
            <h3>Full Customization</h3>
            <p>Change patterns, colors, textures and fine details instantly.</p>
          </div>

          <div className="feature-card">
            <FaBolt className="icon" />
            <h3>Lightning Fast Outputs</h3>
            <p>Get results within seconds with ultra-optimized AI models.</p>
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section className="demo-section">
        <h2>Try It Yourself</h2>

        <div className="demo-box">
          <textarea placeholder="Describe your fashion idea… Example: ‘Black futuristic hoodie with neon lines’" />
          <button className="demo-btn">Generate <FaArrowRight /></button>
        </div>
      </section>

      {/* SHOWCASE AI DESIGNS */}
      <section className="showcase-section">
        <h2>AI Designs Showcase</h2>
        <div className="showcase-grid">
          <img src="/register.png" alt="Design" />
          <img src="/register.png" alt="Design" />
          <img src="/register.png" alt="Design" />
          <img src="/register.png" alt="Design" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2>Loved by Designers & Entrepreneurs</h2>

        <div className="testimonials-row">

          <div className="testimonial-card">
            <p>"I built my entire clothing startup using this AI. Mind-blowing quality!"</p>
            <h4>— Riya, Fashion Entrepreneur</h4>
          </div>

          <div className="testimonial-card">
            <p>"Best design tool ever. Saves hours of work and delivers perfect output."</p>
            <h4>— Aarav, Graphic Designer</h4>
          </div>

          <div className="testimonial-card">
            <p>"The customization options are incredible. Totally worth it!"</p>
            <h4>— Neha, Student</h4>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2025 NextGen Fashion. Powered by AI.</p>
      </footer>

    </div>
  );
};

export default HomePage;
