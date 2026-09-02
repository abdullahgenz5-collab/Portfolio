import "./App.css";

function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">AR<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href="#contact">
          Let's Talk
        </a>
      </nav>


      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="eyebrow">
            FRONT-END DEVELOPER & DESIGNER
          </p>

          <h1>
            Building digital
            <br />
            <span>experiences.</span>
          </h1>

          <p className="hero-text">
            Hi, I'm Abdullah Riaz. I create modern, interactive and
            visually polished web experiences with clean code and
            creative design.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
              <span>↗</span>
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>

        </div>

        <div className="hero-number">
          01
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE ↓
        </div>
      </section>


      {/* ABOUT */}
      <section className="section about" id="about">

        <div className="section-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-content">
          <h2>
            Turning ideas into
            <span> memorable interfaces.</span>
          </h2>

          <p>
            I'm a developer and designer focused on creating websites
            that look beautiful, feel smooth and work efficiently.
            I enjoy experimenting with modern UI, animations and
            interactive experiences.
          </p>

          <p>
            My goal is simple — build websites that people remember.
          </p>
        </div>

      </section>


      {/* SKILLS */}
      <section className="section skills" id="skills">

        <div className="section-label">
          <span>02</span>
          MY SKILLS
        </div>

        <div className="skills-grid">

          <div className="skill">
            <span>01</span>
            <h3>HTML</h3>
            <p>Semantic and clean web structure.</p>
          </div>

          <div className="skill">
            <span>02</span>
            <h3>CSS</h3>
            <p>Modern layouts, responsive design and animations.</p>
          </div>

          <div className="skill">
            <span>03</span>
            <h3>JavaScript</h3>
            <p>Interactive and dynamic experiences.</p>
          </div>

          <div className="skill">
            <span>04</span>
            <h3>React</h3>
            <p>Component-based modern web applications.</p>
          </div>

        </div>

      </section>


      {/* PROJECTS */}
      <section className="section projects" id="projects">

        <div className="section-label">
          <span>03</span>
          SELECTED WORK
        </div>

        <div className="project-list">

          <div className="project">
            <div className="project-info">
              <span>01 / WEB DESIGN</span>
              <h3>Creative Portfolio</h3>
              <p>
                A modern portfolio experience with a dark,
                minimal and cinematic visual style.
              </p>
            </div>

            <div className="project-arrow">↗</div>
          </div>


          <div className="project">
            <div className="project-info">
              <span>02 / DEVELOPMENT</span>
              <h3>Interactive Website</h3>
              <p>
                A responsive website focused on smooth
                interactions and engaging user experience.
              </p>
            </div>

            <div className="project-arrow">↗</div>
          </div>


          <div className="project">
            <div className="project-info">
              <span>03 / UI DESIGN</span>
              <h3>Modern Dashboard</h3>
              <p>
                A clean interface designed around usability,
                typography and visual hierarchy.
              </p>
            </div>

            <div className="project-arrow">↗</div>
          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section className="contact" id="contact">

        <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

        <h2>
          Let's build something
          <span> great.</span>
        </h2>

        <a
          href="mailto:your@email.com"
          className="contact-button"
        >
          Get In Touch ↗
        </a>

      </section>


      {/* FOOTER */}
      <footer>
        <div>© 2026 Abdullah Riaz</div>
        <div>Designed & Built with passion.</div>
      </footer>

    </div>
  );
}

export default App;