import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss";

//on appelle le composant <App/> et on l'injecte dans
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

