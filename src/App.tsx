import React from 'react';
import './App.css';
import BackgroundBlur from './components/BackgroundBlur';
import WorldClock from './components/WorldClock';

function App() {
  return (
    <React.StrictMode>
      <BackgroundBlur />
      <WorldClock />
    </React.StrictMode>

  );
}

export default App;
