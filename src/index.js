import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Redux from './router';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Redux />
  </>
);

