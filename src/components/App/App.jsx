import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import { Homepage } from '../../pages/Homepage';
import { Footer } from '../Footer/Footer';
import { Container } from './App.styled';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setShowComponent(!showComponent);
  }, []);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id='mobile-portal'></div>
      <Container className={showComponent ? 'active' : 'exit-active'}>
        <Homepage isOpen={isOpen} setIsOpen={setIsOpen} />
        <Footer />
      </Container>
    </>
  );
}

export default App;
