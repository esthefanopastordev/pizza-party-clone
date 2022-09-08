import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import { ToppingsProvider } from './store/ToppingsProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToppingsProvider>
      <App />
    </ToppingsProvider>
  </React.StrictMode>
);
