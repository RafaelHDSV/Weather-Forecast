import { VieiraAnalytics } from '@vieira/analytics/react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <VieiraAnalytics projectKey='weather-forecast' />
  </React.StrictMode>
);
