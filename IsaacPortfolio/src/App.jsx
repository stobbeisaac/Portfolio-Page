import './App.css'
import image from '/IsaacImage.jpg'
import { useState, useEffect } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const scrollToPage = (pageIndex) => {
    const element = document.getElementById(`page-${pageIndex}`);
    element?.scrollIntoView({ behavior: 'smooth' });
    setCurrentPage(pageIndex);
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      scrollToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      scrollToPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const pages = document.querySelectorAll('.page-section');
      let current = 0;
      
      pages.forEach((page, index) => {
        const rect = page.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = index;
        }
      });
      
      setCurrentPage(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation Buttons */}
      {currentPage > 0 && (
        <button className="nav-button nav-up" onClick={prevPage}>
          ↑
        </button>
      )}
      
      {currentPage < totalPages - 1 && (
        <button className="nav-button nav-down" onClick={nextPage}>
          ↓
        </button>
      )}

      {/* Page Indicator */}
      <div className="page-indicator">
        {Array.from({ length: totalPages }, (_, i) => (
          <div 
            key={i} 
            className={`indicator-dot ${i === currentPage ? 'active' : ''}`}
            onClick={() => scrollToPage(i)}
          />
        ))}
      </div>

      {/* Page 1 - Home/Profile */}
      <section id="page-0" className="page-section home-page">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <img src={image} alt="Isaac Stobbe" width={350} className="rounded-5 profile-image"></img>
              <h1 className="hidden-title"></h1>
            </div>
            <div className="col text-start align-self-center">
              <h1 className="name-title">Isaac Stobbe</h1>
              <p className="subtitle">University of Wisconsin - Stout<br></br>Graduate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Page 2 - About */}
      <section id="page-1" className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="page-title">About Me</h2>
              <div className="content-card">
                <p className="lead">
                  Passionate software engineer with a fresh perspective and strong foundation 
                  in computer science fundamentals.
                </p>
                <p>
                  Recent graduate from University of Wisconsin - Stout with expertise in 
                  modern web technologies, problem-solving, and collaborative development.
                </p>
                <div className="skills-grid">
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 3 - Projects */}
      <section id="page-2" className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <h2 className="page-title">My Projects</h2>
              <div className="projects-grid">
                <div className="project-card">
                  <h4>Portfolio Website</h4>
                  <p>Interactive portfolio built with React and modern CSS animations</p>
                  <div className="project-tech">React • CSS • JavaScript</div>
                </div>
                <div className="project-card">
                  <h4>Task Management App</h4>
                  <p>Full-stack application for team task coordination</p>
                  <div className="project-tech">Node.js • Express • MongoDB</div>
                </div>
                <div className="project-card">
                  <h4>Data Visualization Tool</h4>
                  <p>Interactive charts and graphs for business analytics</p>
                  <div className="project-tech">Python • D3.js • Flask</div>
                </div>
                <div className="project-card">
                  <h4></h4>
                  <p>Interactive charts and graphs for business analytics</p>
                  <div className="project-tech">Python • D3.js • Flask</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 4 - Contact */}
      <section id="page-3" className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className="page-title">Get In Touch</h2>
              <div className="content-card">
                <p className="lead">Let's connect and discuss opportunities!</p>
                <div className="contact-links">
                  <a href="mailto:isaac@example.com" className="contact-link">
                    📧 Email
                  </a>
                  <a href="https://linkedin.com/in/isaac-stobbe" className="contact-link">
                    💼 LinkedIn
                  </a>
                  <a href="https://github.com/isaac-stobbe" className="contact-link">
                    💻 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
