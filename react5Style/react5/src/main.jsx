import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// bootstrap:
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
// alertify:
import '../node_modules/alertifyjs/build/css/alertify.min.css';

// scss:
import './scss/style.scss';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
