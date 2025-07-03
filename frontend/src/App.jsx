import React from 'react';
import './App.css'
import Header from './component/Header';
import Footer from './component/Footer';
import FloatingIcons from './component/animations/FloatingIcons';
function App() {

  
  return (
    <>
    <FloatingIcons />
      <Header />
      <h2 className='text-blue-500'>Hi</h2>
      <Footer />
    </>
  )
}

export default App
