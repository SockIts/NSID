import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import StampIndex from './pages/StampIndex';
import Rules from './pages/Rules';
import Submit from './pages/Submit';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import LegacyIndex from './pages/LegacyIndex';
import Index01 from './pages/Index01';
import Index02 from './pages/Index02';
import Index03 from './pages/Index03';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        backgroundColor: '#000000 !important',
        color: '#39FF14',
        '& *': {
          backgroundColor: '#000000 !important'
        }
      }}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/stampindex" element={<StampIndex />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/submit" element={<Submit />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/articles" element={<Blog />} />
            <Route path="/legacyindex" element={<LegacyIndex />} />
            <Route path="/index01" element={<Index01 />} />
            <Route path="/index02" element={<Index02 />} />
            <Route path="/index03" element={<Index03 />} /> 
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
