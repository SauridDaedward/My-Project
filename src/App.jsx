// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './index.css';
//import './app.css'; // or './index.css' depending on which you want to use

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
