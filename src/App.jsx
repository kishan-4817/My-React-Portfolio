import React from 'react';
import Home from './pages/Home';
import Cursor from './components/Cursor';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <>
      <Cursor />
      <SmoothScroll>
        <Home />
      </SmoothScroll>
    </>
  );
}

export default App;