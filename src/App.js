import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/index';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppContact from './components/WhatsAppContact';

const App = () => {
  return (
    <Router>
      <div className="App fade-in">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
