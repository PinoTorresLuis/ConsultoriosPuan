import React from 'react';
import ReactDOM from 'react-dom/client';
import AOS from 'aos';
import App from './App';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/index.scss';

AOS.init({
  duration:1000,
  once:true
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
