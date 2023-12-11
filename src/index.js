import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {register} from "swiper/element/bundle"
 
import 'swiper/css'
import "swiper/css/parallax"
import 'swiper/css/scrollbar'
register()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

