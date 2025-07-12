import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';

import Header from './component/pages/Header';
import Footer from './component/pages/Footer';
import Home from './component/pages/Home';
import WhoWeAre from "./component/pages/WhoWeAre";
import WhatWeDo from "./component/pages/WhatWeDo";
import Contact from "./component/pages/Contact";
import FloatingIcons from './component/animations/FloatingIcons';
import AdminLogin from './component/pages/AdminLogin';
import AdminPage from './component/pages/AdminPage';

function AppContent() {
  const location = useLocation();

  // Routes where Header and Footer should be hidden
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Header />}
      <FloatingIcons />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<WhoWeAre />} />
        <Route path="/services" element={<WhatWeDo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

function App() {
  return (
    
      <AppContent />
    
  );
}

export default App;
