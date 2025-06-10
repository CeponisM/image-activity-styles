import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  const [activePreset, setActivePreset] = useState(1);
  
  useEffect(() => {
    const svgFilters = `
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="fadeEdges" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
            <stop offset="80%" style="stop-color:rgb(255,255,255);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(255,255,255);stop-opacity:0" />
          </radialGradient>
          
          <mask id="circleFade">
            <circle cx="50%" cy="50%" r="50%" fill="url(#fadeEdges)" />
          </mask>
          
          <filter id="turbulence">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.01" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" />
          </filter>

          <filter id="ripple">
            <feTurbulence type="turbulence" baseFrequency="0.02" numOctaves="3" result="turbulence" />
            <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="50" />
          </filter>
        </defs>
      </svg>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = svgFilters;
    document.body.appendChild(div);
    
    return () => div.remove();
  }, []);

  const presets = [
    { id: 1, name: 'Mirror World' },
    { id: 2, name: 'Fractal Echo' },
    { id: 3, name: 'Time Slip' },
    { id: 4, name: 'Reality Merge' },
    { id: 5, name: 'Dimension Split' },
    { id: 6, name: 'Neural Echo' },
    { id: 7, name: 'Quantum Mirror' },
    { id: 8, name: 'Phase Shift' },
    { id: 9, name: 'Dream Cascade' },
    { id: 10, name: 'Mind Melt' },
  ];

  return (
    <div className={`app preset-${activePreset}`}>
      <div className="content-wrapper">
        <nav className="preset-navigation">
          <div className="button-grid">
            {presets.map(preset => (
              <button
                key={preset.id}
                className={`preset-button ${activePreset === preset.id ? 'active' : ''}`}
                onClick={() => setActivePreset(preset.id)}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </nav>
        <div className="background-container">
          <div className="base-image"></div>
          <div className="effect-container">
            <div className="overlay-group mirror-group">
              <div className="fade-mask">
                <div className="mirror-layer mirror-left"></div>
              </div>
              <div className="fade-mask">
                <div className="mirror-layer mirror-right"></div>
              </div>
            </div>
            
            <div className="overlay-group echo-group">
              <div className="fade-mask">
                <div className="echo-layer echo-1"></div>
              </div>
              <div className="fade-mask">
                <div className="echo-layer echo-2"></div>
              </div>
              <div className="fade-mask">
                <div className="echo-layer echo-3"></div>
              </div>
            </div>
            
            <div className="overlay-group color-group">
              <div className="fade-mask">
                <div className="color-split red-channel"></div>
              </div>
              <div className="fade-mask">
                <div className="color-split blue-channel"></div>
              </div>
              <div className="fade-mask">
                <div className="color-split green-channel"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;