import React from 'react'
import wallpaper from './assets/images/0ee9d0b8b2558f163673bd6a1567d8f4.jpg';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';

const App = () => {
  return (
    <Router>
      <div className='h-full w-full overflow-y-scroll' style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
      }}>
        <div className='h-full w-full bg-white/20 dark:bg-zinc-600/10 backdrop-blur-[1px]'>
          <Navbar />
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
