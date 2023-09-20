import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './componentes/app/App';
import './componentes/switch/Switch'
// import CriacaoCard from './componentes/criacao card/CriacaoCard';
import reportWebVitals from './reportWebVitals';
import CardNew from './componentes/switch/Switch';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    
    {/* <App /> */}

    {/* <CriacaoCard /> */}

    <CardNew />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
