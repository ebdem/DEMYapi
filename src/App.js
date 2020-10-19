import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  
  return (
    <div>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
