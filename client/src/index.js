import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import context component
import { ActivitiesContextProvider } from './context/ActivityContext'
// import auth context
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ActivitiesContextProvider>
        <App />
      </ActivitiesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);