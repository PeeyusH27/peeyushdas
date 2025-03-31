import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import ProjectsPage from './pages/ProjectsPage';
import wallpaper from './assets/images/0ee9d0b8b2558f163673bd6a1567d8f4.jpg';

const App = () => {
  return (
    <Router>
      <div
        className="min-h-screen w-full flex flex-col"
        style={{
          backgroundImage: `url(${wallpaper})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Navbar Section */}
        <Navbar />

        {/* Main Content Section */}
        <main className="flex-grow w-full bg-white/20 dark:bg-zinc-800/10 backdrop-blur-md p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
