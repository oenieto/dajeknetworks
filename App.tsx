import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Legal from './pages/Legal';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-300 transition-colors duration-300 font-body">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;