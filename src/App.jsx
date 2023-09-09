// src/App.js
import React from 'react';
import CaptchaGenerator from './components/CaptchaGenerator';

function App() {
  return (
    <div className="App">
      <header className="App-header flex justify-center items-center flex-col text-black font-bold w-screen h-screen">
        <h1>Random Captcha Generator</h1>
        <CaptchaGenerator />
      </header>
    </div>
  );
}

export default App;
