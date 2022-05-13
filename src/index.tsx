import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import Home from './pages/home/Home';
import Cookies from './pages/components/Cookies';
import Footer from './pages/home/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cookies />
    <Home />
    <Footer />
  </React.StrictMode>
);
