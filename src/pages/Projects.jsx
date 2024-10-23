// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {/* Tic Tac Toe Game */}
        <div className="project-card">
          <h3>Tic Tac Toe</h3>
          <p>Challenge yourself or a friend in a fun game of Tic Tac Toe!</p>
          <a href={`${process.env.PUBLIC_URL}/game1.html`} target="_blank" className="button">
            Play Tic Tac Toe
          </a>
        </div>

        {/* Rock, Paper, Scissors Game */}
        <div className="project-card">
          <h3>Rock, Paper, Scissors</h3>
          <p>Play a classic game of Rock, Paper, Scissors against the computer!</p>
          <a href={`${process.env.PUBLIC_URL}/game2.html`} target="_blank" className="button">
            Play Rock, Paper, Scissors
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
