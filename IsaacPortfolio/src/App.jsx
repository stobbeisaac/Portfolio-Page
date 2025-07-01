import './App.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { useState, useEffect } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 7; // Updated to include individual project pages

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
              <img src="/IsaacImage.jpg" alt="Isaac Stobbe" width={350} className="rounded-5 profile-image"></img>
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
                  Hi, I'm Isaac - a recent Computer Science graduate from the University of Wisconsin - Stout with a strong interest in embedded systems, automation, and software development.
                </p>
                {/* <p>
                  
                </p> */}
                <div className="skills-grid">
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">Linux</span>
                  <span className="skill-tag">Arduino</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">SQL</span>
                  <span className="skill-tag">Git</span>
                </div>
                <h2 className="resume-title"> Want to Download My Resume?</h2>
                <a href="/IsaacStobbeResume2025.pdf" className="resume-link" download="IsaacStobbeResume2025.pdf">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 3 - Projects Overview */}
      <section id="page-2" className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="page-title">My Projects</h2>
              <div className="content-card">
                <p className="lead">
                  Here are some of the projects I've worked on. Use the navigation to explore each one in detail.
                </p>
                <div className="projects-overview">
                  <div className="project-summary">
                    <h4>Portfolio Website</h4>
                    <p>Interactive portfolio built with React</p>
                  </div>
                  <div className="project-summary">
                    <h4>Go-Kart Speedometer</h4>
                    <p>Real-time speedometer for a go-kart using Arduino and sensors</p>
                  </div>
                  <div className="project-summary">
                    <h4>Guitar Tuner</h4>
                    <p>Real-time guitar tuner using Arduino and a microphone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 4 - Project 1: Portfolio Website */}
      <section id="page-3" className="page-section project-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="page-title">Portfolio Website</h2>
              <div className="project-detail-card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="project-image-placeholder">
                      <img src="/ProjectPortfolio.png" alt="Portfolio Website Preview" className="project-image" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="project-details">
                      <h3>Interactive Portfolio Website</h3>
                      <p className="project-description">
                        A modern, responsive portfolio website built with React and featuring smooth scroll animations, 
                        gradient text effects, and a professional design. The site showcases my skills and projects 
                        with an intuitive navigation system.
                      </p>
                      <div className="project-tech">React • CSS • JavaScript • Vite</div>
                      <div className="project-links">
                        <a href="https://github.com/stobbeisaac/Portfolio-Page" className="project-link" target='_blank'>GitHub</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 5 - Project 2: Go-Kart Speedometer */}
      <section id="page-4" className="page-section project-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="page-title">Go-Kart Speedometer</h2>
              <div className="project-detail-card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="project-image-placeholder">
                      <img src="/go-kart-speedometer-preview.jpg" alt="Go-Kart Speedometer Preview" className="project-image" />
                      <div className="image-placeholder-text">Project Screenshot</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="project-details">
                      <h3>Go-Kart Speedometer</h3>
                      <p className="project-description">
                        A physical speedometer for a go-kart that displays real-time speed using an Arduino, 
                        speed sensor, and a mini servo motor.
                      </p>
                      <div className="project-tech">Arduino • C++ • Electronics</div>
                      <div className="project-links">
                        <a href="#" className="project-link">GitHub</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 6 - Project 3: Guitar Tuner */}
      <section id="page-5" className="page-section project-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h2 className="page-title">Guitar Tuner</h2>
              <div className="project-detail-card">
                <div className="row">
                  <div className="col-md-6">
                    <div className="project-image-placeholder">
                      <img src="/guitar-tuner-preview.jpg" alt="Guitar Tuner Preview" className="project-image" />
                      <div className="image-placeholder-text">Project Screenshot</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="project-details">
                      <h3>Guitar Tuner</h3>
                      <p className="project-description">
                        An arduino-based guitar tuner that uses a microphone to detect the pitch of guitar strings
                        and provides real-time feedback to help users tune their instruments accurately.
                      </p>
                      <div className="project-tech">Arduino • C++ • Electronics</div>
                      <div className="project-links">
                        <a href="#" className="project-link">GitHub</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page 7 - Contact */}
      <section id="page-6" className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2 className="page-title">Get In Touch</h2>
              <div className="content-card">
                <p className="lead">Let's connect and discuss opportunities!</p>
                <div className="contact-links">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=iss.cyclone@gmail.com&su=Subject&body=Body%20text" className="contact-link" target='_blank' rel='noopener noreferrer'>
                    <SiGmail /> Gmail
                  </a>
                  <a href="https://linkedin.com/in/isaacstobbe" className="contact-link" target='_blank'>
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href="https://github.com/stobbeisaac" className="contact-link" target='_blank'>
                    <FaGithub /> GitHub
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
