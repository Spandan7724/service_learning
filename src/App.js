import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sections />
      <Footer />
      <LoginModal />
      <RegisterModal />
    </>
  );
}

export default App;
