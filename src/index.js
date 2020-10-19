import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/main.css"
import ThemeSelector from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <ThemeSelector>
    <App />
    </ThemeSelector>
  </React.StrictMode>,
  document.getElementById('root')
);


