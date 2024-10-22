import React from 'react';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills.',
    technologies: ['React', 'Vite', 'Materialize CSS'],
    link: 'https://github.com/yourusername/portfolio-website'
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A Halloween-themed Tic Tac Toe game built with HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/SauridDaedward/TicTacToe'
  },
  {
    title: 'Chatbot Project',
    description: 'A chatbot built using React and Vite, customized with Materialize CSS.',
    technologies: ['React', 'Vite', 'Materialize CSS'],
    link: 'https://github.com/yourusername/chatbot'
  }
];

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
