import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Abdullah Riaz</h1>
        <p style={{ fontSize: '1.5rem', opacity: 0.9 }}>Web Developer | Designer</p>
      </header>

      {/* About Section */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: '#333', marginBottom: '20px' }}>About Me</h2>
        <p style={{ lineHeight: '1.8', color: '#666' }}>
          I am a passionate web developer with expertise in HTML, CSS, JavaScript, and React. 
          I love creating beautiful and functional websites that make a difference.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{ 
        background: '#f5f5f5', 
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#333', marginBottom: '30px' }}>My Skills</h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '20px', 
          flexWrap: 'wrap' 
        }}>
          {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js'].map((skill) => (
            <div key={skill} style={{
              background: 'white',
              padding: '20px 40px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              fontWeight: 'bold',
              color: '#667eea'
            }}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>My Projects</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {[
            { name: 'E-Commerce Website', desc: 'A full-featured online store with cart functionality' },
            { name: 'School Portal', desc: 'Student result management system' },
            { name: 'Portfolio Website', desc: 'Personal portfolio showcasing my work' }
          ].map((project, index) => (
            <div key={index} style={{
              background: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              border: '1px solid #eee'
            }}>
              <h3 style={{ color: '#667eea', marginBottom: '10px' }}>{project.name}</h3>
              <p style={{ color: '#666' }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '20px' }}>Get In Touch</h2>
        <p style={{ marginBottom: '30px', fontSize: '1.1rem' }}>
          Feel free to contact me for any projects or opportunities!
        </p>
        <a href="mailto:your.email@example.com" style={{
          display: 'inline-block',
          background: 'white',
          color: '#667eea',
          padding: '15px 40px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#333',
        color: 'white',
        textAlign: 'center',
        padding: '20px'
      }}>
        <p>© 2026 Abdullah Riaz. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;